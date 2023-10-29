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
      "category": "Экскаваторы гусеничные мини"
    },
    {
      "id": 4,
      "name": "Катки",
      "category": "Дорожные катки"
    },
    {
      "id": 5,
      "name": "Грейдеры",
      "category": "Автогрейдеры"
    }
  ],
  "machines": [
    {
      "id": 1,
      "categoryId": 1,
      "price": 10,
      "modelName": "Бульдозер SD13",
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/dc0/254_254_1/sd13.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (кг)",
          "value": "13700 - 15200"
        },
        {
          "name": "Двигатель",
          "value": "CUMMINS 6CTA8.3-C145"
        },
        {
          "name": "Экологический стандарт",
          "value": "Tier - 1"
        },
        {
          "name": "Мощность",
          "value": "95,5 кВт (130 л.с.) при 1900 об/мин"
        },
        {
          "name": "Тяговое усилие (кН)",
          "value": "212-221"
        }
      ]
    },
    {
      "id": 2,
      "categoryId": 1,
      "price": 11,
      "modelName": "Бульдозер SD16",
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/1e9/254_254_1/sd16.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (кг)",
          "value": "17000 - 18400"
        },
        {
          "name": "Двигатель",
          "value": "Weichai WD10G178E25"
        },
        {
          "name": "Экологический стандарт",
          "value": "Tier - 2"
        },
        {
          "name": "Мощность",
          "value": "120 кВт (160 л.с.) при 1850 об/мин"
        },
        {
          "name": "Тяговое усилие (кН)",
          "value": "250 - 271"
        }
      ]
    },
    {
      "id": 3,
      "categoryId": 1,
      "modelName": "Бульдозер SD17",
      "price": 12,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/7ec/naashj0vaov9yd136vqos2dc0mqc4bxn/254_254_1/SD17B3_0-_.png",
      "fields": [
        {
          "name": "Эксплуатационная масса (кг)",
          "value": "17200 - 20830"
        },
        {
          "name": "Двигатель",
          "value": "WEICHAI WD10G190E214, WEICHAI WP10G190E354"
        },
        {
          "name": "Экологический стандарт",
          "value": "Tier - 2, Tier - 3"
        },
        {
          "name": "Мощность",
          "value": "140 кВт (188 л.с.) при 1900 об/мин"
        },
        {
          "name": "Тяговое усилие (кН)",
          "value": "257"
        }
      ]
    },
    {
      "id": 4,
      "price": 13,
      "categoryId": 1,
      "modelName": "Бульдозер SD20",
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/100/254_254_1/sd20.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (кг)",
          "value": "21000 - 23000"
        },
        {
          "name": "Двигатель",
          "value": "Weichai WD12G245E203, Weichai WP12G220E304"
        },
        {
          "name": "Экологический стандарт",
          "value": "Tier - 2, Tier - 3"
        },
        {
          "name": "Мощность",
          "value": "180 кВт (244 л.с.) при 2000 об/мин, 162 кВт (220 л.с.) при 1950 об/мин"
        },
        {
          "name": "Тяговое усилие (кН)",
          "value": "308-338"
        }
      ]
    },
    {
      "id": 5,
      "categoryId": 2,
      "modelName": "Фронтальный погрузчик L39-B3",
      "price": 21,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/442/244_244_0/L39_B3.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "10,8"
        },
        {
          "name": "Объем ковша, куб.м.",
          "value": "1,8"
        },
        {
          "name": "рузоподъемность, т",
          "value": "3"
        },
        {
          "name": "Двигатель:",
          "value": "WP6"
        },
        {
          "name": "Полная мощность:",
          "value": "92/2000"
        }
      ]
    },
    {
      "id": 6,
      "categoryId": 2,
      "price": 22,
      "modelName": "Фронтальный погрузчик L36-B3",
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/450/u4kc3wqgi8emru0vzq80kiarffs99lje/244_244_0/A24A5988.JPG",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "10,5"
        },
        {
          "name": "Объем ковша, куб.м.",
          "value": "1,7"
        },
        {
          "name": "рузоподъемность, т",
          "value": "3"
        },
        {
          "name": "Двигатель:",
          "value": "WP6G125E201"
        },
        {
          "name": "Полная мощность:",
          "value": "92кВт (125л.с.) при 2000об/мин"
        }
      ]
    },
    {
      "id": 7,
      "categoryId": 2,
      "modelName": "Фронтальный погрузчик SL50WN",
      "price": 23,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/50f/244_244_0/SL50WN.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "17,1"
        },
        {
          "name": "Объем ковша, куб.м.",
          "value": "3"
        },
        {
          "name": "рузоподъемность, т",
          "value": "5"
        },
        {
          "name": "Двигатель:",
          "value": "Weichai STEYR WD10G220E23"
        },
        {
          "name": "Полная мощность:",
          "value": "162кВт/2000 об./мин"
        }
      ]
    },
    {
      "id": 8,
      "categoryId": 2,
      "price": 24,
      "modelName": "Фронтальный погрузчик L58K-B5",
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/801/qbk807703vx94ew94q243giaekgci248/244_244_0/L58K_B5.png",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "18,4"
        },
        {
          "name": "Объем ковша, куб.м.",
          "value": "3,5"
        },
        {
          "name": "рузоподъемность, т",
          "value": "5,5"
        },
        {
          "name": "Двигатель:",
          "value": "Weichai STEYR WD10G220E23"
        },
        {
          "name": "Полная мощность:",
          "value": "162 кВт/200 л.с. (при 2000 об./мин)"
        }
      ]
    },
    {
      "id": 9,
      "categoryId": 3,
      "price": 31,
      "modelName": "Экскаватор SE17SR",
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/2cf/3nispkkf0tam5e2keqgoj5edxpguif8p/244_244_0/Shantui_Se17sr_Brand_New_CE_Certificate_Powerful_Hydraulic_Crawler_Excavator_1_7_2_Ton_Mini_Backhole_11_8kw_Digger_Machine_with_0_04m3_Capacity_Factory_Price.webp",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "1.8"
        },
        {
          "name": "Объем ковша, куб.м.",
          "value": "0.04"
        },
        {
          "name": "Двигатель:",
          "value": "Kubota D902"
        },
        {
          "name": "Полная мощность:",
          "value": "11,8кВт (16л.с.)/2300об/мин"
        }
      ]
    },
    {
      "id": 10,
      "categoryId": 3,
      "price": 32,
      "modelName": "Экскаватор SE36SR",
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/2cf/3nispkkf0tam5e2keqgoj5edxpguif8p/244_244_0/Shantui_Se17sr_Brand_New_CE_Certificate_Powerful_Hydraulic_Crawler_Excavator_1_7_2_Ton_Mini_Backhole_11_8kw_Digger_Machine_with_0_04m3_Capacity_Factory_Price.webp",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "3.8"
        },
        {
          "name": "Объем ковша, куб.м.",
          "value": "0.12"
        },
        {
          "name": "Двигатель:",
          "value": "YANMAR 3TNV88F"
        },
        {
          "name": "Полная мощность:",
          "value": "24.41hp(18.2kW/2200rpm)"
        }
      ]
    },
    {
      "id": 11,
      "categoryId": 3,
      "price": 33,
      "modelName": "Экскаватор SE60",
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/94b/244_244_0/se60.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "5.960"
        },
        {
          "name": "Объем ковша, куб.м.",
          "value": "0.18~0.22(0.22)"
        },
        {
          "name": "Двигатель:",
          "value": "Kubota V2607T (Tier-Ⅲ )"
        },
        {
          "name": "Полная мощность:",
          "value": "36/2000"
        }
      ]
    },
    {
      "id": 12,
      "categoryId": 3,
      "price": 34,
      "modelName": "Экскаватор SE60W",
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/c43/adsaspe9pe9dnr2floyvb3qj5ripsvbc/244_244_0/SE60-_5_.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "5.96"
        },
        {
          "name": "Объем ковша, куб.м.",
          "value": "0.22"
        },
        {
          "name": "Двигатель:",
          "value": "Weichai WP3.2"
        },
        {
          "name": "Полная мощность:",
          "value": "36.8кВт (50л.с.)/2200 об/мин"
        }
      ]
    },
    {
      "id": 13,
      "categoryId": 4,
      "modelName": "Грунтовый каток SR26M C5",
      "price": 41,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/4b1/9jte9my9nrcz64moa1hzca3sj3mn3f9j/244_244_0/SR26M_C5_02.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "26"
        },
        {
          "name": "Рабочая ширина (ширина вальца), мм:",
          "value": "2170"
        },
        {
          "name": "Двигатель:",
          "value": "Weichai WP6G190E331"
        },
        {
          "name": "Полная мощность:",
          "value": "140 кВт при 1800 об."
        }
      ]
    },
    {
      "id": 14,
      "categoryId": 4,
      "price": 42,
      "modelName": "Грунтовый каток SR22MPA",
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/b7f/hcftz4ysr0kbx07e732qy4wbo511lidq/244_244_0/SR22MPA-_1_-_.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "22.665"
        },
        {
          "name": "Рабочая ширина (ширина вальца), мм:",
          "value": "2140"
        },
        {
          "name": "Двигатель:",
          "value": "Shangchai SC8D185.2G2B1"
        },
        {
          "name": "Полная мощность:",
          "value": "136 кВт при 1800 об."
        }
      ]
    },
    {
      "id": 15,
      "categoryId": 4,
      "price": 43,
      "modelName": "Грунтовый каток SR16MPA",
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/72d/f5rc1ieusl1bxlti9yr17k3uo93yjis7/244_244_0/sr16ma.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "16.7"
        },
        {
          "name": "Рабочая ширина (ширина вальца), мм:",
          "value": "2130"
        },
        {
          "name": "Двигатель:",
          "value": "Weichai WP6G160E201"
        },
        {
          "name": "Полная мощность:",
          "value": "118 кВт при 2000 об."
        }
      ]
    },
    {
      "id": 16,
      "categoryId": 4,
      "modelName": "Грунтовый каток SR12MA",
      "price": 44,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/5fb/244_244_0/sr12ma.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "12"
        },
        {
          "name": "Рабочая ширина (ширина вальца), мм:",
          "value": "1980"
        },
        {
          "name": "Двигатель:",
          "value": "Weichai WP4G110E221"
        },
        {
          "name": "Полная мощность:",
          "value": " 460 Н.м при 1400-1600 об."
        }
      ]
    },
    {
      "id": 17,
      "categoryId": 1,
      "modelName": "Гидростатический бульдозер DH10",
      "price": 51,
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
      "id": 18,
      "categoryId": 1,
      "modelName": "Гидростатический бульдозер DH13",
      "price": 52,
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
      "id": 19,
      "categoryId": 1,
      "modelName": "Гидростатический бульдозер DH16",
      "price": 53,
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
      "id": 20,
      "categoryId": 1,
      "modelName": "Гидростатический бульдозер DH20B3",
      "price": 54,
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
      "id": 21,
      "categoryId": 1,
      "modelName": "Гидростатический бульдозер DH26C3 LGP",
      "price": 55,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/6c6/wmeyyupesa8t85th8jitoiz5ml3r1t1i/244_244_0/DH26C2_02.jpg",
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
      "id": 22,
      "categoryId": 2,
      "modelName": "Сельскохозяйственный погрузчик L55B5-AGRI",
      "price": 56,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/321/244_244_0/L55_B5.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "17"
        },
        {
          "name": "бъем ковша, куб.м.:",
          "value": "3.3"
        },
        {
          "name": "Двигатель:",
          "value": "	Weichai STEYR WD10G220E23"
        },
        {
          "name": "Полная мощность:",
          "value": "162 кВт (2000 об./мин)"
        },
        {
          "name": "Грузоподъемность, т:",
          "value": "	5"
        }
      ]
    },
    {
      "id": 23,
      "categoryId": 3,
      "modelName": "Экскаватор SE265LC",
      "price": 57,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/37e/244_244_0/se220.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": " 24.8"
        },
        {
          "name": "бъем ковша, куб.м.:",
          "value": "1.05"
        },
        {
          "name": "Двигатель:",
          "value": " Cummins QSB7 (Tier-Ⅲ)"
        },
        {
          "name": "Полная мощность:",
          "value": "150 (204) при 2050 об/мин"
        }
      ]
    },
    {
      "id": 24,
      "categoryId": 3,
      "modelName": "Экскаватор SE220",
      "price": 58,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/37e/244_244_0/se220.jpg",
      "fields": [
        {
          "name": "Эксплуатационная масса (т)",
          "value": "21.9"
        },
        {
          "name": "бъем ковша, куб.м.:",
          "value": "1.05"
        },
        {
          "name": "Двигатель:",
          "value": " Cummins B5.9-C (Tier 2)"
        },
        {
          "name": "Полная мощность:",
          "value": "112 (152) при 1950"
        }
      ]
    },
    {
      "id": 25,
      "categoryId": 5,
      "modelName": "Автогрейдер SG21А-3 (полный привод)",
      "price": 59,
      "imageUrl": "https://shantui-sit.ru/upload/resize_cache/iblock/b38/244_244_0/SG21A_3.jpg",
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
          "value": "	3660 мм / 3965 мм / 4270 мм"
        }
      ]
    }
  ]
  
}

