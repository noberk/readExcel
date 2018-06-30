"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var md5_1 = require("./md5");
// var appid: string = '20180630000181570';
// var key: string = 'q_LFFENPEitoh_fXevZv';
var appid = '2015063000000001';
var key = '12345678';
var salt = (new Date).getTime();
var query = 'banana|banana';
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
var from = 'en';
var to = 'zh';
var sign = md5_1.MD5(appid + query + salt + key);
axios_1.default({
    method: 'get',
    url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
    responseType: 'jsonp',
    data: {
        q: query,
        appid: appid,
        salt: salt,
        from: from,
        to: to,
        sign: sign
    }
}).then(function (response) {
    console.log('====================================');
    console.log(response);
    console.log('====================================');
});
//# sourceMappingURL=post.js.map