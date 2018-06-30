import axios from "axios";
import { MD5 } from "./md5";


// var appid: string = '20180630000181570';
// var key: string = 'q_LFFENPEitoh_fXevZv';
var appid: string = '2015063000000001';
var key: string = '12345678';
var salt: number = (new Date).getTime();
var query: string = 'banana|banana';
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
var from = 'en';
var to = 'zh';
var sign = MD5(appid + query + salt + key);

 


axios({
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