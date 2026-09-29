const STORE = {
  // お食事処 北の屋
  name: "お食事処 北の屋",
  shortName: "北の屋",
  catchcopy: "十三で親しまれる食堂",
  subcopy: "定食を中心としたお食事処",
  description: "大阪・十三元今里にあるお食事処 北の屋。11:00〜20:00、日曜定休。公式Instagramも公開されています。",

  // 画像：店舗許可済み写真の実ファイル取得後にここへ差し替える
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

  features: [
    { number: "01", title: "十三の街にある食堂", text: "大阪市淀川区十三元今里にある、日常の食事に立ち寄れるお食事処です。", image: "" },
    { number: "02", title: "定食を中心に営業", text: "定食を中心とした食事を11:00〜20:00の通し営業で提供しています。", image: "" },
    { number: "03", title: "気軽に立ち寄れる場所", text: "阪急十三駅から徒歩圏内。地域の食事処として利用されています。", image: "" }
  ],

  menuCategories: [],
  news: [],

  access: {
    address: "大阪府大阪市淀川区十三元今里2-7-1",
    phone: "06-6305-9732",
    hours: "11:00〜20:00",
    closed: "日曜日",
    parking: "なし",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%81%8A%E9%A3%9F%E4%BA%8B%E5%87%A6%20%E5%8C%97%E3%81%AE%E5%B1%8B%20%E5%A4%A7%E9%98%AA%E5%B8%82%E6%B7%80%E5%B7%9D%E5%8C%BA%E5%8D%81%E4%B8%89%E5%85%83%E4%BB%8A%E9%87%8C2-7-1"
  },

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

  contact: {
    phone: "06-6305-9732",
    email: ""
  },

  socials: {
    instagram: "https://www.instagram.com/kitanoya_0602/",
    x: "",
    lineOfficial: ""
  },
  recruitment: { enabled: false, text: "" },

  // 店舗許可済みのInstagram写真を後から実ファイルとして差し替え可能な構成
  additionalContent: {
    reviews: [],
    staff: [],
    ingredients: [],
    snsEmbed: true,
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
