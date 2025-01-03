async function asy1() {
    console.log(1);
    await asy2();
    console.log(2);
}
asy2 = async () => {
    await setTimeout(() => {
        Promise.resolve().then(() => {
            console.log(3);
        })
        console.log(4);
    }, 0);

}
asy3 = async () => {
    Promise.resolve().then(() => {
        console.log(5);
    })
}
//执行
asy1();
console.log(6);
asy3();
/*
output： 1，6， 
微任务： say2完成，5
宏任务：定时器，
===至此全局js执行完成===
...
===定时器函数到时===
output：1，6，
微任务：5，2，
宏任务：定时器
===asy1完成===
output：1，6，5，2，4, 3
*/