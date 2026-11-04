import {
  AddEquation,
  BufferGeometry,
  CustomBlending,
  Float32BufferAttribute,
  Group,
  LessEqualDepth,
  Mesh,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  SrcColorFactor,
  Vector3,
  WebGLRenderer,
  ZeroFactor,
} from 'three';

/**
 * The hero spark as a two-drum risograph print: the same 3D form inked twice,
 * pink for the body and blue for the shading, each as a halftone screen at its
 * own angle. The plates multiply where they cross, so purple prints for free.
 * They drift out of register, and line up as the pointer comes close.
 */

const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewPos;
  void main() {
    vec4 viewPos = modelViewMatrix * vec4(position, 1.0);
    vViewPos = viewPos.xyz;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * viewPos;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uInk;
  uniform float uAngle;
  uniform float uCell;
  uniform float uMode;
  varying vec3 vNormal;
  varying vec3 vViewPos;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  void main() {
    vec3 n = normalize(vNormal);
    vec3 light = normalize(vec3(-0.55, 0.75, 0.9));
    float diffuse = clamp(dot(n, light), 0.0, 1.0);
    float rim = 1.0 - clamp(dot(n, normalize(-vViewPos)), 0.0, 1.0);

    // Pink lays the body, solid where lit; blue sets the dark side and the edges.
    float cover = uMode < 0.5
      ? mix(0.42, 1.0, smoothstep(0.05, 0.85, diffuse))
      : clamp(pow(1.0 - diffuse, 1.6) * 0.95 + rim * 0.3, 0.0, 1.0);

    float c = cos(uAngle);
    float s = sin(uAngle);
    vec2 p = mat2(c, -s, s, c) * gl_FragCoord.xy / uCell;
    vec2 cell = fract(p) - 0.5;
    float radius = sqrt(cover) * 0.74;
    float d = length(cell);
    float aa = fwidth(d) * 0.75;
    float ink = 1.0 - smoothstep(radius - aa, radius + aa, d);

    // Paper specks where the drum skipped.
    float speck = step(0.955, hash(floor(gl_FragCoord.xy / 1.5)));
    ink *= 1.0 - speck * 0.9;

    gl_FragColor = vec4(mix(vec3(1.0), uInk, ink), 1.0);
  }
`;

/**
 * A four-pointed spark with depth: a pinched star outline in the picture plane,
 * raised to a ridge on both faces so every arm catches light on two facets.
 */
function sparkGeometry(): BufferGeometry {
  const arm = 1;
  const valley = 0.2;
  const depth = 0.32;
  const outline: Vector3[] = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4 + Math.PI / 2;
    const r = i % 2 === 0 ? arm : valley;
    outline.push(new Vector3(Math.cos(angle) * r, Math.sin(angle) * r, 0));
  }
  const positions: number[] = [];
  const normals: number[] = [];

  for (const apex of [new Vector3(0, 0, depth), new Vector3(0, 0, -depth)]) {
    for (let i = 0; i < outline.length; i++) {
      const a = outline[i]!;
      const b = outline[(i + 1) % outline.length]!;
      const normal = new Vector3().subVectors(b, a).cross(new Vector3().subVectors(apex, a)).normalize();
      const centroid = new Vector3().add(a).add(b).add(apex).divideScalar(3);
      const flip = normal.dot(centroid) < 0;
      const tri = flip ? [a, apex, b] : [a, b, apex];
      if (flip) normal.negate();
      for (const v of tri) {
        positions.push(v.x, v.y, v.z);
        normals.push(normal.x, normal.y, normal.z);
      }
    }
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new Float32BufferAttribute(normals, 3));
  return geometry;
}

/** Resolves a CSS colour token (oklch included) to sRGB components in 0..1. */
function tokenColor(name: string, fallback: [number, number, number]): Vector3 {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const ctx = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  if (!value || !ctx) return new Vector3(...fallback);
  ctx.fillStyle = value;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
  return new Vector3(r / 255, g / 255, b / 255);
}

/** Writes depth only, so each plate inks just the surface nearest the viewer. */
const depthOnlyShader = /* glsl */ `
  void main() {
    gl_FragColor = vec4(1.0);
  }
`;

function plate(geometry: BufferGeometry, depthOnly: ShaderMaterial, ink: Vector3, angleDeg: number, cellCss: number, mode: number) {
  // Ink values are sRGB read straight from the CSS tokens and written out unconverted
  // (no colorspace_fragment): the plates multiply in sRGB, like ink on paper.
  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uInk: { value: ink },
      uAngle: { value: (angleDeg * Math.PI) / 180 },
      uCell: { value: cellCss },
      uMode: { value: mode },
    },
    blending: CustomBlending,
    blendEquation: AddEquation,
    blendSrc: ZeroFactor,
    blendDst: SrcColorFactor,
    depthFunc: LessEqualDepth,
    depthWrite: false,
  });

  const group = new Group();
  const depthMesh = new Mesh(geometry, depthOnly);
  depthMesh.renderOrder = 0;
  const inkMesh = new Mesh(geometry, material);
  inkMesh.renderOrder = 1;
  group.add(depthMesh, inkMesh);
  return { group, material, cellCss };
}

const clampUnit = (v: number) => Math.max(-1, Math.min(1, v));

export function createSparkScene(host: HTMLElement) {
  const renderer = new WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'low-power' });
  renderer.setClearColor(0xffffff, 1);
  renderer.autoClear = false;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.appendChild(renderer.domElement);

  const camera = new PerspectiveCamera(30, 1, 0.1, 50);
  camera.position.set(0, 0, 4.6);

  const geometry = sparkGeometry();
  const depthOnly = new ShaderMaterial({ vertexShader, fragmentShader: depthOnlyShader, colorWrite: false });
  const pink = plate(geometry, depthOnly, tokenColor('--color-pink', [0.94, 0.28, 0.6]), 15, 7, 0);
  const blue = plate(geometry, depthOnly, tokenColor('--color-ink', [0.17, 0.27, 0.63]), 75, 6, 1);
  const plates = [pink, blue] as const;
  const pinkScene = new Scene();
  pinkScene.add(pink.group);
  const blueScene = new Scene();
  blueScene.add(blue.group);

  // Size and pixel ratio follow the host, and the halftone cell follows the
  // pixel ratio, so dots keep their printed size when the window changes screens.
  let width = 1;
  let height = 1;
  const resize = () => {
    const rect = host.getBoundingClientRect();
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    for (const p of plates) p.material.uniforms.uCell!.value = p.cellCss * dpr;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  resize();

  // The event only records where the pointer is; the frame measures the host once.
  const pointer = { clientX: 0, clientY: 0, x: 0, y: 0, active: false };
  const onPointer = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse') return;
    pointer.clientX = event.clientX;
    pointer.clientY = event.clientY;
    pointer.active = true;
  };
  window.addEventListener('pointermove', onPointer, { passive: true });

  // The hero's print run: as the sheet feeds into the drum, the plates register,
  // the star squares up to the viewer and turns a quarter turn to land.
  let feed = 0;
  const onPrintRun = (event: Event) => {
    feed = Math.min(1, Math.max(0, (event as CustomEvent<number>).detail));
  };
  host.addEventListener('printrun', onPrintRun);

  const state = { register: 1, tiltX: 0, tiltY: 0, spin: 0 };
  let last = 0;
  let shown = false;

  const render = (now: number) => {
    const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
    last = now;
    const t = now / 1000;

    if (pointer.active) {
      const rect = host.getBoundingClientRect();
      pointer.x = (pointer.clientX - (rect.left + rect.width / 2)) / rect.width;
      pointer.y = (pointer.clientY - (rect.top + rect.height / 2)) / rect.height;
    }

    const distance = pointer.active ? Math.hypot(pointer.x, pointer.y) : 0.6 + 0.4 * Math.sin(t * 0.6);
    const targetRegister = Math.min(1, Math.max(0, (distance - 0.12) / 0.9)) * (1 - feed);
    state.register += (targetRegister - state.register) * Math.min(1, dt * 4);
    // Tilt follows the pointer but is capped, so the star always reads face-on enough.
    const tiltXTarget = pointer.active ? clampUnit(pointer.y) * 0.3 : 0;
    const tiltYTarget = pointer.active ? clampUnit(pointer.x) * 0.4 : 0;
    state.tiltX += (tiltXTarget - state.tiltX) * Math.min(1, dt * 3);
    state.tiltY += (tiltYTarget - state.tiltY) * Math.min(1, dt * 3);
    // Sway rather than spin, so the star never turns edge-on to the viewer.
    state.spin = Math.sin(t * 0.35) * 0.55 * (1 - feed);

    for (const p of plates) {
      // The landing turn is in the picture plane: four points land on themselves.
      p.group.rotation.set((0.28 + state.tiltX) * (1 - feed), state.spin + state.tiltY * (1 - feed), Math.sin(t * 0.2) * 0.12 * (1 - feed) + feed * (Math.PI / 2));
    }

    // Misregistration in screen pixels, split between the two plates.
    const unit = (2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z) / height;
    const offX = state.register * 5;
    const offY = state.register * 3.5;
    pink.group.position.set(-offX * unit, offY * unit, 0);
    blue.group.position.set(offX * unit, -offY * unit, 0);

    renderer.clear();
    renderer.render(pinkScene, camera);
    renderer.clearDepth();
    renderer.render(blueScene, camera);

    if (!shown) {
      shown = true;
      host.classList.add('is-live');
    }
  };

  let ready = false;
  let running = false;
  let inView = true;
  const play = () => {
    if (running || !ready || !inView || document.hidden) return;
    running = true;
    last = 0;
    renderer.setAnimationLoop(render);
  };
  const pause = () => {
    running = false;
    renderer.setAnimationLoop(null);
  };

  const visibility = new IntersectionObserver(([entry]) => {
    inView = entry?.isIntersecting ?? false;
    if (inView) play();
    else pause();
  });
  visibility.observe(host);
  const onVisibility = () => (document.hidden ? pause() : play());
  document.addEventListener('visibilitychange', onVisibility);

  let disposed = false;
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    pause();
    visibility.disconnect();
    resizeObserver.disconnect();
    window.removeEventListener('pointermove', onPointer);
    host.removeEventListener('printrun', onPrintRun);
    document.removeEventListener('visibilitychange', onVisibility);
    renderer.domElement.removeEventListener('webglcontextlost', onContextLost);
    host.classList.remove('is-live');
    geometry.dispose();
    depthOnly.dispose();
    for (const p of plates) p.material.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
    renderer.domElement.remove();
  };

  // A lost context (common on phones under memory pressure) hands the hero
  // back to the static print instead of leaving a blank canvas.
  const onContextLost = (event: Event) => {
    event.preventDefault();
    dispose();
  };
  renderer.domElement.addEventListener('webglcontextlost', onContextLost);

  // Where the browser compiles shaders in parallel, build both plates before the
  // first frame so it never stalls; elsewhere the first frame compiles them.
  const start = () => {
    if (disposed) return;
    ready = true;
    play();
  };
  if (renderer.extensions.has('KHR_parallel_shader_compile')) {
    renderer
      .compileAsync(pinkScene, camera)
      .then(() => renderer.compileAsync(blueScene, camera))
      .catch(() => undefined)
      .then(start);
  } else {
    start();
  }

  return { dispose };
}
