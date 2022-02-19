/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/***************************************************
 * UTILS
 * Funções soltas de cunho geral que servem em outros locais do app
 *
 ****************************************************/

/*************************************************************************
 *
 * TYPES
 */
type ApplyVarsOptions = {
  start: string;
  end: string;
};

/*************************************************************************
 *
 * COMPARAÇÃO DE VALORES
 */

/**
 * Verifica se um valor é vazio, null, array vazio ou objeto vazio.
 * Não considera 0 ou false como vazio.
 *
 * @example
 *
 * empty('') // -> true
 * empty(null) // -> true
 * empty(false) // -> false
 * empty(undefined) // -> true
 *
 * @param {*} value
 * @returns {Boolean}
 */
export const empty = (value: any): boolean => {
  if (value === 0 || value === false) return false;
  return (
    //null, '', undefined
    (value !== 0 && value !== false && !value) ||
    //É array E vazio
    (isArray(value) && value.length === 0) ||
    //É um objeto vazio
    (isObject(value) && Object.keys(value).length === 0)
  );
};

/*************************************************************************
 *
 * VERIFICAÇÃO DE TIPOS
 */

/**
 * Verifica se o valor passado é do tipo array
 *
 * @example
 *
 * isArray([]) // -> true
 * isArray({}) // -> false
 * isArray(0) // -> false
 * isArray('claudio') // -> false
 *
 * @param {*} value
 * @returns {Boolean}
 */
export const isArray = (value: any): boolean => {
  return Array.isArray(value);
};

/**
 * Verifica se o valor passado é do tipo objeto
 */
export const isObject = (value: any): boolean => {
  return typeof value === "object";
};

/**
 * Verifica se o valor passado é do tipo string
 *
 *
 */
export const isString = (value: any): boolean => {
  return typeof value === "string";
};

/**
 * Verifica se é um número inteiro.
 *
 * @examples

 *   isInteger('1')          // -> true
 *   isInteger('1', true)    // -> false
 *   isInteger(1)            // -> true
 *   isInteger(1.2)          // -> false
 *   isInteger(1, true)      // -> true
 *   isInteger('1', true)    // -> false
 *   isInteger('claudio')    // -> false

 *
 * @param {Any} value: Valor que será comparado
 * @param {Boolean} forceType: Define se deve verificar o tipo, e não apenas o número
 */
export const isInteger = (value: any, forceType = false): boolean => {
  if (empty(value)) return false;
  if (!forceType) value = Number(value);
  return Number.isInteger(value);
};

/**
 * Verifica se é no formato de float, independente do tipo
 *
 * @example
 *
 *   isFloat('1')            // -> true
 *   isFloat(1, true)        // -> true
 *   isFloat('1', true)      // -> false
 *   isFloat(1)              // -> true
 *   isFloat(1.2)            // -> true
 *   isFloat('1.2')          // -> true
 *   isFloat('1.2', true)    // -> false
 *   isFloat('claudio')      // -> false
 *   isFloat(false)          // -> false
 *
 * @param {*} value
 * @returns {Boolean} *
 */
export const isFloat = (value: any, forceType = false): boolean => {
  if (empty(value)) return false;
  if (!forceType) value = +value;

  return value === +value && value !== (value | 0);
};

/**
 * Verifica se é no formato de float, independente do tipo
 *
 * @example
 *
 *   isNumeric('1')               // -> true
 *   isNumeric(1, true)           // -> true
 *   isNumeric('1', true)         // -> false
 *   isNumeric(1)                 // -> true
 *   isNumeric(1.2)               // -> true
 *   isNumeric('1.2')             // -> true
 *   isNumeric('1.2', true)       // -> false
 *   isNumeric('claudio')         // -> false
 *   isNumeric(false)             // -> false
 *
 * @param {*} value
 * @returns {Boolean}
 */
export const isNumeric = (value: any, forceType = false): boolean => {
  if (empty(value)) return false;
  return isInteger(value, forceType) || isFloat(value, forceType);
};

