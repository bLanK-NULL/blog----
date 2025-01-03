Promise.resolve().then(() => {
    console.log(1)
    return Promise.resolve(2).then(res => console.log(res))
    
}).then(() => {
    console.log(3)
})
Promise.resolve().then(() => {
    console.log(4)
}).then(() => {
    console.log(5)
}).then(() => console.log(6))
.then(()=>{
    console.log(7)
})

//-=----------


// 微队列:
// () => {
//     console.log(1)
//     return Promise.resolve(2).then(res => console.log(res))
// }

// 4

// //
// out: 1 4
// wei:
// .then(()=>{
//     函数完成
// })
// 5
// //
// out: 1 4 5
// wei: 
//  ()=>{函数完成} 6

//  //
//  out: 1 4 5 6
//  wei:
//  then() 7
//  //
//  out: 14567 3



