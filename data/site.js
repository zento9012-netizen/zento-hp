const STORE = {
  // 基本情報
  name: "ZENTO",
  shortName: "ZENTO",
  catchcopy: "【メインキャッチコピー】",
  subcopy: "【店舗を一言で表すサブコピー】",
  description: "【店舗の特徴やこだわりを2〜3行程度で入力してください。】",

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

  features: [
    { number: "01", title: "【こだわり01】", text: "【この店舗ならではの特徴・強みを説明してください。】", image: "./images/feature1.jpg" },
    { number: "02", title: "【こだわり02】", text: "【商品・接客・空間などの魅力を説明してください。】", image: "./images/feature2.jpg" },
    { number: "03", title: "【こだわり03】", text: "【地域性・素材・サービスなどを説明してください。】", image: "./images/feature3.jpg" }
  ],

  menuCategories: [
    { id: "menu1", label: "【カテゴリ01】", items: [
      { name: "【商品名01】", description: "【説明】", price: "¥1,000" },
      { name: "【商品名02】", description: "【説明】", price: "¥1,200" },
      { name: "【商品名03】", description: "【説明】", price: "¥1,400" },
      { name: "【商品名04】", description: "【説明】", price: "¥1,500" }
    ]},
    { id: "menu2", label: "【カテゴリ02】", items: [
      { name: "【商品名01】", description: "【説明】", price: "¥800" },
      { name: "【商品名02】", description: "【説明】", price: "¥900" },
      { name: "【商品名03】", description: "【説明】", price: "¥1,100" },
      { name: "【商品名04】", description: "【説明】", price: "¥1,300" }
    ]},
    { id: "menu3", label: "【カテゴリ03】", items: [
      { name: "【商品名01】", description: "【説明】", price: "¥500" },
      { name: "【商品名02】", description: "【説明】", price: "¥600" },
      { name: "【商品名03】", description: "【説明】", price: "¥700" },
      { name: "【商品名04】", description: "【説明】", price: "¥800" }
    ]}
  ],

  news: [
    { date: "2026.00.00", title: "【お知らせタイトル】", text: "【お知らせ本文】" },
    { date: "2026.00.00", title: "【新商品・キャンペーン】", text: "【お知らせ本文】" },
    { date: "2026.00.00", title: "【営業に関するお知らせ】", text: "【お知らせ本文】" }
  ],

  access: {
    address: "〒000-0000 【都道府県】【市区町村】【住所】",
    phone: "00-0000-0000",
    hours: "【11:00〜21:00】",
    closed: "【定休日】",
    parking: "【駐車場情報】",
    mapUrl: "https://www.google.com/maps/"
  },

  contact: { phone: "00-0000-0000", email: "info@example.com" },
  socials: { instagram: "#", facebook: "#", x: "#" }
};
export default STORE;
