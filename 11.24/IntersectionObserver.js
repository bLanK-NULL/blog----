const h1 = document.querySelector('.intersectionH1');

const obsr = new IntersectionObserver(function(entries, obInstance){
    console.log(entries);
})

obsr.observe(h1)

setTimeout(() => {
    console.log(obsr.takeRecords());
}, 2000);