let p1 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve('success')
    }, 1200);
})

// export default p1
module.exports = p1