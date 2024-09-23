import { empty } from "./main";

test("empty - ", () => {
  expect(empty("")).toBe(true);
  expect(empty(null)).toBe(true);
  expect(empty(false)).toBe(false); // false é um valor. não é vazio
  expect(empty(undefined)).toBe(true);
  expect(empty([])).toBe(true);
  expect(empty({})).toBe(true);
});

import { isArray } from "./main";
test("isArray", () => {
  expect(isArray([])).toBe(true);
  expect(isArray({})).toBe(false);
  expect(isArray(0)).toBe(false);
  expect(isArray("claudio")).toBe(false);
});

import { isObject } from "./main";
test("isObject", () => {
  expect(isObject({})).toBe(true);
  expect(isObject([])).toBe(true);
  expect(isObject("claudio")).toBe(false);
  expect(isObject(1)).toBe(false);
  expect(isObject(new Date())).toBe(true);
});

import { isString } from "./main";
test("isString", () => {
  expect(isString("claudio")).toBe(true);
  expect(isString("12")).toBe(true);
  expect(isString(12)).toBe(false);
  expect(isString([12])).toBe(false);
  expect(isString({})).toBe(false);
});

import { isInteger } from "./main";
test("isInteger", () => {
  expect(isInteger("1")).toBe(true);
  expect(isInteger("1", true)).toBe(false);
  expect(isInteger(1)).toBe(true);
  expect(isInteger(1.2)).toBe(false);
  expect(isInteger(1, true)).toBe(true);
  expect(isInteger("1", true)).toBe(false);
  expect(isInteger("claudio")).toBe(false);
  expect(isInteger(false)).toBe(true);
  expect(isInteger([])).toBe(false);
  expect(isInteger({})).toBe(false);
  expect(isInteger(null)).toBe(false);
  expect(isInteger(NaN)).toBe(false);
  expect(isInteger(undefined)).toBe(false);
});

import { isFloat } from "./main";
test("isFloat", () => {
  expect(isFloat("1")).toBe(false);
  expect(isFloat(1, true)).toBe(false);
  expect(isFloat("1", true)).toBe(false);
  expect(isFloat(1)).toBe(false);
  expect(isFloat(1.2)).toBe(true);
  expect(isFloat("1.2")).toBe(true);
  expect(isFloat("1.2", true)).toBe(false);
  expect(isFloat("claudio")).toBe(false);
  expect(isFloat(false)).toBe(false);
  expect(isFloat([])).toBe(false);
  expect(isFloat({})).toBe(false);
  expect(isFloat(null)).toBe(false);
  expect(isFloat(false)).toBe(false);
  expect(isFloat(undefined)).toBe(false);
  expect(isFloat(NaN)).toBe(false);
});

import { isNumeric } from "./main";
test("isNumeric", () => {
  expect(isNumeric("1")).toBe(true);
  expect(isNumeric(1, true)).toBe(true);
  expect(isNumeric("1", true)).toBe(false);
  expect(isNumeric(1)).toBe(true);
  expect(isNumeric(1.2)).toBe(true);
  expect(isNumeric("1.2")).toBe(true);
  expect(isNumeric("1.2", true)).toBe(false);
  expect(isNumeric("claudio")).toBe(false);
  expect(isNumeric([])).toBe(false);
  expect(isNumeric({})).toBe(false);
  expect(isNumeric(null)).toBe(false);
  expect(isNumeric(false)).toBe(true);
  expect(isNumeric(false, true)).toBe(false);
  expect(isNumeric(undefined)).toBe(false);
  expect(isNumeric(NaN)).toBe(false);
});

import { isJSON } from "./main";
test("isJSON", () => {
  expect(isJSON(true)).toBe(false);
  expect(isJSON(false)).toBe(false);
  expect(isJSON("")).toBe(false);
  expect(isJSON(null)).toBe(false);
  expect(isJSON(undefined)).toBe(false);
  expect(isJSON(NaN)).toBe(false);
  expect(isJSON("claudio")).toBe(false);
  expect(isJSON(4654)).toBe(false);
  expect(isJSON(0)).toBe(false);
  expect(isJSON([1, 2, 3])).toBe(false);
  expect(isJSON(new Date())).toBe(false);
  expect(isJSON({ age: 21 })).toBe(true);
  expect(isJSON("{ age: 21 }")).toBe(false);
});

