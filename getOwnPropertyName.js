/*
区分：
Object.keys()
for-in
Object.getOwnPropertyName()

Object.hasOwnProperty()

*/

Object.prototype.d = 'ddd'
let obj = new Object({
    a: 'a1',
    b: 'b2',
    c: 'c3'
})
Object.defineProperty(obj,'e',{
    value: 'eeee',
    enumerable: false //不可被枚举
})

console.log(Object.keys(obj)) //[ 'a', 'b', 'c' ]

console.log(Object.getOwnPropertyNames(obj))//[ 'a', 'b', 'c', 'e' ]

let arr = []
for(let i in obj){
    arr.push(i)
}
console.log(arr)//[ 'a', 'b', 'c', 'd' ]

//不包含原型上的，可枚举的属性
console.log(Object.values(obj)) //[ 'a1', 'b2', 'c3' ]
console.log(Object.entries(obj))//[ [ 'a', 'a1' ], [ 'b', 'b2' ], [ 'c', 'c3' ] ]