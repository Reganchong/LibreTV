const CUSTOMER_SITES = {
        "api_5": {
            "name": "TV-U酷资源",
            "api": "https://api.ukuapi.com/api.php/provide/vod",
            "detail": "https://api.ukuapi.com"
        },
        "api_6": {
            "name": "TV-U酷资源",
            "api": "https://api.ukuapi88.com/api.php/provide/vod",
            "detail": "https://api.ukuapi88.com"
        },
        "api_8": {
            "name": "TV-wujinapi无尽",
            "api": "https://api.wujinapi.cc/api.php/provide/vod",
            "detail": ""
        },
        "api_14": {
            "name": "TV-天涯资源",
            "api": "https://tyyszy.com/api.php/provide/vod",
            "detail": "https://tyyszy.com"
        },
        "api_18": {
            "name": "TV-无尽资源",
            "api": "https://api.wujinapi.com/api.php/provide/vod",
            "detail": ""
        },
        "api_19": {
            "name": "TV-无尽资源",
            "api": "https://api.wujinapi.me/api.php/provide/vod",
            "detail": ""
        },
        "api_20": {
            "name": "TV-无尽资源",
            "api": "https://api.wujinapi.net/api.php/provide/vod",
            "detail": ""
        },
        "api_23": {
            "name": "TV-暴风资源",
            "api": "https://bfzyapi.com/api.php/provide/vod",
            "detail": ""
        },
        "api_29": {
            "name": "TV-电影天堂资源",
            "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
            "detail": "http://caiji.dyttzyapi.com"
        },
        "api_45": {
            "name": "TV-非凡资源",
            "api": "https://cj.ffzyapi.com/api.php/provide/vod",
            "detail": "https://cj.ffzyapi.com"
        },
        "ffzynew": {
            "api": "https://api.ffzyapi.com/api.php/provide/vod",
            "name": "非凡影视new",
            "detail": "http://ffzy5.tv"
        },
        "jisu": {
            "api": "https://jszyapi.com/api.php/provide/vod",
            "name": "极速资源",
            "detail": "https://jszyapi.com"
        },

        "iqiyi": {
            "api": "https://www.iqiyizyapi.com/api.php/provide/vod",
            "name": "iqiyi资源"
        },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
