let uid = 0; 
class Dep { // 观察目标
    static target = null;  //*1 巧妙的设计！
    constructor() {
        this.id = uid++;
        this.subs = [];
    }
    addSub(sub) {
        this.subs.push(sub);
    }
    removeSub(sub) {
        this.subs.$remove(sub);
    }
    depend() { //依赖收集
        //当前的watcher实例添加this所指向的依赖
        Dep.target.addDep(this);
    }
    notify() { //触发副作用
        const subs = this.subs.slice();
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
        }
    }
}
/*
*1 巧妙的设计！
由于JavaScript是单线程模型，所以虽然有多个观察者函数，
但是一个时刻内，就只会有一个观察者函数在执行，
那么此刻正在执行的那个观察者函数，所对应的Watcher实例，
便会被赋给Dep.target这一类变量
*/