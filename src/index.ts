import pauser from "./executer";

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
function prototyper(object: object, property: PropertyKey , value:any) {
    //if(typeof (object) === "function") object = object.prototype; 
    const hasOwn = Function.call.bind( Object.prototype.hasOwnProperty );
    const control_define = hasOwn( Object.prototype, '__defineGetter__' );
    /*------------------------------------------------------------------------------------------------------*/
    let get = Function.call.bind( Object["prototype"]["__lookupGetter__"] );
    let set = Function.call.bind( Object["prototype"]["__lookupSetter__"] );

    let noTarget:symbol = Symbol('acsessTarget');

    const errObj = new Object({
        [noTarget] : async(obj) => 'this is non object: ' + obj,
    }); // hatalarımız, foksiyon veya string tarzında.

    const __control__:Function = (func:any) =>  func == null || (typeof func !== 'object' && typeof func !== 'function');

    
    if (__control__(object)) {
        throw (new TypeError(errObj[noTarget](object))); // hatayı attık,
    }



    if (control_define && (get(object, property) || set(object, property))) {
        let  prop = object['__proto__'];
        object['__proto__'] = Object.prototype;
        delete object['__proto__'];
        object['__proto__'] = value;
        object['__proto__'] = prop;

    } else object[property] = value;


    return object; // objemizi döndürdük.
};

/**
 * girdiğiniz dizinin ilk elemanını filtreleyip döndürür.
 * 
 * @param {Array} obj - ilk argümanını filtrelemek istediğimiz dizi 
 * @returns İlk argümanı filtreleyip döndürüyoruz
 */
const filterFirstArg = function (obj:IArguments) : Promise<any> {
    return new Promise(async(resolve) => {
        let index:number = 0;
        let newArr:Array<any> = [];

        let arr:Array<any> = [];
        let setArgs = async () => {
            for(var key in obj) {
                let value = obj[key];

                arr = [...arr , value]
            }
        }

        await setArgs();
        for(;arr[index];) {
            let element:(String | Number) = arr[index];
            let indexElement = arr.indexOf(element);

            if(indexElement !== 0) newArr = [...newArr , element]

            index++;
        }

        resolve(newArr);
    })
}

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

