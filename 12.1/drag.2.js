const container = document.querySelector('.container')
const dragArea = document.querySelector('.dragArea')

let operatingNode = null;

dragArea.addEventListener('dragstart', function (e) {
    console.log('dragstart', e.target)
    operatingNode = e.target
    e.dataTransfer.effectAllowed = e.target.dataset.effect; //都是copy
})
container.addEventListener('dragstart', function (e) {
    operatingNode = e.target;
    e.dataTransfer.effectAllowed = e.target.dataset.effect;//都是move
})
container.addEventListener('drop', function (e) {
    console.log(e.target);
    if (e.dataTransfer.effectAllowed === 'copy') {//外面拖进来
        if (e.target.dataset.full === 'empty') {// 空盒子
            const newBtn = operatingNode.cloneNode(true)
            newBtn.setAttribute('data-effect', 'move')
            //下面这个监听器防止 拖进盒子的内容里
            newBtn.addEventListener('dragover', function (e) {
                e.dataTransfer.dropEffect = 'none'
                e.stopPropagation()
            })
            e.target.appendChild(newBtn)
            e.target.setAttribute('data-full', 'full')//格子被放入了东西
        }
    } else if (e.dataTransfer.effectAllowed === 'move') {// 换到其他格子

        const newPosBtn = operatingNode.cloneNode(true)
        //下面这个监听器防止 拖进盒子的内容里
        newPosBtn.addEventListener('dragover', function (e) {
            e.dataTransfer.dropEffect = 'none'
            e.stopPropagation()
        })
        e.target.appendChild(newPosBtn)
        e.target.setAttribute('data-full', 'full')//新格子被放入了
        operatingNode.parentNode.setAttribute('data-full', 'empty') //旧格子空出来了

        operatingNode.remove()
    }


    console.log('drop', e.dataTransfer.effectAllowed);
})
container.addEventListener('dragover', function (e) {
    if (e.target.dataset.full === 'empty')//空盒子
        e.preventDefault() //允许被拖放

})
// container.addEventListener('dragenter', function (e) {
//     console.log('enter', e.target)
// })
// container.addEventListener('dragleave', function (e) {
//     console.log('leave', e.target)
// })

//上方区域
dragArea.addEventListener('dragover', function (e) {
    e.preventDefault() //允许放
})
dragArea.addEventListener('drop', function (e) {//放回去
    console.log('drop', e.dataTransfer.effectAllowed);
    if (e.dataTransfer.effectAllowed === 'move') {        //里面出来的
        operatingNode.parentNode.dataset.full = 'empty'
        operatingNode.remove()

    }

})