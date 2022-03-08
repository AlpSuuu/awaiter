## [AlpSuuu/converter-to-sync 😋](https://github.com/AlpSuuu/awaiter/)
kullanışlı bir "Promise resolver" ve asenkron fonksiyonu senkron fonksiyona dönüştürücü!
Projemizi github üzerinden manuel olarak veya "git clone" yardımıyla indirdiğinizde projeyi kullanabilmeniz için
typescript dosyalarının javascript haline dönüşmüş halini ./dist klasörüne ekledim ayrıca cmd'ye "tsc" yazmanıza gerek yok!
```
npm install converter-to-sync
git clone https://github.com/AlpSuuu/awaiter.git
```

## Tanımlamlar
# Fonksiyonlarımızı bir objenin içinde tanımlıyoruz tanımlıyoruz!

```js
const {
    evalSync,
    promiseResolver,
    fetch,
    awaiter,
    syncAll,
    convertSync,
    sleep,
    convertAllToSyncFunction,
    convertToSyncFunction,
    generatorSync,
    Emitter
} = require("converter-to-sync");
```

# Fonksiyonlarımızın Kullanılış Örnekleri;

### Başlamadan önce kullandığınız fonksiyonların verilerini kolaylıkla çekmek için aşağıdaki kodu yapıştırın fonksiyonlarımızı her kullandığımızda veriler Kendi Emitter'ımıza yansıyacaktır! Not: Kodu fonksiyonlarımızı kullandığınız kısmın üstüne yapıştırın aksi taktirde Emitter çalışmaz
```js
Emitter.call(async function(data) {
    console.log(data) // { status : "durum mesajı", target : "hedefimiz" , date : "Fonksiyonumuzun kullanılma tarihi", hitch : "Aksama süresi"}
})

...// fonksiyonlarımızı şimdi kullanabilirsiniz
```

## 1-) evalSync
### String formundaki bir kodu eval yardımıyla çalıştırmaya yarar fakat kodumuzda bir promise döndürmemiz gerekiyor!
```js
let evaled = evalSync(`
    const promiseFunction = async function(param , ms) {
        return new Promise((res) => { 
            setTimeout(() => {
                res.call(void 0 , param)
            } , ms)
        });
    }
    promiseFunction.call(void 0 , "fonksiyonlarınızı senkronize etmek çok kolay :)" , 2500)
`)

console.log(evaled) // output: 'fonksiyonlarınızı senkronize etmek çok kolay :)'
```

## 2-) promiseResolver
### Promise döndüren bir fonksiyonu veya bir Promise'in resolve edilen değerini çekmemizi sağlayan fonksiyon 
```js
const asyncFunction = async function(param1 ,  param2) {
    return param1 + " - " + param2
}

let resolvedValue = promiseResolver(asyncFunction("github" , "AlpSuuu"))
console.log(resolvedValue) // output: 'github - AlpSuuu'
```

## 3-) fetch
### girmiş olduğunuz url yi https modülü üzerinden aratır ve sonuçları listeler
```js
let data = fetch("https://www.instagram.com/reels/audio/2164441880485605/?__a=1");

console.log(data) // output: Object<void>
```

## 4-) awaiter
### bir callback yardımıyla Promise fonksiyonunu resolve etmemize yarayan fonksiyon
```js
let func = awaiter(callback => {
    async function asyncFunction(param) {
        return param.toString().toUpperCase()
    }

    callback(asyncFunction("hello world!"))
})

console.log(func) // output: 'HELLO WORLD!'
```

## 5-) syncAll
### Birden fazla Promise'in teker teker resolve değerlerini bir diziye pushlayıp döndürür
```js
let [ promise_1 , promise_2 , promise_3 , promise_4 ] = syncAll([
    Promise.resolve("i"),
    new Promise((resolve) => setTimeout(resolve, 100, 'love')),
    asyncFunction1("AlpSuüğğğğğ"),
    "<333"
])

console.log(promise_1) // output: 'i'
console.log(promise_2) // output: 'love'
console.log(promise_3) // output: 'AlpSuüğğğğğ'
console.log(promise_4) // output: '<333'
```

