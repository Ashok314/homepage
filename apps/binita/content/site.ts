import type { BusinessContent } from "@homepage/content";
import { binitaTheme } from "@homepage/themes";

export const theme = binitaTheme;

export const siteContent: BusinessContent = {
  business: {
    name: "インド料理 ビニタ",
    type: "インド料理",
    tagline: "本格インド料理を、あたたかく。",
    topLine: "小豆沢の美味しい本格インドカレー BINITA(ビニタ)",
    description:
      "東京都板橋区小豆沢にあるインド料理店ビニタ。カレー、ナン、タンドリー料理など、本場の味を気軽に楽しめるお店です。",
    seoTitle: "BINITA 小豆沢店 | インド料理 ビニタ",
    seoDescription:
      "インド料理 ビニタ 小豆沢店。東京都板橋区小豆沢2-19-13。志村坂上駅徒歩2分。電話番号 03-5994-0840。本格インドカレー、ナン、タンドリー料理。",
    logo: {
      src: "clients/binita/archive/all/logo.png",
      alt: "BINITA ビニタ"
    },
    footerText: "小豆沢の本格インドカレー BINITA(ビニタ)"
  },
  navigation: [
    { label: "ランチ", href: "#lunch" },
    { label: "ディナー", href: "#dinner" },
    { label: "ドリンク", href: "#drink" },
    { label: "WEB注文", href: "#order" },
    { label: "パーティー", href: "#party" },
    { label: "アクセス", href: "#access" },
    { label: "お支払い方法", href: "#payment" },
    { label: "レビュー", href: "#reviews" }
  ],
  hero: {
    image: {
      src: "clients/binita/archive/all/mv01.png",
      alt: "スパイスを使ったビニタのメインビジュアル"
    },
    slides: [
      {
        src: "clients/binita/archive/all/mv01.png",
        alt: "Welcome to Indian Restaurant BINITA"
      },
      {
        src: "clients/binita/archive/all/mv02.png",
        alt: "BINITA メインビジュアル 2"
      },
      {
        src: "clients/binita/archive/all/mv03.png",
        alt: "BINITA メインビジュアル 3"
      },
      {
        src: "clients/binita/archive/all/mv04.png",
        alt: "BINITA メインビジュアル 4"
      }
    ]
  },
  about: {
    title: "BINITA 小豆沢店",
    subtitle: "A Real Indian Taste. 本場のインド料理が食べられるお店。",
    text: "女性にも男性にも人気なランチメニューはリーズナブルで、 ナンはオリジナルで少し甘めなのが特徴です♪\nカレーは種類を選べるし、辛さも好みによって選べます！\nインドカレー初心者でも食べやすいし、ツウな方でも満足できる本場の味です。\n\n各店駅からすぐ。\n貸切にも対応していますので、パーティー宴会にも最適！\nお気軽にお問い合わせ下さい。\n\nご来店お待ちしております。",
    image: {
      src: "clients/binita/archive/all/concept_img01.png",
      alt: "ビニタの料理"
    }
  },
  menu: {
    title: "メニュー",
    notice:
      "※ Take Out OK！ランチメニューは全てお持ち帰りできます！\n　他メニュー多数あります。※ 店舗によって取り扱いメニュー・金額が異なることがありますので、ご了承ください。",
    groups: [
      {
        title: "ランチ",
        image: {
          src: "clients/binita/archive/all/img04-200x150.jpg",
          alt: "海老チーズカレー"
        },
        price: "700円〜",
        description: "ランチメニュー",
        items: [
          { name: "海老チーズカレー", description: "", price: "" },
          { name: "ポークカレー", description: "", price: "" },
          { name: "野菜カレー", description: "", price: "" },
          { name: "マトンカレー", description: "", price: "" },
          { name: "バターチキンカレー", description: "", price: "" },
          { name: "豆カレー", description: "", price: "" }
        ]
      },
      {
        title: "お得なランチセット",
        image: {
          src: "clients/binita/archive/all/img10-200x150.jpg",
          alt: "ビニタスペシャルランチセット"
        },
        price: "800円〜",
        description: "お得なランチセット",
        items: [
          { name: "Aランチ", description: "", price: "" },
          { name: "お薦めランチセット", description: "", price: "" },
          { name: "ビニタスペシャルランチセット", description: "", price: "" }
        ]
      },
      {
        title: "ディナー",
        image: {
          src: "clients/binita/archive/all/img03-200x150.jpg",
          alt: "ゴマスープカレー"
        },
        price: "750円〜",
        description: "ディナーおすすめ",
        items: [
          { name: "ほうれん草チキンバルタカレー", description: "", price: "" },
          { name: "海老チーズカレー", description: "", price: "" },
          { name: "ゴマスープカレー", description: "", price: "" }
        ]
      },
      {
        title: "ディナースペシャル",
        image: {
          src: "clients/binita/archive/all/img05-200x150.jpg",
          alt: "2色カレーライスセット"
        },
        price: "1,150円〜",
        description: "ディナースペシャル",
        items: [
          { name: "お気軽セット", description: "", price: "" },
          { name: "2色カレーセット", description: "", price: "" },
          { name: "ビニタスペシャルカップルセット", description: "", price: "" }
        ]
      },
      {
        title: "ナン",
        image: {
          src: "clients/binita/archive/all/img09-200x150.jpg",
          alt: "ナン"
        },
        price: "300円〜",
        description: "ナン、チーズナンなど。お持ち帰りできます。",
        items: []
      },
      {
        title: "炭焼き一品料理",
        image: {
          src: "clients/binita/archive/all/img10-200x150.jpg",
          alt: "タンドリー料理"
        },
        price: "300円〜",
        description:
          "炭焼きラムティッカ、ハリヤリチキン、ゴマチキンパコラなど。",
        items: []
      },
      {
        title: "サラダ",
        price: "350円〜",
        description: "グリーンサラダ、ビニタスペシャルサラダなど。",
        items: []
      },
      {
        title: "ソフトドリンク -Soft Drink-",
        price: "300円〜",
        description:
          "ラッシー、コーヒー、チャイ、コカコーラ、ジンジャーエール、マンゴージュースなど。",
        items: []
      },
      {
        title: "アルコール -Alcohols-",
        price: "390円〜",
        description:
          "ビール、カクテル、ウォッカ、ワイン、ウイスキー、焼酎など。",
        items: []
      }
    ]
  },
  contact: {
    phone: "03-5994-0840",
    address: "東京都板橋区小豆沢2-19-13",
    hours: ["10:30〜24:00"],
    details: [
      "志村坂上駅 徒歩2分",
      "定休日 年中無休",
      "座席数 50席",
      "最低貸切人数 45名〜"
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%9D%BF%E6%A9%8B%E5%8C%BA%E5%B0%8F%E8%B1%86%E6%B2%A22-19-13&output=embed",
    mapUrl: "https://maps.app.goo.gl/sL5r7YyRZmaF3PYs8",
    photos: [
      {
        src: "clients/binita/archive/access/azusawa-entrance.jpg",
        alt: "小豆沢店入り口"
      },
      {
        src: "clients/binita/archive/access/azusawa-table-1.jpg",
        alt: "小豆沢店テーブル席"
      },
      {
        src: "clients/binita/archive/access/azusawa-table-2.jpg",
        alt: "小豆沢店テーブル席2"
      },
      {
        src: "clients/binita/archive/access/azusawa-landmark.jpg",
        alt: "小豆沢店目印"
      }
    ]
  },
  banner: {
    title: "お得なキャンペーン",
    collapsible: true,
    defaultOpen: true,
    items: [
      {
        title: "出前館",
        text: "3500円以上で10%OFFキャンペーン中！",
        href: "https://demae-can.com/shop/menu/3016051",
        linkLabel: "出前館で注文する",
        logo: { src: "shared/demae-can-logo.svg", alt: "出前館ロゴ" }
      },
      {
        title: "Uber Eats",
        text: "1 個頼むと商品 1 つが無料になるキャンペーン中！",
        href: "https://www.ubereats.com/jp/store/%E3%83%92%E3%83%8B%E3%82%BF-%E5%B0%8F%E8%B1%86%E6%B2%A2%E5%BA%97-binita-azusawaten/Hp-epwfjTtmzqbymTxub9g",
        linkLabel: "Uber Eatsで注文する",
        logo: { src: "shared/uber-eats-logo.svg", alt: "Uber Eatsロゴ" }
      }
    ]
  },
  posts: [
    {
      title: "リニューアル",
      date: "2026-06-07",
      text: "サイトをリニューアルしました。今後も最新情報をお届けしていきますので、よろしくお願いいたします！"
    },
    {
      title: "ビニタ小豆沢店の店舗情報を掲載しました",
      date: "2016-04-19",
      text: "住所、営業時間、座席数、貸切人数など、小豆沢店の情報を旧サイトから整理して掲載しています。"
    },
    {
      title: "パーティーコース承ります",
      date: "2016-04-19",
      text: "ご予算に合わせてコース料理をご用意します。宴会、お祝い、打ち合わせなどにもご利用いただけます。"
    }
  ],
  webOrder: {
    title: "WEB注文",
    links: [
      {
        label: "出前館",
        logo: { src: "shared/demae-can-logo.svg", alt: "出前館ロゴ" },
        logoText: "出前館",
        href: "https://demae-can.com/shop/menu/3016051",
        rating: "★ 4.5(455件) 2026年6月現在",
        campaign: "3500円以上で10%OFFキャンペーン中！"
      },
      {
        label: "Uber Eats",
        logo: { src: "shared/uber-eats-logo.svg", alt: "Uber Eatsロゴ" },
        logoText: "Uber Eats",
        href: "https://www.ubereats.com/jp/store/%E3%83%92%E3%83%8B%E3%82%BF-%E5%B0%8F%E8%B1%86%E6%B2%A2%E5%BA%97-binita-azusawaten/Hp-epwfjTtmzqbymTxub9g",
        rating: "★ 4.7(700件+) 2026年6月現在",
        campaign: "1 個頼むと商品 1 つが無料になるキャンペーン中！"
      }
    ]
  },
  party: {
    title: "パーティー",
    subtitle: "ビニタでパーティーしませんか？",
    description:
      "美味しいインド料理のコースを予算に合わせてご用意致します。貸切にも対応しておりますので、宴会・お祝い・打ち合わせ等どんなシーンでもご利用いただけます。",
    notice: "ご予約の際、「ホームページを見た」で飲放題90分⇒120分へ！",
    summary: {
      image: {
        src: "clients/binita/archive/all/img10-200x150.jpg",
        alt: "ビニタコース料理例"
      },
      title: "小豆沢店貸切人数",
      text: [
        "<strong>45名〜</strong>貸切OK！",
        "※飲み放題単品でのご利用は出来ません。",
        "※店舗によって取り扱いメニュー・金額が異なることがあります。"
      ]
    },
    courses: [
      {
        title: "おまかせコース",
        price: "90分飲み放題付き 2,980円",
        food: "店長おまかせ料理3品、ナンまたはライス、カレー1種類",
        drink: "ソフトドリンク、生ビール、カクテル、焼酎、ウォッカ"
      },
      {
        title: "パーティーコースA",
        price: "90分飲み放題付き 3,280円",
        food: "サラダ、マライティッカ2P、チキンティッカ2P、シーシカバブ2P、パパド2P、ナンまたはライス、カレー1種類",
        drink: "ソフトドリンク、生ビール、カクテル、焼酎、ウォッカ"
      },
      {
        title: "パーティーコースB",
        price: "90分プレミアム飲み放題付き 3,800円",
        food: "サラダ、前菜、タンドリーチキン1/2P、シーシカバブ2P、手羽先1P、ナンまたはライス、カレー1種類",
        drink:
          "ソフトドリンク、生ビール、カクテル、焼酎、ウォッカ、ブランデー、インドワイン、ジョニ黒、ジョニ赤"
      }
    ]
  },
  paymentMethods: {
    title: "お支払い方法",
    description: "当店では現金に加えて、以下の決済方法をご利用いただけます。",
    methods: [
      { label: "現金", items: "日本円" },
      {
        label: "クレジットカード",
        items: "VISA, Mastercard, JCB, American Express, Diners Club"
      },
      { label: "QRコード決済", items: "PayPay, LINE Pay" }
    ]
  },
  reviews: {
    title: "口コミ・レビュー",
    readReviewsLink: "https://share.google/UwsnE6eU0INhmWucb",
    getReviewsLink: "https://share.google/UwsnE6eU0INhmWucb" //TODO: Add specific link here
  }
};
