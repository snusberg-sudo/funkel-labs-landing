export type Lang = 'en' | 'ja';

export const contactEmail: string = import.meta.env.PUBLIC_CONTACT_EMAIL || 'hello@funkellabs.com';
/** The address cut after the @ and before the last dot, so narrow lines wrap there instead of mid-word. */
export const contactEmailParts: string[] = contactEmail.split(/(?<=@)|(?=\.[^.]*$)/);

export interface Service {
  name: string;
  body: string;
}

export interface Step {
  name: string;
  body: string;
  /** A found picture of the print run, under src/assets (see public/found/credits.json). */
  photo: string;
  photoAlt: string;
}

export interface App {
  name: string;
  platform: string;
  body: string;
  /** Path under src/assets, e.g. /work/app-one.png. Empty prints a drawn stand-in plate. */
  image: string;
  imageAlt: string;
  link?: { href: string; label: string };
}

export interface Person {
  name: string;
  role: string;
  /** Path under src/assets, e.g. /team/name.jpg. Empty prints the drawn avatar, or a stand-in tile. */
  photo: string;
  avatar?: 'wai-yan-lin' | 'thu-ta';
  /** A note revealed over the avatar on hover or tap; a line break splits it into lines. */
  message?: string;
  /** Who the note is quoting, if not the person themself. */
  messageCite?: string;
  /** The note's language when it differs from the page's. */
  messageLang?: Lang;
}

