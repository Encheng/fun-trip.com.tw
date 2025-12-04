const tripData = {
    overview: {
        carbonEmission: "2781.61",
        attractions: 70,
        distance: "22981.98"
    },
    days: {
        1: [
            { time: "08:00", title: "永和家", details: ["出發前往桃園機場"], transport: "機場接送 (約1小時)" },
            { time: "09:00", title: "桃園機場第二航廈", details: ["辦理登機手續", "飛行時間: 3小時10分"], transport: "飛行 3小時10分" },
            { time: "16:00", title: "仙台機場", details: ["入境/領行李"], transport: "仙台機場聯通捷運線 (40分, ¥660)" },
            { time: "18:00", title: "Hotel Vista Sendai", details: ["Check-in", "仙台駅東側Yodobashi對面", "停留30分"] },
            { time: "18:30", title: "晚餐", details: ["**牛舌-善治郎** 仙台站牛舌通", "費用: 約¥2000/人"] },
            { time: "20:30", title: "回飯店", details: [] }
        ],
        2: [
            { time: "09:00", title: "Date Cafe O'rder 早餐", details: ["仙台車站2F", "推薦: 茶泡飯 or 飯糰"], transport: "步行10分" },
            { time: "10:30", title: "瑞鳳殿", details: ["停留1小時", "開放時段: 9:00-16:00", "門票: ¥460/人"], transport: "Loople仙台觀光巴士 (13分)" },
            { time: "12:00", title: "鹿落堂 午餐", details: ["蕎麥麵專賣店", "費用: ¥1900-2100/人"], transport: "Loople仙台觀光巴士 (21分)" },
            { time: "13:30", title: "仙台城跡", details: ["停留2.5小時"], transport: "Loople仙台觀光巴士 (25分)" },
            { time: "16:00", title: "大崎八幡宮", details: ["國寶級神社", "出示一日券可領明信片"], transport: "Loople仙台觀光巴士 (12分)" },
            { time: "17:00", title: "定禪寺通", details: ["光之樂章點燈活動"] },
            { time: "17:30", title: "旨味太助 晚餐", details: ["創始牛舌店 & 蒲燒鰻魚飯", "費用: ¥3000/人"] },
            { time: "19:30", title: "仙台站購物", details: ["超市/GU.UQ", "Lopia買水果 (21:00打烊，僅現金)"] }
        ],
        3: [
            { time: "09:30", title: "飯店早餐", details: [] },
            { time: "10:00", title: "前往松島", details: [], transport: "JR仙石線直達 (40分)" },
            { time: "11:00", title: "漁師の海鮮丼 午餐", details: ["推薦牡蠣名店", "營業時間: 11:00-15:00", "費用: ¥2200/人 (僅現金)"] },
            { time: "12:00", title: "瑞巖寺・五大堂・円通院", details: ["円通院門票: ¥500/人", "停留1.5小時"] },
            { time: "14:00", title: "松島周遊遊船", details: ["KKDAY預訂 (NT$1044)", "遊船時間: 50分"] },
            { time: "15:00", title: "松島魚市場", details: ["自由逛街購物"], transport: "JR仙石線 (40分)" },
            { time: "16:00", title: "返回仙台", details: [] },
            { time: "18:00", title: "丸龜製麵 晚餐", details: ["費用: ¥1000/人"] },
            { time: "19:00", title: "仙台東口逛街", details: ["GU/UQ"] }
        ],
        4: [
            { time: "08:30", title: "藏王狐狸村一日遊", details: ["集合地點: 仙台車站東口觀光巴士乘車處", "預訂: Klook一日遊", "注意: 8:45準時發車"] },
            { time: "10:00", title: "藏王狐狸村", details: ["停留1小時20分"] },
            { time: "12:15", title: "午餐", details: ["Klook含午餐", "停留45分"] },
            { time: "15:15", title: "銀山溫泉", details: ["停留1小時", "必吃: 咖哩麵包"] },
            { time: "18:45", title: "返回仙台", details: [] },
            { time: "19:00", title: "一蘭拉麵 晚餐", details: ["JR仙台站西口", "費用: ¥1400/人"] }
        ],
        5: [
            { time: "09:00", title: "Hotel Vista Check out", details: [] },
            { time: "09:00", title: "麥當勞 仙台站東口店", details: ["費用: ¥700/人"], transport: "山交巴士 (70分, ¥1100/人)" },
            { time: "10:10", title: "前往山形", details: ["位置: 仙台站西口22號月台", "注意: 自行開關行李箱門"] },
            { time: "11:17", title: "抵達山形駅", details: [] },
            { time: "11:30", title: "JR東日本大都會大飯店 山形", details: ["寄放行李"], transport: "JR仙山線 (22分)" },
            { time: "12:00", title: "前往山寺", details: [] },
            { time: "12:30", title: "焔藏蕎麥麵 午餐", details: ["營業時間: 11:00-15:00 (週三休)", "費用: ¥1500-2000/人"] },
            { time: "13:30", title: "立石寺", details: ["開放時間: 8:30-15:00 (16:00關閉)", "入山費用: ¥500/人", "停留2小時"], transport: "JR仙山線 (32分)" },
            { time: "15:45", title: "返回山形駅", details: [] },
            { time: "16:30", title: "S-PAL超市採買", details: ["營業時間: 10:00-19:30"] },
            { time: "18:00", title: "続おそばに 晚餐", details: ["營業時間: 18:00-20:30", "費用: ¥1000/人"] },
            { time: "19:30", title: "回飯店 Check in", details: [] }
        ],
        6: [
            { time: "09:00", title: "Check out", details: ["寄放大型行李"], transport: "飯店免費接駁車 (已預訂)" },
            { time: "10:30", title: "前往藏王溫泉", details: [] },
            { time: "11:10", title: "昭四季酒店", details: ["寄放行李"] },
            { time: "12:00", title: "藏王溫泉街散策", details: [] },
            { time: "13:00", title: "Okumura Sobaya 午餐", details: ["費用: ¥1000/人"] },
            { time: "15:00", title: "回飯店", details: ["Check in", "享用溫泉/晚餐"] }
        ],
        7: [
            { time: "09:30", title: "昭四季酒店 Check out", details: ["搭飯店免費接駁車"] },
            { time: "10:10", title: "山形駅", details: [] },
            { time: "10:30", title: "JR東日本大都會大飯店", details: ["寄放行李"] },
            { time: "10:30", title: "霞城公園・文翔館", details: [] },
            { time: "12:00", title: "栄屋本店 午餐", details: ["冷拉麵創始店", "費用: ¥1500/人"] },
            { time: "14:00", title: "七日町商店街", details: ["榮玉堂 (點心)"] },
            { time: "18:00", title: "平田牧場 晚餐", details: ["山形車站2F", "推薦: 豬排飯", "費用: ¥1500/人"] }
        ],
        8: [
            { time: "09:30", title: "Check out", details: [], transport: "山交巴士 (70分, ¥1100/人)" },
            { time: "09:30", title: "返回仙台", details: ["班次: 09:23/09:33/09:43"] },
            { time: "11:00", title: "仙台駅", details: [] },
            { time: "11:10", title: "相鐵FRESA INN 仙台", details: ["寄放行李"] },
            { time: "11:30", title: "午餐", details: [] },
            { time: "13:00", title: "購物行程", details: ["3coins / Loft", "藤崎百貨", "阿部魚板店"] },
            { time: "18:00", title: "晚餐", details: [] }
        ],
        9: [
            { time: "08:30", title: "出發", details: [] },
            { time: "08:30", title: "仙台朝市 早餐", details: [] },
            { time: "10:00", title: "購買伴手禮", details: ["萩之月", "笹かまぼこ"] },
            { time: "11:00", title: "相鐵FRESA INN Check out", details: ["寄放行李"] },
            { time: "12:00", title: "午餐", details: [], transport: "仙台機場聯通捷運線 (40分)" },
            { time: "14:00", title: "前往機場", details: [] },
            { time: "17:25", title: "仙台機場起飛", details: [], transport: "飛行 3小時10分" },
            { time: "20:35", title: "桃園機場抵達", details: [] }
        ]
    }
};
