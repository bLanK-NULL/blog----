// 盗用构造函数继承 实例属性
// 混合式原型链继承 方法

//最大特点是： 用一个函数实现两个类的继承关系

function inheritPrototype(Son, Father){
    let prototype = Object.create(Father.prototype)
    //下面两行是建立起构造函数和原型对象之间的双向箭头
    prototype.constructor = Son
    Son.prototype = prototype;
}

function Father(name) {
    //定义实例属性
    this.name  =name
    this.colors = ['a']
}
function Son(name, age) {
    Father.call(this, name) //调用一次父类构造函数
    this.age = age
}
// 建立继承关系
inheritPrototype(Son, Father) 
// 定义父类方法
Father.prototype.sayName = function() {
    console.log(this.name);
}
// 定义子类方法 -- 必须在inheritPrototype后面
Son.prototype.sayAge = function() {
    console.log(this.age);
}
//实例化
let son = new Son('blank',22)
//只调用了一次父类构造函数, 所以子类原型上没有实例属性
console.log(Object.getOwnPropertyNames(son)); //[ 'name', 'colors', 'age' ]
console.log(Object.getOwnPropertyNames(son.__proto__)); //[ 'constructor', 'sayAge' ]
console.log(Object.getOwnPropertyNames(Father.prototype));  //[ 'constructor', 'sayName' ]

// 引用值不共享
let son2 = new Son('lzy2', 23)
son.colors.push('b')
son2.colors.push('c')
console.log(son.colors);    // [ 'a', 'b' ]