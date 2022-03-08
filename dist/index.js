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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.convertAllToSyncFunction = exports.convertToSyncFunction = exports.generatorSync = exports.awaiter = exports.syncAll = exports.fetch = exports.evalSync = exports.convertSync = exports.sleep = exports.promiseResolver = exports.waitLoop = void 0;
var executer_1 = __importDefault(require("./executer"));
/**
 * @private
 * bir objeye ya da bir constructor'ın prototipi arasına bir property ekler.
 *
 * @param {Object} object - property eklemek istediğiniz obje ya da fonksiyon
 * @param {String} property - eklemek istediğiniz property'nin adı
 * @param {} value - property'ê vereceğiniz değer
 *
 * @returns Objemizi tekrar döndürüyoruz
 *
 * @example {
 *      let object = { AlpSu : "adam" };
 *
 *      prototyper(object , "javascript" , "_<3_")
 *
 *      console.log(object) // output : { AlpSu : "adam" , javascript , "_<3_ };
 * }
 *
 */
function prototyper(object, property, value) {
    var _a;
    var _this = this;
    //if(typeof (object) === "function") object = object.prototype; 
    var hasOwn = Function.call.bind(Object.prototype.hasOwnProperty);
    var control_define = hasOwn(Object.prototype, '__defineGetter__');
    /*------------------------------------------------------------------------------------------------------*/
    var get = Function.call.bind(Object["prototype"]["__lookupGetter__"]);
    var set = Function.call.bind(Object["prototype"]["__lookupSetter__"]);
    var noTarget = Symbol('acsessTarget');
    var errObj = new Object((_a = {},
        _a[noTarget] = function (obj) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, 'this is non object: ' + obj];
        }); }); },
        _a)); // hatalarımız, foksiyon veya string tarzında.
    var __control__ = function (func) { return func == null || (typeof func !== 'object' && typeof func !== 'function'); };
    if (__control__(object)) {
        throw (new TypeError(errObj[noTarget](object))); // hatayı attık,
    }
    if (control_define && (get(object, property) || set(object, property))) {
        var prop = object['__proto__'];
        object['__proto__'] = Object.prototype;
        delete object['__proto__'];
        object['__proto__'] = value;
        object['__proto__'] = prop;
    }
    else
        object[property] = value;
    return object; // objemizi döndürdük.
}
;
/**
 * girdiğiniz dizinin ilk elemanını filtreleyip döndürür.
 *
 * @param {Array} obj - ilk argümanını filtrelemek istediğimiz dizi
 * @returns İlk argümanı filtreleyip döndürüyoruz
 */
var filterFirstArg = function (obj) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var index, newArr, arr, setArgs, element, indexElement;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    index = 0;
                    newArr = [];
                    arr = [];
                    setArgs = function () { return __awaiter(_this, void 0, void 0, function () {
                        var key, value;
                        return __generator(this, function (_a) {
                            for (key in obj) {
                                value = obj[key];
                                arr = __spreadArray(__spreadArray([], arr, true), [value], false);
                            }
                            return [2 /*return*/];
                        });
                    }); };
                    return [4 /*yield*/, setArgs()];
                case 1:
                    _a.sent();
                    for (; arr[index];) {
                        element = arr[index];
                        indexElement = arr.indexOf(element);
                        if (indexElement !== 0)
                            newArr = __spreadArray(__spreadArray([], newArr, true), [element], false);
                        index++;
                    }
                    resolve(newArr);
                    return [2 /*return*/];
            }
        });
    }); });
};
/**
 * Promise fonksiyonunun prototipi arasına eklediğimiz basit bir fonksiyon
 *
 * @param {Function} callback - fonksiyonu döndürmek yerine belirttiğiniz fonksiyonu çağırıyoruz
 * @returns {Object} Promise'in resolve değerini obje içinde döndürüyoruz
 *
 * @example {
 *      let promise = new Promise((resolve) => { resolve("AlpSu") });
 *
 *      promise.next(({response}) => { console.log(response) }) // output: "AlpSu";
 * }
 */
