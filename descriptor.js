let obj = new Object({
    a: 'a1',
    b: 'b2',
    c: 'c3'
})
let descriptor = Object.getOwnPropertyDescriptor(obj,'a')
descriptor.enumerable = false

// for(let o in obj) {
//     console.log(o)
// }

console.log(Object.getOwnPropertyDescriptor(obj,'a'))

//得到的descriptor是只读的，修改无效