## 6-) convertSync
### fonksiyonumuzun 1. parametresine aseonkron fonksiyonunuzu 2. parametresine de asenkron fonksiyonunuzun parametrelerini girin fonksiyonumuz asenkron fonksiyonunuzu parametreleriyle birlikte çalıştırıp dönen Promise'in response değerini döndürür! (karışık oldu galiba :) örneği incele.)
```js
async function asyncFunction(param1) {
    return new Promise((res) => { 
        setTimeout(res , 15 , param1)
    });
}
// asenkron fonksiyonunuzun parametrelerini ayrı ayrı girin! bir dizi içine tüm parametrelerinizi girmeyin! 
let value = convertSync(asyncFunction , "instagram üzerinden medya indirmek isterseniz npmjs.com/instagram-url-downloader")
console.log(value) // output: 'instagram üzerinden medya indirmek isterseniz npmjs.com/instagram-url-downloader'
```

## 7-) sleep
### biliyoruz ki javascript single-thread ve asenkron türde bir dil yani satırlardaki işlevler birbirinden bağımsız çalışıyor bu fonksiyonumuz ile birlikte 'await' kullanmadan işlevler arası delay atayabiliriz.
```js
console.log("Hello");
sleep(2 * 1000);
console.log("World!");

// birinci işlevimiz çalıştıktan sonra ikinci işlevimize geçmeden 2 saniye bekledik.
```

## 8-) convertAllToSyncFunction
### birden fazla asenkron fonksiyonun senkron fonksiyona dönüşmüş hallerini bir dizi olarak döndürür
```js
async function asyncFunction1(param1) {
    return new Promise((res) => { 
        setTimeout(res , 15 , param1)
    });
}

const asyncFunction2 = async function(param1 ,  param2) {
    return param1 + " - " + param2
}

async function asyncFunction3(param1) {
    return await asyncFunction1(param1)
}

const normalFunction = function(num1 , num2) {
    return num1 * num2
}

let [ function_1 , function_2 , function_3 , function_4 ] = convertAllToSyncFunction([
    asyncFunction1,
    asyncFunction2,
    asyncFunction3,
    normalFunction,
])


console.log(function_1("AlpSu <3")) // output: 'AlpSu <3'
console.log(function_2("javascript" , "typescript")) // output: 'javascript - typescript'
console.log(function_3("awaiter :)")) // output: 'awaiter :)'
console.log(function_4(8 , 3)) // output: 24
```

## 9-) convertToSyncFunction
### bir asenkron fonksiyonun senkron fonksiyona dönüşütürülmüş hanini döndüren fonksiyon
```js
async function asyncFunction(param1) {
    return new Promise((res) => { 
        setTimeout(res , 15 , param1)
    });
}

let converted = convertToSyncFunction(asyncFunction)
console.log(converted("JS single-thread ve asenkron türde bir kütüphanedir!")) // output: 'JS single-thread...'
```

## 10-) generatorSync
### bir jeneratör foknsiyon bloğu içindeki yield edilen tüm Promise'lerin resolve değerlerini dizi halinde döndürür
```js
async function asyncFunction(param1) {
    return new Promise((res) => { 
        setTimeout(res , 15 , param1)
    });
}

const asyncFunction2 = async function(param1 ,  param2) {
    return param1 + " - " + param2
}

let resolvedValues = generatorSync(function*() {
    yield asyncFunction1("i")
    yield asyncFunction2("love" , "you")
    yield Promise.resolve("AlpSuuğ")
});

console.log(resolvedValues) // Array([ 'i' , 'love - you' , 'AlpSuuğ' ]);
```
## Ekstra kullanım 
### Promise fonksiyonumuzun Prototipi arasına eklediğimiz "getResponse" fonksiyonumuz ile birlikte bir Promise'in resolve edilen değerini kolaylıkla çekebilirsiniz!
```js
let promise = Promise.resolve("instagram - @alp.kahyaa")

console.log(promise.getResponse()) // output: 'instagram - @alp.kahyaa'
```

<h3>🌟 Bağlantılar!</h3>
<p align="center">
<a href="https://www.instagram.com/alp.kahyaa/" target"blank_"><img src="https://img.shields.io/badge/INSTAGRAM%20-DC3175.svg?&style=for-the-badge&logo=instagram&logoColor=white"></a>
<a href="https://discord.com/users/721391768255594577" target"blank_"><img src="https://img.shields.io/badge/Discord-ffbb00?style=for-the-badge&logo=discord&logoColor=white"></a>
<a href="https://alpsu-u-teala.glitch.me" target"blank_"><img src="https://img.shields.io/badge/Website-ff0004?style=for-the-badge&logo=google&logoColor=white"></a>
</p>
