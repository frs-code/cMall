//按需加载站点导航列表
($ => {
    var shopArr = [{
        "url": "###",
        "name": "已买到的宝贝"
    }, {
        "url": "###",
        "name": "我的足迹"
    }];
    var favoritesArr = [{
        "url": "###",
        "name": "收藏的宝贝"
    }, {
        "url": "###",
        "name": "收藏的店铺"
    }];
    var sellerArr = [{
        "url": "###",
        "name": "免费开店"
    }, {
        "url": "###",
        "name": "已卖出的宝贝"
    }, {
        "url": "###",
        "name": "出售中的宝贝"
    }, {
        "url": "###",
        "name": "卖家服务市场"
    }, {
        "url": "###",
        "name": "卖家培训"
    }, {
        "url": "###",
        "name": "体验中心"
    }];
    var customerArr = [{
        "url": "###",
        "name": "卖家客服"
    }, {
        "url": "###",
        "name": "消费者客服"
    }];
    //创建站点导航列表
    function createElem(Arr) {
        var html = '';
        for (var i = 0, len = Arr.length; i < len; i++) {
            html += ` <li><a href=${Arr[i].url} target="_blank" class="drop-down-item">${Arr[i].name}</a></li>`;
        }
        return html;
    }
    $('.drop-down-content').html('<li class="loading"></li>');
    $('.f-shop').hover(() => {
        var html = createElem(shopArr);
        $('.my-shop').html(html);
    });

    $('.f-favorites').hover(() => {
        var html = createElem(favoritesArr);
        $('.favorites').html(html);
    });

    $('.f-seller').hover(() => {
        var html = createElem(sellerArr);
        $('.seller').html(html);
    });

    $('.f-customer').hover(() => {
        var html = createElem(customerArr);
        $('.customer').html(html);
    });
})(jQuery);

//按需加载购物车列表
($ => {
    var cartArr = [{
        "url": "img/cart/1.png",
        "name": "adidas 阿迪达斯 训练 男子",
        "price": "￥335",
        "num": "1"
    }, {
        "url": "img/cart/2.png",
        "name": "玉兰油多效修护三部曲套装",
        "price": "￥199",
        "num": "2"
    }, {
        "url": "img/cart/3.png",
        "name": "Apple iPhone 7 (A1660)",
        "price": "￥6188",
        "num": "1"
    }, {
        "url": "img/cart/4.png",
        "name": "飞利浦面条机 HR2356/31",
        "price": "￥659",
        "num": "4"
    }];
    //    创建购物车列表选项
    function createElem(Arr) {
        var html = '';
        for (var i = 0, len = Arr.length; i < len; i++) {
            html += ` <li class="cart-item">
                            <a href="###" target="_blank" class="cart-item-pic "><img style="display:block" src=${Arr[i].url}/></a>
                            <div class="cart-item-right">
                                <p class="cart-item-name text-ellipsis"><a href="###" target="_blank" class="link">${Arr[i].name}</a></p>
                                <p class="cart-item-price"><strong>${Arr[i].price} x ${Arr[i].num}</strong></p>
                            </div>
                            <a href="javascript:;" title="删除" class="cart-item-delete link fr">X</a>
                        </li>`;
        }
        return html;
    }
    $('.header-cart').hover(() => {
        var html = createElem(cartArr);
        $('.cart-list').html(html);
    });
})(jQuery);

