const STORE = {
  // お食事処 北の屋（公開情報として確認できた内容のみ反映）
  name: "お食事処 北の屋",
  shortName: "北の屋",
  catchcopy: "十三で親しまれる食堂",
  subcopy: "定食を中心としたお食事処",
  description: "大阪・十三元今里にあるお食事処 北の屋。公開情報で確認できた店舗情報をもとに掲載しています。詳細なメニュー・店舗のこだわり等は店舗確認後に追加します。",

  // 画像：店舗提供写真が未確認のため仮画像は公開コンテンツとして使用しない
  images: {
    hero: "",
    feature1: "",
    feature2: "",
    feature3: "",
    gallery1: "",
    gallery2: "",
    gallery3: "",
    gallery4: ""
  },

  // 3つのこだわり：未確認情報は推測しない
  features: [
    { number: "01", title: "公開情報を確認中", text: "店舗独自のこだわりは店舗への確認後に掲載します。", image: "" },
    { number: "02", title: "メニュー情報を確認中", text: "最新のメニュー・価格は店舗確認後に掲載します。", image: "" },
    { number: "03", title: "店舗情報を正確に掲載", text: "住所・営業時間など、確認できた情報を中心に掲載します。", image: "" }
  ],

  // メニュー：公開情報から価格まで確実に確認できていないため保留
  menuCategories: [],

  // お知らせ：店舗からの情報未提供のため保留
  news: [],

  // 店舗情報
  access: {
    address: "大阪府大阪市淀川区十三元今里2-7-1",
    phone: "06-6305-9732",
    hours: "11:00〜20:00（公開情報で確認した範囲）",
    closed: "日曜日（公開情報で確認した範囲）",
    parking: "未確認",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%81%8A%E9%A3%9F%E4%BA%8B%E5%87%A6%20%E5%8C%97%E3%81%AE%E5%B1%8B%20%E5%A4%A7%E9%98%AA%E5%B8%82%E6%B7%80%E5%B7%9D%E5%8C%BA%E5%8D%81%E4%B8%89%E5%85%83%E4%BB%8A%E9%87%8C2-7-1"
  },

  // 予約・テイクアウト・デリバリー・決済：未確認
  reservation: { siteName: "", url: "" },
  takeawayDelivery: {
    uberEats: false,
    demaeCan: false,
    foodpanda: false,
    wolt: false,
    inStoreTakeout: false,
    other: "未確認",
    none: false
  },
  payment: {
    cash: false,
    creditCard: false,
    transitIc: false,
    qr: false,
    other: "未確認"
  },

  // 連絡先
  contact: {
    phone: "06-6305-9732",
    email: ""
  },

  // SNS：公開情報でInstagramの掲載を確認。URLは店舗公式アカウントとして確認後に確定
  socials: {
    instagram: "",
    x: "",
    lineOfficial: ""
  },
  recruitment: { enabled: false, text: "" },

  // ヒアリングシートで追加情報が確認できるまで保留
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
    privacyPolicy: true,
    structuredData: true,
    favicon: ""
  }
};

export default STORE;
