const inputs = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')
const tBtn = document.querySelector('.tBtn')
const div = document.querySelector('.content')
const divBtn = document.querySelector('.divBtn')
/**
 * @param {mutations} [] 
 */
const ob = new MutationObserver(mutations => {
    console.log(mutations);
})
 
inputs.forEach(item => {
    item.addEventListener('click', function (e) {
        // console.log(item);
        //为什么表单的value监听不到？
        item.value += '@'
    })
    ob.observe(item, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        // attributeOldValue: true,
        // characterDataOldValue: true
    })
})

ob.observe(textarea, {
    attributes: true,
    characterData: true,
    childList: true,
    // subtree: true,
    // attributeOldValue: true,
    // characterDataOldValue: true
})
tBtn.addEventListener('click', function (e) {
    textarea.setAttribute('nickname', 'bLanK')
})


divBtn.addEventListener('click', function(){
    div.innerText += '@'
})
ob.observe(div, {
    // attributes: true,
    // characterData: true,
    childList: true,
})