//按需加载商品分类列表
($ => {
    var applianceArr = [{
        "title": "电视",
        "items": ["抢亿元红包", "合资品牌", "国产品牌", "互联网品牌"]
    }, {
        "title": "空调",
        "items": ["壁挂式空调", "柜式空调", "中央空调", "空调配件"]
    }, {
        "title": "洗衣机",
        "items": ["满千减百", "滚筒洗衣机", "洗烘一体机", "波轮洗衣机", "迷你洗衣机", "洗衣机配件"]
    }, {
        "title": "冰箱",
        "items": ["多门", "对开门", "三门", "双门", "冷柜/冰吧", "酒柜", "冰箱配件"]
    }, {
        "title": "厨卫大电",
        "items": ["油烟机", "燃气灶", "烟灶套装", "消毒柜", "洗碗机", "电热水器", "燃气热水器", "嵌入式厨电"]
    }, {
        "title": "厨房小电",
        "items": ["小家电年货", "电饭煲", "微波炉", "电烤箱", "电磁炉", "电压力锅", "豆浆机", "咖啡机", "面包机", "榨汁机", "料理机", "电饼铛", "养生壶/煎药壶", "酸奶机", "煮蛋器", "电水壶/热水瓶", "电炖锅", "多用途锅", "电烧烤炉", "电热饭盒", "其它厨房电器"]
    }, {
        "title": "生活电器",
        "items": ["取暖电器", "吸尘器", "净化器", "扫地机器人", "加湿器", "挂烫机/熨斗", "电风扇", "冷风扇", "插座", "电话机", "饮水机", "净水器", "除湿机", "干衣机", "清洁机", "收录/音机", "其它生活电器", "生活电器配件"]
    }, {
        "title": "个护健康",
        "items": ["剃须刀", "口腔护理", "电吹风", "美容器", "卷/直发器", "理发器", "剃/脱毛器", "足浴盆", "健康秤/厨房秤", "按摩器", "按摩椅", "计步器/脂肪检测仪", "其它健康电器"]
    }, {
        "title": "家庭影音",
        "items": ["家庭影院", "迷你音响", "DVD", "电视影音配件"]
    }, {
        "title": "进口电器",
        "items": ["进口电器"]
    }];
    var phoneArr = [{
        "title": "手机通讯",
        "items": ["手机", "对讲机", "以旧换新", "手机维修"]
    }, {
        "title": "运营商",
        "items": ["充话费/流量", "170选号", "合约机", "办套餐", "选号码", "固话宽带", "京东通信", "中国移动", "中国联通", "中国电信"]
    }, {
        "title": "手机配件",
        "items": ["手机壳", "贴膜", "手机存储卡", "数据线", "充电器", "手机耳机", "创意配件", "手机饰品", "手机电池", "苹果周边", "移动电源", "蓝牙耳机", "手机支架", "车载配件", "拍照配件"]
    }, {
        "title": "摄影摄像",
        "items": ["数码相机", "单电/微单相机", "单反相机", "拍立得", "运动相机", "摄像机", "镜头", "户外器材", "影棚器材", "冲印服务", "数码相框"]
    }, {
        "title": "数码配件",
        "items": ["存储卡", "三脚架/云台", "相机包", "滤镜", "闪光灯/手柄", "相机清洁/贴膜", "机身附件", "镜头附件", "读卡器", "支架", "电池/充电器"]
    }, {
        "title": "影音娱乐",
        "items": ["耳机/耳麦", "音箱/音响", "便携/无线音箱", "收音机", "麦克风", "MP3/MP4", "专业音频"]
    }, {
        "title": "智能设备",
        "items": ["智能手环", "智能手表", "智能眼镜", "智能机器人", "运动跟踪器", "健康监测", "智能配饰", "智能家居", "体感车", "无人机", "其他配件"]
    }, {
        "title": "电子教育",
        "items": ["学生平板", "点读机/笔", "早教益智", "录音笔", "电纸书", "电子词典", "复读机"]
    }];
    var computerArr = [{
        "title": "电脑整机",
        "items": ["笔记本", "游戏本", "平板电脑", "平板电脑配件", "台式机", "一体机", "服务器/工作站", "笔记本配件"]
    }, {
        "title": "电脑配件",
        "items": ["显示器", "CPU", "主板", "显卡", "硬盘", "内存", "机箱", "电源", "散热器", "刻录机/光驱", "声卡/扩展卡", "装机配件", "SSD固态硬盘", "组装电脑"]
    }, {
        "title": "外设产品",
        "items": ["鼠标", "键盘", "键鼠套装", "网络仪表仪器", "U盘", "移动硬盘", "鼠标垫", "摄像头", "线缆", "手写板", "硬盘盒", "电脑工具", "电脑清洁", "UPS电源", "插座"]
    }, {
        "title": "游戏设备",
        "items": ["游戏机", "游戏耳机", "手柄/方向盘", "游戏软件", "游戏周边"]
    }, {
        "title": "网络产品",
        "items": ["路由器", "网络机顶盒", "交换机", "网络存储", "网卡", "4G/3G上网", "网络配件"]
    }, {
        "title": "办公设备",
        "items": ["投影机", "投影配件", "多功能一体机", "打印机", "传真设备", "验钞/点钞机", "扫描设备", "复合机", "碎纸机", "考勤机", "收银机", "会议音频视频", "保险柜", "装订/封装机", "安防监控", "办公家具", "白板"]
    }, {
        "title": "文具耗材",
        "items": ["硒鼓/墨粉", "墨盒", "色带", "纸类", "办公文具", "学生文具", "文件管理", "本册/便签", "计算器", "笔类", "画具画材", "财会用品", "刻录碟片/附件"]
    }, {
        "title": "服务产品",
        "items": ["延保服务", "上门安装", "维修保养", "电脑软件"]
    }];
    var gearArr = [{
        "title": "厨具",
        "items": ["烹饪锅具", "刀剪菜板", "厨房配件", "水具酒具", "餐具", "茶具/咖啡具", "保温杯"]
    }, {
        "title": "家纺",
        "items": ["床品套件", "被子", "枕芯", "蚊帐", "凉席", "毛巾浴巾", "地毯地垫", "床垫/床褥", "毯子", "抱枕靠垫", "窗帘/窗纱", "床单/床笠", "被套", "枕巾枕套", "沙发垫套/椅垫", "桌布/罩件", "电热毯", "布艺软饰"]
    }, {
        "title": "生活日用",
        "items": ["收纳用品", "雨伞雨具", "净化除味", "浴室用品", "洗晒/熨烫", "缝纫/针织用品", "清洁工具"]
    }, {
        "title": "家装软饰",
        "items": ["装饰字画", "装饰摆件", "手工/十字绣", "相框/照片墙", "墙贴/装饰贴", "花瓶花艺", "香薰蜡烛", "节庆饰品", "钟饰", "帘艺隔断", "创意家居", "保暖防护"]
    }, {
        "title": "灯具",
        "items": ["吸顶灯", "吊灯", "台灯", "筒灯射灯", "装饰灯", "LED灯", "氛围照明", "落地灯", "庭院灯", "应急灯/手电", "节能灯"]
    }, {
        "title": "家具",
        "items": ["卧室家具", "客厅家具", "餐厅家具", "书房家具", "儿童家具", "储物家具", "阳台/户外", "办公家具", "床", "床垫", "沙发", "电脑椅", "衣柜", "茶几", "电视柜", "餐桌", "电脑桌", "鞋架/衣帽架", "儿童桌椅", "儿童床", "晾衣架"]
    }, {
        "title": "家装主材",
        "items": ["瓷砖", "地板", "油漆涂料", "壁纸", "涂刷辅料"]
    }, {
        "title": "厨房卫浴",
        "items": ["水槽", "锁具", "电动工具", "手动工具", "测量工具", "劳防用品", "开关插座", "门铃", "监控安防", "配电箱/断路器"]
    }, {
        "title": "五金电工",
        "items": ["锁具", "电动工具", "手动工具", "测量工具", "劳防用品", "开关插座", "门铃", "监控安防", "配电箱/断路器"]
    }, {
        "title": "装修定制",
        "items": ["装修设计", "装修施工", "淋浴房", "橱柜", "集成吊顶", "门", "窗", "壁挂炉", "散热器", "安装服务"]
    }];
    var clothingArr = [{
        "title": "女装",
        "items": ["毛呢大衣", "羽绒服", "连衣裙", "针织衫", "卫衣", "牛仔裤", "风衣", "T恤", "衬衫", "短外套", "打底衫", "打底裤", "棉服", "皮草", "羊毛衫", "羊绒衫", "真皮皮衣", "小西装", "休闲裤", "大码女装", "中老年女装", "设计师/潮牌", "半身裙", "仿皮皮衣", "马甲", "正装裤", "加绒裤", "婚纱", "礼服", "旗袍/唐装", "雪纺衫", "吊带/背心", "短裤"]
    }, {
        "title": "男装",
        "items": ["羽绒服", "棉服", "针织衫", "夹克", "羊毛衫", "加绒裤", "真皮皮衣", "卫衣", "T恤", "马甲/背心", "西服套装", "牛仔裤", "休闲裤", "衬衫", "毛呢大衣", "风衣", "仿皮皮衣", "西服", "西裤", "卫裤/运动裤", "POLO衫", "短裤", "中老年男装", "大码男装", "羊绒衫", "设计师/潮牌", "工装", "唐装/中山装"]
    }, {
        "title": "内衣",
        "items": ["保暖内衣", "秋衣秋裤", "男式内裤", "女式内裤", "休闲棉袜", "商务男袜", "吊带/背心", "大码内衣", "打底衫", "睡衣/家居服", "文胸", "打底裤袜", "连裤袜/丝袜", "文胸套装", "情侣睡衣", "少女文胸", "抹胸", "内衣配件", "塑身美体", "美腿袜", "泳衣", "情趣内衣"]
    }, {
        "title": "配饰",
        "items": ["女士丝巾/围巾/披肩", "男士腰带/礼盒", "太阳镜", "光学镜架/镜片", "防辐射眼镜", "棒球帽", "贝雷帽", "鸭舌帽", "男士丝巾/围巾", "真皮手套", "毛线手套", "围巾/手套/帽子套装", "老花镜", "礼帽", "遮阳帽", "口罩", "游泳镜", "毛线帽", "女士腰带/礼盒", "遮阳伞/雨伞", "毛线/布面料", "领带/领结/领带夹", "耳罩/耳包", "袖扣", "钥匙扣"]
    }, {
        "title": "童装童鞋",
        "items": ["羽绒服/棉服", "套装", "上衣", "裤子", "内衣", "配饰", "运动鞋", "靴子", "皮鞋/帆布鞋", "功能鞋", "亲子装", "运动服", "演出服", "裙子", "凉鞋"]
    }];
    var detail6Arr = [{
        "title": "面部护肤",
        "items": ["美妆狂欢", "卸妆", "洁面", "爽肤水", "乳液面霜", "精华", "眼霜", "防晒", "面膜", "剃须", "套装"]
    }, {
        "title": "洗发护发",
        "items": ["个护大牌", "洗发", "护发", "染发", "造型", "假发", "美发工具", "套装"]
    }, {
        "title": "身体护理",
        "items": ["沐浴", "润肤", "精油", "颈部", "手足", "纤体塑形", "美胸", "套装"]
    }, {
        "title": "口腔护理",
        "items": ["牙膏/牙粉", "牙刷/牙线", "漱口水", "套装"]
    }, {
        "title": "女性护理",
        "items": ["卫生巾", "卫生护垫", "私密护理", "脱毛膏"]
    }, {
        "title": "香水彩妆",
        "items": ["女士香水", "男士香水", "底妆", "眉笔", "睫毛膏", "眼线", "眼影", "唇膏/彩", "腮红", "美甲", "美妆工具", "套装"]
    }, {
        "title": "清洁用品",
        "items": ["家洁团圆", "纸品湿巾", "衣物清洁", "清洁工具", "家庭清洁", "一次性用品", "驱虫用品", "皮具护理"]
    }, {
        "title": "宠物生活",
        "items": ["萌宠钜惠", "水族用品", "宠物主粮", "宠物零食", "猫砂/尿布", "洗护美容", "家居日用", "医疗保健", "出行装备", "宠物玩具", "宠物牵引", "宠物驱虫"]
    }];
    var detail7Arr = [{
        "title": "运动鞋包",
        "items": ["跑步鞋", "休闲鞋", "篮球鞋", "帆布鞋", "板鞋", "拖鞋", "运动包", "足球鞋", "乒羽网鞋", "训练鞋", "专项运动鞋"]
    }, {
        "title": "运动服饰",
        "items": ["T恤", "运动裤", "健身服", "运动套装", "运动背心", "羽绒服", "卫衣/套头衫", "棉服", "夹克/风衣", "运动配饰", "乒羽网服", "毛衫/线衫"]
    }, {
        "title": "健身训练",
        "items": ["跑步机", "健身车/动感单车", "哑铃", "仰卧板/收腹机", "甩脂机", "踏步机", "运动护具", "瑜伽舞蹈", "武术搏击", "综合训练器", "其他大型器械", "其他中小型器材"]
    }, {
        "title": "骑行运动",
        "items": ["山地车/公路车", "折叠车", "电动车", "平衡车", "其他整车", "骑行装备", "骑行服"]
    }, {
        "title": "体育用品",
        "items": ["乒乓球", "羽毛球", "篮球", "足球", "轮滑滑板", "网球", "高尔夫", "台球", "排球", "棋牌麻将", "其它"]
    }, {
        "title": "户外鞋服",
        "items": ["户外风衣", "徒步鞋", "T恤", "冲锋衣裤", "速干衣裤", "越野跑鞋", "滑雪服", "羽绒服/棉服", "休闲衣裤", "抓绒衣裤", "溯溪鞋", "沙滩/凉拖", "休闲鞋", "软壳衣裤", "功能内衣", "军迷服饰", "登山鞋", "工装鞋", "户外袜"]
    }, {
        "title": "户外装备",
        "items": ["帐篷/垫子", "望远镜", "野餐烧烤", "便携桌椅床", "背包", "户外配饰", "军迷用品", "睡袋/吊床", "救援装备", "户外照明", "旅游用品", "户外工具", "户外仪表", "登山攀岩", "极限户外", "冲浪潜水", "滑雪装备"]
    }, {
        "title": "垂钓用品",
        "items": ["鱼竿鱼线", "浮漂鱼饵", "钓鱼桌椅", "钓鱼配件", "钓箱鱼包", "其它"]
    }, {
        "title": "游泳用品",
        "items": ["泳镜", "男士泳衣", "女士泳衣", "比基尼", "泳帽", "游泳包防水包", "其它"]
    }, {
        "title": "钟表",
        "items": ["瑞表", "国表", "日韩表", "欧美表", "德表", "儿童手表", "智能手表", "闹钟", "座钟挂钟", "钟表配件"]
    }];
    var detail8Arr = [{
        "title": "汽车车型",
        "items": ["微型车", "小型车", "紧凑型车", "中型车", "中大型车", "豪华车", "MPV", "SUV", "跑车"]
    }, {
        "title": "汽车价格",
        "items": ["5万以下", "5-8万", "8-10万", "10-15万", "15-25万", "25-40万", "40万以上"]
    }, {
        "title": "汽车品牌",
        "items": ["宝马", "上汽大众", "陆风", "一汽奔腾", "东风标致", "比亚迪", "华晨汽车"]
    }, {
        "title": "维修保养",
        "items": ["机油", "轮胎", "添加剂", "防冻液", "滤清器", "火花塞", "雨刷", "车灯", "减震器", "轮毂", "刹车片/盘", "维修配件", "蓄电池", "底盘装甲/护板", "贴膜", "汽修工具", "改装配件", "正时皮带", "汽车喇叭", "汽车玻璃"]
    }, {
        "title": "车载电器",
        "items": ["行车记录仪", "导航仪", "电源", "电器配件", "净化器", "车载影音", "冰箱", "安全预警仪", "倒车雷达", "蓝牙设备", "智能驾驶", "车载电台", "吸尘器", "智能车机", "汽车音响", "车载生活电器"]
    }, {
        "title": "美容清洗",
        "items": ["车蜡", "镀晶镀膜", "补漆笔", "玻璃水", "清洁剂", "洗车机", "洗车水枪", "洗车配件", "毛巾掸子"]
    }, {
        "title": "汽车装饰",
        "items": ["脚垫", "座垫", "座套", "后备箱垫", "方向盘套", "头枕腰靠", "香水", "空气净化", "功能小件", "车衣", "挂件摆件", "车身装饰件"]
    }, {
        "title": "安全自驾",
        "items": ["安全座椅", "胎压监测", "充气泵", "防盗设备", "应急救援", "保温箱", "储物箱", "自驾野营", "摩托车装备", "摩托车"]
    }, {
        "title": "赛事改装",
        "items": ["赛事服装", "赛事用品", "制动系统", "悬挂系统", "进气系统", "排气系统", "电子管理", "车身强化"]
    }, {
        "title": "汽车服务",
        "items": ["油卡充值", "加油卡", "保养维修", "清洗美容", "功能升级", "ETC", "驾驶培训"]
    }];
    var detail9Arr = [{
        "title": "奶粉",
        "items": ["母婴年货", "1段", "2段", "3段", "4段", "孕妈奶粉", "特殊配方奶粉", "有机奶粉"]
    }, {
        "title": "营养辅食",
        "items": ["米粉/菜粉", "面条/粥", "果泥/果汁", "益生菌/初乳", "DHA", "钙铁锌/维生素", "清火/开胃", "宝宝零食"]
    }, {
        "title": "尿裤湿巾",
        "items": ["母婴年货", "NB", "S", "M", "L", "XL", "XXL", "拉拉裤", "成人尿裤", "婴儿湿巾"]
    }, {
        "title": "喂养用品",
        "items": ["奶瓶奶嘴", "吸奶器", "暖奶消毒", "辅食料理机", "牙胶安抚", "食物存储", "儿童餐具", "水壶/水杯", "围兜/防溅衣"]
    }, {
        "title": "洗护用品",
        "items": ["宝宝护肤", "日常护理", "洗发沐浴", "洗澡用具", "洗衣液/皂", "理发器", "婴儿口腔清洁", "座便器", "驱蚊防晒"]
    }, {
        "title": "寝居服饰",
        "items": ["睡袋/抱被", "家居床品", "安全防护", "爬行垫", "婴儿内衣", "婴儿礼盒", "婴儿鞋帽袜", "婴儿外出服"]
    }, {
        "title": "妈妈专区",
        "items": ["防辐射服", "孕妈装", "孕妇护肤", "妈咪包/背婴带", "待产护理", "产后塑身", "文胸/内裤", "防溢乳垫", "孕期营养"]
    }, {
        "title": "童车童床",
        "items": ["安全座椅", "婴儿推车", "婴儿床", "婴儿床垫", "餐椅", "学步车", "三轮车", "自行车", "扭扭车", "滑板车", "电动车"]
    }, {
        "title": "玩具",
        "items": ["母婴年货", "适用年龄", "遥控/电动", "益智玩具", "积木拼插", "动漫玩具", "毛绒布艺", "模型玩具", "健身玩具", "娃娃玩具", "DIY玩具", "创意减压"]
    }, {
        "title": "乐器",
        "items": ["钢琴", "电子琴/电钢琴", "吉他/尤克里里", "打击乐器", "西洋管弦", "民族乐器", "乐器配件"]
    }];
    var detail10Arr = [{
        "title": "新鲜水果",
        "items": ["京东生鲜", "进口水果", "国产水果", "苹果", "奇异果", "车厘子", "橙子", "牛油果", "火龙果", "榴莲", "柠檬", "芒果", "时令水果"]
    }, {
        "title": "海鲜水产",
        "items": ["虾类", "鱼类", "蟹类", "贝类", "海参", "海产干货", "三文鱼", "北极甜虾", "扇贝", "黄花鱼", "大闸蟹", "鲜活水产"]
    }, {
        "title": "肉禽蛋品",
        "items": ["牛肉", "猪肉", "羊肉", "鸡肉", "特色禽类", "牛排", "牛腩", "牛腱", "肋排", "鸡翅", "冷鲜肉", "咸鸭蛋", "鸡蛋"]
    }, {
        "title": "新鲜蔬菜",
        "items": ["根茎类", "茄果瓜类", "叶菜类", "葱姜蒜椒", "鲜菌菇", "半加工蔬菜", "西红柿", "玉米", "山药"]
    }, {
        "title": "冷饮冻食",
        "items": ["水饺", "面点", "速冻半成品", "火锅丸串", "奶酪/黄油", "汤圆", "冰淇淋", "低温奶"]
    }, {
        "title": "中外名酒",
        "items": ["美酒盛宴", "白酒", "葡萄酒", "洋酒", "啤酒", "黄酒/养生酒", "收藏酒/陈年老酒"]
    }, {
        "title": "进口食品",
        "items": ["牛奶", "饼干蛋糕", "糖果/巧克力", "休闲零食", "冲调饮品", "粮油调味"]
    }, {
        "title": "休闲食品",
        "items": ["年货专区", "休闲零食", "坚果炒货", "肉干肉脯", "熟食腊味", "蜜饯果干", "糖果/巧克力", "饼干蛋糕", "无糖食品", "年货礼盒"]
    }, {
        "title": "地方特产",
        "items": ["饕餮中国", "新疆", "四川", "云南", "湖南", "内蒙", "北京", "山西", "福建", "东北", "其他"]
    }, {
        "title": "茗茶",
        "items": ["铁观音", "普洱", "龙井", "绿茶", "红茶", "乌龙茶", "花草茶", "花果茶", "黑茶", "白茶", "养生茶", "其他茶"]
    }, {
        "title": "饮料冲调",
        "items": ["牛奶乳品", "饮料", "饮用水", "咖啡/奶茶", "蜂蜜/柚子茶", "冲饮谷物", "成人奶粉"]
    }, {
        "title": "粮油调味",
        "items": ["米面杂粮", "食用油", "调味品", "南北干货", "方便食品", "烘焙原料", "有机食品"]
    }];
    var detail11Arr = [{
        "title": "中西药品",
        "items": ["感冒咳嗽", "补肾壮阳", "补气养血", "止痛镇痛", "耳鼻喉用药", "眼科用药", "口腔用药", "皮肤用药", "肠胃消化", "风湿骨外伤", "男科/泌尿", "妇科用药", "儿科用药", "心脑血管", "肝胆用药"]
    }, {
        "title": "营养健康",
        "items": ["调节免疫", "调节三高", "缓解疲劳", "美体塑身", "美容养颜", "肝肾养护", "肠胃养护", "明目益智", "骨骼健康", "改善睡眠", "抗氧化", "耐缺氧"]
    }, {
        "title": "营养成分",
        "items": ["维生素/矿物质", "蛋白质", "鱼油/磷脂", "螺旋藻", "番茄红素", "叶酸", "葡萄籽", "左旋肉碱", "辅酶Q10", "益生菌", "玛咖", "膳食纤维", "牛初乳", "胶原蛋白", "大豆异黄酮", "芦荟提取", "酵素"]
    }, {
        "title": "滋补养生",
        "items": ["阿胶", "蜂蜜/蜂产品", "枸杞", "燕窝", "海参", "冬虫夏草", "人参/西洋参", "三七", "鹿茸", "雪蛤", "青钱柳", "石斛/枫斗", "灵芝/孢子粉", "当归", "养生茶饮", "药食同源"]
    }, {
        "title": "成人用品",
        "items": ["安全避孕", "验孕测孕", "人体润滑", "男用延时", "男用器具", "女用器具", "情趣内衣"]
    }, {
        "title": "保健器械",
        "items": ["血压计", "血糖仪", "血氧仪", "体温计", "体重秤", "胎心仪", "呼吸制氧", "雾化器", "助听器", "轮椅", "拐杖", "中医保健", "养生器械", "理疗仪", "家庭护理", "智能健康"]
    }, {
        "title": "护理护具",
        "items": ["隐形眼镜", "护理液", "口罩", "眼罩/耳塞", "跌打损伤", "暖贴", "鼻喉护理", "眼部保健", "美体护理"]
    }];
    var detail12Arr = [{
        "title": "音像",
        "items": ["音乐", "影视", "教育音像", "游戏", "影视/动漫周边"]
    }, {
        "title": "少儿",
        "items": ["0-2岁", "3-6岁", "7-10岁", "11-14岁", "儿童文学", "绘本", "科普", "幼儿启蒙", "手工游戏", "智力开发"]
    }, {
        "title": "教育",
        "items": ["教材", "中小学教辅", "考试", "外语学习", "字典词典"]
    }, {
        "title": "文艺",
        "items": ["小说", "文学", "青春文学", "传记", "动漫", "艺术", "摄影", "书法", "音乐", "绘画"]
    }, {
        "title": "经管励志",
        "items": ["管理", "金融与投资", "经济", "励志与成功"]
    }, {
        "title": "人文社科",
        "items": ["历史", "心理学", "政治/军事", "国学/古籍", "哲学/宗教", "社会科学", "法律", "文化"]
    }, {
        "title": "生活",
        "items": ["育儿/家教", "孕产/胎教", "健身保健", "旅游/地图", "美食", "时尚美妆", "家居", "手工DIY", "两性", "体育"]
    }, {
        "title": "科技",
        "items": ["计算机与互联网", "科普", "建筑", "工业技术", "电子/通信", "医学", "科学与自然", "农林"]
    }, {
        "title": "刊/原版",
        "items": ["杂志/期刊", "英文原版书", "港台图书"]
    }, {
        "title": "电子书",
        "items": ["畅读VIP", "小说", "励志与成功", "经济金融", "文学", "社科", "婚恋两性", "外文原版", "免费"]
    }, {
        "title": "数字音乐",
        "items": ["通俗流行", "古典音乐", "摇滚说唱", "爵士蓝调", "乡村民谣", "有声读物"]
    }];
    var detail13Arr = [{
        "title": "交通出行",
        "items": ["国内机票", "国际机票", "火车票", "机场服务"]
    }, {
        "title": "酒店预订",
        "items": ["国内酒店", "国际酒店", "超值精选酒店"]
    }, {
        "title": "旅游度假",
        "items": ["国内旅游", "出境旅游", "全球签证", "景点门票", "邮轮", "旅行保险"]
    }, {
        "title": "商旅服务",
        "items": ["企业差旅", "团队建设", "奖励旅游", "会议周边", "会议展览"]
    }, {
        "title": "演出票务",
        "items": ["电影选座", "演唱会", "音乐会", "话剧歌剧", "体育赛事", "舞蹈芭蕾", "戏曲综艺"]
    }, {
        "title": "生活缴费",
        "items": ["水费", "电费", "煤气费"]
    }, {
        "title": "生活服务",
        "items": ["外卖订座", "家政保洁", "休闲娱乐", "医疗美容"]
    }, {
        "title": "教育培训",
        "items": ["早教幼教", "中小学教育", "语言/留学", "学历教育", "职业技能", "兴趣爱好"]
    }, {
        "title": "彩票",
        "items": ["购彩中心", "开奖结果", "数据图表", "彩民服务"]
    }, {
        "title": "游戏",
        "items": ["QQ充值", "游戏点卡", "网页游戏", "游戏周边", "手机游戏", "单机游戏"]
    }, {
        "title": "海外生活",
        "items": ["留学", "留学后服务", "游学", "海外房产"]
    }];
    var detail14Arr = [{
        "title": "理财",
        "items": ["京东小金库", "票据理财", "基金理财", "定期理财", "固收理财", "妈妈理财", "慧投理财"]
    }, {
        "title": "众筹",
        "items": ["智能硬件", "流行文化", "生活美学", "公益", "其他权益众筹"]
    }, {
        "title": "东家",
        "items": ["私募股权"]
    }, {
        "title": "白条",
        "items": ["京东白条", "白条联名卡", "京东钢镚", "旅游白条", "安居白条", "校园金融", "京东金采"]
    }, {
        "title": "钱包",
        "items": ["京东钱包"]
    }, {
        "title": "保险",
        "items": ["车险", "健康险", "意外险", "旅行险"]
    }];
    //    创建商品分类子选项
    function createElem(Arr) {
        var html = '';
        var dd = '';
        for (var i = 0, len = Arr.length; i < len; i++) {
            (i => {
                for (var j = 0, len = Arr[i]["items"].length; j < len; j++) {
                    dd += ` <a href="###" target="_blank" class="link">${Arr[i]["items"][j]}</a>`;
                }
            })(i);
            html += `<dt class="category-detail-title"><a href="###" target="_blank" class="link category-detail-title-link">${Arr[i]["title"]}</a></dt>
                                <dd class="category-detail-item">
                                ${dd}
                                </dd>`;
            dd = '';
        }
        return html;
    }
    //鼠标移入时加载列表
    //1
    $(".p-appliance").hover(() => {
        var html = createElem(applianceArr);
        $(".appliance").html('<dl class="category-detail"></dl>');
        $('.appliance').find('.category-detail').html(html);
        $(".appliance").show();
    }, () => {
        $(".appliance").hide();
    });
    //2
    $(".p-phone").hover(() => {
        var html = createElem(phoneArr);
        $(".phone").html('<dl class="category-detail"></dl>');
        $('.phone').find('.category-detail').html(html);
        $(".phone").show();
    }, () => {
        $(".phone").hide();
    });
    //3
    $(".p-computer").hover(() => {
        var html = createElem(computerArr);
        $(".computer").html('<dl class="category-detail"></dl>');
        $('.computer').find('.category-detail').html(html);
        $(".computer").show();
    }, () => {
        $(".computer").hide();
    });
    //4
    $(".p-gear").hover(() => {
        var html = createElem(gearArr);
        $(".gear").html('<dl class="category-detail"></dl>');
        $('.gear').find('.category-detail').html(html);
        $(".gear").show();
    }, () => {
        $(".gear").hide();
    });
    //5
    $(".p-clothing").hover(() => {
        var html = createElem(clothingArr);
        $(".clothing").html('<dl class="category-detail"></dl>');
        $('.clothing').find('.category-detail').html(html);
        $(".clothing").show();
    }, () => {
        $(".clothing").hide();
    });
    //6
    $(".p-detail6").hover(() => {
        var html = createElem(detail6Arr);
        $(".detail6").html('<dl class="category-detail"></dl>');
        $('.detail6').find('.category-detail').html(html);
        $(".detail6").show();
    }, () => {
        $(".detail6").hide();
    });
    //7
    $(".p-detail7").hover(() => {
        var html = createElem(detail7Arr);
        $(".detail7").html('<dl class="category-detail"></dl>');
        $('.detail7').find('.category-detail').html(html);
        $(".detail7").show();
    }, () => {
        $(".detail7").hide();
    });
    //8
    $(".p-detail8").hover(() => {
        var html = createElem(detail8Arr);
        $(".detail8").html('<dl class="category-detail"></dl>');
        $('.detail8').find('.category-detail').html(html);
        $(".detail8").show();
    }, () => {
        $(".detail8").hide();
    });
    //9
    $(".p-detail9").hover(() => {
        var html = createElem(detail9Arr);
        $(".detail9").html('<dl class="category-detail"></dl>');
        $('.detail9').find('.category-detail').html(html);
        $(".detail9").show();
    }, () => {
        $(".detail9").hide();
    });
    //10
    $(".p-detail10").hover(() => {
        var html = createElem(detail10Arr);
        $(".detail10").html('<dl class="category-detail"></dl>');
        $('.detail10').find('.category-detail').html(html);
        $(".detail10").show();
    }, () => {
        $(".detail10").hide();
    });
    //11
    $(".p-detail11").hover(() => {
        var html = createElem(detail11Arr);
        $(".detail11").html('<dl class="category-detail"></dl>');
        $('.detail11').find('.category-detail').html(html);
        $(".detail11").show();
    }, () => {
        $(".detail11").hide();
    });
    //12
    $(".p-detail12").hover(() => {
        var html = createElem(detail12Arr);
        $(".detail12").html('<dl class="category-detail"></dl>');
        $('.detail12').find('.category-detail').html(html);
        $(".detail12").show();
    }, () => {
        $(".detail12").hide();
    });
    //13
    $(".p-detail13").hover(() => {
        var html = createElem(detail13Arr);
        $(".detail13").html('<dl class="category-detail"></dl>');
        $('.detail13').find('.category-detail').html(html);
        $(".detail13").show();
    }, () => {
        $(".detail13").hide();
    });
    //14
    $(".p-detail14").hover(() => {
        var html = createElem(detail14Arr);
        $(".detail14").html('<dl class="category-detail"></dl>');
        $('.detail14').find('.category-detail').html(html);
        $(".detail14").show();
    }, () => {
        $(".detail14").hide();
    });
})(jQuery);

