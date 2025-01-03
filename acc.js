const p1 = require('./pa');

// console.log((async function(){ return await p1})());
(async function () {
    let ppp = await p1
    console.log(ppp);
    module.exports = ppp
 
})()
