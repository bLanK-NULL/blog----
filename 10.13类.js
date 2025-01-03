/*
1. 类不会提升
2. typeof 类  == function
3. 类可以当作参数传递
4. 类块中所有内容会定义在类的原型上
    支持定义 函数、迭代器生成器、访问器设置器
5. 构造函数默认返回新对象， 如果显式return 一个非空对象，就返回该对象 
    return这些无效，依然返回新对象：null, undefined, 原始值
6. 不能重载

*/
class Person { 
    constructor(name) {
        this.name = name
    }
    whoami() {
        console.log("I'm " + this.name);
    }
    static whoareyou() {
        console.log('you are xxx')
    }
}
Person.whoareyou()

let p1 = new Person('blank')
p1.whoami()

//类上定义变量
Person.customA = 'AAAAA'
console.log(Person.customA)

//类原型上定义变量 -- 子类实例可以访问
Person.prototype.customB = 'BBBBB'
console.log(p1.customB);




//new target

class Vehicle {
    constructor() {
        console.log('new.target', new.target);
        if (new.target === Vehicle)
            throw new Error('Vehicle 是抽象基类')
    }
}
class Car extends Vehicle {

}

let car = new Car();

class Adc {
    constructor(name) {
        this.name = name
        return false
    }
}
let a = new Adc('lzy')

console.log(a);


