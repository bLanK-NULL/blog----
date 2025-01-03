//防抖

let timer =null;
//参数依次是， 需要防抖的函数， 防抖时间， 需要防抖函数的参数
function debounce(fn, duration = 1000, ...args) {

    // 如果没有定时器
    if(!timer) {
        fn(...args);
        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null;
        }, duration);
    }else {
        console.log('防抖中......')
    }
}