/**
 * checkTypes
 * Verifica se o valor passado bate com algum dos tipos
 * http://tobyho.com/2011/01/28/checking-types-in-javascript/
 *
 *   checkTypes( 1, String )                           // -> false
 *   checkTypes( '1', String )                         // -> true
 *   checkTypes( 1, Number )                           // -> true
 *   checkTypes( '1', Number )                         // -> false
 *   checkTypes( 1, [String, Number] )                 // -> true
 *   checkTypes( 'a', [String, Number] )               // -> true
 *   checkTypes( {}, [String, Number] )                // -> false
 *   checkTypes( [], [String, Number] )                // -> false
 *   checkTypes( [], [String, Number, Array] )         // -> true
 *   checkTypes( {}, [String, Number, Array] )         // -> false
 *   checkTypes( {}, [String, Number, Array, Object] ) // -> true
 *
 * @param {*} value
 * @param {*|[*]} types
 * @returns {Boolean}
 */
export const checkTypes = (value: any, types: any | any[]) => {
  // null ou undefined retornam false, independente do types
  if (value === null || value === undefined) return false;

  // Se types for array
  if (types.constructor === Array) {
    return types.filter((type) => value.constructor === type).length > 0;
  }

  // Se types não for array
  return value.constructor === types;
};

/*************************************************************************
 *
 * COMPARAÇÃO DE FORMATOS
 */

/**
 * Verifica se é um e-mail
 *
 *    isEmail("claudio")              // -> false
 *    isEmail("claudio@claudio.com")  // -> true
 *    isEmail("")                     // -> false
 *    isEmail(null)                   // -> false
 *    isEmail(undefined)              // -> false
 *    isEmail([])                     // -> false
 *    isEmail({})                     // -> false
 *    isEmail(123)                    // -> false
 *
 */
export const isEmail = (value: any): boolean => {
  if (empty(value)) return false;

  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(value).toLowerCase());
};

/**
 * Verifica se é uma data em um formato aceito pelo javascript
 *
 * @example
 *
 * isDate('12/12/29')        // ->  true
 * isDate('31/12/29')        // ->  false
 * isDate('12/31/29')        // ->  true
 * isDate('12/12/2029')      // ->  true
 * isDate('2029-12-12')      // ->  true
 *
 * @param {String|Number|Date}
 * @returns {Boolean}
 */
export const isDate = (value: string | number | Date): boolean => {
  return new Date(value).getDay() >= 0;
};

/**
 * Verifica se é uma data válida em portugues
 *
 * @example
 *   isDateBR('31/07/2020') // true
 *   isDateBR('32/07/2020') // false
 *
 *
 * @param {String}
 * @returns {Boolean}
 */
export const isDateBR = (value: string) => {
  const parts = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.exec(value);

  if (!parts) return false;

  return parts && isDate(parts[2] + "-" + parts[1] + "-" + parts[3]);
};

/**
 * Verifica se uma hora informada possui o formato de hora:
 * 00:00 ou 00:00:00. 
 * Por padrão na verifica os segundos. Passe seconds=true para 
 * verificar também os segundos
 * 
 * @example
 * 
 *     isTime('12:00')                // ->  true
 *     isTime('23:00')                // ->  true
 *     isTime('23:59')                // ->  true
 *     isTime('24:00')                // ->  false
 *     isTime('00:00')                // ->  true
 *     isTime('-12:00')               // ->  false
 *     isTime('aa:pp')                // ->  false
 *     isTime('23:60')                // ->  false

 *     isTime('00:00:00', true)       // ->  true
 *     isTime('23:59:59', true)       // ->  true
 *     isTime('24:59:59', true)       // ->  false
 *     isTime('23:60:59', true)       // ->  false
 *     isTime('23:59:65', true)       // ->  false
 *     isTime('aa:bb:dd', true)       // ->  false
 * 
 * 
 * 
 * @param {String} value
 * @param {Boolean} seconds
 * 
 * 
 */