prototyper(Promise.prototype, "next", function _next(callback) {
    return this.then(function (response) {
        callback.call(void 0, { response: response });
    });
});
/**
 * fonksiyon argümanlarımızda belirttiğimiz birinci argüman ve ikinci argüman birbirine eşit olana kadar göndüye alır
 * ve kod satırının bir alt koduna geçip çalıştırmaz javascript'in çalışma prensibinin aksine bir hareket çünkü javscript
 * asenkrondur kod içeriğindeki işlemler birbirini beklemez, otomarik çalışır...
 *
 * @param {Function} Fvalue - bir sonraki argümana gönüşecel olan değişken değeri dönrün fonksiyon
 * @param {String} goal  - hedef! ilk argümanın olması gereken değer...
 *
 * @returns fonksiyonumuzun 2. parametresini döndürüyoruz
 *
 * @example {
 *      let promise = new Promise((resolve) => { setTimeout(resolve("AlpSu") , 2000) }) , go = "on" , value;
 *
 *      promise.next(({response}) => { go = of , value = response})
 *
 *      function check() { return go }
 *      waitLoop(check , "of")
 *
 *      console.log(value)
 * }
 */
function waitLoop(Fvalue, goal) {
    while (Fvalue() !== goal) {
        execute.call(void 0, Fvalue());
    }
    function execute(checkVal) {
        return function () {
            executer_1["default"]['activate'] = function () {
                var executer = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']();
            if (checkVal)
                void executer_1["default"]['activate']();
        }();
    }
    return goal;
}
exports.waitLoop = waitLoop;
/**
 * tag bulma fonksiyonu
 *
 * @param {any} value - Tag ini merak ettiğiniz değer
 * @returns {Symbol.toStringTag}
 */
function tag(value) {
    return value[Symbol.toStringTag];
}
/**
 * ilk argümana girmiş olduğunuz promise göndüren bir fonksiyon ya da bir promise'in response veren değeri dönrürür.
 *
 * @param {Promise} promise - response değerini döndürmek istediğiniz promise
 * @returns Resolve edilen değer
 *
 * @example {
 *      let promise = new Promise((response) => { response("AlpSu") });
 *
 *      let resolved = promiseRepolver(promise)
 *      console.log(resolved) // outpuy: "AlpSu";
 * }
 */
function promiseResolver(promise) {
    var still = true, resolvedData;
    if (tag.call(void 0, promise) !== "Promise")
        return "this is not promise";
    promise.next(function (_a) {
        var response = _a.response;
        resolvedData = response, still = false;
    });
    for (; still;)
        execute.call(void 0, still);
    function execute(checkVal) {
        return function () {
            executer_1["default"]['activate'] = function () {
                var executer = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']();
            if (checkVal)
                void executer_1["default"]['activate']();
        }();
    }
    return resolvedData;
}
exports.promiseResolver = promiseResolver;
/**
 * kod bloğunun içinde bir alttaki işleme geçmeden belirttiğiniz milisaniye kadar beklemeye yarayan fonksiyon
 * await kullanmaktan bıktıysan sana göre <3
 *
 * @param {Number} ms - bekliyeceğin süreyi milisaniye cinsinden yaz => 1s: 1000ms
 * @returns {Boolean} Boolean
 *
 * @example {
 *      console.log("Hello!")
 *      sleep(2 * 1000)
 *      console.log("AlpSu!")
 * }
 */
function sleep(ms) {
    if (typeof ms !== "number")
        return "this is number";
    var still = true;
    setTimeout(function () {
        still = false;
    }, ms);
    for (; still;)
        execute.call(void 0, still);
    function execute(checkVal) {
        return function () {
            executer_1["default"]['activate'] = function () {
                var executer = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']();
            if (checkVal)
                void executer_1["default"]['activate']();
        }();
    }
    return true;
}
exports.sleep = sleep;
/**
 * girmiş olduğunuz asenkron fonksiyonun belirttiğiniz parametreleriyle birlikte çalıştırıp göndürdüğü promise'in resolve değerini dönrürür
 *
 * @param {AsyncFunction} func - çalıştırmak ve resolve değerini elde etmek istediğiniz fonksiyon
 * @param {*} arguments[...] - çalıştırmak istediğiniz fonksiyonun parametrelerini yan yana yazın
 *
 * @returns resolve edilen değer
 *
 * @example {
 *      let funcX = async function(param1 , param2) {
 *           return param1 === param2
 *      }
 *
 *      let resolvedValue = convertSync(funcX , "AlpSuuu" , "AlpSuu")
 *      console.log(resolvedValue) // output: false;
 * }
 */
function convertSync(func, arg) {
    if (typeof func !== "function")
        return "this is not function";
    var argsx = arguments;
    if (tag.call(void 0, func) !== "AsyncFunction" && tag.call(void 0, func.apply(void 0, Array.from(arguments).filter(function (x) { return x !== Array.from(argsx)[0]; }))) !== "Promise")
        return "this function is not async";
    var functionArguments = [], still = true, resolvedData;
    var promise = filterFirstArg.call(void 0, arguments);
    var funcArgs = promise['getResponse']();
    for (var _i = 0, funcArgs_1 = funcArgs; _i < funcArgs_1.length; _i++) {
        var value = funcArgs_1[_i];
        functionArguments.push(value);
    }
    func.apply(void 0, functionArguments).next(function (_a) {
        var response = _a.response;
        resolvedData = response, still = false;
    });
    for (; still;)
        execute.call(void 0, still);
    function execute(checkVal) {
        return function () {
            executer_1["default"]['activate'] = function () {
                var executer = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']();
            if (checkVal)
                void executer_1["default"]['activate']();
        }();
    }
    return resolvedData;
}
exports.convertSync = convertSync;
/**
 * çalıltırmak istediğiniz kodu string içerisinde yazın eval ile birlikte kodu çalıştırır.
 * fakat eval ile döndürdüğünüz değer bir promise olak zorunda..!
 *
 * @param {String} string - eval yardımı ile çalıştırmak istediğiniz
 * @returns resolve Edilen değer
 *
 * @example {
 *     let evaledCode = evalSync(`
 *         const promiseFunction = async function(param) {
 *               return new Promise((res) => {
 *                   setTimeout(res , 2500 , param)
 *               });
 *           }
 *
 *           promiseFunction.call(void 0 , "AlpSu")
 *      `)
 *
 *      console.log(evaledCode) // output: AlpSu;
 * }
 */
function evalSync(string) {
    if (typeof string !== "string")
        string = String(string);
    var functionArguments = [], still = true, resolvedData;
    var promise = filterFirstArg.call(void 0, arguments);
    var funcArgs = promise['getResponse']();
    for (var _i = 0, funcArgs_2 = funcArgs; _i < funcArgs_2.length; _i++) {
        var value = funcArgs_2[_i];
        functionArguments.push(value);
    }
    if (tag.call(void 0, eval(string)) !== "Promise")
        return "this is not promise";
    eval(string).next(function (_a) {
        var response = _a.response;
        resolvedData = response, still = false;
    });
    for (; still;)
        execute.call(void 0, still);
    function execute(checkVal) {
        return function () {
            executer_1["default"]['activate'] = function () {
                var executer = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']();
            if (checkVal)
                void executer_1["default"]['activate']();
        }();
    }
    return resolvedData;
}
exports.evalSync = evalSync;
/**
 * Https modülü üzerinden girmiş oluduğunuz bağlantıyı aratır
 *
 * @param {String} url - aratmak istediğiniz url
 * @returns {Object} Obje
 *
 * @example {
 *      let data = fetch("https://jsonplaceholder.typicode.com/users")
 *
 *      console.log(data) // output: Object<void>
 * }
 */
function fetch(url) {
    var data, still = true;
    require("https").get(url, function (res) {
        res.setEncoding("utf8");
        var body = "";
        res.on("data", function (data) {
            body += data;
        });
        res.on("end", function () {
            body = JSON.parse(body);
            data = body;
            still = false;
        });
    });
    for (; still;)
        execute.call(void 0, still);
    function execute(checkVal) {
        return function () {
            executer_1["default"]['activate'] = function () {
                var executer = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']();
            if (checkVal)
                void executer_1["default"]['activate']();
        }();
    }
    return data;
}
exports.fetch = fetch;
/**
 * senkron bir fonksiyonda await kullanmadan promise verilerini çekmemizi sağlayan fonksiyon
 *
 * @param {Function} callback - bir callback giriyoruz ve callback'e promise'i döndürüyoruz.
 * @returns resolve edilen değer
 *
 * @example {
 *      let awaited = awaiter(callback => {
 *          callback(Promise.resolve("AlpSuı"))
 *      })
 *
 *      console.log(awaited) // output: "AlpSu";
 * }
 */
function awaiter(callback) {
    /**
     * Promise'i ya da asenkron fonksiyonu döndürmemize yarayan fonksiyon
     */
    return function () {
        var still = true, resolve;
        var prevArgs = [];
        var argsx = arguments;
        for (var _i = 0, argsx_1 = argsx; _i < argsx_1.length; _i++) {
            var value = argsx_1[_i];
            prevArgs.push(value);
        }
        var curArgs = function (resolveData) {
            resolve = tag.call(void 0, resolveData) === "Promise" ? resolveData.getResponse() : resolveData, still = false;
        };
        var args = __spreadArray(__spreadArray([], prevArgs, true), [curArgs], false);
        prototyper(Function.prototype, "run", function () {
            var args = [];
            var argsx2 = arguments;
            for (var _i = 0, argsx2_1 = argsx2; _i < argsx2_1.length; _i++) {
                var value = argsx2_1[_i];
                args.push(value);
            }
            return this.call.apply(this, __spreadArray([void 0], args, false));
        });
        void callback.run.apply(callback, args);
        while (still)
            void execute["run"](still);
        return resolve;
        /**
         * Döngüyü devam ettirmesi için girdiğimiz değer => true
         *
         * @param {Boolean} kontrol
         * @returns {Function}
         */
        function execute(kontrol) {
            return function () {
                executer_1["default"]['activate'] = function () {
                    var executer = Function.call.bind(require("../executer/executer.js")['execute']);
                    executer.call(void 0);
                };
                void process['_tickCallback']();
                if (kontrol)
                    void executer_1["default"]['activate']();
            }();
        }
    }();
}
exports.awaiter = awaiter;
/**
 * bu fonksiyonumuz asenkron bir fonksiyonun senkron halini yeni bir fonksiyon oluşturarak dönrürür
 * ve asenkron fonksiyonunuzun senkron halini normal bir şekilde paaametrelerini girerek kullanabilirsiniz <3
 *
 * @param {AsyncFunction} func - senkron fonksiyona çevireceğiniz asenkron fonksiyon
 * @returns asenkron fonksiyonunuzun senkron hali :)
 *
 * @example {
 *      let asyncFunc = async function(param1 , param2) {
 *          return param1 / param2
 *      }
 *
 *      let convertedFunc = convertToSyncFunction(asyncFunc)
 *      console.log(convertedFunc.call(this , 32 , 8)) // output: "AlpSu";
 * }
 */
function convertToSyncFunction(func) {
    if (typeof func !== "function")
        return "this is not function";
    if (tag.call(void 0, func) !== "AsyncFunction" && tag.call(void 0, func.apply(void 0, arguments)) !== "Promise")
        return "this is not AsyncFunction";
    return function convertedFunc() {
        var resolvedData, still = true;
        var args = [];
        var argsx = arguments;
        for (var _i = 0, argsx_2 = argsx; _i < argsx_2.length; _i++) {
            var arg = argsx_2[_i];
            args.push(arg);
        }
        func.apply(void 0, args).next(function (_a) {
            var response = _a.response;
            resolvedData = response, still = false;
        });
        for (; still;)
            execute.call(void 0, still);
        function execute(checkVal) {
            return function () {
                executer_1["default"]['activate'] = function () {
                    var executer = Function.call.bind(require("../executer/executer.js")['execute']);
                    executer.call(void 0);
                };
                void process['_tickCallback']();
                if (checkVal)
                    void executer_1["default"]['activate']();
            }();
        }
        return resolvedData;
    };
}
exports.convertToSyncFunction = convertToSyncFunction;
/**
 * bir dizinin içindeki promise'leri teker teker resolve değerlerini alır ve bir array olarak döndürür
 *
 * @param {Array<Promise>} promises - içinde promise fonksiyonları olan bir dizi
 * @returns Promise'lerin response değerlerini içinde barındıran bir dizi
 *
 * @example {
 *      let [ promise_1 , promise_2 ] = syncAll([
 *          Promise.resolve("AlpSuuu"),
 *          new Promise((resolve) => setTimeout(resolve, 100, '<33')),
 *      ])
 *
 *      console.log(promise_1) // output: "AlpSuuu"
 *      console.log(promise_2) // output: "<33"
 * }
 */
function syncAll(promises) {
    if (typeof promises !== "object")
        return "this is not an array";
    var push = [];
    for (var _i = 0, promises_1 = promises; _i < promises_1.length; _i++) {
        var promise = promises_1[_i];
        var still = true, resolvedData;
        if (tag.call(void 0, promise) !== "Promise") {
            push.push(promise);
        }
        else {
            promise.next(function (_a) {
                var response = _a.response;
                resolvedData = response, still = false;
            });
            for (; still;)
                execute.call(void 0, still);
            push.push(resolvedData);
        }
    }
    function execute(checkVal) {
        return function () {
            executer_1["default"]['activate'] = function () {
                var executer = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']();
            if (checkVal)
                void executer_1["default"]['activate']();
        }();
    }
    while (push.length === (promises.length - 1)) {
        process["_tickCallback"]();
        if (push.length === (promises.length - 1))
            require("../executer/executer.js")['execute']();
    }
    return push;
}
exports.syncAll = syncAll;
/**
 * bir dizinin içindeki asenkron fonksiyonları teker teker senkron fonksiyonuna çevirir ve bir array olarak döndürür
 *
 * @param {Array<Function>} functions
 * @returns dizinin içinde resolve edilen değerler
 *
 * @example {
 *      async function function1(value) {
 *          return new Promise((res) => {
 *              setTimeout(res , 15 , value)
 *          });
 *      }
 *
 *      async function function2(param1 , param2) {
 *          return param1 + param2;
 *      }
 *
 *      let [ syncFunction_1 , syncFunction_2 ] = convertAllToSyncFunction([ function1 , function2 ]);
 *      console.log(syncFunction_1("AlpSuu")) // output: "AlpSu"
 *      console.log(syncFunction_2(15 , 29)) // output: 44
 * }
 */
function convertAllToSyncFunction(functions) {
    if (typeof functions !== "object")
        return "this is not an array";
    var push = [];
    for (var _i = 0, functions_1 = functions; _i < functions_1.length; _i++) {
        var func = functions_1[_i];
        if (tag.call(void 0, func) !== "AsyncFunction" && tag.call(void 0, func.apply(void 0, arguments)) !== "Promise") {
            push.push(func);
        }
        else {
            var convertedFunc = selectFunc(func);
            push.push(convertedFunc);
        }
    }
    function selectFunc(func) {
        return function convertedFunc() {
            var resolvedData, still = true;
            var args = [];
            var argsx = arguments;
            for (var _i = 0, argsx_3 = argsx; _i < argsx_3.length; _i++) {
                var arg = argsx_3[_i];
                args.push(arg);
            }
            func.apply(void 0, args).next(function (_a) {
                var response = _a.response;
                resolvedData = response, still = false;
            });
            for (; still;)
                execute.call(void 0, still);
            function execute(checkVal) {
                return function () {
                    executer_1["default"]['activate'] = function () {
                        var executer = Function.call.bind(require("../executer/executer.js")['execute']);
                        executer.call(void 0);
                    };
                    void process['_tickCallback']();
                    if (checkVal)
                        void executer_1["default"]['activate']();
                }();
            }
            return resolvedData;
        };
    }
    while (push.length === (functions.length - 1)) {
        process["_tickCallback"]();
        if (push.length === (functions.length - 1))
            require("../executer/executer.js")['execute']();
    }
    return push;
}
exports.convertAllToSyncFunction = convertAllToSyncFunction;
/**
 * promise fonksiyonları teker teker bir jeneratör içinde yield ediniz
 * fonksiyon yield edilen promise fonksiyonların resolve değerlerini bir array olarak döndürür
 *
 * @param {GeneratorFunction} gen - promise'leri teker teker yield ettiğimiz jeneratör fonksiyonumuz
 * @returns {Array<PromiseResponse>}
 *
 * @example {
 *      async function function1(value) {
 *          return new Promise((res) => {
 *              setTimeout(res , 15 , value)
 *          });
 *      }
 *
 *      async function function2(param1 , param2) {
 *          return param1 + param2;
 *      }
 *
 *      let promises = generatorSync(function*() {
 *          yield function1("AlpSuu")
 *          yield function2(15 , 29)
 *      });
 *
 *      console.log(promises) // output: Array([ 'AlpSuu' , 44 ]);
 * }
 */
function generatorSync(gen) {
    var func = gen();
    return function () {
        var index = 0;
        var nexted = func.next();
        var yields = [];
        var push = [];
        while (!nexted.done) {
            var obj = nexted;
            yields.push(obj.value);
            nexted = func.next();
            index = Number(index) + 1;
        }
        for (var _i = 0, yields_1 = yields; _i < yields_1.length; _i++) {
            var promise = yields_1[_i];
            var still = true, resolvedData;
            if (tag.call(void 0, promise) !== "Promise") {
                push.push(promise);
            }
            else {
                promise.next(function (_a) {
                    var response = _a.response;
                    resolvedData = response, still = false;
                });
                for (; still;)
                    execute.call(void 0, still);
                push.push(resolvedData);
            }
        }
        function execute(checkVal) {
            return function () {
                executer_1["default"]['activate'] = function () {
                    var executer = Function.call.bind(require("../executer/executer.js")['execute']);
                    executer.call(void 0);
                };
                void process['_tickCallback']();
                if (checkVal)
                    void executer_1["default"]['activate']();
            }();
        }
        while (push.length === (yields.length - 1)) {
            process["_tickCallback"]();
            if (push.length === (yields.length - 1))
                require("../executer/executer.js")['execute']();
        }
        return push.length === 1 ? push.pop() : push;
    }();
}
exports.generatorSync = generatorSync;
function FunctionPromiseResolver(asyncFunction, argumentss) {
    return new Promise(function (resolveData, reject) {
        return __awaiter(this, void 0, void 0, function () {
            var func, err, res, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        func = asyncFunction;
                        return [4 /*yield*/, (func.apply(this, argumentss))
                                .then(function (_res) {
                                res = _res;
                            })["catch"](function (_err) {
                                err = _err;
                            })["finally"](function () {
                                if (err)
                                    reject(err);
                                if (res)
                                    resolveData(res);
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
}
FunctionPromiseResolver(function (param) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, param];
}); }); }, ["aşslkd"]);
/**
 * Promise fonksliyonumuzun prototipiğ arasına getResponse adında bir fonksiyon ekledik
 *
 * @returns {void}
 */
prototyper(Promise.prototype, "getResponse", function () {
    var still = true, resolvedData;
    this.then(function (response) { resolvedData = response, still = false; });
    for (; still;)
        execute.call(void 0, still);
    function execute(checkVal) {
        return function () {
            executer_1["default"]['activate'] = function () {
                var executer = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']();
            if (checkVal)
                void executer_1["default"]['activate']();
        }();
    }
    return resolvedData;
});
