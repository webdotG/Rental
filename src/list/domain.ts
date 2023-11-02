import { typeItem } from "./types";

export const mockData: {
  categories: { id: number, name: string, category: string }[],
  machines: typeItem[];
} = {
  "categories": [
    {
      "id": 1,
      "name": "Бульдозеры",
      "category": "Гидромеханические SD"
    },
    {
      "id": 2,
      "name": "Погрузчики",
      "category": "Погрузчики для общестроительных работ"
    },
    {
      "id": 3,
      "name": "Экскаваторы",
      "category": "Экскаваторы гусеничные"
    },
    {
      "id": 4,
      "name": "Грейдеры",
      "category": "Дорожные катки"
    },
  ],
  "machines": [
    {
      "id": 1,
      "categoryId": 1,
      "modelName": "Гидростатический бульдозер DH10",
      "price": 1,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/9f0/v2skr7wm1ecb5e1ecmk5gq4uipfa7dqf/254_254_1/10_mini.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "9200 - 10228 "
        },
        {
          "name": "Тяговое усилие (кН)",
          "value": "155"
        },
        {
          "name": "Двигатель:",
          "value": "Weichai WP4G110E221"
        },
        {
          "name": "Полная мощность:",
          "value": "73 кВт (99 л.с.) при 2000 об/мин"
        },
        {
          "name": "Экологический стандарт",
          "value": "Tier - 2"
        }
      ]
    },
    {
      "id": 2,
      "categoryId": 1,
      "modelName": "Гидростатический бульдозер DH13",
      "price": 2,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/9f0/v2skr7wm1ecb5e1ecmk5gq4uipfa7dqf/254_254_1/10_mini.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "13400 - 14300"
        },
        {
          "name": "Тяговое усилие (кН)",
          "value": "200 - 214"
        },
        {
          "name": "Двигатель:",
          "value": "Weichai WP6G140E22 , Cummins QSB6.7"
        },
        {
          "name": "Полная мощность:",
          "value": "103 кВт (140 л.с.) при 2200 об/мин ,	116 кВт (155 л.с.)при 2000 об/мин"
        },
        {
          "name": "Экологический стандарт",
          "value": "Tier - 2 ,	Tier - 3"
        }
      ]
    },
    {
      "id": 3,
      "categoryId": 1,
      "modelName": "Гидростатический бульдозер DH16",
      "price": 3,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/a64/z4j78w9zad0zvkuo6arrn1pxjf93am10/254_254_1/16_mini.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "18400 - 20900"
        },
        {
          "name": "Тяговое усилие (кН)",
          "value": "288,8"
        },
        {
          "name": "Двигатель:",
          "value": "Weichai WD10G190E214"
        },
        {
          "name": "Полная мощность:",
          "value": "140 кВт (190 л.с.) при 1900 об/мин"
        },
        {
          "name": "Экологический стандарт",
          "value": "Tier - 2"
        }
      ]
    },
    {
      "id": 4,
      "categoryId": 1,
      "modelName": "Гидростатический бульдозер DH20B3",
      "price": 4,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/a64/z4j78w9zad0zvkuo6arrn1pxjf93am10/254_254_1/16_mini.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "17600 - 20200"
        },
        {
          "name": "Тяговое усилие (кН)",
          "value": "288 - 304"
        },
        {
          "name": "Двигатель:",
          "value": "Weichai WD10G190E214 ,	Weichai WP10G220E31"
        },
        {
          "name": "Полная мощность:",
          "value": "140 кВт (188 л.с.) при 1900 об/мин  ,	162 кВт (217 л.с.) при 1950 об/мин"
        },
        {
          "name": "Экологический стандарт",
          "value": "Tier - 2 ,	Tier - 3 "
        }
      ]
    },
    {
      "id": 5,
      "categoryId": 1,
      "modelName": "Гидростатический бульдозер DH20B3 LGP",
      "price": 5,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/f69/lrz1yn4d04bae5hqr3ph2eg9hy9r04vz/490_490_0/DH17B2_02.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "данные уточняются"
        },
        {
          "name": "Тяговое усилие (кН)",
          "value": "288 - 304"
        },
        {
          "name": "Двигатель:",
          "value": "данные уточняются"
        },
        {
          "name": "Полная мощность:",
          "value": "213 кВт (285 л.с.) при 1900 об/мин"
        },
        {
          "name": "Экологический стандарт",
          "value": "данные уточняются "
        }
      ]
    },
    {
      "id": 6,
      "categoryId": 2,
      "modelName": "Погрузчик L55B5-AGRI",
      "price": 6,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/7f1/490_490_0/L55_B5_ZJ-_34_.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "17"
        },
        {
          "name": "Объем ковша, куб.м.:",
          "value": "3.3"
        },
        {
          "name": "Двигатель:",
          "value": "Weichai STEYR WD10G220E23"
        },
        {
          "name": "Полная мощность:",
          "value": "162 кВт (2000 об./мин)"
        },
        {
          "name": "Грузоподъемность, т:",
          "value": "5"
        }
      ]
    },
    {
      "id": 7,
      "categoryId": 3,
      "modelName": "Экскаватор SE220",
      "price": 7,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/37e/244_244_0/se220.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "21.9"
        },
        {
          "name": "Объем ковша, куб.м.:",
          "value": "1.05"
        },
        {
          "name": "Двигатель:",
          "value": "Cummins B5.9-C (Tier 2)"
        },
        {
          "name": "Полная мощность:",
          "value": "112 (152) при 1950"
        }
      ]
    },
    {
      "id": 8,
      "categoryId": 3,
      "modelName": "Экскаватор SE265LC",
      "price": 8 ,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/37e/244_244_0/se220.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "24.8"
        },
        {
          "name": "Объем ковша, куб.м.:",
          "value": "1.05"
        },
        {
          "name": "Двигатель:",
          "value": "Cummins QSB7 (Tier-Ⅲ)"
        },
        {
          "name": "Полная мощность:",
          "value": "150 (204) при 2050 об/мин"
        }
      ]
    },
    {
      "id": 9,
      "categoryId": 4,
      "modelName": "Автогрейдер SG21А-3 (полный привод)",
      "price": 9,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/2bc/490_490_0/SG21A_3.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "17.1"
        },
        {
          "name": "Максимальное тяговое усилие, кН:",
          "value": "128"
        },
        {
          "name": "Двигатель:",
          "value": "Cummins 6CTAA8.3-C215"
        },
        {
          "name": "Полная мощность:",
          "value": "160 кВт при 2200 об"
        },
        {
          "name": "Ширина отвала, мм:",
          "value": "3660 мм / 3965 мм / 4270 мм"
        }
      ]
    }
  ]
}

