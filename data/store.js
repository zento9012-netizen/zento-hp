const STORE = {
  // 基本情報
  name: "【STORE NAME】",
  shortName: "【STORE】",
  catchcopy: "【メインキャッチコピー】",
  subcopy: "【店舗を一言で表すサブコピー】",
  description: "【店舗の特徴やこだわりを2〜3行程度で入力してください。】",

  // 画像
  images: {
    hero: "./images/hero.jpg",
    feature1: "./images/feature1.jpg",
    feature2: "./images/feature2.jpg",
    feature3: "./images/feature3.jpg",
    gallery1: "./images/gallery1.jpg",
    gallery2: "./images/gallery2.jpg",
    gallery3: "./images/gallery3.jpg",
    gallery4: "./images/gallery4.jpg"
  },

  // 3つのこだわり
  features: [
    { number: "01", title: "【こだわり01】", text: "【この店舗ならではの特徴・強みを説明してください。】", image: "./images/feature1.jpg" },
    { number: "02", title: "【こだわり02】", text: "【商品・接客・空間などの魅力を説明してください。】", image: "./images/feature2.jpg" },
    { number: "03", title: "【こだわり03】", text: "【地域性・素材・サービスなどを説明してください。】", image: "./images/feature3.jpg" }
  ],

  // メニュー
  menuCategories: [
    { id: "menu1", label: "【カテゴリ01】", items: [
      { name: "【商品名01】", description: "【説明】", price: "¥1,000" },
      { name: "【商品名02】", description: "【説明】", price: "¥1,200" },
      { name: "【商品名03】", description: "【説明】", price: "¥1,400" }
    ]},
    { id: "menu2", label: "【カテゴリ02】", items: [
      { name: "【商品名01】", description: "【説明】", price: "¥800" },
      { name: "【商品名02】", description: "【説明】", price: "¥900" }
    ]},
    { id: "menu3", label: "【カテゴリ03】", items: [
      { name: "【商品名01】", description: "【説明】", price: "¥500" },
      { name: "【商品名02】", description: "【説明】", price: "¥600" }
    ]}
  ],

  // お知らせ
  news: [
    { date: "2026.00.00", title: "【お知らせタイトル】", text: "【お知らせ本文】" },
    { date: "2026.00.00", title: "【新商品・キャンペーン】", text: "【お知らせ本文】" },
    { date: "2026.00.00", title: "【営業に関するお知らせ】", text: "【お知らせ本文】" }
  ],

  // 店舗情報
  access: {
    address: "〒000-0000 【都道府県】【市区町村】【住所】",
    phone: "00-0000-0000",
    hours: "【11:00〜21:00】",
    closed: "【定休日】",
    parking: "【駐車場情報】",
    mapUrl: "https://www.google.com/maps/"
  },

  // 予約・テイクアウト・デリバリー・決済
  reservation: {
    siteName: "",
    url: ""
  },
  takeawayDelivery: {
    uberEats: false,
    demaeCan: false,
    foodpanda: false,
    wolt: false,
    inStoreTakeout: false,
    other: "",
    none: false
  },
  payment: {
    cash: false,
    creditCard: false,
    transitIc: false,
    qr: false,
    other: ""
  },

  // 連絡先
  contact: {
    phone: "00-0000-0000",
    email: "info@example.com"
  },

  // SNS・LINE・求人
  socials: {
    instagram: "#",
    x: "#",
    lineOfficial: "#"
  },
  recruitment: {
    enabled: false,
    text: ""
  },

  // ヒアリングシートで選択された追加コンテンツ
  additionalContent: {
    reviews: [],
    staff: [],
    ingredients: [],
    snsEmbed: false,
    media: [],
    googleMapEmbed: false,
    reservationButton: false,
    takeawayDisplay: false,
    paymentDisplay: false,
    multilingual: [],
    faq: [],
    recruitment: false,
    privacyPolicy: false,
    structuredData: true,
    favicon: ""
  }
};

export default STORE;
