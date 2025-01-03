//container 之间移动时，可以把他挤开
const container = document.querySelector('.container')
const dragArea = document.querySelector('.dragArea')

let operatingNode = null;

dragArea.addEventListener('dragstart', function (e) {
    console.log('dragstart', e.target)
    operatingNode = e.target
    e.dataTransfer.effectAllowed = e.target.dataset.effect; //都是copy
})
container.addEventListener('dragstart',function(e) {
    operatingNode = e.target;
    e.dataTransfer.effectAllowed  =e.target.dataset.effect;//都是move
})
container.addEventListener('drop', function (e) {
    if (e.dataTransfer.effectAllowed === 'copy') {//
        const newBtn = operatingNode.cloneNode(true)
        newBtn.setAttribute('data-effect', 'move')
        e.target.appendChild(newBtn)
    }else if(e.dataTransfer.effectAllowed ==='move'){
        const newPosBtn = operatingNode.cloneNode(true)
        e.target.appendChild(newPosBtn)
        operatingNode.remove()
    }


    console.log('drop', e.dataTransfer.effectAllowed);
})
container.addEventListener('dragover', function (e) {
    e.preventDefault() //元素默认不允许被拖放

})
container.addEventListener('dragenter', function (e) {
    console.log('enter', e.target)
})
container.addEventListener('dragleave', function (e) {
    console.log('leave', e.target)
})

//上方区域
dragArea.addEventListener('dragover', function (e) {
    e.preventDefault() //元素默认不允许被拖放
})
dragArea.addEventListener('drop', function (e) {//放回去
    console.log('drop', e.dataTransfer.effectAllowed);
    operatingNode.remove()
})