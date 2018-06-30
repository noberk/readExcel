"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Excel = require("exceljs");
var md5_1 = require("./md5");
var Xlsx = /** @class */ (function () {
    function Xlsx(path) {
        this.path = path;
        this.workbook = new Excel.Workbook();
    }
    Xlsx.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var excel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workbook.xlsx.readFile(this.path)];
                    case 1:
                        excel = _a.sent();
                        if (excel) {
                            // get each worksheet
                            excel.eachSheet(function (worksheet, sheetId) {
                                //get definition cell 
                                var row = worksheet.getRow(5);
                                //get each row 
                                row.eachCell(function (cell, colNumber) {
                                    console.log('====================================');
                                    console.log(cell.value);
                                });
                            });
                        }
                        else {
                            console.error(excel);
                            console.error("error~~~~~~~~~~~");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Xlsx;
}());
var x = new Xlsx(__dirname + "\\alipay.xlsx");
x.read();
var appid = '20180630000181570';
var key = 'q_LFFENPEitoh_fXevZv';
// var appid: string = '2015063000000001';
// var key: string = '12345678';
var salt = (new Date).getTime();
var query = 'banana';
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
var from = 'en';
var to = 'zh';
var sign = md5_1.MD5(appid + query + salt + key);
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
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        // console.log(info.stargazers_count + " Stars");
        console.log(info);
    }
}
// Request(options, callback);
//# sourceMappingURL=excel.js.map