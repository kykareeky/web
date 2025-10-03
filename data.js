// data.js - данные для чайного магазина
const teas = [
  // Черные чаи (black)
  {
    keyword: "dian_hong",
    name: "Дянь Хун",
    price: 850,
    category: "black",
    kind: "classic",
    count: "100г",
    image: "https://cdn1.ozone.ru/s3/multimedia-3/c600/6050360151.jpg"
  },
  {
    keyword: "assam",
    name: "Ассам",
    price: 650,
    category: "black",
    kind: "classic",
    count: "100г",
    image: "https://101tea.ru/upload/iblock/939/9398a59f6a635e263164890e7e5eeb9e.jpg"
  },
  {
    keyword: "ceylon",
    name: "Цейлонский",
    price: 720,
    category: "black",
    kind: "classic",
    count: "100г",
    image: "https://avatars.mds.yandex.net/i?id=1253852b863069beb191d73b777dfcdaeb12947b-4372726-images-thumbs&n=13"
  },
  {
    keyword: "earl_grey",
    name: "Эрл Грей",
    price: 780,
    category: "black",
    kind: "flavored",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-mpic/4119563/2a00000192515483b28972ebeabda203cab1/orig"
  },
  {
    keyword: "english_breakfast",
    name: "Английский завтрак",
    price: 690,
    category: "black",
    kind: "blended",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-mpic/986077/img_id3049163483834566464.jpeg/orig"
  },
  {
    keyword: "lapsang_souchong",
    name: "Лапсанг Сушонг",
    price: 950,
    category: "black",
    kind: "smoked",
    count: "100г",
    image: "https://cdn1.ozone.ru/s3/multimedia-4/6685349944.jpg"
  },

  // Зеленые чаи (green)
  {
    keyword: "sencha",
    name: "Сенча",
    price: 750,
    category: "green",
    kind: "japanese",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-mpic/12420404/2a00000192dd9e782dc35ea4963fcf088ea4/orig"
  },
  {
    keyword: "long_jing",
    name: "Лун Цзин",
    price: 950,
    category: "green",
    kind: "chinese",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-mpic/5221004/img_id1818322907681295750.png/9hq"
  },
  {
    keyword: "gunpowder",
    name: "Ганпаудер",
    price: 680,
    category: "green",
    kind: "chinese",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-mpic/5245589/img_id6419079566818657906.jpeg/orig"
  },
  {
    keyword: "matcha",
    name: "Матча",
    price: 1200,
    category: "green",
    kind: "japanese",
    count: "50г",
    image: "https://avatars.mds.yandex.net/get-mpic/1521939/2a00000191d6de343ca92942f99acb8ba4c6/optimize"
  },
  {
    keyword: "bilochun",
    name: "Би Ло Чунь",
    price: 1100,
    category: "green",
    kind: "chinese",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-mpic/5032583/2a00000192c0a71fdf8a4bd9ad9521bcfd61/orig"
  },
  {
    keyword: "genmaicha",
    name: "Генмайча",
    price: 820,
    category: "green",
    kind: "japanese",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-mpic/4446555/2a00000192c29df725f72c3c8a5e86713f77/orig"
  },

  // Улуны (oolong)
  {
    keyword: "tie_guan_yin",
    name: "Те Гуань Инь",
    price: 920,
    category: "oolong",
    kind: "light",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-mpic/6367278/img_id5835259999786509811.jpeg/orig"
  },
  {
    keyword: "da_hong_pao",
    name: "Да Хун Пао",
    price: 1200,
    category: "oolong",
    kind: "dark",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-mpic/7144437/2a00000191d781f5a631c19f603b4ac4b278/orig"
  },
  {
    keyword: "dong_ding",
    name: "Дун Дин",
    price: 980,
    category: "oolong",
    kind: "medium",
    count: "100г",
    image: "https://st.aestatic.net/items-img/R/N/O/C/Abb9cabdd689c4195bd6b889608046c84a.jpg_960x960.jpg"
  },
  {
    keyword: "jin_xuan",
    name: "Цзинь Сюань",
    price: 850,
    category: "oolong",
    kind: "light",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-mpic/1911047/2a00000190e57331e339463edd4e9ca55392/orig"
  },
  {
    keyword: "shui_xian",
    name: "Шуй Сянь",
    price: 1100,
    category: "oolong",
    kind: "dark",
    count: "100г",
    image: "https://www.coffeemag.ru/photo/photo31310.jpeg"
  },
  {
    keyword: "bai_hao",
    name: "Бай Хао",
    price: 1350,
    category: "oolong",
    kind: "medium",
    count: "100г",
    image: "https://cdn1.ozone.ru/s3/multimedia-u/6595905558.jpg"
  },

  // Пуэры (puer)
  {
    keyword: "shu_puer",
    name: "Пуэр Шу",
    price: 1100,
    category: "puer",
    kind: "ripe",
    count: "100г",
    image: "https://cdn1.ozone.ru/s3/multimedia-m/6261004594.jpg"
  },
  {
    keyword: "sheng_puer",
    name: "Пуэр Шен",
    price: 1300,
    category: "puer",
    kind: "raw",
    count: "100г",
    image: "https://avatars.mds.yandex.net/i?id=392e3c6453f689331ec2b62515599325_l-4129295-images-thumbs&n=13"
  },
  {
    keyword: "puer_tuocha",
    name: "Пуэр Точа",
    price: 950,
    category: "puer",
    kind: "ripe",
    count: "100г",
    image: "https://artoftea.ru/image/cache/catalog/may24/dsc09013-1200x800.jpg"
  },
  {
    keyword: "puer_bingcha",
    name: "Пуэр Бинча",
    price: 1500,
    category: "puer",
    kind: "raw",
    count: "357г",
    image: "https://avatars.mds.yandex.net/i?id=8ec64d314fd84c14a10ac38a35774222_l-5381369-images-thumbs&n=13"
  },
  {
    keyword: "puer_gongting",
    name: "Пуэр Гунтин",
    price: 1250,
    category: "puer",
    kind: "ripe",
    count: "100г",
    image: "https://avatars.mds.yandex.net/i?id=c9230660996382df3ae5a85f19877478_l-4492055-images-thumbs&n=13"
  },
  {
    keyword: "puer_lao",
    name: "Пуэр Лао",
    price: 2000,
    category: "puer",
    kind: "aged",
    count: "100г",
    image: "https://cdn1.ozone.ru/s3/multimedia-0/6309435552.jpg"
  },

  // Травяные чаи (herbal)
  {
    keyword: "chamomile",
    name: "Ромашковый",
    price: 450,
    category: "herbal",
    kind: "flowers",
    count: "100г",
    image: "https://cdn.foodpicasso.com/assets/f2/d4/8d/a9/f2d48da9f4ecc5b7331d44cf153f3fd5---jpg_1000x_103c0_convert.jpg"
  },
  {
    keyword: "mint",
    name: "Мятный",
    price: 480,
    category: "herbal",
    kind: "leaves",
    count: "100г",
    image: "https://101tea.ru/upload/iblock/46b/46b2aea11e166041d29e73753b43d232.jpg"
  },
  {
    keyword: "hibiscus",
    name: "Каркаде",
    price: 520,
    category: "herbal",
    kind: "flowers",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-marketpic/1542135/market_eeaYsYCBLPtUFVtBtFIeJw/orig"
  },
  {
    keyword: "rooibos",
    name: "Ройбуш",
    price: 580,
    category: "herbal",
    kind: "african",
    count: "100г",
    image: "https://cdn1.ozone.ru/s3/multimedia-a/6069658642.jpg"
  },
  {
    keyword: "lavender",
    name: "Лавандовый",
    price: 550,
    category: "herbal",
    kind: "flowers",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-mpic/5235119/2a0000018e3861f6eb3882a17585f4e17f8a/orig"
  },
  {
    keyword: "lemongrass",
    name: "Лемонграсс",
    price: 490,
    category: "herbal",
    kind: "leaves",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-mpic/5209134/img_id85696634597035684.jpeg/orig"
  },
  // Фруктовые чаи (fruit)
  {
    keyword: "berry_mix",
    name: "Ягодный микс",
    price: 620,
    category: "fruit",
    kind: "berries",
    count: "100г",
    image: "https://avatars.mds.yandex.net/i?id=10639fa4d3a1795ae47aa68aedfb93b2a2c62863-8497195-images-thumbs&n=13"
  },
  {
    keyword: "citrus_blend",
    name: "Цитрусовый букет",
    price: 580,
    category: "fruit",
    kind: "citrus",
    count: "100г",
    image: "https://101tea.ru/upload/iblock/aff/trfh9yfyw38ryd8ed78yjuk7cgni0i07.jpg"
  },
  {
    keyword: "tropical_fruit",
    name: "Тропические фрукты",
    price: 650,
    category: "fruit",
    kind: "tropical",
    count: "100г",
    image: "https://avatars.mds.yandex.net/i?id=2a43fe6151e1b358bf17a181c4198311-5239137-images-thumbs&n=13"
  },
  {
    keyword: "apple_cinnamon",
    name: "Яблоко с корицей",
    price: 540,
    category: "fruit",
    kind: "spiced",
    count: "100г",
    image: "https://www.chay.info/upload/resize_cache/iblock/bc7/1000_1000_1/bc7de873e489c58c26a8e1afd70a9897.jpg"
  },
  {
    keyword: "forest_fruits",
    name: "Лесные ягоды",
    price: 670,
    category: "fruit",
    kind: "berries",
    count: "100г",
    image: "https://dl.sptovarov.ru/uploads/purchases/15790/photo-U15790-P2650570-T1507466159-N3391407.jpg"
  },
  {
    keyword: "ginger_lemon",
    name: "Имбирь с лимоном",
    price: 590,
    category: "fruit",
    kind: "spiced",
    count: "100г",
    image: "https://avatars.mds.yandex.net/get-mpic/4410238/2a0000019252999fb63d05c63e112b27b931/orig"
  }
];
const teaSets = {
  categories: {
    tea: [
      { keyword: "black_tea", name: "Чёрный чай", image: "https://avatars.mds.yandex.net/get-mpic/11740777/2a0000018b13f68faa886243fd584f6a8ad3/orig" },
      { keyword: "green_tea", name: "Зелёный чай", image: "https://avatars.mds.yandex.net/get-mpic/4905155/2a000001907df24ba4b04bfb2aa3ce8889de/orig" },
      { keyword: "oolong_tea", name: "Улун", image: "https://cdn1.ozone.ru/s3/multimedia-o/6300450948.jpg" },
      { keyword: "puer_tea", name: "Пуэр", image: "https://avatars.mds.yandex.net/get-mpic/4493022/img_id5705863406628272106.jpeg/orig" },
      { keyword: "herbal_tea", name: "Травяной", image: "https://avatars.mds.yandex.net/get-mpic/7721414/img_id980359684697150452.jpeg/orig" },
      { keyword: "fruit_tea", name: "Фруктовый", image: "https://avatars.mds.yandex.net/get-mpic/5426148/img_id7631716159524284447.jpeg/orig" }
    ],
    accessories: [
      { keyword: "teapot", name: "Заварочный чайник", image: "https://avatars.mds.yandex.net/get-mpic/4501142/img_id869152535120881979.jpeg/orig" },
      { keyword: "cups", name: "Чайные пары", image: "https://old-london.ru/images/700e/00021490_01.jpg" },
      { keyword: "tea_set", name: "Чайный сервиз", image: "https://avatars.mds.yandex.net/i?id=2a000001991d51949459a8e073484f185d0d-17014006-yarec&n=13" },
      { keyword: "tea_filter", name: "Чайное ситечко", image: "https://avatars.mds.yandex.net/get-mpic/5209712/img_id7445898060714652559.jpeg/orig" }
    ],
    desserts: [
      { keyword: "tea_cookies", name: "Печенье к чаю", image: "https://avatars.mds.yandex.net/i?id=0c6f9df286730edc4848a0df0398fb68_l-5342217-images-thumbs&n=13" },
      { keyword: "marshmallow", name: "Зефир", image: "https://s.alicdn.com/@sc04/kf/H2479055000b24661b2262d3c52fd58589.jpg_300x300.jpg" },
      { keyword: "chocolate", name: "Шоколад", image: "https://avatars.mds.yandex.net/i?id=33fd8a5cfe86b4912acc24007a37c70a_l-6917316-images-thumbs&n=13" },
      { keyword: "honey", name: "Мёд", image: "https://s.alicdn.com/@sc04/kf/Hf51b6fe9b3a24f6da568ec35b063b9825.jpg_300x300.jpg" }
    ]
  },
  
  availableSets: [
    {
      name: "Классический набор",
      items: ["black_tea", "teapot", "cups"],
      description: "Идеально для традиционного чаепития"
    },
    {
      name: "Роскошный набор", 
      items: ["puer_tea", "oolong_tea", "tea_set"],
      description: "Для ценителей восточных чайных традиций"
    },
    {
      name: "Вчерний набор",
      items: ["fruit_tea", "green_tea"],
      description: "Для приятного спокойного вечера"
    },
    {
      name: "Церемониальный набор",
      items: ["puer_tea", "tea_set", "cups"],
      description: "Для проведения чайных церемоний"
    },
    {
      name: "Вечерний набор",
      items: ["herbal_tea", "teapot"],
      description: "Для расслабляющего вечернего чаепития"
    },
    {
      name: "Дегустационный набор",
      items: ["black_tea", "green_tea", "oolong_tea"],
      description: "Для знакомства с разными видами чая"
    }
  ]
};