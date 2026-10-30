export type Lang = 'en' | 'ja';

// TODO: replace with the real public contact address (also set PUBLIC_CONTACT_EMAIL).
export const contactEmail: string = import.meta.env.PUBLIC_CONTACT_EMAIL || 'hello@funkellabs.example';

export interface Service {
  name: string;
  body: string;
}

export interface Step {
  name: string;
  body: string;
}

export interface App {
  name: string;
  platform: string;
  body: string;
  /** Path under /public, e.g. /work/app-one.png. Empty shows the placeholder slot. */
  image: string;
  imageAlt: string;
  link?: { href: string; label: string };
  /** Size the slot asks for, shown in the placeholder. */
  slotHint: string;
}

export interface Person {
  name: string;
  role: string;
  bio: string;
  /** Path under /public. Empty shows the placeholder slot. */
  photo: string;
}

export interface Content {
  lang: Lang;
  meta: { title: string; description: string };
  nav: { services: string; work: string; process: string; about: string; cta: string; switchLabel: string; switchHref: string; switchLang: Lang; home: string };
  hero: { before: string; spark: string; after: string; lede: string; primary: string; secondary: string; sparkAlt: string };
  services: { heading: string; items: Service[] };
  work: { heading: string; lede: string; placeholder: string; apps: App[] };
  process: { heading: string; lede: string; steps: Step[] };
  about: { heading: string; body: string; teamHeading: string; people: Person[]; photoPlaceholder: string };
  contact: {
    heading: string;
    lede: string;
    emailPrompt: string;
    fields: { name: string; email: string; company: string; message: string; messageHint: string };
    submit: string;
    sending: string;
    sent: string;
    failed: string;
    subject: string;
  };
  footer: { legalName: string; address: string; privacy: string; privacyHref: string; rights: string };
  privacy: { title: string; updated: string; sections: { heading: string; body: string }[]; back: string };
}

const year = 2026;

