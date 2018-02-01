var homepageObj = (function () {
    var data = {
        "menu": [
            {
                "id": 1, "name": "baidu", "href": "http://www.baidu.com", "desc": "", "type": ""
            },
            {
                "id": 1, "name": "github", "href": "https://github.com", "desc": "", "type": ""
            }
        ]
    };
    return {
        GetData: function (type) {
            return data[type];
        }
    };
})()