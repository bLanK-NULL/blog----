/*
1. 如果你试图删除的属性不存在，那么 delete 将不会起任何作用，但仍会返回 true。
2. delete 只影响自身属性
3. configurable：false的属性不可以delete
4. delete 函数参数永远不会生效
5. 不能删除let、const、var声明的变量，但可以声明对象中的属性
6. delete a[1] 后 1 in a === false 
*/

let name = 'lzy'
title = 'blank'
console.log(delete name);   //false ，删不了
console.log(delete title);  //true ，相当于删除globalThis.title


let prot = { a: '111' }
let obj = Object.create(prot)
console.log(delete obj.a) //true
console.log(obj.__proto__.a); //111， 

let fn = function (what) {

    let cncn = 'qweqwe'
    // console.log('say:' + what)

    {
        console.log('cncn ', delete cncn)
    }

}

let nihao = 'hello'
fn(nihao)


asd = 'asdasd'

console.log(delSomething(asd));
