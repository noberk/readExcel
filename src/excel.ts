import * as Excel from "exceljs";
import * as Request from "request";
import { MD5 } from "./md5";
type Workbook = Excel.Workbook;
class Xlsx {
          private workbook: Workbook;
          constructor(public path: string) {
                    this.workbook = new Excel.Workbook();
          }
          async read() {
                    var excel = await this.workbook.xlsx.readFile(this.path);
                    if (excel) {
                              excel.eachSheet((worksheet, sheetId) => {
                                        console.log(`${worksheet.name}  ${sheetId}`);
                              })
                    } else {
                              console.error(excel);
                              console.error("error~~~~~~~~~~~");
                    }
          }

}


// var x = new Xlsx(`${__dirname}\\alipay.xlsx`);
// x.read();
 var appid: string = '20180630000181570';
var key: string = 'q_LFFENPEitoh_fXevZv';
// var appid: string = '2015063000000001';
// var key: string = '12345678';
var salt: number = (new Date).getTime();
var query: string = 'banana';
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
var from = 'en';
var to = 'zh';
var sign = MD5(appid + query + salt + key);
var options = {
          url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
          type: 'get',
          dataType: 'jsonp',
          data: {
                    q: query,
                    appid: appid,
                    salt: salt,
                    from: from,
                    to: to,
                    sign: sign
          }
};

function callback(error: any, response: any, body: any) {
          if (!error && response.statusCode == 200) {
                    var info = JSON.parse(body);
                    // console.log(info.stargazers_count + " Stars");
                    console.log(info);
          }
}

Request(options, callback);