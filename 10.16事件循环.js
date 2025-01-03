// setTimeout(() => {
//     console.log('setTimeout start');
//     new Promise((resolve) => {
//       console.log('promise1 start');
//       resolve();
//     }).then(() => {
//       console.log('promise1 end');
//     })
//     console.log('setTimeout end');
//   }, 0);
//   function promise2() {
//     return new Promise((resolve) => {
//       console.log('promise2');
//       resolve();
//     })
//   }
//   async function async1() {
//     console.log('async1 start');
//     await promise2();
//     console.log('async1 end');
//   }
//   async1();
//   console.log('script end');



{
    // console.log(1)
    // const p = new Promise(function (resolve, reject) {
    //     console.log(2)
    //     setTimeout(() => {
    //         console.log(9)
    //     }, 0);
    //     resolve()
    // }).then(() => {
    //     console.log(3)
    //     throw (new Error('错误'))
    // }).catch(() => {
    //     console.log(4)
    // })
    // console.log(5)
    // setTimeout(() => {
    //     console.log(6)
    // }, 0);
    // console.log(7)
    // p.then(() => {
    //     console.log(8)
    //     throw (new Error('错误2'))
    // })

    console.log(1)
    const p2 = new Promise(function (resolve, reject) {
        console.log(2)
        setTimeout(() => {
            console.log(9)
        }, 0);
        resolve()
    }).then(() => {
        console.log(3)
        throw (new Error('错误'))
    }).catch(() => {
        console.log(4)
    })
    console.log(5)
    setTimeout(() => {
        console.log(6)
    }, 0);
    console.log(7)
    p2.then(() => {
        console.log(8)
        throw (new Error('错误2'))
    })
    requestAnimationFrame(function () {
        console.log(10)
    })
}