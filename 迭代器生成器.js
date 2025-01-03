// let arr = ['a','b']

// let it = arr[Symbol.iterator]
// console.log(it);    //[Function: values] 迭代器的工厂函数

// let ita = arr[Symbol.iterator]() 
// console.log(ita);   //Object [Array Iterator] {}  迭代器

// /*
// 迭代器里包含
// */
// console.log(ita.next());
// console.log(ita.next());
// console.log(ita.next());


// Iterable 接口
// class Counter {
//     constructor(limit) {
//         this.limit = limit
//     }
//     [Symbol.iterator]() {
//         let count = 1;
//         let limit = this.limit
//         return {
//             next() {
//                 if (count <= limit)
//                     return { done: false, value: count++ }
//                 else return { done: true, value: undefined }
//             },
//             //可选 提前终止迭代器
//             return() {
//                 console.log('提前终止...')
//                 //必须返回IterableResult
//                 return { done: true }
//             }
//         }
//     }

// }
// let counter = new Counter(3)
// for (let i of counter) {
//     console.log(i)
//     if (i == 2)
//         break
// }

// let fakerArr = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
// }
// for( let i in fakerArr){
//     console.log(fakerArr[i]) //正常
// }
// for( let item of fakerArr){ //TypeError: fakerArr is not iterable
//     console.log(item)
// }

// let arr = ['asd','123','vbn']

// let iterator = arr[Symbol.iterator]()

// for(let i of iterator){
//     console.log(i)
//     if(i==='123')
//         break
// }
// for(let i of iterator){
//     console.log(i)
// }


// 生成器

function * generatorFn() {}
const g = generatorFn()
console.log(g);         //Object [Generator] {}
console.log(g.next('a'))   //{ value: undefined, done: true }