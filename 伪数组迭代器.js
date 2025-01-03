let fakeArr = {
    0: 'a',
    1: 'b',
    2: 'c',
    99: 'zzz',
    length: 3,

}

Object.prototype[Symbol.iterator] = function* () {
    // for (i in range(0, this.length)) {
    //     yield this[i]
    // }

    let keys = Object.keys(this);
    let regExpNum = new RegExp(/[0-9]+/)
    for (let key of keys) {
        if (regExpNum.test(key))
            yield this[key]
    }
}

for (let item of fakeArr) {
    console.log(item); //TypeError: fakeArr is not iterable
}

