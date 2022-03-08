"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.__esModule = true;
exports.status = void 0;
var index_1 = require("./index");
var index_2 = require("./index");
var index_3 = require("./index");
var index_4 = require("./index");
var index_5 = require("./index");
var index_6 = require("./index");
var index_7 = require("./index");
var index_8 = require("./index");
var index_9 = require("./index");
var index_10 = require("./index");
function asyncFunction1(param1) {
    var _this = this;
    return new Promise(function (res) { return __awaiter(_this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = setTimeout;
                    _b = [res, 15];
                    return [4 /*yield*/, param1];
                case 1:
                    _a.apply(void 0, _b.concat([_c.sent()]));
                    return [2 /*return*/];
            }
        });
    }); });
}
var asyncFunction2 = function (param1, param2) {
    return Promise.resolve(param1 + " - " + param2);
};
function asyncFunction3(param1) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, asyncFunction1(param1)];
                case 1:
                    response = _a.sent();
                    resolve.call(void 0, response);
                    return [2 /*return*/];
            }
        });
    }); });
}
var normalFunction = function (num1, num2) {
    return Number(Number(num1) * Number(num2));
};
var _a = (0, index_8.convertAllToSyncFunction)([
    asyncFunction1,
    asyncFunction2,
    asyncFunction3,
    normalFunction,
]), function_1 = _a[0], function_2 = _a[1], function_3 = _a[2], function_4 = _a[3];
console.log(function_1("AlpSu <3"));
console.log(function_2("javascript", "typescript"));
console.log(function_3("awaiter :)"));
console.log(function_4(8, 3));
var _b = (0, index_5.syncAll)([
    Promise.resolve("i"),
    new Promise(function (resolve) { return setTimeout(resolve, 100, 'love'); }),
    asyncFunction1("AlpSuüğğğğğ"),
    "<333"
]), promise_1 = _b[0], promise_2 = _b[1], promise_3 = _b[2], promise_4 = _b[3];
console.log(promise_1);
console.log(promise_2);
console.log(promise_3);
console.log(promise_4);
var func = (0, index_4.awaiter)(function (callback) {
    function asyncFunction(param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, param.toString().toUpperCase()];
            });
        });
    }
    callback(asyncFunction("hello world!"));
});
console.log(func);
var converted = (0, index_9.convertToSyncFunction)(asyncFunction1);
console.log(converted("JS single-thread ve asenkron türde bir kütüphanedir!"));
(0, index_7.sleep)(1000);
var functionBlock = "\nconst promiseFunction = async function(param , ms) {\n    return new Promise((res) => { \n        setTimeout(() => {\n            res.call(void 0 , param)\n        } , ms)\n    });\n}\npromiseFunction.call(void 0 , \"fonksiyonlar\u0131n\u0131z\u0131 senkronize etmek \u00E7ok kolay :)\" , 2500)";
console.log((0, index_1.evalSync)(functionBlock));
var Promise_1 = asyncFunction2("github", "AlpSuuu");
console.log((0, index_2.promiseResolver)(Promise_1));
console.log((0, index_6.convertSync)(asyncFunction1, "basit kodlarla instagram üzerinden medya indirmek isterseniz npmjs.com/instagram-url-downloader"));
var promise = Promise.resolve("instagram - @alp.kahyaa");
console.log(promise.getResponse());
(0, index_7.sleep)(1000);
console.log((0, index_3.fetch)("https://www.instagram.com/reels/audio/2164441880485605/?__a=1"));
var generatorFunc = function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, asyncFunction1("i")];
            case 1:
                _a.sent();
                return [4 /*yield*/, asyncFunction2("love", "you")];
            case 2:
                _a.sent();
                return [4 /*yield*/, Promise.resolve("AlpSuuğ")];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
};
var promises = (0, index_10.generatorSync)(generatorFunc);
console.log(promises);
var p = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                resolve("Promise works!");
            })];
    });
}); };
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, p().then(function (res) { return console.log(res); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var status = true;
exports.status = status;