export const isTime = (value: string, seconds = false) => {
  const regex = seconds
    ? /^([01][0-9]|2[0-3])\:([0-5][0-9])\:([0-5][0-9])$/
    : /^([01][0-9]|2[0-3])\:([0-5][0-9])$/;

  if (!empty(value)) {
    return regex.test(value);
  }

  return false;
};

/**
 * Verifica se um valor é falsy, ou seja, mesmo convertido
 * para string a intenção dele deveria ser falso
 *
 * @example
 *
 *  isFalsy(0) // -> true
 *  isFalsy('') // -> true
 *  isFalsy('0') // -> true
 *  isFalsy(NaN) // -> true
 *  isFalsy(null) // -> true
 *  isFalsy('NaN') // -> true
 *  isFalsy(false) // -> true
 *  isFalsy('null') // -> true
 *  isFalsy('false') // -> true
 *  isFalsy(undefined) // -> true
 *  isFalsy('undefined') // -> true
 *
 * @param {any} value
 */
export const isFalsy = (value: any) => {
  return (
    !value || ["undefined", "false", "0", "null", "NaN", NaN].includes(value)
  );
};

/**
 * Verifica se um valor é falsy, ou seja, mesmo convertido
 * para string a intenção dele deveria ser falso
 *
 * @example
 *
 *  isTruthy(0) // -> false
 *  isTruthy('') // -> false
 *  isTruthy('0') // -> false
 *  isTruthy(NaN) // -> false
 *  isTruthy(null) // -> false
 *  isTruthy('NaN') // -> false
 *  isTruthy(false) // -> false
 *  isTruthy('null') // -> false
 *  isTruthy('false') // -> false
 *  isTruthy(undefined) // -> false
 *  isTruthy('undefined') // -> false
 *
 * @param {any} value
 */
export const isTruthy = (value: any) => {
  return !isFalsy(value);
};

/*************************************************************************
 *
 * CONVERSÃO DE FORMATOS
 */

/********************
 * BUSCA
 */

/**
 * Verifica 2 arrays e retorna os valores que estão em ambos
 *
 * @example
 *
 * intersect([1,2,3], [3,4,5])  // -> [ 3 ]
 *
 * @param {Array} array1
 * @param {Array} array2
 * @return {Array} Array contendo os valores que estão nos 2 arrays
 */
export const intersect = (array1: any[], array2: any[]): any[] => {
  return array1.filter((value: any) => array2.includes(value));
};

/**
 * Retorna o valor de uma chave em um objeto de múltiplos níveis
 *
 * @example
 * let obj = { a:'1',  b:{ c:10, d:2, e:{ f:'4', g:'5', h:{ i:'6' } } } }
 * objectPath( obj , 'b.e.h.i' ); // -> '6'
 *
 * @param  {Object} objObject
 * @param  {String} strAddress Endereço no formato 'chave.subchave.outrasubchave'
 * @return {Mixed}  Valor de acordo com o caminho
 */
export const objectPath = (objObject: any, strAddress: string) => {
  const keys = strAddress.split(".");

  keys.forEach((key) => {
    objObject = objObject[key];
  });

  return objObject;
};

/********************
 * FUNÇÕES DE APOIO
 */

