// data.js - данные для чайного магазина
const teas = []; // Теперь массив будет заполняться через API

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