let obj = new Object({
    a: 'a1',
    b: 'b2',
    c: 'c3',
    d: {
        e: 'ee',
        f: [1,2,3]
    }
})

Object.freeze(obj)

obj.a = 'new a'

obj.d.e = 'new e'
obj.d.f[0] = 0
console.log(obj);

