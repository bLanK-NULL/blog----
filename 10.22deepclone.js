//深拷贝
// import { cloneDeep } from 'lodash';

function deepClone(obj, hash = new WeakMap()) {
    if (!obj) return obj
    let clone;

    //typeof 有哪些取值：number，string, boolean, bigint, symbol, undefined
    //  object(null,array,set,map,weakmap), function(class)

    //json 有哪些类型number, string, boolean, null, array, object

    // 实例 instanceof Function === false
    // instanceof 右边不能放 Class class
    // 实例 instanceof 类名 === true
    //WeakMap 类型不能被深拷贝
    //用WeakMap来解决循环拷贝问题

    if(hash.has(obj)){
        // 如果在的话
        return hash.get(obj)
    }

    if (obj instanceof Set) {
        return new Set([...obj])
    } else if (obj instanceof Map) {
        return new Map([...obj])
    } else if (obj instanceof WeakMap) {
        throw 'weakmap类型未作处理'
    } else if (typeof obj === 'function') {
        //方法不用克隆，直接返回
        return obj
    } else if (obj instanceof Array) { //obj 是数组
        clone = [];
        hash.set(obj, clone)
        obj.forEach(item => {
            clone.push(deepClone(item, hash))
        })
    } else if (typeof obj !== 'object') { //原始值类型
        return obj
    }
    else { //obj 是Object对象
        clone = {};
        hash.set(obj, clone)
        //键是字符
        Object.getOwnPropertyNames(obj).forEach(propNames => {
            clone[propNames] = deepClone(obj[propNames],hash)
        })
        //键是Symbol
        Object.getOwnPropertySymbols(obj).forEach(syb => {
            clone[Symbol(syb.description)] = deepClone(obj[syb],hash)
        })
    }
    return clone
}

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: [1, 2, {
//         e: 'h'
//     }],
//     f: undefined,
//     g: null,
//     h: {
//         i: 12,
//         j: [1, 3, 4]
//     },
//     k: new Set([1, '2'])
// };
// console.log(cloneDeep(obj));

//第二版
/*
可以完美解决循环引用的问题。
不支持拷贝函数
不支持拷贝Symbol
不支持拷贝原型上的方法和变量
*/
// function deepClone(obj) {
//     return new Promise(resolve => {
//         const { port1, port2 } = new MessageChannel()
//         port1.postMessage(obj)
//         port2.onmessage = e => {
//             resolve(e.data)
//         }
//     })
// }

//第三版
/*
可以完美解决循环引用的问题
不支持拷贝函数
不支持拷贝Symbol
不支持拷贝原型上的方法和变量
*/
// function deepClone(obj) {
//     return structuredClone(obj)
// }

// let father={}
// father.fn = function() {}
// let obj = Object.create(father)
// obj = Object.assign(obj,{
//     a: "", c: undefined, e: 0, f: [], g: NaN, h: null, I: new Set([1, 2]),
//     J: new Map([['a', 1]])
// })

let obj = {
    a: "qq", c: undefined, e: 0, f: [], g: NaN, h: null, I: new Set([1, 2]),
    J: new Map([['a', 1]]), [Symbol('K')]: 'blank', fn(){},
}
obj.b = obj//循环引用
// deepClone(obj).then(res=> {
//     console.log(res);
// })

console.log(deepClone(obj));

