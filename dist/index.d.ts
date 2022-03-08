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
declare function waitLoop(Fvalue: Function, goal: any): any;
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
declare function promiseResolver(promise: any): any;
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
declare function sleep(ms: Number): true | "this is number";
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
declare function convertSync(func: Function, arg: any): any;
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
declare function evalSync(string: string): any;
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
declare function fetch(url: any): any;
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
declare function awaiter(callback: any): any;
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
declare function convertToSyncFunction(func: any): "this is not function" | "this is not AsyncFunction" | (() => any);
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
declare function syncAll(promises: Array<any>): any[] | "this is not an array";
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
declare function convertAllToSyncFunction(functions: Array<Function>): Function[] | "this is not an array";
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
declare function generatorSync(gen: GeneratorFunction): any;
export { waitLoop };
export { promiseResolver };
export { sleep };
export { convertSync };
export { evalSync };
export { fetch };
export { syncAll };
export { awaiter };
export { generatorSync };
export { convertToSyncFunction };
export { convertAllToSyncFunction };