//选项卡切换
($ => {
    function getIndex($elem, index) {
        var len = $elem.find('li').length;
        if (isNaN(Number(index))) {
            return 0;
        }
        if (index < 0) {
            return len - 2;
        }
        if (index > len - 2) {
            return index - 2;
        }
        if (index > 0) {
            return index - 1;
        }
        return index;
    }
    function changeTab($floorTab, $floorBody, $floorItem, $floorPanel) {
        $floorItem.on('mouseenter', function () {
            $floorTab.find('.tab-item-active').removeClass('tab-item-active');
            $(this).addClass('tab-item-active');
            var index = $floorTab.find('.tab-item-active').parent().index();
            index = getIndex($floorTab, index);
            $floorBody.find('.tab-panel-active').removeClass('tab-panel-active');
            $floorPanel.eq(index).addClass('tab-panel-active');
        });
    }
    changeTab($('.floor1-tab'), $('.floor1-body'), $('.floor1-item'), $('.floor1-panel'));
    changeTab($('.floor2-tab'), $('.floor2-body'), $('.floor2-item'), $('.floor2-panel'));
    changeTab($('.floor3-tab'), $('.floor3-body'), $('.floor3-item'), $('.floor3-panel'));
    changeTab($('.floor4-tab'), $('.floor4-body'), $('.floor4-item'), $('.floor4-panel'));
    changeTab($('.floor5-tab'), $('.floor5-body'), $('.floor5-item'), $('.floor5-panel'));
})(jQuery);

//点击回到顶部
$('#backToTop').on('click', () => {
    (function smoothScroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            if (window.requestAnimationFrame) {
                requestAnimationFrame(smoothScroll);
            } else {
                var timer = setTimeout(() => {
                    smoothScroll();
                    clearTimeout(timer);
                    timer = null;
                }, 1000 / 60);
            }
            window.scrollTo(0, currentScroll - currentScroll / 5);
        }
    })();
});

//# sourceMappingURL=index-compiled.js.map