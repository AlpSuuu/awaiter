import { evalSync } from "./index";
import { promiseResolver } from "./index";
import { fetch } from "./index";
import { awaiter } from "./index";
import { syncAll} from "./index";
import { convertSync} from "./index";
import { sleep } from "./index";
import { convertAllToSyncFunction } from "./index";
import { convertToSyncFunction } from "./index";
import { generatorSync } from "./index";
import { Emitter } from "./index";

Emitter.call(async function(data:any) {
    console.log(data)
})
function asyncFunction1<T>(param1:String) : Promise<T> {
    return new Promise(async (res) => { 
        setTimeout(res , 15 , await param1)
    });
} 

const asyncFunction2:Function = function(param1:(String | Number) ,  param2:(String | Number)) {
    return Promise.resolve(param1 + " - " + param2)
}

function asyncFunction3<T>(param1:String) : Promise<T> {
    return new Promise(async(resolve:Function , reject:Function) => {
        let response =  await asyncFunction1(param1);

        resolve.call(void 0 , response)
    })
}

const normalFunction = function(num1:Number , num2:Number) : Number {
    return Number(Number(num1) * Number(num2))
}

let [ function_1 , function_2 , function_3 , function_4 ]:any = convertAllToSyncFunction([
    asyncFunction1,
    asyncFunction2,
    asyncFunction3,
    normalFunction,
])


console.log(function_1("AlpSu <3"))
console.log(function_2("javascript" , "typescript"))
console.log(function_3("awaiter :)"))
console.log(function_4(8 , 3))


let [ promise_1 , promise_2 , promise_3 , promise_4 ]:(Function[] | any) = syncAll([
    Promise.resolve("i"),
    new Promise((resolve) => setTimeout(resolve, 100, 'love')),
    asyncFunction1("AlpSuüğğğğğ"),
    "<333"
])

console.log(promise_1)
console.log(promise_2)
console.log(promise_3)
console.log(promise_4)


let func:Function = awaiter(function(callback:Function) : void {
    async function asyncFunction(param : String) : Promise<string> {
        return param.toString().toUpperCase()
    }

    callback(asyncFunction("hello world!"))
})
console.log(func)


let converted:Function | any = convertToSyncFunction(asyncFunction1)
console.log(converted("JS single-thread ve asenkron türde bir kütüphanedir!"))

sleep(1000)

let functionBlock:string = `
const promiseFunction = async function(param , ms) {
    return new Promise((res) => { 
        setTimeout(() => {
            res.call(void 0 , param)
        } , ms)
    });
}
promiseFunction.call(void 0 , "fonksiyonlarınızı senkronize etmek çok kolay :)" , 2500)`

console.log(evalSync(functionBlock))

let Promise_1:Promise<void> = asyncFunction2("github" , "AlpSuuu")
console.log(promiseResolver(Promise_1))

console.log(convertSync(asyncFunction1 , "basit kodlarla instagram üzerinden medya indirmek isterseniz npmjs.com/instagram-url-downloader"))

let promise:(typeof Promise.prototype | any) = Promise.resolve("instagram - @alp.kahyaa")
console.log(promise.getResponse())

sleep(1000)

console.log(fetch("https://www.instagram.com/reels/audio/2164441880485605/?__a=1"));

let generatorFunc:(GeneratorFunction | any) = function*() {
    yield asyncFunction1("i")
    yield asyncFunction2("love" , "you")
    yield Promise.resolve("AlpSuuğ")
}

let promises = generatorSync(generatorFunc);

console.log(promises);


const p = async () => {
    return new Promise((resolve, reject) => {
        resolve("Promise works!")
    })
}

async function main() {
    await p().then(res => console.log(res))
}

const status:Boolean = true
export { status };