/**
 * Agrupa um array de objetos por uma das chaves desse array.
 *
 * @todo Mesclar com o objectPath() acima e permitir agurpamentos multidimensionais
 * com
 *
 * @exemplo
 * const list = [
 *  {"id":1,"name":"claudio","age":37,"city":"fortaleza"},
 *  {"id":2,"name":"isa","age":9,"city":"natal"},
 *  {"id":3,"name":"jose","age":37,"city":"fortaleza"},
 *  {"id":4,"name":"marta","age":42,"city":"afonso bezerra"},
 *  {"id":5,"name":"joelma","age":42,"city":"afonso bezerra"},
 *  {"id":6,"name":"jose","age":24,"city":"assu"}
 * ]
 *
 * groupBy( list, 'name' )
 *
 * {
 *  "claudio":[
 *    {"id":1,"name":"claudio","age":37,"city":"fortaleza"}
 *  ],
 *  "isa":[
 *    {"id":2,"name":"isa","age":9,"city":"natal"}
 *  ],
 *  "jose":[
 *    {"id":3,"name":"jose","age":37,"city":"fortaleza"},
 *    {"id":6,"name":"jose","age":24,"city":"assu"}
 *  ],
 *  "marta":[
 *    {"id":4,"name":"marta","age":42,"city":"afonso bezerra"}
 *  ],
 *  "joelma":[
 *    {"id":5,"name":"joelma","age":42,"city":"afonso bezerra"}
 *  ]
 * }
 *
 *
 * @param {Array} items Lista de objetos
 * @param {String} key Nome da chave que agrupará os demais dados
 */
export const groupBy = (items: object[], key: any) => {
  return items.reduce((accu: any, item: any) => {
    if (accu[item[key]]) accu[item[key]].push(item);
    else accu[item[key]] = [item];

    return accu;
  }, {});
};

/**
 * Gerador de chaves aleatórias
 * Pelo menos 1 dos parâmetros numbers, lower e upper precisa ser true.
 * Para que haja a máxima proteção contra conflitos, os três podem ser true
 * https://gist.github.com/6174/6062387#gistcomment-2742945
 *
 * @example
 *
 *    keyGenerator(5)                         // -> 11S9P
 *    keyGenerator(5, false)                  // -> HrmTF
 *    keyGenerator(5, false, false)           // -> RHCWJ
 *    keyGenerator(5, false, true, false)     // -> vzuyn
 *
 * @param {Integer} length Tamanho gerado
 * @param {Boolean} numbers Define se existirão números
 * @param {Boolean} lower Define se existirão letras minúsculas
 * @param {Boolean} upper Define se existirão letras maiúsculas
 * @returns {String}
 */
export const keyGenerator = (
  length = 20,
  numbers = true,
  lower = true,
  upper = true
): string => {
  if (!numbers && !lower && !upper)
    throw new Error("Pelo menos UM dos 3 últimos parâmetros é obrigatório");

  const chars: string[] = [];

  if (numbers) chars.push(...[..."01234567890"]);
  if (lower) chars.push(...[..."abcdefghjklmnopqrstuvwxyz"]);
  if (upper) chars.push(...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]);

  return [...Array(length)]
    .map(() => chars[(Math.random() * chars.length) | 0])
    .join("");
};

/**
 * Gerador de slug
 * Create SLUG from a string
 * This function rewrite the string prototype and also
 * replace latin and other special characters.
 *
 *  @link
 *  Forked by Gabriel Fróes - https://gist.github.com/gabrielfroes
 *  Original Author: Mathew Byrne - https://gist.github.com/mathewbyrne/1280286
 *
 *  @example
 *
 *  slug('José Cláudio + ')             // -> 'jose-claudio
 *  slug('José --    /\|<>Cláu=dio ')   // -> 'jose-claudio
 *
 *  @param {String} value
 *  @returns {String} Valor convertido para slug
 */
