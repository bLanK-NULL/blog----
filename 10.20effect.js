let aactiveEffect //当前effect

/**
 * 1. 
 * effect 函数
 * @param fn 执行方法
 * @returns 以 ReactiveEffect 实例为 this 的执行函数
 */
function effect(fn) {
    const _effect = new ReactiveEffect(fn)
    _effect.run()
}
/**
 * 2. 
 * 响应性触发依赖时的执行类
 */
class ReactiveEffect {
    constructor(fn){
        this.fn = fn
    }
    run() {
        aactiveEffect = this
        return this.fn()
    }
}