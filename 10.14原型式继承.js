
// 原型式继承
function object(o) {
    function F() { }
    F.prototype = o;
    return new F(); //新对象的原型是o
}
let father = {
    name: 'blank',
    friends: ['a']  //问题：对于引用型对象，子对象继承的是同一地址
}
let son1 = object(father)
son1.name = 'son1'
son1.friends.push('b')
let son2 = object(father)
son2.name = 'son2'
son2.friends.push('c')

console.log(father);//{ name: 'blank', friends: [ 'a', 'b', 'c' ] }

//Object.create(param1 [, param2])  param1，和object方法一样， param2，可选，和defineProperties参数一样
