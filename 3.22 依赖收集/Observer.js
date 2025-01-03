function observe (value, vm) {
    if (!value || typeof value !== 'object') {
        return
    }
    var ob
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__
    } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
        ob = new Observer(value)
    }
    if (ob && vm) {
        ob.addVm(vm)
    }
    return ob
}
class Observer {
    constructor(value) {
        this.value = value
        this.dep = new Dep()
        def(value, '__ob__', this)
        if (isArray(value)) {
            var augment = hasProto
              ? protoAugment
              : copyAugment
            // 此操作就是为了监控数组的变化
            augment(value, arrayMethods, arrayKeys)
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }
    walk(obj) {
        var keys = Object.keys(obj)
        for (var i = 0, l = keys.length; i < l; i++) {
            this.convert(keys[i], obj[keys[i]]) //变为可观测数据
        }
    }
    observeArray(items) {
        // 对数组每个元素进行处理
        // 主要是处理数组元素中还有数组的情况
        for (var i = 0, l = items.length; i < l; i++) {
            observe(items[i]) // 
        }
    }
    convert(key, val) {
        // 调用defineProperty, 进行数据劫持
        defineReactive(this.value, key, val)
    }
    addVm(vm) {
        (this.vms || (this.vms = [])).push(vm)
    }
    removeVm(vm) {
        this.vms.$remove(vm)
    }
}