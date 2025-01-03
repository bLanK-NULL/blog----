 
function createAnother(original) {
    let clone = Object.create(original) //返回一个对象，这个对象的原型是original
    clone.sayHi = function() {  //增强该对象
        console.log('hi');
    }
    return clone
}
//使用 createAnother
let person = {
    name: 'blank',
    friends: ['a']  //和子对象共享地址！
}
let anotherPerson = createAnother(person)
let yetAnotherPerson = createAnother(person)

anotherPerson.name = 'another'
anotherPerson.friends.push('another')

yetAnotherPerson.name = 'yet'
yetAnotherPerson.friends.push('yet')

console.log(person); //{ name: 'blank', friends: [ 'a', 'another', 'yet' ] }