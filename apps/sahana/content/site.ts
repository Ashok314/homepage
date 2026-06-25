import type { BusinessContent, LocaleCode } from "@homepage/content";
import { indianRestaurantTheme } from "@homepage/themes";

const kotoAddress = "東京都江東区福住1-17-10 阿部ビル 1F";
const asagayaAddress = "東京都杉並区阿佐谷南1-17-16";
export const supportedLocales = ["ja", "en", "ne", "hi"] as const;
type SahanaLocale = (typeof supportedLocales)[number];

const localeOptions = [
  { code: "ja", label: "日本語", lang: "ja", href: "" },
  { code: "en", label: "EN", lang: "en", href: "en/" },
  { code: "ne", label: "नेपाली", lang: "ne", href: "ne/" },
  { code: "hi", label: "हिन्दी", lang: "hi", href: "hi/" }
];

export const siteContent: BusinessContent = {
  locale: {
    defaultLocale: "ja",
    available: localeOptions,
    labels: {
      skipLink: "本文へ移動",
      mainNavigation: "メインナビゲーション",
      footerNavigation: "フッターナビゲーション",
      languageNavigation: "言語切り替え",
      homeLabel: "サハナ トップ",
      comingSoon: "準備中",
      aboutEyebrow: "サハナについて",
      featuresEyebrow: "こだわり",
      featuresTitle: "サハナの特徴",
      galleryEyebrow: "写真",
      galleryTitle: "料理・店舗写真",
      menuEyebrow: "メニュー",
      menuFallbackTitle: "メニュー",
      newsEyebrow: "お知らせ",
      newsTitle: "新着情報",
      branchesEyebrow: "店舗情報",
      branchesTitle: "江東店・阿佐ヶ谷店",
      branchesIntro:
        "各店舗の住所・電話番号・営業時間・Googleマップをご案内します。",
      branchActive: "営業情報",
      branchVerification: "確認事項",
      openMap: "Googleマップを開く",
      mapLabel: "地図",
      webOrderEyebrow: "WEB注文",
      enlargeImageLabel: "画像を拡大表示",
      imageDialogLabel: "画像の拡大表示",
      closeDialogLabel: "閉じる"
    }
  },
  business: {
    name: "サハナ",
    type: "インド・ネパール料理レストラン",
    tagline: "東京で楽しむインド・ネパール料理",
    description:
      "SAHANA（サハナ）は、東京都内の阿佐ヶ谷・江東で営業するインド・ネパール料理レストランです。",
    seoTitle: "SAHANA（サハナ）| 東京のインド・ネパール料理レストラン",
    seoDescription:
      "SAHANA（サハナ）の公式サイト。江東店・阿佐ヶ谷店の店舗情報、メニュー、アクセスをご案内します。",
    logo: {
      src: "clients/sahana/logo.jpeg",
      alt: "SAHANA（サハナ）ロゴ"
    },
    footerText: "SAHANA（サハナ）"
  },
  navigation: [
    { label: "情報", href: "#about" },
    { label: "店舗情報", href: "#branches" },
    { label: "メニュー", href: "#menu" },
    { label: "WEB注文", href: "#order" },
    { label: "アクセス", href: "#branches" }
  ],
  hero: {
    eyebrow: "インド・ネパール料理",
    title: "SAHANA",
    text: "10年以上愛されてきた本場インドの味を、阿佐ヶ谷店と江東店でお楽しみください。",
    image: {
      src: "clients/sahana/koto/images/koto-cover.jpg",
      alt: "SAHANA 江東店の店舗写真"
    },
    primaryAction: { label: "店舗を見る", href: "#branches" },
    secondaryAction: { label: "WEB注文", href: "#order" }
  },
  about: {
    title: "サハナについて",
    subtitle: "インド・ネパール料理レストラン",
    text: "SAHANA（サハナ）は、10年以上にわたり本場インドの味を届けてきたインド・ネパール料理レストランです。阿佐ヶ谷店では、店舗前の小さなインドマートもあわせてご利用いただけます。",
    image: {
      src: "clients/sahana/asagaya/dishes/Butter Chicken Cheese naan set.jpg",
      alt: "バターチキンカレーとチーズナンのセット"
    }
  },
  features: [
    {
      title: "10年以上のサービス",
      text: "地域のお客様に長く親しまれてきたサハナの味とサービスを、これからも大切にしていきます。"
    },
    {
      title: "本場インドの味",
      text: "カレー、ナン、タンドリー料理など、本格的なインド・ネパール料理をお楽しみいただけます。"
    },
    {
      title: "阿佐ヶ谷店にインドマート",
      text: "阿佐ヶ谷店の店舗前には、小さなインドマートもございます。お食事とあわせてお立ち寄りください。"
    }
  ],
  gallery: [
    {
      src: "clients/sahana/koto/images/nabe.jpg",
      alt: "サハナの鍋料理"
    },
    {
      src: "clients/sahana/koto/images/dinner.jpg",
      alt: "サハナのディナー料理"
    },
    {
      src: "clients/sahana/koto/images/drinks.jpg",
      alt: "サハナのドリンク"
    },
    {
      src: "clients/sahana/koto/images/cover image.jpg",
      alt: "サハナの店舗写真"
    },
    {
      src: "clients/sahana/asagaya/dishes/Butter Chicken Cheese naan set.jpg",
      alt: "バターチキンカレーとチーズナンのセット"
    },
    {
      src: "clients/sahana/asagaya/dishes/チキンカレー1109_0023.JPG",
      alt: "チキンカレー"
    },
    {
      src: "clients/sahana/asagaya/dishes/バターチキンカレー1109_0064.JPG",
      alt: "バターチキンカレー"
    },
    {
      src: "clients/sahana/asagaya/dishes/マトンマサラカレー1109_0219.JPG",
      alt: "マトンマサラカレー"
    },
    {
      src: "clients/sahana/asagaya/dishes/海老カレー0912_0630.JPG",
      alt: "海老カレー"
    }
  ],
  menu: {
    title: "メニュー",
    intro:
      "各店舗のメニュー画像をご覧いただけます。画像を開くと大きく表示できます。",
    groups: [
      {
        title: "江東店 ランチ",
        description: "江東店のランチメニューです。",
        image: {
          src: "clients/sahana/koto/menu/lunch.jpg",
          alt: "SAHANA 江東店 ランチメニュー"
        }
      },
      {
        title: "江東店 ランチセット",
        description: "江東店のランチセットメニューです。",
        image: {
          src: "clients/sahana/koto/menu/lunch1.jpg",
          alt: "SAHANA 江東店 ランチセットメニュー"
        }
      },
      {
        title: "江東店 グランドメニュー",
        description: "江東店のグランドメニューです。",
        image: {
          src: "clients/sahana/koto/menu/grand menu.jpg",
          alt: "SAHANA 江東店 グランドメニュー"
        }
      },
      {
        title: "江東店 パーティー",
        description: "江東店のパーティーメニューです。",
        image: {
          src: "clients/sahana/koto/menu/party.jpg",
          alt: "SAHANA 江東店 パーティーメニュー"
        }
      },
      {
        title: "江東店 ドリンクセット",
        description: "江東店のドリンクセットメニューです。",
        image: {
          src: "clients/sahana/koto/menu/drink set.jpg",
          alt: "SAHANA 江東店 ドリンクセットメニュー"
        }
      },
      {
        title: "江東店 ドリンク",
        description: "江東店のドリンクメニューです。",
        image: {
          src: "clients/sahana/koto/menu/drinks.jpg",
          alt: "SAHANA 江東店 ドリンクメニュー"
        }
      },
      {
        title: "阿佐ヶ谷店 ランチ",
        description: "阿佐ヶ谷店のランチメニューです。",
        image: {
          src: "clients/sahana/asagaya/menu/lunch.jpeg",
          alt: "SAHANA 阿佐ヶ谷店 ランチメニュー"
        }
      },
      {
        title: "阿佐ヶ谷店 スペシャルメニュー",
        description: "阿佐ヶ谷店のスペシャルメニューです。",
        image: {
          src: "clients/sahana/asagaya/menu/special-menu.jpeg",
          alt: "SAHANA 阿佐ヶ谷店 スペシャルメニュー"
        }
      },
      {
        title: "阿佐ヶ谷店 バーメニュー",
        description: "阿佐ヶ谷店のバーメニューです。",
        image: {
          src: "clients/sahana/asagaya/menu/bar-menu.jpeg",
          alt: "SAHANA 阿佐ヶ谷店 バーメニュー"
        }
      },
      {
        title: "阿佐ヶ谷店 テイクアウト",
        description: "阿佐ヶ谷店のテイクアウトメニューです。",
        image: {
          src: "clients/sahana/asagaya/menu/takeout menu.jpeg",
          alt: "SAHANA 阿佐ヶ谷店 テイクアウトメニュー"
        }
      },
      {
        title: "阿佐ヶ谷店 ネパールメニュー",
        description: "阿佐ヶ谷店のネパールメニューです。",
        image: {
          src: "clients/sahana/asagaya/menu/nepali menu.jpeg",
          alt: "SAHANA 阿佐ヶ谷店 ネパールメニュー"
        }
      },
      {
        title: "阿佐ヶ谷店 全体メニュー",
        description: "阿佐ヶ谷店の全体メニューです。",
        image: {
          src: "clients/sahana/asagaya/menu/all.jpeg",
          alt: "SAHANA 阿佐ヶ谷店 全体メニュー"
        }
      }
    ]
  },
  contact: {
    phone: "03-6777-3552",
    address: asagayaAddress,
    hours: ["11:00〜23:00"],
    mapUrl: "https://maps.app.goo.gl/p8UvqMeqPtKDFvBz9",
    mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(asagayaAddress)}&output=embed`,
    details: ["阿佐ヶ谷店の店舗前に小さなインドマートがあります。"]
  },
  banner: {
    title: "WEB注文キャンペーン",
    collapsible: true,
    defaultOpen: true,
    items: [
      {
        title: "Uber Eats",
        text: "江東店「一部のメニューが最大30%オフ」キャンペーン中！",
        href: "https://www.ubereats.com/jp/store/%E3%82%A4%E3%83%B3%E3%83%88%E6%96%99%E7%90%86%E3%82%B5%E3%83%8F%E3%83%8A-indian-restaurant-sahana/NEM8WR2EX82rQRa6L7AuCA",
        linkLabel: "Uber Eatsで注文",
        logo: {
          src: "shared/uber-eats-logo.svg",
          alt: "Uber Eats"
        }
      },
      {
        title: "Uber Eats",
        text: "阿佐ヶ谷店「1つ買うと、もう1つ無料になる」キャンペーン中！",
        href: "https://www.ubereats.com/store/%E3%82%A4%E3%83%B3%E3%83%88%26%E3%83%8D%E3%83%BC%E3%83%8F%E3%83%AB%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B5%E3%83%8F%E3%83%8A/B0ZuOb0BTN-7HJ1Gmz94vA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMk1pbmFtaWthc2FpJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSlgzcVdkVjE5R0dBUkdySHRqLVpkbmo4JTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTM1LjY0OTg3MTMlMkMlMjJsb25naXR1ZGUlMjIlM0ExMzkuODczOTI2NyU3RA%3D%3D&utm_source=menu-maker",
        linkLabel: "Uber Eatsで注文",
        logo: {
          src: "shared/uber-eats-logo.svg",
          alt: "Uber Eats"
        }
      },
      {
        title: "出前館",
        text: "江東店のデリバリー注文はこちら",
        href: "https://demae-can.com/shop/menu/3332818",
        linkLabel: "出前館で注文",
        logo: {
          src: "shared/demae-can-logo.svg",
          alt: "出前館"
        }
      }
    ]
  },
  webOrder: {
    title: "WEB注文",
    links: [
      {
        label: "江東店 Uber Eats",
        href: "https://www.ubereats.com/jp/store/%E3%82%A4%E3%83%B3%E3%83%88%E6%96%99%E7%90%86%E3%82%B5%E3%83%8F%E3%83%8A-indian-restaurant-sahana/NEM8WR2EX82rQRa6L7AuCA",
        logo: {
          src: "shared/uber-eats-logo.svg",
          alt: "Uber Eats"
        }
      },
      {
        label: "江東店 出前館",
        href: "https://demae-can.com/shop/menu/3332818",
        logo: {
          src: "shared/demae-can-logo.svg",
          alt: "出前館"
        }
      },
      {
        label: "阿佐ヶ谷店 Uber Eats",
        href: "https://www.ubereats.com/store/%E3%82%A4%E3%83%B3%E3%83%88%26%E3%83%8D%E3%83%BC%E3%83%8F%E3%83%AB%E3%83%AC%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B5%E3%83%8F%E3%83%8A/B0ZuOb0BTN-7HJ1Gmz94vA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMk1pbmFtaWthc2FpJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSlgzcVdkVjE5R0dBUkdySHRqLVpkbmo4JTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTM1LjY0OTg3MTMlMkMlMjJsb25naXR1ZGUlMjIlM0ExMzkuODczOTI2NyU3RA%3D%3D&utm_source=menu-maker",
        logo: {
          src: "shared/uber-eats-logo.svg",
          alt: "Uber Eats"
        }
      }
    ]
  },
  branches: [
    {
      name: "SAHANA 阿佐ヶ谷店",
      status: "active",
      address: asagayaAddress,
      phone: "03-6777-3552",
      hours: ["11:00〜23:00"],
      mapUrl: "https://maps.app.goo.gl/p8UvqMeqPtKDFvBz9",
      mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(asagayaAddress)}&output=embed`,
      note: "店舗前に小さなインドマートがあります。"
    },
    {
      name: "SAHANA 江東店",
      status: "active",
      address: kotoAddress,
      phone: "03-5809-9697",
      hours: ["月〜土 11:00〜15:00 / 17:00〜23:00", "定休日 日曜日"],
      mapUrl: "https://maps.app.goo.gl/dXZAFvTqSXht6Juz8",
      mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(kotoAddress)}&output=embed`,
      note: "門前仲町駅から徒歩圏内の江東店です。"
    }
  ],
  posts: [
    {
      date: "2026-04-20",
      title: "阿佐ヶ谷店オープン",
      text: "2026年4月20日、SAHANA 阿佐ヶ谷店がオープンしました。皆さまのご来店をお待ちしております。"
    }
  ]
};

type TranslationSet = {
  labels: NonNullable<BusinessContent["locale"]>["labels"];
  business: Partial<BusinessContent["business"]>;
  navigation: BusinessContent["navigation"];
  hero: Pick<
    BusinessContent["hero"],
    "eyebrow" | "text" | "primaryAction" | "secondaryAction"
  >;
  heroImageAlt: string;
  about: Pick<BusinessContent["about"], "title" | "subtitle" | "text">;
  aboutImageAlt: string;
  features: NonNullable<BusinessContent["features"]>;
  menu: Pick<BusinessContent["menu"], "title" | "intro"> & {
    groupTitles: string[];
    groupDescriptions: string[];
    imageAlts: string[];
  };
  banner: Pick<NonNullable<BusinessContent["banner"]>, "title"> & {
    items: Array<{
      title: string;
      text: string;
      linkLabel: string;
      logoAlt?: string;
    }>;
  };
  webOrder: {
    title: string;
    labels: string[];
    campaigns: string[];
    logoTexts: string[];
    logoAlts: string[];
  };
  galleryAlts: string[];
  branches: Array<
    Pick<NonNullable<BusinessContent["branches"]>[number], "name" | "note"> & {
      hours?: string[];
    }
  >;
  posts: NonNullable<BusinessContent["posts"]>;
};

const translations: Record<Exclude<SahanaLocale, "ja">, TranslationSet> = {
  en: {
    labels: {
      skipLink: "Skip to content",
      mainNavigation: "Main navigation",
      footerNavigation: "Footer navigation",
      languageNavigation: "Language",
      homeLabel: "SAHANA home",
      comingSoon: "Soon",
      aboutEyebrow: "About",
      featuresEyebrow: "Highlights",
      featuresTitle: "Why SAHANA",
      galleryEyebrow: "Photos",
      galleryTitle: "Food and Store Photos",
      menuEyebrow: "Menu",
      menuFallbackTitle: "Menu",
      newsEyebrow: "News",
      newsTitle: "Updates",
      branchesEyebrow: "Access",
      branchesTitle: "Asagaya and Koto",
      branchesIntro:
        "Addresses, phone numbers, hours, and Google Maps for each branch.",
      branchActive: "Open",
      branchVerification: "Notice",
      openMap: "Open Google Maps",
      mapLabel: "map",
      webOrderEyebrow: "Online Order",
      enlargeImageLabel: "Enlarge image",
      imageDialogLabel: "Expanded image preview",
      closeDialogLabel: "Close"
    },
    business: {
      name: "SAHANA",
      type: "Indian and Nepalese Restaurant",
      tagline: "Indian and Nepalese food in Tokyo",
      description:
        "SAHANA is an Indian and Nepalese restaurant with branches in Asagaya and Koto, Tokyo.",
      seoTitle: "SAHANA | Indian and Nepalese Restaurant in Tokyo",
      seoDescription:
        "Official SAHANA website. See branch information, menus, photos, online ordering, and access for Asagaya and Koto.",
      logo: {
        src: "clients/sahana/logo.jpeg",
        alt: "SAHANA logo"
      },
      footerText: "SAHANA"
    },
    navigation: [
      { label: "Info", href: "#about" },
      { label: "Branches", href: "#branches" },
      { label: "Menu", href: "#menu" },
      { label: "Order", href: "#order" },
      { label: "Access", href: "#branches" }
    ],
    hero: {
      eyebrow: "Indian and Nepalese Cuisine",
      text: "Enjoy real Indian taste loved for more than 10 years at Asagaya and Koto.",
      primaryAction: { label: "View Branches", href: "#branches" },
      secondaryAction: { label: "Online Order", href: "#order" }
    },
    heroImageAlt: "SAHANA Koto storefront",
    about: {
      title: "About SAHANA",
      subtitle: "Indian and Nepalese Restaurant",
      text: "SAHANA has served real Indian taste for more than 10 years. At the Asagaya branch, you can also visit a small Indian mart in front of the restaurant."
    },
    aboutImageAlt: "Butter chicken curry and cheese naan set",
    features: [
      {
        title: "10+ Years of Service",
        text: "We continue to value the taste and service loved by local customers for many years."
      },
      {
        title: "Real Indian Taste",
        text: "Enjoy authentic curry, naan, tandoori dishes, and Indian-Nepalese favorites."
      },
      {
        title: "Indian Mart at Asagaya",
        text: "A small Indian mart is available in front of the Asagaya branch."
      }
    ],
    menu: {
      title: "Menu",
      intro: "View menu images for each branch. Click an image to enlarge it.",
      groupTitles: [
        "Koto Lunch",
        "Koto Lunch Set",
        "Koto Grand Menu",
        "Koto Party",
        "Koto Drink Set",
        "Koto Drinks",
        "Asagaya Lunch",
        "Asagaya Special Menu",
        "Asagaya Bar Menu",
        "Asagaya Takeout",
        "Asagaya Nepali Menu",
        "Asagaya Full Menu"
      ],
      groupDescriptions: [
        "Koto lunch menu.",
        "Koto lunch set menu.",
        "Koto grand menu.",
        "Koto party menu.",
        "Koto drink set menu.",
        "Koto drinks menu.",
        "Asagaya lunch menu.",
        "Asagaya special menu.",
        "Asagaya bar menu.",
        "Asagaya takeout menu.",
        "Asagaya Nepali menu.",
        "Asagaya full menu."
      ],
      imageAlts: [
        "SAHANA Koto lunch menu",
        "SAHANA Koto lunch set menu",
        "SAHANA Koto grand menu",
        "SAHANA Koto party menu",
        "SAHANA Koto drink set menu",
        "SAHANA Koto drinks menu",
        "SAHANA Asagaya lunch menu",
        "SAHANA Asagaya special menu",
        "SAHANA Asagaya bar menu",
        "SAHANA Asagaya takeout menu",
        "SAHANA Asagaya Nepali menu",
        "SAHANA Asagaya full menu"
      ]
    },
    banner: {
      title: "Online Order Campaign",
      items: [
        {
          title: "Uber Eats",
          text: "Koto branch delivery orders",
          linkLabel: "Order on Uber Eats"
        },
        {
          title: "Demae-can",
          text: "Koto branch delivery orders",
          linkLabel: "Order on Demae-can",
          logoAlt: "Demae-can"
        }
      ]
    },
    webOrder: {
      title: "Online Order",
      labels: ["Koto Uber Eats", "Koto Demae-can", "Asagaya Delivery"],
      campaigns: ["", "", "Online ordering is coming soon"],
      logoTexts: ["", "", "Coming soon"],
      logoAlts: ["Uber Eats", "Demae-can", ""]
    },
    galleryAlts: [
      "Hot pot dish",
      "Dinner selection",
      "Drinks selection",
      "Koto branch exterior",
      "Butter chicken and cheese naan set",
      "Chicken curry",
      "Butter chicken curry",
      "Mutton masala curry",
      "Shrimp curry"
    ],
    branches: [
      {
        name: "SAHANA Asagaya",
        note: "A small Indian mart is available in front of the restaurant."
      },
      {
        name: "SAHANA Koto",
        note: "Koto branch within walking distance from Monzen-nakacho Station.",
        hours: ["Mon-Sat 11:00-15:00 / 17:00-23:00", "Closed Sunday"]
      }
    ],
    posts: [
      {
        date: "2026-04-20",
        title: "Asagaya Branch Opened",
        text: "SAHANA Asagaya opened on April 20, 2026. We look forward to welcoming you."
      }
    ]
  },
  ne: {
    labels: {
      skipLink: "मुख्य सामग्रीमा जानुहोस्",
      mainNavigation: "मुख्य नेभिगेसन",
      footerNavigation: "फुटर नेभिगेसन",
      languageNavigation: "भाषा",
      homeLabel: "SAHANA गृहपृष्ठ",
      comingSoon: "छिट्टै",
      aboutEyebrow: "हाम्रो बारेमा",
      featuresEyebrow: "विशेषता",
      featuresTitle: "SAHANA का विशेषता",
      galleryEyebrow: "फोटो",
      galleryTitle: "खाना र पसलका फोटोहरू",
      menuEyebrow: "मेनु",
      menuFallbackTitle: "मेनु",
      newsEyebrow: "समाचार",
      newsTitle: "नयाँ जानकारी",
      branchesEyebrow: "स्थान",
      branchesTitle: "आसागाया र कोतो",
      branchesIntro: "प्रत्येक शाखाको ठेगाना, फोन, समय र Google Maps।",
      branchActive: "खुला",
      branchVerification: "सूचना",
      openMap: "Google Maps खोल्नुहोस्",
      mapLabel: "नक्सा",
      webOrderEyebrow: "अनलाइन अर्डर",
      enlargeImageLabel: "ठूलो गरेर हेर्नुहोस्",
      imageDialogLabel: "ठूलो छवि हेर्नुहोस्",
      closeDialogLabel: "बन्द गर्नुहोस्"
    },
    business: {
      name: "SAHANA",
      type: "भारतीय र नेपाली रेस्टुरेन्ट",
      tagline: "टोकियोमा भारतीय र नेपाली खाना",
      description:
        "SAHANA टोकियोको आसागाया र कोतोमा रहेको भारतीय र नेपाली रेस्टुरेन्ट हो।",
      seoTitle: "SAHANA | टोकियोको भारतीय र नेपाली रेस्टुरेन्ट",
      seoDescription:
        "SAHANA को आधिकारिक वेबसाइट। शाखा जानकारी, मेनु, फोटो, अनलाइन अर्डर र स्थान हेर्नुहोस्।",
      logo: {
        src: "clients/sahana/logo.jpeg",
        alt: "SAHANA लोगो"
      },
      footerText: "SAHANA"
    },
    navigation: [
      { label: "जानकारी", href: "#about" },
      { label: "शाखा", href: "#branches" },
      { label: "मेनु", href: "#menu" },
      { label: "अर्डर", href: "#order" },
      { label: "स्थान", href: "#branches" }
    ],
    hero: {
      eyebrow: "भारतीय र नेपाली खाना",
      text: "१० वर्षभन्दा बढी समयदेखि मन पराइएको वास्तविक भारतीय स्वाद आसागाया र कोतोमा।",
      primaryAction: { label: "शाखा हेर्नुहोस्", href: "#branches" },
      secondaryAction: { label: "अनलाइन अर्डर", href: "#order" }
    },
    heroImageAlt: "SAHANA कोतो शाखाको बाहिरी दृश्य",
    about: {
      title: "SAHANA बारे",
      subtitle: "भारतीय र नेपाली रेस्टुरेन्ट",
      text: "SAHANA ले १० वर्षभन्दा बढी समयदेखि वास्तविक भारतीय स्वाद पस्कँदै आएको छ। आसागाया शाखाको अगाडि सानो भारतीय मार्ट पनि छ।"
    },
    aboutImageAlt: "बटर चिकेन करी र चीज नान सेट",
    features: [
      {
        title: "१०+ वर्ष सेवा",
        text: "स्थानीय ग्राहकले मन पराएको स्वाद र सेवालाई हामी निरन्तरता दिन्छौं।"
      },
      {
        title: "वास्तविक भारतीय स्वाद",
        text: "करी, नान, तन्दुरी र भारतीय-नेपाली परिकारहरू स्वाद लिनुहोस्।"
      },
      {
        title: "आसागायामा भारतीय मार्ट",
        text: "आसागाया शाखाको अगाडि सानो भारतीय मार्ट उपलब्ध छ।"
      }
    ],
    menu: {
      title: "मेनु",
      intro:
        "प्रत्येक शाखाको मेनु छवि हेर्नुहोस्। ठूलो हेर्न छविमा क्लिक गर्नुहोस्।",
      groupTitles: [
        "कोतो लन्च",
        "कोतो लन्च सेट",
        "कोतो ग्रान्ड मेनु",
        "कोतो पार्टी",
        "कोतो ड्रिंक सेट",
        "कोतो ड्रिंक्स",
        "आसागाया लन्च",
        "आसागाया स्पेशल मेनु",
        "आसागाया बार मेनु",
        "आसागाया टेकआउट",
        "आसागाया नेपाली मेनु",
        "आसागाया पूर्ण मेनु"
      ],
      groupDescriptions: Array(12).fill("मेनु छवि।"),
      imageAlts: [
        "SAHANA कोतो लन्च मेनु",
        "SAHANA कोतो लन्च सेट मेनु",
        "SAHANA कोतो ग्रान्ड मेनु",
        "SAHANA कोतो पार्टी मेनु",
        "SAHANA कोतो ड्रिंक सेट मेनु",
        "SAHANA कोतो ड्रिंक्स मेनु",
        "SAHANA आसागाया लन्च मेनु",
        "SAHANA आसागाया स्पेशल मेनु",
        "SAHANA आसागाया बार मेनु",
        "SAHANA आसागाया टेकआउट मेनु",
        "SAHANA आसागाया नेपाली मेनु",
        "SAHANA आसागाया पूर्ण मेनु"
      ]
    },
    banner: {
      title: "अनलाइन अर्डर अभियान",
      items: [
        {
          title: "Uber Eats",
          text: "कोतो शाखाको डेलिभरी अर्डर",
          linkLabel: "Uber Eats मा अर्डर गर्नुहोस्"
        },
        {
          title: "Demae-can",
          text: "कोतो शाखाको डेलिभरी अर्डर",
          linkLabel: "Demae-can मा अर्डर गर्नुहोस्",
          logoAlt: "Demae-can"
        }
      ]
    },
    webOrder: {
      title: "अनलाइन अर्डर",
      labels: ["कोतो Uber Eats", "कोतो Demae-can", "आसागाया डेलिभरी"],
      campaigns: ["", "", "अनलाइन अर्डर छिट्टै आउँदैछ"],
      logoTexts: ["", "", "छिट्टै"],
      logoAlts: ["Uber Eats", "Demae-can", ""]
    },
    galleryAlts: [
      "नाबे परिकार",
      "डिनर परिकार",
      "पेय पदार्थ",
      "कोतो शाखाको बाहिरी दृश्य",
      "बटर चिकेन र चीज नान सेट",
      "चिकेन करी",
      "बटर चिकेन करी",
      "मटन मसाला करी",
      "झिंगा करी"
    ],
    branches: [
      {
        name: "SAHANA आसागाया",
        note: "रेस्टुरेन्ट अगाडि सानो भारतीय मार्ट छ।"
      },
      {
        name: "SAHANA कोतो",
        note: "मोनजेन-नाकाचो स्टेशनबाट हिँडेर जान सकिने कोतो शाखा।",
        hours: ["सोम-शनि 11:00-15:00 / 17:00-23:00", "आइतबार बन्द"]
      }
    ],
    posts: [
      {
        date: "2026-04-20",
        title: "आसागाया शाखा खुलेको छ",
        text: "SAHANA आसागाया २०२६ अप्रिल २० मा खुल्यो। तपाईंको आगमनको प्रतीक्षा छ।"
      }
    ]
  },
  hi: {
    labels: {
      skipLink: "मुख्य सामग्री पर जाएं",
      mainNavigation: "मुख्य नेविगेशन",
      footerNavigation: "फुटर नेविगेशन",
      languageNavigation: "भाषा",
      homeLabel: "SAHANA होम",
      comingSoon: "जल्द",
      aboutEyebrow: "हमारे बारे में",
      featuresEyebrow: "विशेषताएं",
      featuresTitle: "SAHANA की खासियत",
      galleryEyebrow: "फोटो",
      galleryTitle: "खाने और दुकान की तस्वीरें",
      menuEyebrow: "मेनू",
      menuFallbackTitle: "मेनू",
      newsEyebrow: "समाचार",
      newsTitle: "नई जानकारी",
      branchesEyebrow: "स्थान",
      branchesTitle: "आसागाया और कोतो",
      branchesIntro: "हर शाखा का पता, फोन, समय और Google Maps।",
      branchActive: "खुला",
      branchVerification: "सूचना",
      openMap: "Google Maps खोलें",
      mapLabel: "नक्शा",
      webOrderEyebrow: "ऑनलाइन ऑर्डर",
      enlargeImageLabel: "बड़ी तस्वीर देखें",
      imageDialogLabel: "बड़ी तस्वीर पूर्वावलोकन",
      closeDialogLabel: "बंद करें"
    },
    business: {
      name: "SAHANA",
      type: "भारतीय और नेपाली रेस्टोरेंट",
      tagline: "टोक्यो में भारतीय और नेपाली भोजन",
      description:
        "SAHANA टोक्यो के आसागाया और कोतो में भारतीय और नेपाली रेस्टोरेंट है।",
      seoTitle: "SAHANA | टोक्यो का भारतीय और नेपाली रेस्टोरेंट",
      seoDescription:
        "SAHANA की आधिकारिक वेबसाइट। शाखा जानकारी, मेनू, फोटो, ऑनलाइन ऑर्डर और स्थान देखें।",
      logo: {
        src: "clients/sahana/logo.jpeg",
        alt: "SAHANA लोगो"
      },
      footerText: "SAHANA"
    },
    navigation: [
      { label: "जानकारी", href: "#about" },
      { label: "शाखाएं", href: "#branches" },
      { label: "मेनू", href: "#menu" },
      { label: "ऑर्डर", href: "#order" },
      { label: "स्थान", href: "#branches" }
    ],
    hero: {
      eyebrow: "भारतीय और नेपाली भोजन",
      text: "10 साल से अधिक समय से पसंद किया गया असली भारतीय स्वाद आसागाया और कोतो में।",
      primaryAction: { label: "शाखाएं देखें", href: "#branches" },
      secondaryAction: { label: "ऑनलाइन ऑर्डर", href: "#order" }
    },
    heroImageAlt: "SAHANA कोतो शाखा का बाहरी दृश्य",
    about: {
      title: "SAHANA के बारे में",
      subtitle: "भारतीय और नेपाली रेस्टोरेंट",
      text: "SAHANA 10 साल से अधिक समय से असली भारतीय स्वाद परोस रहा है। आसागाया शाखा के सामने एक छोटा भारतीय मार्ट भी है।"
    },
    aboutImageAlt: "बटर चिकन करी और चीज़ नान सेट",
    features: [
      {
        title: "10+ साल की सेवा",
        text: "स्थानीय ग्राहकों द्वारा पसंद किए गए स्वाद और सेवा को हम आगे भी संजोते हैं।"
      },
      {
        title: "असली भारतीय स्वाद",
        text: "करी, नान, तंदूरी और भारतीय-नेपाली व्यंजन का आनंद लें।"
      },
      {
        title: "आसागाया में भारतीय मार्ट",
        text: "आसागाया शाखा के सामने छोटा भारतीय मार्ट उपलब्ध है।"
      }
    ],
    menu: {
      title: "मेनू",
      intro:
        "हर शाखा की मेनू छवियां देखें। बड़ा देखने के लिए छवि पर क्लिक करें।",
      groupTitles: [
        "कोतो लंच",
        "कोतो लंच सेट",
        "कोतो ग्रैंड मेनू",
        "कोतो पार्टी",
        "कोतो ड्रिंक सेट",
        "कोतो ड्रिंक्स",
        "आसागाया लंच",
        "आसागाया स्पेशल मेनू",
        "आसागाया बार मेनू",
        "आसागाया टेकआउट",
        "आसागाया नेपाली मेनू",
        "आसागाया फुल मेनू"
      ],
      groupDescriptions: Array(12).fill("मेनू छवि।"),
      imageAlts: [
        "SAHANA कोतो लंच मेनू",
        "SAHANA कोतो लंच सेट मेनू",
        "SAHANA कोतो ग्रैंड मेनू",
        "SAHANA कोतो पार्टी मेनू",
        "SAHANA कोतो ड्रिंक सेट मेनू",
        "SAHANA कोतो ड्रिंक्स मेनू",
        "SAHANA आसागाया लंच मेनू",
        "SAHANA आसागाया स्पेशल मेनू",
        "SAHANA आसागाया बार मेनू",
        "SAHANA आसागाया टेकआउट मेनू",
        "SAHANA आसागाया नेपाली मेनू",
        "SAHANA आसागाया फुल मेनू"
      ]
    },
    banner: {
      title: "ऑनलाइन ऑर्डर कैंपेन",
      items: [
        {
          title: "Uber Eats",
          text: "कोतो शाखा डिलीवरी ऑर्डर",
          linkLabel: "Uber Eats पर ऑर्डर करें"
        },
        {
          title: "Demae-can",
          text: "कोतो शाखा डिलीवरी ऑर्डर",
          linkLabel: "Demae-can पर ऑर्डर करें",
          logoAlt: "Demae-can"
        }
      ]
    },
    webOrder: {
      title: "ऑनलाइन ऑर्डर",
      labels: ["कोतो Uber Eats", "कोतो Demae-can", "आसागाया डिलीवरी"],
      campaigns: ["", "", "ऑनलाइन ऑर्डर जल्द शुरू होगा"],
      logoTexts: ["", "", "जल्द"],
      logoAlts: ["Uber Eats", "Demae-can", ""]
    },
    galleryAlts: [
      "हॉट पॉट डिश",
      "डिनर डिश",
      "ड्रिंक्स चयन",
      "कोतो शाखा बाहरी दृश्य",
      "बटर चिकन और चीज़ नान सेट",
      "चिकन करी",
      "बटर चिकन करी",
      "मटन मसाला करी",
      "झींगा करी"
    ],
    branches: [
      {
        name: "SAHANA आसागाया",
        note: "रेस्टोरेंट के सामने छोटा भारतीय मार्ट है।"
      },
      {
        name: "SAHANA कोतो",
        note: "मोनजेन-नाकाचो स्टेशन से पैदल दूरी पर कोतो शाखा।",
        hours: ["सोम-शनि 11:00-15:00 / 17:00-23:00", "रविवार बंद"]
      }
    ],
    posts: [
      {
        date: "2026-04-20",
        title: "आसागाया शाखा खुली",
        text: "SAHANA आसागाया 20 अप्रैल 2026 को खुला। हम आपका स्वागत करते हैं।"
      }
    ]
  }
};

const applyTranslation = (
  content: BusinessContent,
  locale: Exclude<SahanaLocale, "ja">
) => {
  const translation = translations[locale];

  content.locale = {
    defaultLocale: locale,
    available: localeOptions,
    labels: translation.labels
  };
  content.business = { ...content.business, ...translation.business };
  content.navigation = translation.navigation;
  content.hero = { ...content.hero, ...translation.hero };
  content.hero.image.alt = translation.heroImageAlt;
  content.about = { ...content.about, ...translation.about };
  content.about.image.alt = translation.aboutImageAlt;
  content.features = translation.features;
  content.menu.title = translation.menu.title;
  content.menu.intro = translation.menu.intro;
  content.menu.groups?.forEach((group, index) => {
    group.title = translation.menu.groupTitles[index] ?? group.title;
    group.description =
      translation.menu.groupDescriptions[index] ?? group.description;
    if (group.image) {
      group.image.alt = translation.menu.imageAlts[index] ?? group.image.alt;
    }
  });
  if (content.banner) {
    content.banner.title = translation.banner.title;
    content.banner.items?.forEach((item, index) => {
      item.title = translation.banner.items[index]?.title ?? item.title;
      item.text = translation.banner.items[index]?.text ?? item.text;
      item.linkLabel =
        translation.banner.items[index]?.linkLabel ?? item.linkLabel;
      if (item.logo && translation.banner.items[index]?.logoAlt) {
        item.logo.alt = translation.banner.items[index].logoAlt;
      }
    });
  }
  if (content.webOrder) {
    content.webOrder.title = translation.webOrder.title;
    content.webOrder.links.forEach((link, index) => {
      link.label = translation.webOrder.labels[index] ?? link.label;
      link.campaign = translation.webOrder.campaigns[index] ?? link.campaign;
      link.logoText = translation.webOrder.logoTexts[index] ?? link.logoText;
      if (link.logo && translation.webOrder.logoAlts[index]) {
        link.logo.alt = translation.webOrder.logoAlts[index];
      }
    });
  }
  content.gallery?.forEach((image, index) => {
    image.alt = translation.galleryAlts[index] ?? image.alt;
  });
  content.branches?.forEach((branch, index) => {
    branch.name = translation.branches[index]?.name ?? branch.name;
    branch.note = translation.branches[index]?.note ?? branch.note;
    branch.hours = translation.branches[index]?.hours ?? branch.hours;
  });
  content.posts = translation.posts;
};

export const getSiteContent = (
  locale: LocaleCode | SahanaLocale = "ja"
): BusinessContent => {
  const content = structuredClone(siteContent) as BusinessContent;
  const normalizedLocale = supportedLocales.includes(locale as SahanaLocale)
    ? (locale as SahanaLocale)
    : "ja";

  if (normalizedLocale !== "ja") {
    applyTranslation(content, normalizedLocale);
  }

  return content;
};

export const theme = indianRestaurantTheme;
