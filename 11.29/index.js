Promise.resolve().then(()=> {
    console.log(0)
    return Promise.resolve(4)
}).then((res)=>{{
    console.log(res)
}})
Promise.resolve().then(()=> {
    console.log(1)
}).then(()=>{
    console.log(2)
}).then(()=>{
    console.log(3)
})

// 开始
微队列:   
()=> {                           ;     1
    console.log(0)
    return Promise.resolve(4)//
}                       
// ===以上同步代码执行完成===
// ===开始执行第一个微队列任务===
output:
0
微队列:
1      .then(()=> 函数完成)
// ======
output:
0 1 
微队列:
.then(()=> 函数完成) 2
// ======
output:
0 1 
微队列:
2 函数完成return出去
// ======
output:
0 1 2
微队列:
函数完成return出去 3
// ======
output:
0 1 2
微队列:
3 4
// ===最后输出===
0 1 2 3 4
 