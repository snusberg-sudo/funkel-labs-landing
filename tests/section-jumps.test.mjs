import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';

const source = ts.transpileModule(
  readFileSync(new URL('../src/scripts/section-jumps.ts', import.meta.url), 'utf8'),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;

function setup(start = 0) {
  let now = 1000;
  let active;
  const listeners = new Map();
  const destinations = [];
  const window = {
    innerHeight: 800,
    scrollY: start,
    matchMedia: () => ({ matches: true, addEventListener() {} }),
    addEventListener: (name, listener) => listeners.set(name, listener),
    removeEventListener: (name) => listeners.delete(name),
    dispatchEvent() {},
  };
  const chapters = [0, 800, 1600, 2400].map((top) => ({
    offsetHeight: 800,
    getBoundingClientRect: () => ({ top: top - window.scrollY }),
    matches: () => false,
  }));
  const gsap = {
    registerPlugin() {},
    to(_target, options) {
      active?.kill();
      const started = now;
      const origin = window.scrollY;
      active = {
        progress: () => Math.min(1, (now - started) / (options.duration * 1000)),
        kill() { active = undefined; options.onInterrupt(); },
        update() {
          const progress = this.progress();
          window.scrollY = origin + (options.scrollTo.y - origin) * progress;
          if (progress === 1) {
            active = undefined;
            options.onComplete();
          }
        },
      };
      destinations.push(options.scrollTo.y);
      return active;
    },
  };
  const exports = {};
  vm.runInNewContext(source, {
    exports,
    require: (name) => name === 'gsap' ? gsap
      : name === 'gsap/ScrollToPlugin' ? { ScrollToPlugin: {} }
      : { navHoldY: () => 0 },
    window,
    document: {
      documentElement: {
        scrollHeight: 3200,
        style: { removeProperty() {} },
      },
      querySelectorAll: () => chapters,
      querySelector: () => null,
      addEventListener() {},
      removeEventListener() {},
    },
    performance: { now: () => now },
    Element: class {},
  });
  exports.armSectionJumps();
  return {
    destinations,
    wheel(deltaY, elapsed = 16) {
      now += elapsed;
      active?.update();
      listeners.get('wheel')({
        deltaY, deltaX: 0, deltaMode: 0, preventDefault() {},
      });
    },
  };
}

// A continuous trackpad swipe: momentum decays, with pixel-rounded plateaus.
function swipe(page, direction = 1) {
  for (let frame = 0; frame < 90; frame++) {
    page.wheel(direction * Math.max(1, Math.round(40 * 0.96 ** frame)));
  }
}

test('one trackpad swipe advances exactly one section', () => {
  const page = setup();
  swipe(page);
  assert.deepEqual(page.destinations, [800]);
});

test('one upward trackpad swipe advances exactly one section', () => {
  const page = setup(2400);
  swipe(page, -1);
  assert.deepEqual(page.destinations, [1600]);
});

test('equal momentum samples do not start another section jump', () => {
  const page = setup();
  for (const delta of [40, 28, 28, 28]) page.wheel(delta, 180);
  assert.deepEqual(page.destinations, [800]);
});

test('the initial acceleration and momentum belong to the same swipe', () => {
  const page = setup();
  for (const delta of [3, 7, 12, 18, 26, 34]) page.wheel(delta);
  swipe(page);
  assert.deepEqual(page.destinations, [800]);
});

test('a separate swipe can advance to the following section', () => {
  const page = setup();
  swipe(page);
  page.wheel(40, 250);
  assert.deepEqual(page.destinations, [800, 1600]);
});

// A real Windows trackpad swipe (Chrome), recorded as [ms, deltaX, deltaY, deltaMode].
// It carries a zero-delta sample right after the first push.
const recordedSwipe = [[30138,0,15.45,0],[30145,0,19.09,0],[30152,0,21.82,0],[30159,0,22.73,0],[30169,0,40.91,0],[30182,0,18.18,0],[30182,0,0,0],[30195,0,17.27,0],[30212,0,34.55,0],[30215,0,5.45,0],[30222,0,10.91,0],[30232,0,13.64,0],[30236,0,5.45,0],[30243,0,9.09,0],[30252,0,10.91,0],[30257,0,5.45,0],[30263,0,6.36,0],[30273,0,9.09,0],[30278,0,4.55,0],[30284,0,5.45,0],[30291,0,6.36,0],[30301,0,8.18,0],[30306,0,2.73,0],[30312,0,5.45,0],[30319,0,5.45,0],[30333,0,9.09,0],[30340,0,4.55,0],[30347,0,4.55,0],[30355,0,4.55,0],[30361,0,3.64,0],[30368,0,3.64,0],[30378,0,6.36,0],[30381,0,1.82,0],[30388,0,3.64,0],[30399,0,5.45,0],[30402,0,0.91,0],[30409,0,3.64,0],[30418,0,4.55,0],[30423,0,1.82,0],[30430,0,3.64,0],[30438,0,2.73,0],[30444,0,2.73,0],[30453,0,3.64,0],[30458,0,1.82,0],[30465,0,3.64,0],[30472,0,2.73,0],[30478,0,1.82,0],[30488,0,3.64,0],[30493,0,1.82,0],[30499,0,2.73,0],[30507,0,1.82,0],[30513,0,2.73,0],[30523,0,2.73,0],[30528,0,1.82,0],[30534,0,1.82,0],[30541,0,2.73,0],[30548,0,1.82,0],[30555,0,1.82,0],[30562,0,1.82,0],[30570,0,2.73,0],[30576,0,1.82,0],[30585,0,1.82,0],[30590,0,1.82,0],[30597,0,1.82,0],[30604,0,1.82,0],[30610,0,1.82,0],[30619,0,1.82,0],[30625,0,0.91,0],[30631,0,1.82,0],[30639,0,1.82,0],[30645,0,1.82,0],[30653,0,1.82,0],[30659,0,0.91,0],[30667,0,1.82,0],[30673,0,0.91,0],[30680,0,1.82,0],[30687,0,0.91,0],[30694,0,1.82,0],[30701,0,0.91,0],[30708,0,1.82,0],[30715,0,0.91,0],[30722,0,1.82,0],[30729,0,0.91,0],[30736,0,1.82,0],[30743,0,0.91,0],[30750,0,0.91,0],[30757,0,1.82,0],[30764,0,0.91,0],[30771,0,0.91,0],[30778,0,0.91,0],[30785,0,0.91,0],[30792,0,1.82,0],[30799,0,0.91,0],[30806,0,0.91,0],[30812,0,0.91,0],[30819,0,0.91,0],[30826,0,0.91,0],[30833,0,0.91,0],[30840,0,0.91,0],[30847,0,0.91,0],[30855,0,0.91,0],[30861,0,0.91,0],[30868,0,0.91,0],[30875,0,0.91,0],[30882,0,0.91,0],[30889,0,0.91,0],[30896,0,0.91,0],[30903,0,0.91,0],[30910,0,0.91,0],[30924,0,0.91,0],[30931,0,0.91,0],[30937,0,0.91,0],[30945,0,0.91,0],[30959,0,0.91,0],[30965,0,0.91,0],[30972,0,0.91,0],[30986,0,0.91,0],[30993,0,0.91,0],[31007,0,0.91,0],[31014,0,0.91,0],[31028,0,0.91,0],[31035,0,0.91,0],[31048,0,0.91,0],[31063,0,0.91,0],[31070,0,0.91,0],[31083,0,0.91,0],[31098,0,0.91,0],[31111,0,0.91,0],[31125,0,0.91,0],[31139,0,0.91,0],[31160,0,0.91,0],[31174,0,0.91,0],[31195,0,0.91,0],[31208,0,0.91,0],[31230,0,0.91,0],[31250,0,0.91,0],[31278,0,0.91,0],[31299,0,0.91,0],[31326,0,0.91,0],[31354,0,0.91,0],[31388,0,0.91,0],[31430,0,0.91,0],[31478,0,0.91,0],[31541,0,0.91,0],[31646,0,0.91,0]];

function replay(page, events) {
  let last = events[0][0];
  for (const [time, , deltaY] of events) {
    page.wheel(deltaY, time - last);
    last = time;
  }
}

test('a recorded trackpad swipe with a zero-delta sample advances exactly one section', () => {
  const page = setup();
  replay(page, recordedSwipe);
  assert.deepEqual(page.destinations, [800]);
});

// Two recorded swipes; the second starts 7ms after the first one's momentum ends.
const swipeAgain = JSON.parse(readFileSync(new URL('./fixtures/swipe-again.json', import.meta.url), 'utf8'));

test('a new swipe during the last one\'s fading momentum advances another section', () => {
  const page = setup();
  replay(page, swipeAgain);
  assert.deepEqual(page.destinations, [800, 1600]);
});

test('reversing a swipe can return to the section just left', () => {
  const page = setup();
  page.wheel(40);
  page.wheel(-40, 100);
  assert.deepEqual(page.destinations, [800, 0]);
});
