# klawtil ![GitHub](https://img.shields.io/github/license/klawdyo/klawtil?style=flat-square) ![GitHub](https://img.shields.io/github/package-json/v/klawdyo/klawtil?style=flat-square) ![GitHub](https://img.shields.io/github/stars/klawdyo/klawtil?style=flat-square) ![GitHub](https://img.shields.io/github/repo-size/klawdyo/klawtil?style=flat-square) ![GitHub](https://img.shields.io/github/languages/code-size/klawdyo/klawtil?style=flat-square)

Util functions library

## Install

```sh
# Usando yarn
yarn add klawtil

## OU
# Usando npm
npm install klawtil

```

## Import

```js
// Modules
const { whiteList, isFalsy } = require("klawtil");

// ES6
import { whiteList, isFalsy } from "klawtil";
```

## Content Table

[**Comparation**](#Comparation)

- [empty](#empty)
- [isArray](#isArray)
- [isObject](#isObject)
- [isString](#isString)
- [isInteger](#isInteger)
- [isFloat](#isFloat)
- [isNumeric](#isNumeric)
- [checkTypes](#checkTypes)
- [isEmail](#isEmail)
- [isDate](#isDate)
- [isDateBR](#isDateBR)
- [isTime](#isTime)
- [isFalsy](#isFalsy)
- [isTruthy](#isTruthy)

[**Object**](#Object)

- [intersect](#intersect)
- [objectPath](#objectPath)
- [groupBy](#groupBy)
- [prefixObjectKeys](#prefixObjectKeys)
- [objectFlat](#objectFlat)
- [whiteList](#whiteList)
- [clearFalsy](#clearFalsy)

[**Array**](#Array)

- [sortByKey](#sortByKey)

[**Boolean**](#Boolean)

- [toBoolean](#toBoolean)

[**String**](#String)

- [slug](#slug)
- [currencyBR](#currencyBR)
- [upperFirst](#upperFirst)
- [removeAccent](#removeAccent)
- [clearNumber](#clearNumber)
- [insertAtPosition](#insertAtPosition)
- [removeFromPosition](#removeFromPosition)
- [applyMask](#applyMask)
- [applyVars](#applyVars)
- [quantity](#quantity)
- [filesize](#filesize)

[**Random**](#Random)

- [keyGenerator](#keyGenerator)
- [randomNumber](#randomNumber)
- [randomLetter](#randomLetter)

## Comparation

### empty

```js
empty(""); // -> true
empty(null); // -> true
empty(false); // -> false
empty(undefined); // -> true
```

### isArray

```js
isArray([]); // -> true
isArray({}); // -> false
isArray(0); // -> false
isArray("claudio"); // -> false
```

### isObject

```js
isObject({}); // ->true
isObject([]); // ->true
isObject("claudio"); // ->false
isObject(1); // ->false
isObject(new Date()); // ->true
```

### isString

```js
isString("claudio"); // -> true
isString("12"); // -> true
isString(12); // -> false
isString([12]); // -> false
isString({}); // -> false
```

### isInteger

```js
isInteger("1"); // -> true
isInteger("1", true); // -> false
isInteger(1); // -> true
isInteger(1.2); // -> false
isInteger(1, true); // -> true
isInteger("1", true); // -> false
isInteger("claudio"); // -> false
```

### isFloat

```js
isFloat("1"); // -> true
isFloat(1, true); // -> true
isFloat("1", true); // -> false
isFloat(1); // -> true
isFloat(1.2); // -> true
isFloat("1.2"); // -> true
isFloat("1.2", true); // -> false
isFloat("claudio"); // -> false
isFloat(false); // -> false
```

### isNumeric

```js
isNumeric("1"); // -> true
isNumeric(1, true); // -> true
isNumeric("1", true); // -> false
isNumeric(1); // -> true
isNumeric(1.2); // -> true
isNumeric("1.2"); // -> true
isNumeric("1.2", true); // -> false
isNumeric("claudio"); // -> false
isNumeric(false); // -> false
```

### checkTypes

```js
checkTypes(1, String); // -> false
checkTypes("1", String); // -> true
checkTypes(1, Number); // -> true
checkTypes("1", Number); // -> false
checkTypes(1, [String, Number]); // -> true
checkTypes("a", [String, Number]); // -> true
checkTypes({}, [String, Number]); // -> false
checkTypes([], [String, Number]); // -> false
checkTypes([], [String, Number, Array]); // -> true
checkTypes({}, [String, Number, Array]); // -> false
checkTypes({}, [String, Number, Array, Object]); // -> true
```

### isEmail

```js
isEmail("claudio"); // -> false
isEmail("claudio@claudio.com"); // -> true
isEmail(""); // -> false
isEmail(null); // -> false
isEmail(undefined); // -> false
isEmail([]); // -> false
isEmail({}); // -> false
isEmail(123); // -> false
```

### isDate

```js
isDate("12/12/29"); // ->  true
isDate("31/12/29"); // ->  false
isDate("12/31/29"); // ->  true
isDate("12/12/2029"); // ->  true
isDate("2029-12-12"); // ->  true
```

### isDateBR

```js
isDateBR("31/07/2020"); // true
isDateBR("32/07/2020"); // false
isDateBR("7/7/2020"); // false
```

### isTime

```js
isTime("12:00"); // ->  true
isTime("23:00"); // ->  true
isTime("23:59"); // ->  true
isTime("24:00"); // ->  false
isTime("00:00"); // ->  true
isTime("-12:00"); // ->  false
isTime("aa:pp"); // ->  false
isTime("23:60"); // ->  false
isTime("00:00:00", true); // ->  true
isTime("23:59:59", true); // ->  true
isTime("24:59:59", true); // ->  false
isTime("23:60:59", true); // ->  false
isTime("23:59:65", true); // ->  false
isTime("aa:bb:dd", true); // ->  false
```

### isFalsy

```js
isFalsy(0); // -> true
isFalsy(""); // -> true
isFalsy("0"); // -> true
isFalsy(NaN); // -> true
isFalsy(null); // -> true
isFalsy("NaN"); // -> true
isFalsy(false); // -> true
isFalsy("null"); // -> true
isFalsy("false"); // -> true
isFalsy(undefined); // -> true
isFalsy("undefined"); // -> true
```

### isTruthy

```js
isTruthy(0); // -> false
isTruthy(""); // -> false
isTruthy("0"); // -> false
isTruthy(NaN); // -> false
isTruthy(null); // -> false
isTruthy("NaN"); // -> false
isTruthy(false); // -> false
isTruthy("null"); // -> false
isTruthy("false"); // -> false
isTruthy(undefined); // -> false
isTruthy("undefined"); // -> false
```

## Object

### intersect

```js
intersect([1, 2, 3], [3, 4, 5]); // -> [ 3 ]
```

### objectPath

```js
let obj = { a: "1", b: { c: 10, d: 2, e: { f: "4", g: "5", h: { i: "6" } } } };
objectPath(obj, "b.e.h.i"); // -> '6'
```

### groupBy

```js
const list = [
 {"id":1,"name":"claudio","age":37,"city":"fortaleza"},
 {"id":2,"name":"isa","age":9,"city":"natal"},
 {"id":3,"name":"jose","age":37,"city":"fortaleza"},
 {"id":4,"name":"marta","age":42,"city":"afonso bezerra"},
 {"id":5,"name":"joelma","age":42,"city":"afonso bezerra"},
 {"id":6,"name":"jose","age":24,"city":"assu"}
]
groupBy( list, 'name' )
{
 "claudio":[
   {"id":1,"name":"claudio","age":37,"city":"fortaleza"}
 ],
 "isa":[
   {"id":2,"name":"isa","age":9,"city":"natal"}
 ],
 "jose":[
   {"id":3,"name":"jose","age":37,"city":"fortaleza"},
   {"id":6,"name":"jose","age":24,"city":"assu"}
 ],
 "marta":[
   {"id":4,"name":"marta","age":42,"city":"afonso bezerra"}
 ],
 "joelma":[
   {"id":5,"name":"joelma","age":42,"city":"afonso bezerra"}
 ]
}

```

### prefixObjectKeys

```js
const original = {
  name: "ze",
  age: 23,
};

prefixObjectKeys(original, "people.*.");
// -> { 'people.*.name': 'ze', 'people.*.age': 23}
```

### objectFlat

```js
const obj = {
  id: 1,
  name: "claudio",
  age: 39,
  email: "email@mail.com",
  address: {
    street: "Monkey St.",
    number: "599",
    city: "Halalala",
    zipcode: "9876543",
  },
};

objectFlat(obj);
// ->
// {
//   id: 1, name: 'claudio', age: 39, email: 'email@mail.com',
//   'address.street': 'Monkey St.', 'address.number': '599',
//   'address.city': 'Halalala', 'address.zipcode': '9876543'
// }
```

### whiteList

```js
const address = {
  id: 1,
  description: "decrição",
  city_id: 123,
  city: { id: 123, name: "açu" },
};

whiteList(address, ["id", "description", "city_id"]);
// -> { id: 1, description: 'decrição', city_id: 123 }

whiteList([address, address], ["id", "city_id"]);
// -> [ { id: 1, city_id: '123' }, { id: 1, city_id: '123' } ]
```

### clearFalsy

```js
clearFalsy({ id: 1, age: "0", confirmed: "false", birth: "" }); // -> { id: 1 }
clearFalsy({ id: 1, age: "0", idade: "NaN", birth: "" }); // -> { id: 1 }
```

## Array

### sortByKey

```js
sortByKey([{ name: "marta" }, { name: "claudio" }, { name: "isa" }], "name");
// -> [ {name: 'claudio',}, {name: 'isa',}, {name: 'marta',} ]
```

## Boolean

### toBoolean

```js
toBoolean("a"); // -> true
toBoolean(1); // -> true
toBoolean("true"); // -> true
toBoolean("0"); // -> false
toBoolean(0); // -> false
toBoolean("false"); // -> false
toBoolean(false); // -> false
toBoolean(""); // -> false
toBoolean("undefined"); // -> false
toBoolean(undefined); // -> false
toBoolean("NaN"); // -> false
toBoolean(NaN); // -> false
toBoolean("null"); // -> false
toBoolean(null); // -> false
```

## String

### slug

```js
slug("José Cláudio + "); // -> 'jose-claudio
slug("José --    /|<>Cláu=dio "); // -> 'jose-claudio
```

### currencyBR

```js
currencyBR(12.34); // -> 'R$ 12,34'
currencyBR("12.34"); // -> 'R$ 12,34'
currencyBR("12,34"); // -> null
```

### upperFirst

```js
upperFirst("jose claudio medeiros de lima"); // -> Jose Claudio Medeiros de Lima
upperFirst("JOSE CLAUDIO MEDEIROS DE LIMA"); // -> Jose Claudio Medeiros de Lima
upperFirst("JoSe cLaUdIo MeDeIrOs De LiMa"); // -> Jose Claudio Medeiros de Lima
```

### removeAccent

```js
removeAccent("Açu"); // -> Acu
removeAccent("José Cláudio"); // -> Jose Claudio
```

### clearNumber

```js
clearNumber(12345 - 6, 6); // -> 123456
clearNumber(12345678, 3); // -> 123
clearNumber(12345, 10); // -> 0000001234
```

### insertAtPosition

```js
insertAtPosition("AAABBB", "-", 3); // -> AAA-BBB
insertAtPosition("000011122223445555", "->", 7); // -> 0000111->22223445555
```

### removeFromPosition

```js
removeFromPosition("00001119922223445555", 7, v9); // -> 000011122223445555
removeFromPosition("AAACBBB", 3, 4); // -> AAABBB
```

### applyMask

```js
applyMask("59650000", "00.000-000"); // -> 59.650-000
applyMask("99877665544", "(00) 0 0000-0000"); // -> (99) 8 7766-5544
```

### applyVars

```js
// Object with some random vars
const vars = {
    id: 1,
    name: "claudio",
    age: 39,
    email: "email@mail.com",
    address: {
      street: "Monkey St.",
      number: "599",
      city: "Halalala",
      zipcode: "9876543",
    },
  };

applyVars("My name is :name and my email is :email.", vars);
// -> 'My name is claudio and my email is email@mail.com.'

applyVars("My name is {name} and my email is {email}.", vars, {
  start: "{",
  end: "}",
});
// -> 'My name is claudio and my email is email@mail.com.'

applyVars("My name is {{name}} and my email is {{email}}.", vars, {
  start: "{{",
  end: "}}",
});
// -> 'My name is claudio and my email is email@mail.com.'


applyVars(
  "My name is :name and my address is :address.street, :address.zipcode",
  vars
)
// -> "My name is claudio and my address is Monkey St., 9876543");


applyVars(
  "My name is {name} and my address is {address.street}, {address.zipcode}",
  vars,
  { start: "{", end: "}" }
// -> "My name is claudio and my address is Monkey St., 9876543");

```

### quantity

```js
quantity(0, "mensagens", "mensagem");
// -> 0 mensagem

quantity(0, "mensagens", "mensagem", "nenhuma mensagem");
// -> nenhuma mensagem

quantity(1, "mensagens", "mensagem", "nenhuma mensagem");
// -> 1 mensagem

quantity(2, "mensagens", "mensagem", "nenhuma mensagem");
// -> 2 mensagens
```

### filesize

```js
filesize(null); // -> 0 Kb
filesize(""); // -> 0 Kb
filesize(12354353); // -> 11 mb
```

## Random

### keyGenerator

```js
keyGenerator(5); // -> 11S9P
keyGenerator(5, false); // -> HrmTF
keyGenerator(5, false, false); // -> RHCWJ
keyGenerator(5, false, true, false); // -> vzuyn
```

### randomNumber

```js
randomNumber(8, true); // -> 00083159
randomNumber(4); // -> 831
```

### randomLetter

```js
randomLetter(); // -> A
randomLetter(); // -> S
```

## Tests

100% tested and 100% tests coverage

![image](https://user-images.githubusercontent.com/100168/153757107-cbc3de9d-f601-487b-9a5d-4c2f4e74241f.png)

## Build

Tested on node versions 10, 12, 14 and 16

![image](https://user-images.githubusercontent.com/100168/153756200-57f2b7a9-28c2-4927-bd44-6e57674c07ab.png)
