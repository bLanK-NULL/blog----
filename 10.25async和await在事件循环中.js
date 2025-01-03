async function asy1() {
    console.log(1);
    await asy2();
    console.log(2);
}
asy2 = async () => {
    await (async () => {
        await (() => {
            console.log(3);
        })()
        console.log(4);
    })()

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
output： 1 3 6
微任务： 4 完成asy2 5 
===至此全局js执行完成===
...
===定时器函数到时===
output：1 3 6 4 5 2

*/