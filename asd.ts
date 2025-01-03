interface ILength {
    length: number,
    sayHi: () => void, 
}

class A implements ILength{
    length: number;
    constructor(length:number) {
        // this.length = length
    }
    sayHi() {
        console.log('hi');
    } 
}
let a = new A(123)