import { checkTypes } from "./main";
test("checkTypes", () => {
  expect(checkTypes(1, String)).toBe(false);
  expect(checkTypes("1", String)).toBe(true);
  expect(checkTypes(1, Number)).toBe(true);
  expect(checkTypes("1", Number)).toBe(false);
  expect(checkTypes(1, [String, Number])).toBe(true);
  expect(checkTypes("a", [String, Number])).toBe(true);
  expect(checkTypes({}, [String, Number])).toBe(false);
  expect(checkTypes([], [String, Number])).toBe(false);
  expect(checkTypes([], [String, Number, Array])).toBe(true);
  expect(checkTypes({}, [String, Number, Array])).toBe(false);
  expect(checkTypes({}, [String, Number, Array, Object])).toBe(true);
  expect(checkTypes(null, [String, Number, Array, Object])).toBe(false);
  expect(checkTypes(undefined, [String, Number, Array, Object])).toBe(false);
});

import { isEmail } from "./main";
test("isEmail", () => {
  expect(isEmail("claudio")).toBe(false);
  expect(isEmail("claudio@claudio.com")).toBe(true);
  expect(isEmail("")).toBe(false);
  expect(isEmail(null)).toBe(false);
  expect(isEmail(undefined)).toBe(false);
  expect(isEmail([])).toBe(false);
  expect(isEmail({})).toBe(false);
  expect(isEmail(123)).toBe(false);
});

import { isDate } from "./main";
test("isDate", () => {
  expect(isDate("12/12/29")).toBe(true);
  expect(isDate("31/12/29")).toBe(false);
  expect(isDate("12/31/29")).toBe(true);
  expect(isDate("12/12/2029")).toBe(true);
  expect(isDate("2029-12-12")).toBe(true);
});

import { isDateBR } from "./main";
test("isDateBR", () => {
  expect(isDateBR("31/07/2020")).toBe(true);
  expect(isDateBR("32/07/2020")).toBe(false);
  expect(isDateBR("07/24/2020")).toBe(false);
  expect(isDateBR("7/2/2020")).toBe(false);
});

import { isTime } from "./main";
test("isTime", () => {
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
  isTime(""); // ->  false
});

import { isFalsy } from "./main";
test("isFalsy", () => {
  expect(isFalsy(0)).toBe(true);
  expect(isFalsy("")).toBe(true);
  expect(isFalsy("0")).toBe(true);
  expect(isFalsy(NaN)).toBe(true);
  expect(isFalsy(null)).toBe(true);
  expect(isFalsy("NaN")).toBe(true);
  expect(isFalsy(false)).toBe(true);
  expect(isFalsy("null")).toBe(true);
  expect(isFalsy("false")).toBe(true);
  expect(isFalsy(undefined)).toBe(true);
  expect(isFalsy("undefined")).toBe(true);
});

import { isTruthy } from "./main";
test("isTruthy", () => {
  expect(isTruthy(0)).toBe(false);
  expect(isTruthy("")).toBe(false);
  expect(isTruthy("0")).toBe(false);
  expect(isTruthy(NaN)).toBe(false);
  expect(isTruthy(null)).toBe(false);
  expect(isTruthy("NaN")).toBe(false);
  expect(isTruthy(false)).toBe(false);
  expect(isTruthy("null")).toBe(false);
  expect(isTruthy("false")).toBe(false);
  expect(isTruthy(undefined)).toBe(false);
  expect(isTruthy("undefined")).toBe(false);
});

import { intersect } from "./main";
test("intersect", () => {
  const result = intersect([1, 2, 3], [3, 4, 5]);

  expect(result[0]).toBe(3);
  expect(result.length).toBe(1);
});

import { objectPath } from "./main";
test("objectPath", () => {
  const obj = {
    a: "1",
    b: { c: 10, d: 2, e: { f: "4", g: "5", h: { i: "6" } } },
  };

  expect(objectPath(obj, "b.e.h.i")).toBe("6");
});

