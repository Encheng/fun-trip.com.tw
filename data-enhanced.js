const tripData = {
    overview: {
        carbonEmission: "2781.61",
        attractions: 70,
        distance: "22981.98"
    },
    souvenirs: {
        categories: ["全部", "經典甜點", "牛舌・鹹食", "零食・下酒菜", "水果・生鮮", "漬物・醬料"],
        locations: ["全部", "仙台", "山形"],
        items: [
            // 仙台 - 經典甜點
            {
                name: "萩の月",
                nameEn: "Hagi no Tsuki",
                category: "經典甜點",
                location: "仙台",
                description: "仙台最具代表性銘菓，蛋糕體鬆軟＋卡士達內餡，冷藏更好吃",
                price: "6入 ¥1,500",
                where: "S-PAL仙台 菓匠三全",
                shop: "菓匠三全",
                tips: ["仙台銘菓代表", "冷藏口感更佳", "賞味期限約7-10天"],
                bestFor: "送禮首選",
                rating: 5
            },
            {
                name: "喜久福",
                nameEn: "Kikufuku",
                category: "經典甜點",
                location: "仙台",
                description: "抹茶、生奶油、毛豆泥、焙茶四種口味大福，半解凍吃最棒",
                price: "4種8入 ¥1,150",
                where: "S-PAL仙台 喜久水庵",
                shop: "喜久水庵",
                tips: ["四種口味", "半解凍最好吃", "需冷藏保存"],
                bestFor: "甜點控必買",
                rating: 5
            },
            {
                name: "仙台名物ずんだ餅",
                nameEn: "Zunda Mochi",
                category: "經典甜點",
                location: "仙台",
                description: "將毛豆餡包在麻糬裡的大福型態，個包裝方便分送",
                price: "8入 ¥1,080",
                where: "S-PAL仙台 ずんだ茶寮",
                shop: "ずんだ茶寮",
                tips: ["毛豆風味獨特", "個別包裝", "常溫可保存"],
                bestFor: "同事伴手禮",
                rating: 4
            },
            {
                name: "支倉焼",
                nameEn: "Hasekura Yaki",
                category: "經典甜點",
                location: "仙台",
                description: "在地人私推的仙台銘菓，核桃和栗子餡料",
                price: "依包裝",
                where: "S-PAL仙台",
                shop: "支倉焼",
                tips: ["在地人推薦", "核桃栗子香", "適合配茶"],
                bestFor: "識貨之選",
                rating: 4
            },

            // 仙台 - 牛舌・鹹食
            {
                name: "笹かまぼこ（竹葉魚板）",
                nameEn: "Sasa Kamaboko",
                category: "牛舌・鹹食",
                location: "仙台",
                description: "近百年老店，「笹小舟」口感Q彈，起司麻糬球超人氣",
                price: "依包裝",
                where: "S-PAL仙台 阿部蒲鉾店",
                shop: "阿部蒲鉾店",
                tips: ["百年老店", "可現場試吃", "真空包裝"],
                bestFor: "鹹食愛好者",
                rating: 5
            },
            {
                name: "牛舌辣油",
                nameEn: "Gyutan Rayu",
                category: "牛舌・鹹食",
                location: "仙台",
                description: "整瓶九成都是牛舌肉，拌飯拌麵都超香",
                price: "依包裝",
                where: "S-PAL仙台 陣中",
                shop: "陣中",
                tips: ["牛舌肉超多", "萬用調味料", "拌飯拌麵皆宜"],
                bestFor: "美食饕客",
                rating: 5
            },
            {
                name: "牛舌禮盒",
                nameEn: "Gyutan Gift Set",
                category: "牛舌・鹹食",
                location: "仙台",
                description: "方便帶回家自己煎的真空包",
                price: "依包裝",
                where: "S-PAL仙台 味の牛たん喜助",
                shop: "味の牛たん喜助",
                tips: ["真空包裝", "回家可自己煎", "保存期限長"],
                bestFor: "重度牛舌控",
                rating: 4
            },

            // 仙台 - 零食
            {
                name: "仙台ここち きよせ",
                nameEn: "Sendai Kokochi Kiyose",
                category: "零食・下酒菜",
                location: "仙台",
                description: "9個裝駄菓子小盒裝，造型可愛",
                price: "¥750",
                where: "S-PAL仙台 日立家",
                shop: "日立家",
                tips: ["可愛包裝", "份量適中", "傳統駄菓子"],
                bestFor: "小朋友喜歡",
                rating: 3
            },
            {
                name: "KitKat 毛豆泥奶昔口味",
                nameEn: "KitKat Zunda Shake",
                category: "零食・下酒菜",
                location: "仙台",
                description: "東北限定口味",
                price: "¥400-600",
                where: "仙台站、便利商店",
                shop: "便利商店",
                tips: ["東北限定", "輕便好帶", "獨特口味"],
                bestFor: "巧克力愛好者",
                rating: 4
            },

            // 山形 - 經典甜點
            {
                name: "ほわいとぱりろーる",
                nameEn: "White Pari Roll",
                category: "經典甜點",
                location: "山形",
                description: "純白蛋糕體＋100%山形縣產生奶油，累計銷售超過50萬本，曾上電視節目",
                price: "依包裝",
                where: "S-PAL山形 清川屋",
                shop: "清川屋",
                tips: ["電視節目推薦", "銷售破50萬", "100%縣產奶油"],
                bestFor: "山形代表",
                rating: 5
            },
            {
                name: "やまがたクーヘン",
                nameEn: "Yamagata Kuchen",
                category: "經典甜點",
                location: "山形",
                description: "櫻桃＋洋梨雙口味年輪蛋糕",
                price: "依包裝",
                where: "S-PAL山形 清川屋",
                shop: "清川屋",
                tips: ["雙口味組合", "山形特產水果", "年輪蛋糕"],
                bestFor: "水果控",
                rating: 4
            },
            {
                name: "山形さくらんぼマドレーヌ",
                nameEn: "Yamagata Cherry Madeleine",
                category: "經典甜點",
                location: "山形",
                description: "清川屋限定，櫻桃風味瑪德蓮",
                price: "依包裝",
                where: "S-PAL山形 清川屋",
                shop: "清川屋",
                tips: ["清川屋限定", "櫻桃風味", "西式點心"],
                bestFor: "限定商品",
                rating: 4
            },
            {
                name: "山形旬香菓（果凍）",
                nameEn: "Yamagata Shunkako",
                category: "經典甜點",
                location: "山形",
                description: "山形產洋梨、櫻桃、白桃果肉，像彩色寶石盒",
                price: "依包裝",
                where: "S-PAL山形 杵屋本店",
                shop: "杵屋本店",
                tips: ["真實果肉", "外觀精美", "適合送禮"],
                bestFor: "視覺系伴手禮",
                rating: 5
            },
            {
                name: "kaju 琥珀糖",
                nameEn: "Kaju Kohakuto",
                category: "經典甜點",
                location: "山形",
                description: "食べる宝石（可以吃的寶石），IG超紅",
                price: "依包裝",
                where: "S-PAL山形 杵屋本店",
                shop: "杵屋本店",
                tips: ["IG打卡熱門", "寶石外觀", "晶瑩剔透"],
                bestFor: "網美必買",
                rating: 5
            },
            {
                name: "古鏡",
                nameEn: "Kokyo",
                category: "經典甜點",
                location: "山形",
                description: "JAF會員票選山形第1名！粒餡＋求肥的和菓子，創業130年以上",
                price: "約 ¥150/個",
                where: "木村屋",
                shop: "木村屋",
                tips: ["票選第1名", "創業130年", "傳統和菓子"],
                bestFor: "和菓子愛好者",
                rating: 5
            },
            {
                name: "蔵王銘菓 樹氷ロマン",
                nameEn: "Zao Juhyo Roman",
                category: "經典甜點",
                location: "山形",
                description: "歐風焼菓子夾白巧克力奶油，個包裝方便分送",
                price: "16枚入約 ¥800",
                where: "山形各土產店",
                shop: "蔵王銘菓",
                tips: ["個別包裝", "白巧克力", "方便分送"],
                bestFor: "辦公室伴手禮",
                rating: 4
            },
            {
                name: "おしどりミルクケーキ",
                nameEn: "Oshidori Milk Cake",
                category: "經典甜點",
                location: "山形",
                description: "山形經典，奶香濃郁，多種口味（葡萄、櫻桃、抹茶等）",
                price: "10種組合約 ¥800",
                where: "山形各土產店",
                shop: "日本製乳",
                tips: ["山形經典", "多種口味", "奶香濃郁"],
                bestFor: "復古零食",
                rating: 4
            },

            // 山形 - 零食・下酒菜
            {
                name: "だだっ子豆",
                nameEn: "Dadacko Mame",
                category: "零食・下酒菜",
                location: "山形",
                description: "毛豆凍乾零食，下酒超棒",
                price: "依包裝",
                where: "S-PAL山形 清川屋",
                shop: "清川屋",
                tips: ["毛豆凍乾", "下酒良伴", "酥脆口感"],
                bestFor: "下酒零食",
                rating: 4
            },
            {
                name: "オランダせんべい",
                nameEn: "Oranda Senbei",
                category: "零食・下酒菜",
                location: "山形",
                description: "山形縣民幾乎無人不知的銘菓，3mm極薄米餅，酥脆涮嘴",
                price: "約 ¥300/袋",
                where: "山形各土產店",
                shop: "酒田米菓",
                tips: ["縣民最愛", "極薄酥脆", "涮嘴零食"],
                bestFor: "在地體驗",
                rating: 4
            },

            // 山形 - 漬物・醬料
            {
                name: "晩菊本舗漬物系列",
                nameEn: "Bangiku Tsukemono",
                category: "漬物・醬料",
                location: "山形",
                description: "山形名產漬物：晩菊、おみ漬、青葉漬、赤かぶ漬、だし、元祖南蛮味噌",
                price: "依包裝",
                where: "S-PAL山形 晩菊本舗三奥屋",
                shop: "晩菊本舗三奥屋",
                tips: ["多種選擇", "配飯一流", "傳統醃漬"],
                bestFor: "下飯聖品",
                rating: 4
            },

            // 山形 - 水果
            {
                name: "ラ・フランス（洋梨）",
                nameEn: "La France Pear",
                category: "水果・生鮮",
                location: "山形",
                description: "山形收穫量全國第一，被稱為「果物の女王」，芳香濃郁、口感滑順如奶油",
                price: "依重量",
                where: "超市、S-PAL山形",
                shop: "各超市",
                tips: ["收穫量第一", "需要追熟", "請店家挑選適合成熟度"],
                bestFor: "水果愛好者",
                rating: 5
            },
            {
                name: "サンふじ蘋果",
                nameEn: "San Fuji Apple",
                category: "水果・生鮮",
                location: "山形",
                description: "山形朝日町發祥的「無袋ふじ」，蜜入超多，甜又脆。有人說是日本第一好吃的蘋果",
                price: "依重量",
                where: "超市、S-PAL山形",
                shop: "各超市",
                tips: ["蜜入超多", "甜度超高", "超市買較便宜"],
                bestFor: "蘋果愛好者",
                rating: 5
            }
        ]
    },
    weather: {
        sendai: {
            avgTemp: "4.5°C",
            lowTemp: "0°C",
            precipitation: "44.1mm",
            description: "寒冷，偶有降雪",
            clothing: "厚外套、羽絨衣、毛帽、手套、圍巾"
        },
        yamagata: {
            avgTemp: "2.4°C",
            lowTemp: "-5°C",
            precipitation: "97.2mm",
            description: "嚴冬，市區可能下雪",
            clothing: "厚重羽絨衣、保暖內衣、防滑雪靴、毛帽、手套"
        }
    },
    days: {
        1: [
            {
                time: "08:00",
                title: "永和家",
                location: "新北市永和區",
                details: ["出發前往桃園機場"],
                duration: "5分",
                transport: "機場接送 (約1小時)",
                weather: { temp: "18-22°C", condition: "多雲" }
            },
            {
                time: "09:00",
                title: "桃園機場第一航廈",
                location: "桃園國際機場第一航廈",
                details: ["辦理登機手續", "飛行時間: 3小時10分"],
                duration: "3小時48分",
                flightInfo: {
                    airline: "星宇航空 STARLUX Airlines",
                    flightNumber: "JX0862",
                    departure: "11:50",
                    arrival: "16:00",
                    terminal: "第一航廈",
                    aircraft: "A330-900neo"
                },
                transport: "飛行 3小時10分",
                businessHours: "24小時開放",
                tips: ["提前2小時到達機場", "確認行李重量", "準備護照和電子機票"],
                weather: { temp: "18-22°C", condition: "多雲" }
            },
            {
                time: "16:00",
                title: "仙台機場",
                location: "仙台空港",
                details: ["入境/領行李"],
                duration: "40分",
                transport: "仙台機場聯通捷運線 (40分, ¥660)",
                businessHours: "06:30-22:00",
                tips: ["入境需填寫入境卡", "可在機場兌換日幣", "購買交通IC卡"],
                weather: { temp: "2-5°C", condition: "晴天" }
            },
            {
                time: "18:00",
                title: "Hotel Vista Sendai",
                location: "ホテルビスタ仙台",
                details: ["Check-in", "仙台駅東側Yodobashi對面"],
                duration: "30分",
                transport: "步行 (5分)",
                businessHours: "Check-in 15:00, Check-out 11:00",
                tips: ["攜帶護照辦理入住", "可免費使用大浴場"],
                weather: { temp: "2-5°C", condition: "晴天" }
            },
            {
                time: "18:30",
                title: "晚餐 - 善治郎牛舌",
                location: "善治郎 仙台站牛舌通",
                details: ["仙台站牛舌通", "費用: 約¥2000/人"],
                duration: "60分",
                transport: "步行 (5分)",
                businessHours: "11:00-22:00 (最後點餐 21:30)",
                tips: ["用餐尖峰時段需排隊", "推薦牛舌定食", "可使用信用卡"],
                weather: { temp: "2-5°C", condition: "晴天" }
            },
            {
                time: "20:30",
                title: "回飯店",
                location: "Hotel Vista Sendai",
                details: ["步行返回"],
                duration: "休息",
                weather: { temp: "0-2°C", condition: "晴天" }
            }
        ],
        2: [
            {
                time: "08:50",
                title: "從飯店出發",
                location: "Hotel Vista Sendai",
                details: ["前往仙台車站吃早餐"],
                duration: "10分",
                transport: "步行 (5分)",
                weather: { temp: "1-6°C", condition: "晴時多雲" }
            },
            {
                time: "09:00",
                title: "Date Cafe O'rder 早餐",
                location: "伊達のいろり焼 Date Cafe O'rder 仙台車站",
                details: ["仙台車站2F", "推薦: 茶泡飯 or 飯糰"],
                duration: "60分",
                transport: "Loople仙台觀光巴士 (13分至瑞鳳殿)",
                businessHours: "07:00-22:00",
                tips: ["推薦宮城米飯糰", "座位不多建議早點到"],
                weather: { temp: "1-6°C", condition: "晴時多雲" }
            },
            {
                time: "10:30",
                title: "瑞鳳殿",
                location: "瑞鳳殿",
                details: ["伊達政宗陵墓", "門票: ¥570/人(含資料館)", "賞楓名所"],
                duration: "60分",
                transport: "Loople仙台觀光巴士 (21分至鹿落堂, 一日券¥630)",
                businessHours: "09:00-16:30 (最後入場16:00) 12/1起16:00關門",
                tips: ["一日券可在多個景點使用", "有階梯需爬坡", "12月可能有積雪"],
                weather: { temp: "1-6°C", condition: "晴時多雲" }
            },
            {
                time: "12:00",
                title: "鹿落堂 午餐",
                location: "鹿落堂 仙台",
                details: ["蕎麥麵專賣店", "費用: ¥1900-2100/人"],
                duration: "60分",
                transport: "Loople仙台觀光巴士 (21分)",
                businessHours: "11:00-15:00, 17:00-20:00 (週一休)",
                tips: ["使用當地山菜", "僅收現金", "午餐時段人多"],
                weather: { temp: "2-6°C", condition: "晴時多雲" }
            },
            {
                time: "13:30",
                title: "仙台城跡",
                location: "仙台城跡（青葉城址）",
                details: ["伊達政宗騎馬像", "可眺望仙台市景"],
                duration: "150分",
                transport: "Loople仙台觀光巴士 (25分)",
                businessHours: "24小時開放 (青葉城資料展示館 09:00-17:00)",
                tips: ["風大注意保暖", "拍照熱點", "有免費展望台"],
                weather: { temp: "2-6°C", condition: "晴時多雲" },
            },
            {
                time: "16:00",
                title: "大崎八幡宮",
                location: "大崎八幡宮",
                details: ["國寶級神社", "出示一日券可領明信片"],
                duration: "60分",
                transport: "Loople仙台觀光巴士 (12分)",
                businessHours: "09:00-17:00",
                tips: ["國寶建築", "可購買御守", "參拜免費"],
                weather: { temp: "1-5°C", condition: "陰天" }
            },
            {
                time: "17:00",
                title: "定禪寺通",
                location: "定禅寺通",
                details: ["光之樂章點燈活動 (SENDAI光之樂章)"],
                duration: "30分",
                businessHours: "點燈時間 17:30-23:00 (12/6-12/28)",
                tips: ["60萬顆LED燈飾", "拍照絕佳地點", "注意保暖"],
                weather: { temp: "0-4°C", condition: "陰天" },
            },
            {
                time: "17:30",
                title: "旨味太助 晚餐",
                location: "旨味 太助 本店",
                details: ["創始牛舌店 & 蒲燒鰻魚飯", "費用: ¥3000/人"],
                duration: "90分",
                transport: "步行 (6分)",
                businessHours: "11:30-14:00, 17:00-22:00 (週二休)",
                tips: ["元祖牛舌店", "需排隊", "僅收現金"],
                weather: { temp: "0-3°C", condition: "晴天" }
            },
            {
                time: "19:30",
                title: "仙台站購物",
                location: "仙台車站周邊",
                details: ["超市/GU.UQ", "Lopia買水果 (21:00打烊，僅現金)"],
                duration: "90分",
                transport: "步行 (6分)",
                businessHours: "各店營業時間不同",
                tips: ["Lopia超市價格實惠", "可購買明日早餐", "GU營業至21:00"],
                weather: { temp: "0-3°C", condition: "晴天" }
            },
            {
                time: "21:00",
                title: "回飯店",
                location: "Hotel Vista Sendai",
                details: ["步行返回飯店休息"],
                duration: "休息",
                transport: "步行 (5分)",
                weather: { temp: "0-2°C", condition: "晴天" }
            }
        ],
        3: [
            {
                time: "09:30",
                title: "飯店早餐",
                location: "Hotel Vista Sendai",
                details: ["享用飯店早餐"],
                duration: "30分",
                transport: "步行 (2分，前往仙台站)",
                weather: { temp: "1-7°C", condition: "晴天" }
            },
            {
                time: "10:00",
                title: "前往松島",
                location: "JR松島海岸站",
                details: ["搭乘JR仙石線"],
                duration: "40分",
                transport: "步行至松島魚市場 (3分)",
                tips: ["購買往返車票", "可使用Suica/PASMO"],
                weather: { temp: "2-7°C", condition: "晴天" }
            },
            {
                time: "11:00",
                title: "漁師の海鮮丼 午餐",
                location: "松島さかな市場 焼がきハウス",
                details: ["推薦牡蠣名店", "營業時間: 11:00-15:00", "費用: ¥2200/人"],
                duration: "60分",
                businessHours: "11:00-15:00 (售完為止)",
                tips: ["建議提早到避免排隊", "僅收現金", "推薦焼き牡蠣"],
                weather: { temp: "2-7°C", condition: "晴天" }
            },
            {
                time: "12:00",
                title: "瑞巖寺・五大堂・円通院",
                location: "松島 瑞巌寺",
                details: ["円通院門票: ¥500/人", "瑞巖寺: ¥700/人"],
                duration: "90分",
                transport: "步行 (5分至遊船碼頭)",
                businessHours: "瑞巖寺 08:00-17:00, 円通院 08:30-17:00",
                tips: ["可購買共通券", "紅葉季節美景", "五大堂免費參觀"],
                weather: { temp: "2-7°C", condition: "晴天" }
            },
            {
                time: "14:00",
                title: "松島周遊遊船",
                location: "松島灣遊覽船",
                details: ["KKDAY預訂 NT$1044", "遊船時間: 50分"],
                duration: "50分",
                transport: "步行 (5分至魚市場)",
                businessHours: "09:00-16:00 (每小時一班)",
                tips: ["提前出示KKDAY憑證", "戶外甲板較冷", "可餵海鷗"],
                weather: { temp: "3-7°C", condition: "晴天" }
            },
            {
                time: "15:00",
                title: "松島魚市場",
                location: "松島魚市場",
                details: ["自由逛街購物", "可購買海鮮伴手禮"],
                duration: "60分",
                transport: "步行 (5分至松島海岸站)",
                businessHours: "08:00-17:00",
                tips: ["新鮮海產品", "可試吃", "部分店家僅收現金"],
                weather: { temp: "3-7°C", condition: "晴天" }
            },
            {
                time: "16:00",
                title: "返回仙台",
                location: "JR仙台站",
                details: ["搭乘JR仙石線返回"],
                duration: "40分",
                transport: "步行 (5分至丸龜製麵)",
                weather: { temp: "2-5°C", condition: "晴天" }
            },
            {
                time: "18:00",
                title: "丸龜製麵 晚餐",
                location: "丸龜製麵 仙台站前店",
                details: ["費用: ¥1000/人"],
                duration: "60分",
                transport: "步行 (3分至仙台站東口)",
                businessHours: "11:00-23:00",
                tips: ["快速用餐選擇", "自助式", "可使用信用卡"],
                weather: { temp: "1-4°C", condition: "晴天" }
            },
            {
                time: "19:00",
                title: "仙台東口逛街",
                location: "仙台站東口",
                details: ["GU/UQ購物"],
                duration: "90分",
                transport: "步行 (5分)",
                businessHours: "10:00-21:00",
                weather: { temp: "0-3°C", condition: "晴天" }
            },
            {
                time: "20:30",
                title: "回飯店",
                location: "Hotel Vista Sendai",
                details: ["步行返回飯店休息"],
                duration: "休息",
                weather: { temp: "0-2°C", condition: "晴天" }
            }
        ],
        4: [
            {
                time: "08:15",
                title: "從飯店出發",
                location: "Hotel Vista Sendai",
                details: ["前往仙台車站東口集合"],
                duration: "15分",
                transport: "步行 (5分)",
                weather: { temp: "-2-3°C", condition: "多雲" }
            },
            {
                time: "08:30",
                title: "藏王狐狸村一日遊",
                location: "仙台車站東口觀光巴士集合處",
                details: ["集合地點: 仙台車站東口", "預訂: Klook一日遊", "注意: 8:45準時發車"],
                duration: "全日行程",
                transport: "觀光巴士 (90分至狐狸村)",
                tips: ["提前15分鐘到達", "攜帶Klook預約憑證", "穿著防滑鞋"],
                weather: { temp: "-2-3°C", condition: "多雲" }
            },
            {
                time: "10:00",
                title: "藏王狐狸村",
                location: "宮城蔵王キツネ村",
                details: ["可近距離接觸狐狸", "約100隻狐狸"],
                duration: "80分",
                transport: "觀光巴士 (含午餐時間, 至銀山溫泉)",
                businessHours: "09:00-17:00 (冬季至16:00)",
                tips: ["不要餵食自己的食物", "注意保暖", "可購買飼料餵狐狸¥100"],
                weather: { temp: "-3-1°C", condition: "可能降雪" }
            },
            {
                time: "12:15",
                title: "午餐",
                location: "行程包含餐廳",
                details: ["Klook含午餐"],
                duration: "45分",
                transport: "觀光巴士 (至銀山溫泉)",
                weather: { temp: "-2-2°C", condition: "陰天" }
            },
            {
                time: "15:15",
                title: "銀山溫泉",
                location: "銀山温泉",
                details: ["大正浪漫風情溫泉街", "必吃: 咖哩麵包"],
                duration: "60分",
                transport: "觀光巴士 (返回仙台, 約3小時)",
                businessHours: "溫泉街全天開放，商店約10:00-17:00",
                tips: ["拍照聖地", "可能下雪", "咖哩麵包在野川豆腐店"],
                weather: { temp: "-5-0°C", condition: "可能降雪" }
            },
            {
                time: "18:45",
                title: "返回仙台",
                location: "仙台車站",
                details: ["巴士返回"],
                duration: "15分",
                transport: "步行 (3分至一蘭拉麵)",
                weather: { temp: "0-2°C", condition: "晴天" }
            },
            {
                time: "19:00",
                title: "一蘭拉麵 晚餐",
                location: "一蘭 仙台駅前店",
                details: ["JR仙台站西口", "費用: ¥1400/人"],
                duration: "60分",
                transport: "步行 (5分)",
                businessHours: "24小時營業",
                tips: ["單人座位", "可客製化口味", "使用食券機"],
                weather: { temp: "0-2°C", condition: "晴天" }
            },
            {
                time: "20:00",
                title: "回飯店",
                location: "Hotel Vista Sendai",
                details: ["步行返回飯店休息"],
                duration: "休息",
                weather: { temp: "0-1°C", condition: "晴天" }
            }
        ],
        5: [
            {
                time: "09:00",
                title: "Hotel Vista Sendai Check out",
                location: "Hotel Vista Sendai",
                details: ["退房並寄放行李"],
                duration: "30分",
                transport: "步行 (2分至麥當勞)",
                weather: { temp: "1-5°C", condition: "晴天" }
            },
            {
                time: "09:30",
                title: "麥當勞 早餐",
                location: "麥當勞 仙台站東口店",
                details: ["費用: ¥700/人"],
                duration: "30分",
                transport: "步行 (5分至西口巴士站)",
                businessHours: "05:00-23:00",
                weather: { temp: "1-5°C", condition: "晴天" }
            },
            {
                time: "10:10",
                title: "前往山形",
                location: "仙台站西口22號月台",
                details: ["位置: 仙台站西口22號月台", "注意: 自行開關行李箱門"],
                transport: "山交巴士 (70分, ¥1100/人)",
                tips: ["提前10分鐘到月台", "可使用IC卡", "車程約70分鐘"],
                weather: { temp: "1-5°C", condition: "晴天" }
            },
            {
                time: "11:17",
                title: "抵達山形駅",
                location: "山形站",
                details: ["抵達山形"],
                weather: { temp: "-1-3°C", condition: "陰天" }
            },
            {
                time: "11:30",
                title: "JR東日本大都會大飯店 山形",
                location: "JR東日本ホテルメッツ山形",
                details: ["寄放行李"],
                duration: "15分",
                transport: "步行 (2分返回山形站)",
                businessHours: "Check-in 15:00",
                tips: ["車站直結", "行李可免費寄放"],
                weather: { temp: "-1-3°C", condition: "陰天" }
            },
            {
                time: "12:00",
                title: "前往山寺",
                location: "JR山寺站",
                details: ["搭乘JR仙山線"],
                duration: "22分",
                transport: "步行 (3分至焔藏)",
                weather: { temp: "-2-2°C", condition: "陰天" }
            },
            {
                time: "12:30",
                title: "焔藏蕎麥麵 午餐",
                location: "焔蔵 山寺",
                details: ["山形蕎麥麵名店", "費用: ¥1500-2000/人"],
                duration: "60分",
                transport: "步行 (5分至立石寺)",
                businessHours: "11:00-15:00 (週三休)",
                tips: ["手打蕎麥麵", "份量大", "僅收現金"],
                weather: { temp: "-2-2°C", condition: "陰天" }
            },
            {
                time: "13:30",
                title: "立石寺（山寺）",
                location: "宝珠山立石寺",
                details: ["登1015階石階", "入山費用: ¥300/人"],
                duration: "120分",
                transport: "步行 (5分返回山寺站)",
                businessHours: "08:00-17:00 (最後入山16:00)",
                tips: ["需爬山1小時", "注意防滑", "山頂有絕景", "冬季可能封閉部分區域"],
                weather: { temp: "-3-1°C", condition: "可能降雪" }
            },
            {
                time: "15:45",
                title: "返回山形駅",
                location: "山形站",
                details: ["搭乘JR仙山線返回"],
                transport: "JR仙山線 (22分)",
                weather: { temp: "-2-2°C", condition: "陰天" }
            },
            {
                time: "16:30",
                title: "S-PAL超市採買",
                location: "S-PAL山形",
                details: ["山形站內購物中心"],
                duration: "60分",
                transport: "步行 (5分至続おそばに)",
                businessHours: "10:00-20:00 (超市至20:30)",
                tips: ["可購買山形特產", "佐藤錦櫻桃製品", "米澤牛產品"],
                weather: { temp: "-2-1°C", condition: "陰天" }
            },
            {
                time: "18:00",
                title: "続おそばに 晚餐",
                location: "続おそばに",
                details: ["山形鄉土料理", "費用: ¥1000/人"],
                duration: "90分",
                transport: "步行 (5分返回飯店)",
                businessHours: "18:00-23:00 (週日休)",
                tips: ["推薦芋煮", "當地居酒屋", "僅收現金"],
                weather: { temp: "-3-0°C", condition: "晴天" }
            },
            {
                time: "19:30",
                title: "回飯店 Check in",
                location: "JR東日本大都會大飯店 山形",
                details: ["辦理入住"],
                duration: "休息",
                weather: { temp: "-3-0°C", condition: "晴天" }
            }
        ],
        6: [
            {
                time: "09:00",
                title: "JR東日本大都會大飯店 山形 Check out",
                location: "JR東日本大都會大飯店 山形",
                details: ["寄放大型行李"],
                duration: "30分",
                transport: "飯店免費接駁車至藏王溫泉 (已預訂, 需40分)",
                tips: ["需提前一天預約接駁車", "確認發車時間"],
                weather: { temp: "-4-1°C", condition: "陰天" }
            },
            {
                time: "10:30",
                title: "前往藏王溫泉",
                location: "藏王溫泉巴士總站",
                details: ["搭乘飯店接駁車"],
                duration: "40分",
                transport: "步行 (3分至昭四季酒店)",
                weather: { temp: "-5-0°C", condition: "可能降雪" }
            },
            {
                time: "11:10",
                title: "昭四季酒店",
                location: "蔵王温泉 昭栄館",
                details: ["寄放行李", "可先使用設施"],
                duration: "50分",
                transport: "步行溫泉街散策 (5分)",
                businessHours: "Check-in 15:00, Check-out 10:00",
                tips: ["溫泉酒店", "含早晚餐", "有私人湯屋"],
                weather: { temp: "-6--1°C", condition: "可能降雪" }
            },
            {
                time: "12:00",
                title: "藏王溫泉街散策",
                location: "蔵王温泉街",
                details: ["溫泉街自由逛"],
                duration: "60分",
                transport: "步行 (5分至奥村蕎麦屋)",
                businessHours: "各店營業時間不同",
                tips: ["可泡免費足湯", "有公共浴場", "推薦買溫泉饅頭"],
                weather: { temp: "-6--1°C", condition: "可能降雪" }
            },
            {
                time: "13:00",
                title: "Okumura Sobaya 午餐",
                location: "奥村蕎麦屋",
                details: ["山形蕎麥麵", "費用: ¥1000/人"],
                duration: "60分",
                transport: "步行 (5分返回飯店)",
                businessHours: "11:00-15:00",
                tips: ["當地人推薦", "份量充足"],
                weather: { temp: "-6--1°C", condition: "可能降雪" }
            },
            {
                time: "15:00",
                title: "回飯店 Check in",
                location: "昭四季酒店",
                details: ["Check in", "享用溫泉/晚餐"],
                duration: "休息",
                businessHours: "溫泉 06:00-23:00, 晚餐 18:00-20:00",
                tips: ["可多次入浴", "晚餐為會席料理", "建議穿浴衣用餐"],
                weather: { temp: "-7--2°C", condition: "晴天" }
            }
        ],
        7: [
            {
                time: "09:30",
                title: "昭四季酒店 Check out",
                location: "昭四季酒店",
                details: ["享用早餐後退房"],
                duration: "60分",
                transport: "飯店免費接駁車返回山形站 (40分)",
                weather: { temp: "-5-0°C", condition: "晴天" }
            },
            {
                time: "10:10",
                title: "山形駅",
                location: "山形站",
                details: ["抵達山形站"],
                duration: "20分",
                transport: "步行 (2分至飯店)",
                weather: { temp: "-3-2°C", condition: "晴天" }
            },
            {
                time: "10:30",
                title: "JR東日本大都會大飯店 山形",
                location: "JR東日本大都會大飯店 山形",
                details: ["寄放行李"],
                duration: "15分",
                transport: "步行 (10分至霞城公園)",
                weather: { temp: "-3-2°C", condition: "晴天" }
            },
            {
                time: "10:45",
                title: "霞城公園・文翔館",
                location: "霞城公園",
                details: ["山形城跡", "免費參觀"],
                duration: "90分",
                transport: "步行 (10分至栄屋本店)",
                businessHours: "公園24小時開放, 文翔館 09:00-16:30 (週一休)",
                tips: ["櫻花名所", "文翔館免費", "可租借和服拍照"],
                weather: { temp: "-2-3°C", condition: "晴天" }
            },
            {
                time: "12:15",
                title: "栄屋本店 午餐",
                location: "栄屋本店",
                details: ["冷拉麵創始店", "費用: ¥1500/人"],
                duration: "90分",
                transport: "步行 (5分至七日町)",
                businessHours: "11:00-19:00",
                tips: ["山形名物冷拉麵", "需排隊", "僅收現金"],
                weather: { temp: "-1-4°C", condition: "晴天" }
            },
            {
                time: "14:00",
                title: "七日町商店街",
                location: "七日町商店街",
                details: ["榮玉堂 (點心)", "懷舊街道"],
                duration: "120分",
                businessHours: "各店約10:00-18:00",
                tips: ["可購買山形特產", "榮玉堂推薦糰子", "有古董店"],
                weather: { temp: "-1-4°C", condition: "晴天" }
            },
            {
                time: "18:00",
                title: "平田牧場 晚餐",
                location: "平田牧場 山形站店",
                details: ["山形車站2F", "推薦豬排飯", "費用: ¥1500/人"],
                duration: "90分",
                businessHours: "11:00-22:00 (最後點餐21:00)",
                tips: ["山形品牌豬肉", "可使用信用卡", "套餐划算"],
                weather: { temp: "-2-1°C", condition: "晴天" }
            }
        ],
        8: [
            {
                time: "09:00",
                title: "從飯店出發",
                location: "JR東日本大都會大飯店 山形",
                details: ["準備退房前往仙台"],
                duration: "30分",
                transport: "步行至山形站 (1分)",
                weather: { temp: "-3-2°C", condition: "晴天" }
            },
            {
                time: "09:30",
                title: "JR東日本大都會大飯店 山形 Check out",
                location: "JR東日本大都會大飯店 山形",
                details: ["退房取行李"],
                duration: "13分",
                transport: "山交巴士返回仙台 (70分, ¥1100)",
                tips: ["班次: 09:23/09:33/09:43", "建議搭09:23班次"],
                weather: { temp: "-3-2°C", condition: "晴天" }
            },
            {
                time: "11:00",
                title: "仙台駅",
                location: "仙台站",
                details: ["抵達仙台"],
                duration: "10分",
                transport: "步行 (4分)",
                weather: { temp: "1-6°C", condition: "晴天" }
            },
            {
                time: "11:10",
                title: "相鐵FRESA INN 仙台",
                location: "相鉄フレッサイン 仙台",
                details: ["寄放行李"],
                duration: "16分",
                transport: "步行返回仙台站 (3分)",
                businessHours: "Check-in 15:00",
                tips: ["仙台站步行3分鐘", "可先寄放行李"],
                weather: { temp: "1-6°C", condition: "晴天" }
            },
            {
                time: "11:30",
                title: "午餐",
                location: "仙台站周邊",
                details: ["自由選擇餐廳"],
                duration: "90分",
                transport: "步行至購物區 (3分)",
                weather: { temp: "2-6°C", condition: "晴天" }
            },
            {
                time: "13:00",
                title: "購物行程",
                location: "仙台站周邊商圈",
                details: ["3coins / Loft / 藤崎百貨 / 阿部魚板店"],
                duration: "300分",
                transport: "步行返回仙台站 (5分)",
                businessHours: "各店10:00-20:00",
                tips: ["藤崎百貨有免稅", "阿部魚板可試吃", "3coins文具雜貨便宜"],
                weather: { temp: "2-6°C", condition: "晴天" }
            },
            {
                time: "18:00",
                title: "晚餐",
                location: "仙台站",
                details: ["自由選擇"],
                duration: "90分",
                transport: "步行 (6分)",
                weather: { temp: "1-4°C", condition: "晴天" }
            },
            {
                time: "19:30",
                title: "回飯店",
                location: "相鐵FRESA INN 仙台",
                details: ["步行返回飯店休息"],
                duration: "休息",
                transport: "步行 (6分)",
                weather: { temp: "0-3°C", condition: "晴天" }
            }
        ],
        9: [
            {
                time: "08:00",
                title: "從飯店出發",
                location: "相鐵FRESA INN 仙台",
                details: ["準備前往朝市吃早餐"],
                duration: "30分",
                transport: "步行至仙台朝市 (8分)",
                weather: { temp: "0-5°C", condition: "晴天" }
            },
            {
                time: "08:30",
                title: "仙台朝市 早餐",
                location: "仙台朝市",
                details: ["海鮮早餐", "新鮮市場"],
                duration: "90分",
                transport: "步行至仙台站 (6分)",
                businessHours: "08:00-18:00 (部分店家07:00起)",
                tips: ["新鮮海產", "可購買伴手禮", "推薦海鮮丼"],
                weather: { temp: "0-5°C", condition: "晴天" }
            },
            {
                time: "10:00",
                title: "購買伴手禮",
                location: "仙台站",
                details: ["萩之月", "笹かまぼこ"],
                duration: "60分",
                transport: "步行返回飯店 (8分)",
                businessHours: "08:00-21:00",
                tips: ["萩之月在S-PAL購買", "笹かまぼこ推薦阿部", "注意賞味期限"],
                weather: { temp: "1-6°C", condition: "晴天" }
            },
            {
                time: "11:00",
                title: "相鐵FRESA INN 仙台 Check out",
                location: "相鐵FRESA INN 仙台",
                details: ["取回行李"],
                duration: "60分",
                transport: "步行至仙台站 (3分)",
                weather: { temp: "2-6°C", condition: "晴天" }
            },
            {
                time: "12:00",
                title: "午餐",
                location: "仙台站",
                details: ["最後一餐"],
                duration: "90分",
                transport: "步行至仙台站搭車 (2分)",
                weather: { temp: "2-7°C", condition: "晴天" }
            },
            {
                time: "14:00",
                title: "前往機場",
                location: "仙台機場",
                details: ["搭乘機場聯通捷運線"],
                transport: "仙台機場聯通捷運線 (25分, ¥660)",
                tips: ["提前2小時到機場", "辦理退稅", "最後購物機會"],
                weather: { temp: "2-7°C", condition: "晴天" }
            },
            {
                time: "17:25",
                title: "仙台機場起飛",
                location: "仙台空港",
                details: ["返回台灣"],
                flightInfo: {
                    airline: "星宇航空 STARLUX Airlines",
                    flightNumber: "JX0863",
                    departure: "17:25",
                    arrival: "20:35",
                    terminal: "國際線航廈",
                    aircraft: "A330-900neo"
                },
                transport: "飛行 3小時10分",
                tips: ["確認登機門", "可在機場最後採買"],
                weather: { temp: "2-6°C", condition: "晴天" }
            },
            {
                time: "20:35",
                title: "桃園機場抵達",
                location: "桃園國際機場第一航廈",
                details: ["順利返家"],
                weather: { temp: "16-20°C", condition: "多雲" }
            }
        ]
    }
};
