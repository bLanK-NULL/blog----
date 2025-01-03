// 原型链 + 盗用构造函数

// 要继承的属性用构造函数写
// 要继承的方法写在原型上
function Person(name) {
    this.name = name; 
    this.friends = ['a']
}
Person.prototype.say = function () {
    console.log('Person');
}
function Student(name,major) {
    Person.call(this,name)  //继承属性
    this.major = major 
}
Student.prototype = new Person();   //继承方法


let stu1 = new Student('lzy','soft')
let stu2 = new Student('blank','art')

stu1.friends.push("stu1's friends")
stu2.friends.push("stu2's friends")

console.log(stu1)
console.log(stu2)

//最大问题，调用两次父类构造函数，导致子类原型也有实例属性

function Father(name) {
    this.name = name;
    this.colors = ['a']
}
//定义方法
// Father.prototype.sayName = function() {
//     console.log(this.name);
// }
function Son(name, age){
    Father.call(this, name)     //第二次调用父类构造函数 --继承属性
    this.age = age;
}
Son.prototype = new Father()    //第一次调用父类构造函数 --继承方法

Son.prototype.constructor = Son
 

let son = new Son('blank',14)

//可以发现实例和它的原型都有 name 和 colors， 这是调用俩次父类构造函数的结果
console.log(Object.getOwnPropertyNames(son));   //['name', 'colors', 'age']
console.log(Object.getOwnPropertyNames(Son.prototype)); //['name', 'colors', 'constructor']