export interface Content {
  lang: Lang;
  meta: { title: string; description: string };
  nav: { cta: string; switchLabel: string; switchHref: string; switchLang: Lang; home: string; services: string; work: string; process: string; about: string };
  hero: { line1: string; line2: string; lede: string; primary: string; sparkAlt: string };
  services: { heading: string; items: Service[] };
  work: { heading: string; lede: string; apps: App[] };
  process: { heading: string; lede: string; steps: Step[] };
  about: { heading: string; statement: string; teamHeading: string; people: Person[]; showMessage: string };
  contact: {
    heading: string;
    lede: string;
    poster: { example: string; examples: string[]; printedFor: string; you: string; by: string; caption: string };
    fields: { name: string; email: string; company: string; message: string; messageHint: string };
    submit: string;
    sending: string;
    sent: string;
    failed: string;
    subject: string;
    languages: string;
    hello: string;
    helloLabel: string;
  };
  footer: {
    statement: string;
    legalName: string;
    address: string;
    place: string;
    timeLabel: string;
    privacy: string;
    privacyHref: string;
    rights: string;
    start: string;
    credits: string;
    creditsHref: string;
  };
  credits: { title: string; lede: string; back: string };
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
      line1: 'Software',
      line2: 'that sparks',
      lede: 'Funkel Labs designs and builds web, mobile and AI products, from first idea to launch day.',
      primary: 'Get in touch',
      sparkAlt: 'A four-pointed spark printed in pink and blue ink.',
    },
    services: {
      heading: 'What we build',
      items: [
        { name: 'Product builds and MVPs', body: 'Bring us an idea and leave with a product people can use: scoped, designed, built and launched.' },
        { name: 'Web apps', body: 'Fast, accessible web applications, and the backends and APIs behind them.' },
        { name: 'Mobile apps', body: 'iOS and Android apps that feel at home in the hand.' },
        { name: 'AI integration', body: 'LLM features and automation that do real work inside your product, not demos bolted onto the side.' },
      ],
    },
    work: {
      heading: 'Things we’ve made',
      lede: 'A few of the apps we’ve designed and built.',
      // TODO: add each app's platform and store or live link; add the other apps as they are ready.
      apps: [
        {
          name: 'KotobaGo', platform: '', body: 'A flashcard app for learning Japanese words.',
          image: '/work/kotobago.png', imageAlt: 'A KotobaGo flashcard for 会う (あう), “to meet”, among word chips in Japanese, English and Burmese.',
        },
        // The open slot: an unprinted plate inviting the visitor's own app onto the press.
        {
          name: 'Your app', platform: '', body: 'The next one off the press could be yours.',
          image: '', imageAlt: '', link: { href: '#contact', label: 'Start a project' },
        },
      ],
    },
    process: {
      heading: 'How we work',
      lede: 'Like a two-colour print: each pass adds a layer, and nothing ships until they line up.',
      steps: [
        { name: 'Discover', body: 'We learn your users, goals and constraints, then agree on what to build first.', photo: '/found/inks-brayers.jpg', photoAlt: 'Printing inks mixed on a slab beside brayers.' },
        { name: 'Design', body: 'Flows and screens you can click through before any code is written.', photo: '/found/ink-roller.jpg', photoAlt: 'An ink roller beside a bottle of India ink.' },
        { name: 'Build', body: 'Short cycles, with working software you can try along the way.', photo: '/found/riso-drum.jpg', photoAlt: 'An ink drum lifted out of a risograph printer.' },
        { name: 'Launch and support', body: 'We ship it, watch how it’s used, and keep improving it with you.', photo: '/found/riso-two-colour.jpg', photoAlt: 'A finished two-colour risograph print held up to the camera.' },
      ],
    },
    about: {
      heading: 'Why “Funkel”',
      statement: 'Funkel is German for sparkle: the moment a product stops being a plan and starts to feel alive.',
      teamHeading: 'The people',
      // TODO: confirm each founder's role.
      people: [
        {
          name: 'Wai Yan Lin', role: 'Co-founder', photo: '', avatar: 'wai-yan-lin',
          message: 'The less you know, the more you think you know.\nThe deeper you learn, the more you realise you still know nothing.',
        },
        {
          name: 'Thu Ta', role: 'Co-founder', photo: '', avatar: 'thu-ta',
          message: 'I had a dream I could buy my way to Heaven\nWhen I awoke, I spent that on a necklace', messageCite: 'Ye',
        },
      ],
      // {name} is replaced with the person's name.
      showMessage: 'A note from {name}',
    },
    contact: {
      heading: 'Print your idea',
      lede: 'Type what you want to build and watch it come off the press. Send the print and we’ll reply by email.',
      poster: {
        example: 'A booking app for my bakery',
        // Sample ideas the poster types out before a visitor starts; the first is the example above.
        examples: ['A booking app for my bakery', 'Live tracking for our delivery vans', 'An AI helper for our support inbox', 'A mobile app for our yoga studio'],
        printedFor: 'Printed for',
        you: 'you',
        by: 'by Funkel Labs',
        caption: 'Your idea, printed live in two inks.',
      },
      fields: {
        name: 'Your name',
        email: 'Email',
        company: 'Company (optional)',
        message: 'Your idea',
        messageHint: 'Who it’s for, and any deadline.',
      },
      submit: 'Send this print',
      sending: 'Sending your print…',
      sent: 'Sent. Thank you, we’ll be in touch by email.',
      failed: 'That didn’t go through. Check your connection and try again, or email us directly.',
      subject: 'New project enquiry from funkellabs (EN)',
      languages: 'In English and 日本語',
      hello: 'Say hello',
      helloLabel: 'Email Funkel Labs',
    },
    footer: {
      statement: 'A small studio printing software in two inks: web, mobile and AI, from first idea to launch day.',
      // TODO: legal entity name and registered address.
      legalName: 'Funkel Labs (legal name TODO)',
      address: 'Registered address TODO, Japan',
      place: 'Japan',
      timeLabel: 'local time',
      privacy: 'Privacy',
      privacyHref: '/privacy/',
      rights: `© ${year} Funkel Labs`,
      start: 'Start a project',
      credits: 'Picture credits',
      creditsHref: '/credits/',
    },
    credits: {
      title: 'Picture credits',
      lede: 'The printing pictures and the press film on this site are used under Creative Commons licences. Their colours have been changed to the two inks.',
      back: 'Back to the home page',
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
      line1: 'きらめく',
      line2: 'ソフトウェア',
      lede: 'Funkel Labs（フンケル・ラボ）は、\u200BWeb・モバイル・AIのプロダクトを、\u200Bアイデアから\u200Bリリースまで\u200Bつくるスタジオです。',
      primary: 'お問い合わせ',
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
      // TODO: 各アプリの対応環境とストアまたは公開URLを追加。ほかのアプリも準備ができ次第追加。
      apps: [
        {
          name: 'KotobaGo', platform: '', body: '日本語の単語を覚えるためのフラッシュカードアプリ。',
          image: '/work/kotobago.png', imageAlt: '「会う（あう）・to meet」のKotobaGoのフラッシュカードと、日本語・英語・ビルマ語の単語チップ。',
        },
        {
          name: 'あなたのアプリ', platform: '', body: '次に刷り上がるのは、あなたのアプリかもしれません。',
          image: '', imageAlt: '', link: { href: '#contact', label: '相談をはじめる' },
        },
      ],
    },
    process: {
      heading: '進め方',
      lede: '二色刷りのように、\u200B一層ずつ\u200B重ねていきます。\u200Bすべてが\u200Bぴたりと\u200B重なるまで、\u200B出荷しません。',
      steps: [
        { name: '発見', body: 'ユーザー、目標、制約を理解し、最初につくるものを一緒に決めます。', photo: '/found/inks-brayers.jpg', photoAlt: 'インク台の上で練られた版画用インクとローラー。' },
        { name: '設計', body: 'コードを書く前に、実際にクリックして試せる画面と流れを用意します。', photo: '/found/ink-roller.jpg', photoAlt: '墨汁の瓶と、インクのついたローラー。' },
        { name: '開発', body: '短いサイクルで進め、途中でも動くものを確認いただけます。', photo: '/found/riso-drum.jpg', photoAlt: 'リソグラフから取り出したインクドラム。' },
        { name: 'リリース・\u200B運用', body: 'リリース後も使われ方を見ながら、一緒に改善を続けます。', photo: '/found/riso-two-colour.jpg', photoAlt: '刷り上がった二色刷りのリソグラフ。' },
      ],
    },
    about: {
      heading: 'Funkelという\u200B名前',
      statement: 'Funkel（フンケル）は\u200Bドイツ語で\u200B「きらめき」。\u200B計画だった\u200Bプロダクトが、\u200B生き生きと\u200B動き出す\u200B瞬間のことです。',
      teamHeading: 'メンバー',
      // TODO: 各創業者の役割を確認。
      people: [
        {
          name: 'ワイヤンリン', role: '共同創業者', photo: '', avatar: 'wai-yan-lin',
          message: '知らないほど、自分は知っていると思う。\n深く学ぶほど、自分がまだ何も知らないことに気づく。',
        },
        {
          name: 'トゥタ', role: '共同創業者', photo: '', avatar: 'thu-ta',
          message: '金で天国に行ける、そんな夢を見た。目が覚めた俺は、その金を首飾りに費やした。', messageCite: 'イェ', messageLang: 'en',
        },
      ],
      showMessage: '{name}からのひとこと',
    },
    contact: {
      heading: 'アイデアを\u200B刷ってみる',
      lede: 'つくりたいものを\u200B入力すると、\u200Bその場で\u200B刷り上がります。\u200B送信すると、\u200Bメールで\u200Bお返事します。',
      poster: {
        example: 'パン屋の予約アプリ',
        examples: ['パン屋の予約アプリ', '配送車のリアルタイム追跡', '問い合わせ対応のAIアシスタント', 'ヨガスタジオのモバイルアプリ'],
        printedFor: '',
        you: 'あなた',
        by: 'のために、Funkel Labsが刷りました',
        caption: 'あなたのアイデアを、二色でその場で印刷。',
      },
      fields: {
        name: 'お名前',
        email: 'メールアドレス',
        company: '会社名（任意）',
        message: 'あなたのアイデア',
        messageHint: '誰のためのものか、希望の時期など。',
      },
      submit: 'この版を送る',
      sending: '送信しています…',
      sent: '送信しました。ありがとうございます。メールでご連絡します。',
      failed: '送信できませんでした。通信環境をご確認のうえ再度お試しいただくか、メールで直接ご連絡ください。',
      subject: '新規プロジェクトのお問い合わせ（JA）',
      languages: '日本語と English で',
      hello: 'メールする',
      helloLabel: 'Funkel Labs にメールする',
    },
    footer: {
      statement: 'ソフトウェアを\u200B二色で刷る、\u200B小さなスタジオ。\u200BWeb・モバイル・AIを、\u200Bアイデアから\u200Bリリースまで。',
      // TODO: 正式な法人名と所在地。
      legalName: 'Funkel Labs（フンケル・ラボ）法人名 TODO',
      address: '所在地 TODO',
      place: '日本',
      timeLabel: '現地時間',
      privacy: 'プライバシーポリシー',
      privacyHref: '/ja/privacy/',
      rights: `© ${year} Funkel Labs`,
      start: '相談をはじめる',
      credits: '写真のクレジット',
      creditsHref: '/ja/credits/',
    },
    credits: {
      title: '写真のクレジット',
      lede: 'このサイトの印刷の写真と映像は、クリエイティブ・コモンズ・ライセンスのもとで使用しています。色は二色刷りの色に変更しています。',
      back: 'ホームに戻る',
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
