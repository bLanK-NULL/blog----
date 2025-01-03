class Watcher {

    /*
    判断本轮计算中是否收集过这个依赖，收集过就不再收集，没有收集过就加入newDeps。
    同时，判断有无缓存过依赖，缓存过就不再加入到dep.subs里了。
    */
    addDep(dep) {
        var id = dep.id
        if (!this.newDepIds[id]) {
            this.newDepIds[id] = true
            this.newDeps.push(dep)
            if (!this.depIds[id]) {
                dep.addSub(this)
            }
        }
    }
}