export const content: Record<Lang, Content> = {
  en: {
    lang: 'en',
    meta: {
      title: 'Funkel Labs: software development studio',
      description:
        'Funkel Labs builds web apps, mobile apps and AI features for startups and growing businesses, from first idea to launch. We work in English and Japanese.',
    },
    nav: {
      services: 'Services',
      work: 'Work',
      process: 'How we work',
      about: 'About',
      cta: 'Get in touch',
      switchLabel: '日本語',
      switchHref: '/ja/',
      switchLang: 'ja',
      home: 'Funkel Labs home',
    },
    hero: {
      before: 'We build software that ',
      spark: 'sparks.',
      after: '',
      lede: 'Web, mobile and AI products, from first idea to launch day.',
      primary: 'Get in touch',
      secondary: 'See our work',
      sparkAlt: 'A four-pointed spark printed in pink and blue ink.',
    },
    services: {
      heading: 'What we build',
      items: [
        { name: 'Product builds and MVPs', body: 'Bring us an idea and leave with a product people can use. We scope it, design it, build it and launch it.' },
        { name: 'Web apps', body: 'Fast, accessible web applications, and the backends and APIs behind them.' },
        { name: 'Mobile apps', body: 'iOS and Android apps that feel at home in the hand.' },
        { name: 'AI integration', body: 'LLM features and automation that do real work inside your product, not demos bolted onto the side.' },
      ],
    },
    work: {
      heading: 'Things we’ve made',
      lede: 'A few of the apps we’ve designed and built.',
      placeholder: 'Screenshot',
      // TODO: replace with the real apps (name, platform, one line, screenshot, store or live link).
      apps: [
        { name: 'App name', platform: 'iOS and Android', body: 'One line on what it does and who it is for.', image: '', imageAlt: '', slotHint: '1290 × 2796, phone screenshot', link: { href: '', label: 'View on the App Store' } },
        { name: 'App name', platform: 'Web', body: 'One line on what it does and who it is for.', image: '', imageAlt: '', slotHint: '2880 × 1800, browser screenshot', link: { href: '', label: 'Visit the site' } },
        { name: 'App name', platform: 'Web and AI', body: 'One line on what it does and who it is for.', image: '', imageAlt: '', slotHint: '2880 × 1800, browser screenshot' },
      ],
    },
    process: {
      heading: 'How we work',
      lede: 'Like a two-colour print: each pass adds a layer, and nothing ships until they line up.',
      steps: [
        { name: 'Discover', body: 'We learn your users, goals and constraints, then agree on what to build first.' },
        { name: 'Design', body: 'Flows and screens you can click through before any code is written.' },
        { name: 'Build', body: 'Short cycles, with working software you can try along the way.' },
        { name: 'Launch and support', body: 'We ship it, watch how it’s used, and keep improving it with you.' },
      ],
    },
    about: {
      heading: 'Why “Funkel”',
      body: 'Funkel is German for sparkle: the moment a product stops being a plan and starts to feel alive. That moment is the part of the work we love most.',
      teamHeading: 'The people',
      photoPlaceholder: 'Photo',
      // TODO: replace with the real team (name, role, one-line bio, square photo).
      people: [
        { name: 'Founder name', role: 'Founder, engineering', bio: 'One line about what they build and what they care about.', photo: '' },
        { name: 'Team member', role: 'Role', bio: 'One line about what they build and what they care about.', photo: '' },
      ],
    },
    contact: {
      heading: 'Tell us what you want to build.',
      lede: 'A few lines is enough to start. We’ll reply by email.',
      emailPrompt: 'Prefer email? Write to',
      fields: {
        name: 'Your name',
        email: 'Email',
        company: 'Company (optional)',
        message: 'What are you building?',
        messageHint: 'The idea, who it’s for, and any deadline.',
      },
      submit: 'Send message',
      sending: 'Sending your message…',
      sent: 'Sent. Thank you, we’ll be in touch by email.',
      failed: 'That didn’t go through. Check your connection and try again, or email us directly.',
      subject: 'New project enquiry from funkellabs (EN)',
    },
    footer: {
      // TODO: legal entity name and registered address.
      legalName: 'Funkel Labs (legal name TODO)',
      address: 'Registered address TODO, Japan',
      privacy: 'Privacy',
      privacyHref: '/privacy/',
      rights: `© ${year} Funkel Labs`,
    },
    privacy: {
      title: 'Privacy',
      updated: 'Last updated 30 October 2026',
      back: 'Back to the home page',
      sections: [
        { heading: 'What we collect', body: 'When you use the contact form we receive your name, email address, company (if given) and your message. We use them only to reply to you and to discuss your project.' },
        { heading: 'Who processes it', body: 'Form submissions are delivered to our inbox by Web3Forms. The site is hosted on Vercel, which also provides privacy-friendly visit statistics without cookies and without identifying you.' },
        { heading: 'How long we keep it', body: 'We keep enquiries for as long as we are in conversation with you, and delete them on request.' },
        { heading: 'Your rights', body: 'Ask us by email to see, correct or delete anything we hold about you.' },
      ],
    },
  },
  ja: {
    lang: 'ja',
    meta: {
      title: 'Funkel Labs（フンケル・ラボ）｜ソフトウェア開発スタジオ',
      description:
        'Funkel Labsは、スタートアップや成長中の企業のために、Webアプリ・モバイルアプリ・AI機能をアイデアからリリースまで開発するスタジオです。日本語・英語に対応しています。',
    },
    nav: {
      services: 'サービス',
      work: '制作実績',
      process: '進め方',
      about: '私たちについて',
      cta: 'お問い合わせ',
      switchLabel: 'English',
      switchHref: '/',
      switchLang: 'en',
      home: 'Funkel Labs ホーム',
    },
    hero: {
      before: '',
      spark: 'きらめく',
      after: 'ソフトウェアを、\u200Bつくる。',
      lede: 'Web、モバイル、AI。\u200Bアイデアから、\u200Bリリースの日まで。',
      primary: 'お問い合わせ',
      secondary: '制作実績を見る',
      sparkAlt: 'ピンクと青のインクで刷られた、四方に光る星。',
    },
    services: {
      heading: '私たちが\u200Bつくるもの',
      items: [
        { name: 'プロダクト開発・\u200BMVP', body: 'アイデアを、実際に使えるプロダクトへ。要件整理からデザイン、開発、リリースまで一貫して担当します。' },
        { name: 'Webアプリ', body: '速く、誰にとっても使いやすいWebアプリケーションと、それを支えるバックエンド・APIを開発します。' },
        { name: 'モバイルアプリ', body: 'iPhoneでもAndroidでも、手になじむアプリを。' },
        { name: 'AI導入', body: 'LLMを使った機能や業務の自動化を、デモではなく、プロダクトの中で本当に役立つ形で組み込みます。' },
      ],
    },
    work: {
      heading: 'これまでに\u200Bつくったもの',
      lede: '私たちが\u200B設計・開発した\u200Bアプリの\u200B一部です。',
      placeholder: 'スクリーンショット',
      // TODO: 実際のアプリ情報に差し替え（名前、対応環境、一行説明、スクリーンショット、ストアまたは公開URL）。
      apps: [
        { name: 'アプリ名', platform: 'iOS・Android', body: '何をするアプリか、誰のためのものかを一行で。', image: '', imageAlt: '', slotHint: '1290 × 2796、スマートフォン画面', link: { href: '', label: 'App Storeで見る' } },
        { name: 'アプリ名', platform: 'Web', body: '何をするアプリか、誰のためのものかを一行で。', image: '', imageAlt: '', slotHint: '2880 × 1800、ブラウザ画面', link: { href: '', label: 'サイトを見る' } },
        { name: 'アプリ名', platform: 'Web・AI', body: '何をするアプリか、誰のためのものかを一行で。', image: '', imageAlt: '', slotHint: '2880 × 1800、ブラウザ画面' },
      ],
    },
    process: {
      heading: '進め方',
      lede: '二色刷りのように、\u200B一層ずつ\u200B重ねていきます。\u200Bすべてが\u200Bぴたりと\u200B重なるまで、\u200B出荷しません。',
      steps: [
        { name: '発見', body: 'ユーザー、目標、制約を理解し、最初につくるものを一緒に決めます。' },
        { name: '設計', body: 'コードを書く前に、実際にクリックして試せる画面と流れを用意します。' },
        { name: '開発', body: '短いサイクルで進め、途中でも動くものを確認いただけます。' },
        { name: 'リリース・\u200B運用', body: 'リリース後も使われ方を見ながら、一緒に改善を続けます。' },
      ],
    },
    about: {
      heading: 'Funkelという\u200B名前',
      body: 'Funkel（フンケル）は\u200Bドイツ語で\u200B「きらめき」。\u200Bプロダクトが\u200B計画から\u200B抜け出して、\u200B生き生きと\u200B動き始める\u200B瞬間の\u200Bことです。\u200Bその瞬間こそ、\u200B私たちが\u200Bいちばん\u200B好きな\u200B仕事です。',
      teamHeading: 'メンバー',
      photoPlaceholder: '写真',
      // TODO: 実際のメンバー情報に差し替え（名前、役割、一行紹介、正方形の写真）。
      people: [
        { name: '代表者名', role: '代表・エンジニア', bio: 'つくっているもの、大切にしていることを一行で。', photo: '' },
        { name: 'メンバー名', role: '役割', bio: 'つくっているもの、大切にしていることを一行で。', photo: '' },
      ],
    },
    contact: {
      heading: 'つくりたいものを、\u200B聞かせてください。',
      lede: '数行で\u200B大丈夫です。\u200Bメールで\u200Bお返事します。',
      emailPrompt: 'メールの場合はこちらへ',
      fields: {
        name: 'お名前',
        email: 'メールアドレス',
        company: '会社名（任意）',
        message: 'つくりたいもの',
        messageHint: 'アイデア、誰のためのものか、希望の時期など。',
      },
      submit: '送信する',
      sending: '送信しています…',
      sent: '送信しました。ありがとうございます。メールでご連絡します。',
      failed: '送信できませんでした。通信環境をご確認のうえ再度お試しいただくか、メールで直接ご連絡ください。',
      subject: '新規プロジェクトのお問い合わせ（JA）',
    },
    footer: {
      // TODO: 正式な法人名と所在地。
      legalName: 'Funkel Labs（フンケル・ラボ）法人名 TODO',
      address: '所在地 TODO',
      privacy: 'プライバシーポリシー',
      privacyHref: '/ja/privacy/',
      rights: `© ${year} Funkel Labs`,
    },
    privacy: {
      title: 'プライバシーポリシー',
      updated: '最終更新日 2026年10月30日',
      back: 'ホームに戻る',
      sections: [
        { heading: '取得する情報', body: 'お問い合わせフォームから、お名前、メールアドレス、会社名（ご記入の場合）、メッセージを受け取ります。お返事とプロジェクトのご相談のためだけに使用します。' },
        { heading: '処理を委託する事業者', body: 'フォームの内容はWeb3Formsを通じて当社の受信箱に届きます。本サイトはVercelでホストしており、Cookieを使わず個人を特定しない形でアクセス統計を取得しています。' },
        { heading: '保存期間', body: 'ご相談が続いている間は保存し、ご依頼があれば削除します。' },
        { heading: 'お客様の権利', body: '保有している情報の開示・訂正・削除は、メールでお申し付けください。' },
      ],
    },
  },
};