import { groupBy } from "./main";
test("groupBy", () => {
  const list = [
    { id: 1, name: "claudio", age: 37, city: "fortaleza" },
    { id: 2, name: "isa", age: 9, city: "natal" },
    { id: 3, name: "jose", age: 37, city: "fortaleza" },
    { id: 4, name: "marta", age: 42, city: "afonso bezerra" },
    { id: 5, name: "joelma", age: 42, city: "afonso bezerra" },
    { id: 6, name: "jose", age: 24, city: "assu" },
  ];
  const result = groupBy(list, "name");

  // console.log(result);

  expect(result).toHaveProperty("claudio");
  expect(result).toHaveProperty("isa");
  expect(Object.keys(result).length).toBe(5);
  expect(result).toMatchObject({
    claudio: [{ id: 1, name: "claudio", age: 37, city: "fortaleza" }],
    isa: [{ id: 2, name: "isa", age: 9, city: "natal" }],
    jose: [
      { id: 3, name: "jose", age: 37, city: "fortaleza" },
      { id: 6, name: "jose", age: 24, city: "assu" },
    ],
    marta: [{ id: 4, name: "marta", age: 42, city: "afonso bezerra" }],
    joelma: [{ id: 5, name: "joelma", age: 42, city: "afonso bezerra" }],
  });

  // expect( groupBy ).toBe()
});

import { keyGenerator } from "./main";
test("keyGenerator", () => {
  expect(keyGenerator(5)).toMatch(/^[A-Za-z0-9]{5}$/); // -> 11S9P
  expect(keyGenerator(5, false)).toMatch(/^[A-Za-z]{5}$/); // -> HrmTF
  expect(keyGenerator(5, false, false)).toMatch(/^[A-Z]{5}$/); // -> RHCWJ
  expect(keyGenerator(5, false, true, false)).toMatch(/^[a-z]{5}$/); // -> vzuyn

  expect(() => keyGenerator(5, false, false, false)).toThrowError();
});

import { slug } from "./main";
test("slug", () => {
  expect(slug("José Cláudio + ")).toBe("jose-claudio");
  expect(slug("José --    /|<>Cláu=dio ")).toBe("jose-claudio");
});

import { currencyBR } from "./main";
test("currencyBR", () => {
  expect(currencyBR(12.34)).toBe("R$12,34");
  expect(currencyBR("12.34")).toBe("R$12,34");
  expect(() => currencyBR("12,34")).toThrowError(); // número com vírgula
});

import { upperFirst } from "./main";

test("upperFirst", () => {
  expect(upperFirst("jose claudio")).toBe("Jose Claudio");
  expect(upperFirst("JOSE CLAUDIO")).toBe("Jose Claudio");
  expect(upperFirst("JoSe cLaUdIo")).toBe("Jose Claudio");
  expect(upperFirst("")).toBe("");
  expect(upperFirst("de")).toBe("de");
});

import { prefixObjectKeys } from "./main";
test("prefixObjectKeys", () => {
  const original = {
    name: "ze",
    age: 23,
  };

  const result = prefixObjectKeys(original, "prefix_");

  expect(result).toHaveProperty("prefix_name");
  expect(result).toHaveProperty("prefix_age");
  expect(Object.keys(result).length).toBe(2);
  expect(result).toMatchObject({
    prefix_name: "ze",
    prefix_age: 23,
  });

  expect(prefixObjectKeys(original)).toMatchObject(original);
});

import { objectFlat } from "./main";
test("objectFlat", () => {
  const obj = {
    name: "claudio",
    address: {
      street: "Rua X",
    },
  };

  expect(objectFlat(obj)).toMatchObject({
    name: "claudio",
    "address.street": "Rua X",
  });
});

test("objectFlat - Teste Mudando o separador", () => {
  const obj = {
    name: "claudio",
    address: {
      street: "Rua X",
    },
  };

  expect(objectFlat(obj, "_")).toMatchObject({
    name: "claudio",
    address_street: "Rua X",
  });

  expect(objectFlat(obj, "/")).toMatchObject({
    name: "claudio",
    "address/street": "Rua X",
  });
});

test("objectFlat - null - Teste com uma dos itens com valor null", () => {
  const obj = {
    name: "claudio",
    address: {
      street: "Rua X",
      number: null,
    },
  };

  const flatten = objectFlat(obj, "_");

  expect(flatten).toMatchObject({
    name: "claudio",
    address_street: "Rua X",
    address_number: null,
  });
});