export const slug = (value: string): string => {
  return value
    .toLowerCase()
    .replace(/[àÀáÁâÂãäÄÅåª]+/g, "a") // Special Characters #1
    .replace(/[èÈéÉêÊëË]+/g, "e") // Special Characters #2
    .replace(/[ìÌíÍîÎïÏ]+/g, "i") // Special Characters #3
    .replace(/[òÒóÓôÔõÕöÖº]+/g, "o") // Special Characters #4
    .replace(/[ùÙúÚûÛüÜ]+/g, "u") // Special Characters #5
    .replace(/[ýÝÿŸ]+/g, "y") // Special Characters #6
    .replace(/[ñÑ]+/g, "n") // Special Characters #7
    .replace(/[çÇ]+/g, "c") // Special Characters #8
    .replace(/[ß]+/g, "ss") // Special Characters #9
    .replace(/[Ææ]+/g, "ae") // Special Characters #10
    .replace(/[Øøœ]+/g, "oe") // Special Characters #11
    .replace(/[%]+/g, "pct") // Special Characters #12
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

/**
 * Converte um número passado para o formato do Real Brasileiro
 *
 * https://stackoverflow.com/a/64909632/3240078
 * NumberFormat use small non-breaking space (\u202f) for thousand separator
 * and normal non-breaking space beforece currency (\xa0)
 *
 * @example
 *  currencyBR(12.34)    // -> 'R$ 12,34'
 *  currencyBR('12.34')  // -> 'R$ 12,34'
 *  currencyBR('12,34')  // -> null
 *
 * @param {Number|String} value
 * @returns {String}
 */
export const currencyBR = (value: number | string): string => {
  if (!isNumeric(value)) throw new Error("Valor não numérico");

  return String(
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(+value)
  )
    .replace(".", ",")
    .replace(/[\xa0\u202f]/g, "");
  // .replace(/\u202f/g, "");
};

/**
 * Converte um nome para as primeiras em maiúsculas, exceto as partes
 * que normalmente continuam em minúsculas, tipo "de", "dos" etc.
 *
 * @example
 * upperFirst('jose claudio medeiros de lima') // -> Jose Claudio Medeiros de Lima
 * upperFirst('JOSE CLAUDIO MEDEIROS DE LIMA') // -> Jose Claudio Medeiros de Lima
 * upperFirst('JoSe cLaUdIo MeDeIrOs De LiMa') // -> Jose Claudio Medeiros de Lima
 *
 * @param {String} value
 * @returns {String}
 *
 */
export const upperFirst = (value: string): string => {
  if (!value) {
    return "";
  }

  value = value.toLowerCase();

  const ignore = ["e", "de", "da", "do", "das", "dos"];

  const parts = value.split(" ").map((part) => {
    if (ignore.includes(part)) {
      return part;
    } else {
      return (
        part.charAt(0).toLocaleUpperCase() + part.slice(1).toLocaleLowerCase()
      );
    }
  });

  return parts.join(" ");
};

/**
 * Reescreve um objeto aplicando um prefixo definido às suas chaves
 *
 * @example
 * const original = {
 *    name: 'ze',
 *    age: 23
 * }
 *
 * prefixObjectKeys( original, 'people.*.' )
 * // ->
 * {
 *    'people.*.name': 'ze',
 *    'people.*.age': 23,
 * }
 *
 *
 * @param {Object} obj Objecto original
 * @param {String} prefix Prefixo que será aplicado
 */
export const prefixObjectKeys = (obj: any, prefix = ""): any => {
  if (!prefix) return obj;

  const output: any = {};

  Object.keys(obj)
    .map((key) => ({ key, prefixed: `${prefix}${key}` }))
    .forEach((item) => (output[item.prefixed] = obj[item.key]));

  return output;
}

/**
 * objectFlat()
 * Recebe um objeto e o transforma em uma versão plana, com suas chaves
 * multinível unidas por um ponto.
 *
 * @link https://stackoverflow.com/a/34514143/3240078
 *
 * @example
 *
 *   const obj = {
 *     id: 1, name: 'claudio', age: 39, email: 'email@mail.com',
 *     address: {
 *        street': 'Monkey St.', number': '599', city': 'Halalala', zipcode': '9876543'
 *     }
 *   }
 *
 *   objectFlat( obj )
 *     // ->
 *     {
 *       id: 1, name: 'claudio', age: 39, email: 'email@mail.com',
 *       'address.street': 'Monkey St.', 'address.number': '599',
 *       'address.city': 'Halalala', 'address.zipcode': '9876543'
 *     }
 *
 * @param {Object} obj
 * @returns {Object}
 */
export function objectFlat(obj: Record<string, any>): Record<string, any> {
  function traverseAndFlatten(
    currentNode: any,
    target: any,
    flattenedKey: string | undefined = undefined
  ) {
    for (const key in currentNode) {
      // eslint-disable-next-line no-prototype-builtins
      if (currentNode.hasOwnProperty(key)) {
        let newKey;
        if (flattenedKey === undefined) {
          newKey = key;
        } else {
          newKey = flattenedKey + "." + key;
        }

        const value = currentNode[key];
        if (typeof value === "object") {
          traverseAndFlatten(value, target, newKey);
        } else {
          target[newKey] = value;
        }
      }
    }
  }

  function flatten(obj: Record<string, any>) {
    const flattenedObject = {};
    traverseAndFlatten(obj, flattenedObject);
    return flattenedObject;
  }

  return flatten(obj);
}

/**
 * Mantém somente as chaves do objeto que estão na lista branca
 *
 * @example
 *
 *
 * const address = {
 *   id: 1,
 *   description: 'decrição',
 *   city_id: 123,
 *   city: {
 *     id: 123,
 *     name: 'açu'
 *   }
 * }
 *
 * whiteList(address, ['id', 'description', 'city_id'])
 * // -> { id: 1, description: 'decrição', city_id: 123 }
 *
 * whiteList([address, address], ['id', 'description'])
 * // -> [
 *   { id: 1, description: 'decrição' },
 *   { id: 1, description: 'decrição' }
 * ]
 *
 * @param {Object|Array} obj Objeto inicial. Se for array, aplica um loop aos elementos
 * @param {Array} keys Lista de chaves permitidas
 */

export const whiteList = (obj: any | any[], keys: any[]): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => whiteList(item, keys));
  }

  const remove = (key: string) => {
    delete obj[key];
  };

  Object.keys(obj)
    .filter((key) => !keys.includes(key))
    .forEach(remove);

  return obj;
};