prototyper(Promise.prototype , "next" , function _next(this: typeof Promise.prototype , callback:Function) {
  return this.then((response) => {
      callback.call(void 0 , { response })
  });
})

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
function waitLoop(Fvalue:Function , goal:any) {
    while(Fvalue() !== goal) {
        execute.call(void 0 , Fvalue());
    }


    function execute(checkVal:Boolean) : void {
        return function () {
            pauser['activate'] = function () {
                let executer: Function = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']()
            if(checkVal) void pauser['activate']();
        }()
    }

    return goal;
}

/**
 * tag bulma fonksiyonu
 * 
 * @param {any} value - Tag ini merak ettiğiniz değer 
 * @returns {Symbol.toStringTag}
 */
function tag(value:any) : String {
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
function promiseResolver(promise:any) : any {
    var still:Boolean = true, resolvedData : any;
    if(tag.call(void 0 , promise) !== "Promise") return "this is not promise"

    promise.next(({response} : any) => { resolvedData = response , still = false});

    for(;still;) execute.call(void 0 , still)

    function execute(checkVal:Boolean) {
        return function() {
            pauser['activate'] = function () {
                let executer: Function = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']()
            if(checkVal) void pauser['activate']();
        }()
    }

    return resolvedData
}

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
function sleep(ms:Number) {
    if(typeof ms !== "number") return "this is number"
    var still:Boolean = true

    setTimeout(() => {
        still = false
    } , ms)

    for(;still;) execute.call(void 0 , still)

    function execute(checkVal:Boolean) {
        return function() {
            pauser['activate'] = function () {
                let executer: Function = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']()
            if(checkVal) void pauser['activate']();
        }()
    }

    return true;
}

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
function convertSync(func:Function , arg:any) {
    if(typeof func !== "function") return "this is not function"
    let argsx:any = arguments
    if (tag.call(void 0, func) !== "AsyncFunction" && tag.call(void 0, func.apply(void 0 , Array.from(arguments).filter(x => x !== Array.from(argsx)[0]))) !== "Promise") return "this function is not async"
    var functionArguments:Array<any> = [] , still:Boolean = true, resolvedData:any;

    let promise:Promise<any> = filterFirstArg.call(void 0 , arguments)
    let funcArgs:any = promise['getResponse']()
    for(var value of funcArgs) functionArguments.push(value);

    func.apply(void 0, functionArguments).next(({response}) => { resolvedData = response , still = false});

    for(;still;) execute.call(void 0 , still)

    function execute(checkVal:Boolean) : void {
        return function() {
            pauser['activate'] = function () {
                let executer: Function = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']()
            if(checkVal) void pauser['activate']();
        }()
    }

    return resolvedData;
}

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
function evalSync(string:string) {
    if(typeof string !== "string") string = String(string);
    
    var functionArguments:Array<any> = [] , still:Boolean = true, resolvedData:any;

    let promise:Promise<any> = filterFirstArg.call(void 0 , arguments)
    let funcArgs:any = promise['getResponse']()
    for(var value of funcArgs) functionArguments.push(value);

    if(tag.call(void 0 , eval(string)) !== "Promise") return "this is not promise"

    eval(string).next(({response}) => { 
        resolvedData = response , still = false
    });

    for(;still;) execute.call(void 0 , still)

    function execute(checkVal) {
        return function() {
            pauser['activate'] = function () {
                let executer: Function = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']()
            if(checkVal) void pauser['activate']();
        }()
    }

    return resolvedData;
}

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
    let data , still = true;

    require("https").get(url, res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            body = JSON.parse(body);
            data = body;
            still = false;
        });
    });

    for(;still;) execute.call(void 0 , still)

    function execute(checkVal) {
        return function() {
            pauser['activate'] = function () {
                let executer: Function = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']()
            if(checkVal) void pauser['activate']();
        }()
    }

    return data
}

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
    return function() {
        var still = true , resolve;

        let prevArgs:Array<any> = [];
        let argsx:any = arguments
        for(var value of argsx) prevArgs.push(value)

        let curArgs = (resolveData) =>  {
            resolve = tag.call(void 0 , resolveData) === "Promise" ? resolveData.getResponse() : resolveData , still = false
        }


        var args = [...prevArgs , curArgs];

        prototyper(Function.prototype , "run" ,  function(this: typeof Function.prototype) {
                let args:Array<any> = [];
                let argsx2:any = arguments
                for(var value of argsx2) args.push(value)
                
                return this.call(void 0 , ...args)
            
        })


        void callback.run(...args);

        while (still) void execute["run"](still);

        return resolve

        /**
         * Döngüyü devam ettirmesi için girdiğimiz değer => true
         * 
         * @param {Boolean} kontrol 
         * @returns {Function}
         */
        function execute(kontrol) {
            return function() {
                pauser['activate'] = function () {
                    let executer: Function = Function.call.bind(require("../executer/executer.js")['execute']);
                    executer.call(void 0);
                };
                void process['_tickCallback']()
                if(kontrol) void pauser['activate']();
            }()
        }
    }()
}

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
    if(typeof func !== "function") return "this is not function"
    if (tag.call(void 0, func) !== "AsyncFunction" && tag.call(void 0 , func.apply(void 0 , arguments)) !== "Promise") return "this is not AsyncFunction";
    return function convertedFunc() {
        var resolvedData , still = true;
        
        let args:Array<any> = []
        let argsx:any = arguments
        for(var arg of argsx) args.push(arg);

        func.apply(void 0 , args).next(({response}) => { resolvedData = response , still = false })

        for(;still;) execute.call(void 0 , still)

        function execute(checkVal) {
            return function() {
                pauser['activate'] = function () {
                    let executer: Function = Function.call.bind(require("../executer/executer.js")['execute']);
                    executer.call(void 0);
                };
                void process['_tickCallback']()
                if(checkVal) void pauser['activate']();
            }()
        }

        return resolvedData
    }
}


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
function syncAll(promises:Array<any>) {
    if(typeof promises !== "object") return "this is not an array"
    var push:Array<any> = [];
    for(const promise of promises) {
        var still = true, resolvedData;
        if (tag.call(void 0, promise) !== "Promise") {
            push.push(promise);
        } else {
            promise.next(({response}) => { resolvedData = response , still = false });
        
            for(;still;) execute.call(void 0 , still)
        
            push.push(resolvedData);
        }
    }

    function execute(checkVal) {
        return function() {
            pauser['activate'] = function () {
                let executer: Function = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']()
            if(checkVal) void pauser['activate']();
        }()
    }

    while(push.length === (promises.length - 1)){
        process["_tickCallback"]();
        if(push.length === (promises.length - 1)) require("../executer/executer.js")['execute']();
    }

    return push
}

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
function convertAllToSyncFunction(functions:Array<Function>) {
    if(typeof functions !== "object") return "this is not an array"
    var push:Array<Function> = [];
    for(const func of functions) {
        if (tag.call(void 0, func) !== "AsyncFunction" && tag.call(void 0 , func.apply(void 0, arguments)) !== "Promise") {
            push.push(func);
        } else {
            const convertedFunc = selectFunc(func)
            push.push(convertedFunc)
        }

    }

    function selectFunc(func:Function) : Function {
        return function convertedFunc() {
            var resolvedData , still = true;
            
            let args:Array<any> = []
            let argsx:any = arguments
            for(const arg of argsx) args.push(arg);

            func.apply(void 0 , args).next(({response}) => { resolvedData = response , still = false })

            for(;still;) execute.call(void 0 , still)

            function execute(checkVal) {
                return function() {
                    pauser['activate'] = function () {
                        let executer: Function = Function.call.bind(require("../executer/executer.js")['execute']);
                        executer.call(void 0);
                    };
                    void process['_tickCallback']()
                    if(checkVal) void pauser['activate']();
                }()
            }

            return resolvedData
        }
    }
    while(push.length === (functions.length - 1)){
        process["_tickCallback"]();
        if(push.length === (functions.length - 1)) require("../executer/executer.js")['execute']();
    }

    return push
}

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
function generatorSync(gen:GeneratorFunction) {
    const func:Generator = gen();
    return function() {
        let index:Number = 0
        let nexted:any = func.next();
        let yields:Array<any> = [];
        let push:Array<any> = [];

        while (!nexted.done) {
            
            let obj:string|number|any = nexted;

            yields.push(obj.value);
            nexted = func.next()
            index = Number(index) + 1
        }

        for(const promise of yields) {
            var still:Boolean = true, resolvedData:any;

            if (tag.call(void 0, promise) !== "Promise") {
                push.push(promise);
            } else {        
                promise.next(({response} : any) => { resolvedData = response , still = false });
            
                for(;still;) execute.call(void 0 , still)
            
                push.push(resolvedData);
            }
        }

        function execute(checkVal:Boolean) {
            return function() {
                pauser['activate'] = function () {
                    let executer: Function = Function.call.bind(require("../executer/executer.js")['execute']);
                    executer.call(void 0);
                };
                void process['_tickCallback']()
                if(checkVal) void pauser['activate']();
            }()
        }
    
        while(push.length === (yields.length - 1)){
            process["_tickCallback"]();
            if(push.length === (yields.length - 1)) require("../executer/executer.js")['execute']();
        }
    
        return push.length === 1 ? push.pop() : push
    }()
}


function FunctionPromiseResolver<T>(asyncFunction:(argumentss:Array<unknown>) => Promise<T>, argumentss:Array<unknown>): Promise<T> {
    return new Promise(async function(this : typeof Promise.prototype , resolveData:Function , reject:Function) {
        let func:Function = asyncFunction
        let err:Error;
        let res:any;

        let response:any = await (func.apply(this , argumentss))
        .then(_res => {
            res = _res
        })
        .catch(_err => {
            err = _err
        })
        .finally(() => {
            if(err) reject(err);
            if(res) resolveData(res);
        })
    })
}
FunctionPromiseResolver(async(param) => { return param } , ["aşslkd"])


/**
 * Promise fonksliyonumuzun prototipiğ arasına getResponse adında bir fonksiyon ekledik
 * 
 * @returns {void}
 */
prototyper(Promise.prototype , "getResponse" , function(this : typeof Promise.prototype) {
    var still = true, resolvedData;

    this.then((response) => { resolvedData = response , still = false });

    for(;still;) execute.call(void 0 , still)

    function execute(checkVal) {
        return function() {
            pauser['activate'] = function () {
                let executer: Function = Function.call.bind(require("../executer/executer.js")['execute']);
                executer.call(void 0);
            };
            void process['_tickCallback']()
            if(checkVal) void pauser['activate']();
        }()
    }

    return resolvedData
})


export { waitLoop }
export { promiseResolver}
export { sleep }
export { convertSync }
export { evalSync }
export { fetch }
export { syncAll }
export { awaiter }
export { generatorSync }
export { convertToSyncFunction } 
export { convertAllToSyncFunction }