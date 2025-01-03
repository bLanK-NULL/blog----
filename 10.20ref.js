function effect(fn) {
    const _effect = new ReactiveEffect(fn)
    _effect.run()
}
class ReactiveEffect {
    constructor(fn) {
        this.fn = fn
    }
    run() {
        //告诉全局当前执行的 ReactiveEffect 的实例
        activeEffect = this
        return this.fn()
    }
}

class RefImpl {
    constructor(value) {
        this._value = value
    }
    get value() {
        // 收集依赖
        if (activeEffect) {
            //需要收集依赖，且ref下没有dep时，创建一个名为dep的set集合
            ref.dep || (ref.dep = new Set())
            ref.dep.add(activeEffect)
        }
        return this._value
    }
    set value(newVal) {
        // 更新数据
        this._value = newVal
        // 触发依赖
        if (ref.dep) {
            triggerEffects(ref.dep)
        }
    }
}
function ref(value) {
    return new RefImpl(value)
}
function triggerEffects(dep) {
    //执行副作用, dep集合里装的是一个个ReactiveEffect 实例
    dep.forEach(_effect => {
        _effect.run()
    });
}
let activeEffect = null; //当前需要执行的effect

// 测试一下！
// let myname = ref('blank')
// effect(() => {
//     let div = document.querySelector('#app')
//     div.innerText = myname.value
// })

// setTimeout(() => {
//     myname.value = 'after modify'
// }, 2000)

// let myname = ref('blank')
// effect(() => {
//     console.log('响应式：',myname.value)
// })
// setTimeout(()=>{
//     myname.value = 'lzy'
//     console.log('修改完毕...')
// },1000)
