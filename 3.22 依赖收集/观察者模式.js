// 观察者集合
class ObserverList {
    constructor() {
        this.list = [];
    }
    add(obj) {
        this.list.push(obj);
    }
    removeAt(index) {
        this.list.splice(index, 1);
    }
    count() {
        return this.list.length;
    }
    get(index) {
        if (index < 0 || index >= this.count()) {
            return;
        }
        return this.list[index];
    }
    indexOf(obj, start = 0) {
        return this.list.indexOf(obj, start);
    }
}
// 观察者类
class Observer {
    constructor(fn) {
        this.update = fn;
    }
}
// 观察目标类
class Subject {
    constructor() {
        //观察者集合
        this.observers = new ObserverList();
    }
    addObserver(observer) {
        this.observers.add(observer);
    }
    removeObserver(observer) {
        this.observers.removeAt(
            this.observers.indexOf(observer)
        );
    }
    notify(context) {
        const count = this.observers.count();
        for (let i = 0; i < count; ++i) {
            this.observers.get(i).update(context);
        }
    }
}