test("objectFlat - object - Teste com um dos itens sendo objeto não JSON", () => {
  const obj = {
    name: "claudio",
    info: {
      birth: new Date("1982-07-31"),
    },
  };

  expect(objectFlat(obj, "_")).toMatchObject({
    name: obj.name,
    info_birth: obj.info.birth,
  });
});

import { whiteList } from "./main";
test("whiteList - Parâmetro como objeto", () => {
  const address = {
    id: 1,
    description: "decrição",
    city_id: 123,
    city: {
      id: 123,
      name: "açu",
    },
  };

  const result = whiteList(address, ["id", "description"]);

  expect(result).toHaveProperty("id");
  expect(result).toHaveProperty("description");
  expect(Object.keys(result).length).toBe(2);
  expect(result).toMatchObject({ description: "decrição", id: 1 });
});

test("whiteList - Parâmetro como array de objetos", () => {
  const address = [
    {
      id: 1,
      description: "decrição",
      city_id: 123,
      city: {
        id: 123,
        name: "açu",
      },
    },
  ];

  const result = whiteList(address, ["id", "description"]);

  expect(result[0]).toHaveProperty("id");
  expect(result[0]).toHaveProperty("description");
  expect(Object.keys(result[0]).length).toBe(2);
  expect(result[0]).toMatchObject({ description: "decrição", id: 1 });
});

import { removeAccent } from "./main";
test("removeAccent", () => {
  expect(removeAccent("José Cláudio Medeiros de Lima")).toBe(
    "Jose Claudio Medeiros de Lima"
  );
});

import { randomNumber } from "./main";
test("randomNumber", () => {
  const value1 = randomNumber(8, true);
  const value2 = randomNumber(4);

  expect(String(value1).length).toBe(8);

  expect(String(value2).length <= 4).toBe(true);
});

import { clearNumber } from "./main";
test("clearNumber", () => {
  expect(clearNumber("12345-6", 6)).toBe("123456");
  expect(clearNumber("12345678", 3)).toBe("123");
  expect(clearNumber(12345678, 3)).toBe("123");
  expect(clearNumber("12345", 10)).toBe("0000012345");
  expect(clearNumber(12345, 10)).toBe("0000012345");
  expect(clearNumber("(84) 9 9988-7766", 11)).toBe("84999887766");
});

import { clearFalsy } from "./main";
test("clearFalsy", () => {
  expect(
    clearFalsy({ id: 1, age: "0", idade: "NaN", birth: "" })
  ).toMatchObject({ id: 1 });
});

import { insertAtPosition } from "./main";
test("insertAtPosition", () => {
  expect(insertAtPosition("AAABBB", "C", 3)).toBe("AAACBBB");
  expect(insertAtPosition("000011122223445555", 99, 7)).toBe(
    "00001119922223445555"
  );
});

import { removeFromPosition } from "./main";
test("removeFromPosition", () => {
  expect(removeFromPosition("00001119922223445555", 7, 9)).toBe(
    "000011122223445555"
  );
  expect(removeFromPosition("AAACBBB", 3, 4)).toBe("AAABBB");
});

import { applyMask } from "./main";
test("applyMask", () => {
  expect(applyMask("59650000", "00.000-000")).toBe("59.650-000");
  expect(applyMask("99877665544", "(00) 0 0000-0000")).toBe("(99) 8 7766-5544");
});

import { randomLetter } from "./main";
test("randomLetter", () => {
  expect(randomLetter()).toMatch(/^[A-Z]{1}$/);
  expect(randomLetter()).toMatch(/^[A-Z]{1}$/);
});

import { applyVars } from "./main";
test("applyVars", () => {
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
  const expected = "Olá, claudio. Seu e-mail ainda é email@mail.com?";

  expect(applyVars("Olá, :name. Seu e-mail ainda é :email?", vars)).toBe(
    expected
  );

  expect(
    applyVars("Olá, {name}. Seu e-mail ainda é {email}?", vars, {
      start: "{",
      end: "}",
    })
  ).toBe(expected);

  expect(
    applyVars("Olá, {{name}}. Seu e-mail ainda é {{email}}?", vars, {
      start: "{{",
      end: "}}",
    })
  ).toBe(expected);

  expect(
    applyVars(
      "My name is :name and my address is :address.street, :address.zipcode",
      vars
    )
  ).toBe("My name is claudio and my address is Monkey St., 9876543");

  expect(
    applyVars(
      "My name is {name} and my address is {address.street}, {address.zipcode}",
      vars,
      { start: "{", end: "}" }
    )
  ).toBe("My name is claudio and my address is Monkey St., 9876543");
});