/**
 * Substitui os caracteres acentuados por semelhantes não acentuados respeitando
 * maiúsculas e minúsculas
 *
 * @example
 * removeAccent('Açu') // -> Acu
 *
 * @param value
 * @returns
 */
export const removeAccent = (value: string): string => {
  value = String(value);
  const accents =
    "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";

  const noAccents =
    "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
  let newValue = "";
  for (let i = 0; i < value.length; i++) {
    let troca = false;
    for (let a = 0; a < accents.length; a++) {
      if (value.substr(i, 1) == accents.substr(a, 1)) {
        newValue += noAccents.substr(a, 1);
        troca = true;
        break;
      }
    }
    if (troca == false) {
      newValue += value.substr(i, 1);
    }
  }
  return newValue;
};

/**
 * randomNumber()
 * Cria um número aleatório com o número de caracteres
 *
 * @example
 * randomNumber(8, true) // -> 00083159
 * randomNumber(4) // -> 831
 *
 * @param {Integer} length
 * @param {Boolean} forceLength Adiciona zeros à esquerda para ter os números de caractes exatos
 * @returns {String}
 */
export function randomNumber(
  length: number,
  forceLength = false
): number | string {
  const value = Math.floor(Math.random() * 10 ** length);

  if (forceLength) return String(value).padStart(length, "0");

  return +value;
}

/**
 * Limpa um número informado, retirando caracteres diferentes de números,
 * preenchendo com zeros à esquerda se for menor que o tamanho exato e
 * removendo uma parte do número se for maior que tamanho definido.
 *
 * 1) Retira caracteres não-numéricos
 * 2) Preenche com zeros à esquerda se 'value' for menor que 'length'
 * 3) Remove caracteres à direita se 'value' for maior que 'length'
 *
 * @example
 *  clearNumber(12345-6, 6) // -> 123456
 *  clearNumber(12345678, 3) // -> 123
 *  clearNumber(12345, 10) // -> 0000001234
 *
 * @param {Number|String} value
 * @param {Number} length Tamanho exato. Se for null, só retira os caracteres não-numéricos
 * @returns {String} Número com o tamanho exato
 */
