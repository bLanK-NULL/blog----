const file1 = require('./file2')

console.log(file1.a);

file1.a = 200
console.log(file1.a);

//修改无效, 因为修改的是file2函数作用域的变量
file1.setData(100)
console.log(file1.a)

console.log(global);