import { quantity } from "./main";
test("quantity", () => {
  expect(quantity(0, "mensagens", "mensagem", "nenhuma mensagem")).toBe(
    "nenhuma mensagem"
  );

  expect(quantity(0, "mensagens", "mensagem", null)).toBe("0 mensagem");

  expect(quantity(1, "mensagens", "mensagem", "nenhuma mensagem")).toBe(
    "1 mensagem"
  );

  expect(quantity(2, "mensagens", "mensagem", "nenhuma mensagem")).toBe(
    "2 mensagens"
  );
});

import { filesize } from "./main";
test("filesize", () => {
  expect(filesize("")).toBe("0 byte");
  expect(filesize("0")).toBe("0 byte");

  expect(filesize(0)).toBe("0 byte");
  expect(filesize(1)).toBe("1 byte");
  expect(filesize(2)).toBe("2 bytes");

  expect(filesize(12354353)).toBe("11 Mb");

  expect(filesize(1023)).toBe("1023 bytes");
  expect(filesize(1024)).toBe("1 Kb");
  expect(filesize(1025)).toBe("1 Kb");

  expect(filesize(1 * 1024 * 1024)).toBe("1 Mb");
  expect(filesize(100 * 1024 * 1024)).toBe("100 Mb");

  expect(filesize(1 * 1024 * 1024 * 1024)).toBe("1 Gb");
  expect(filesize(55 * 1024 * 1024 * 1024)).toBe("55 Gb");
  expect(filesize(1000 * 1024 * 1024 * 1024)).toBe("1000 Gb");
  expect(filesize(10995116277760)).toBe("10240 Gb");
});

import { sortByKey } from "./main";
test("sortByKey", () => {
  const list = [
    { age: "20", name: "claudio" },
    { age: "25", name: "marta" },
    { age: "10", name: "isa" },
    { age: "15", name: "isa" },
  ];

  //
  const arr1 = sortByKey(list, "name");

  expect(arr1[0]).toMatchObject({ age: "20", name: "claudio" });
  expect(arr1[1]).toMatchObject({ age: "10", name: "isa" });
  expect(arr1[2]).toMatchObject({ age: "15", name: "isa" });
  expect(arr1[3]).toMatchObject({ age: "25", name: "marta" });

  //
  const arr2 = sortByKey(list, "age");

  expect(arr2[0]).toMatchObject({ age: "10", name: "isa" });
  expect(arr2[1]).toMatchObject({ age: "15", name: "isa" });
  expect(arr2[2]).toMatchObject({ age: "20", name: "claudio" });
  expect(arr2[3]).toMatchObject({ age: "25", name: "marta" });
});

import { toBoolean } from "./main";
test("toBoolean", () => {
  expect(toBoolean("a")).toBe(true);
  expect(toBoolean(1)).toBe(true);
  expect(toBoolean("true")).toBe(true);
  expect(toBoolean("0")).toBe(false);
  expect(toBoolean(0)).toBe(false);
  expect(toBoolean("false")).toBe(false);
  expect(toBoolean(false)).toBe(false);
  expect(toBoolean("")).toBe(false);
  expect(toBoolean("undefined")).toBe(false);
  expect(toBoolean(undefined)).toBe(false);
  expect(toBoolean("NaN")).toBe(false);
  expect(toBoolean(NaN)).toBe(false);
  expect(toBoolean("null")).toBe(false);
  expect(toBoolean(null)).toBe(false);
});

import { timeUUID } from "./main";
test("timeUUID - executa 10 mil vezes", () => {
  const num = 10000;
  let count = 0;
  const list: string[] = [];
  while (count < num) {
    const uuid = timeUUID();    

    // Adiciona à lista de gerados
    list.push(uuid);

    // Checa se atende ao padrão uuv
    expect(uuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/
    );

    // Conta os gerados
    count++;
  }

  expect(count).toBe(num);
  expect(list.length).toBe(num);
  // Elimina os repetidos para ver se a quantidade é a mesma
  expect(new Set(list).size).toBe(num);
});