export function clearNumber(
  value: string | number,
  length: number | null = null
): string {
  const clearedNumber = String(value).replace(/([^\d]+)/gi, "");

  if (!length || clearedNumber.length === length) return clearedNumber;

  return clearedNumber.padStart(length, "0").substring(0, length);
}

/**
 * Limpa os valores falsy do objeto informado
 *
 * @example
 * clearFalsy({ id:1, age:'0', idade: 'NaN', birth: '' }); // -> { id: 1 }
 *
 * @param {Object} value
 * @returns {Object} Objeto sem os valores
 */
export function clearFalsy(value: Record<string, any>) {
  Object.keys(value).forEach((key) => {
    if (isFalsy(value[key])) delete value[key];
  });
  return value;
}

/**
 * insertAtPosition()
 * Insere um conjunto de caracteres em um local específico de uma string
 *
 * @example
 * insertAtPosition('AAABBB', 'C', 3) // -> AAACBBB
 * insertAtPosition('000011122223445555', 99, 7) // -> 00001119922223445555
 *
 * @param {String} value Valor original
 * @param {String|Number} insertValue Valor que será inserido
 * @param {Number} position Posição que receberá o novo valor
 * @returns {String}
 *
 */
export function insertAtPosition(
  value: string,
  insertValue: string | number,
  position: number
): string {
  return `${value.substring(0, position)}${insertValue}${value.substring(
    position
  )}`;
}

/**
 * removeFromPosition()
 * Retira um conjunto de caracteres de um local específico de uma string
 *
 * @example
 * removeFromPosition('00001119922223445555', 7,9) // -> 000011122223445555
 * removeFromPosition('AAACBBB', 3,4) // -> AAABBB
 *
 * @param {String|Number} value Valor original
 * @param {String|Number} startPosition
 * @param {String|Number} endPosition
 * @returns {String}
 *
 */
export function removeFromPosition(
  value: string,
  startPosition: number,
  endPosition: number
): string {
  return [value.slice(0, startPosition), value.slice(endPosition)].join("");
}

/**
 * applyVars()
 * Aplica variáveis a um texto
 *
 * @example
 * const values = { id: 1, name: 'claudio', age: 39, email: 'email@mail.com' }
 *
 * applyVars('Olá, :name. Seu e-mail ainda é :email?', values)
 * applyVars('Olá, {name}. Seu e-mail ainda é {email}?', values,     { start: '{',  end: '}' })
 * applyVars('Olá, {{name}}. Seu e-mail ainda é {{email}}?', values, { start: '{{', end: '}}'})
 *
 * @param {String} text
 * @param {Object} vars
 * @param {ApplyVarsOptions} options
 */
export function applyVars(
  text: string,
  vars: Record<string, any>,
  options: Partial<ApplyVarsOptions> = {}
): string {
  const { start = ":", end = "" } = options;

  return Object.keys(vars).reduce(
    (text, key) => text.replace(`${start}${key}${end}`, vars[key]),
    text
  );
}

/**
 * applyMask()
 * Aplica uma máscara a uma string
 *
 * @example
 * applyMask('59650000', '00.000-000') // -> 59.650-000
 * applyMask('99877665544', '(00) 0 0000-0000') // -> (99) 8 7766-5544
 *
 * @param {String|Number} value Valor original
 * @param {String} mask
 * @returns {String}
 *
 */
export function applyMask(value: string | number, mask: string): string {
  const maskLen = clearNumber(mask).length;
  let masked = clearNumber(value, maskLen);
  const specialChars = ["/", "-", ".", "(", ")", " "];

  for (let position = 0; position < mask.length; position += 1) {
    const current = mask[position];
    if (specialChars.includes(current))
      masked = insertAtPosition(masked, current, position);
  }

  return masked;
}

/**
 * randomLetter()
 * Pega uma letra maiúscula aleatoriamente
 *
 * @example
 * randomLetter() // -> A
 * randomLetter() // -> S
 *
 * @returns {String}
 */
export function randomLetter(): string {
  const idx = Math.floor(1 + Math.random() * 26);
  return String.fromCharCode(idx + 64);
}
