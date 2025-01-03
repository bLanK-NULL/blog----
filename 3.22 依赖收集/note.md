[vue依赖收集原理](https://zhuanlan.zhihu.com/p/45081605)


# 依赖收集

实现了3个类
- Dep
  - 观察目标, **每一个数据都有一个Dep实例**
  - 每个实例有subs队列,装着观察者们
- Watcher
  - 观察者, 
  - 包装成观察者函数,例如render, computed里的函数
- Observer
  - 辅助
  - 数组/对象通过它转化为`可观测数据 ---对所有数据带上dep`

在Component类的构造函数里，会进行一个组件实例化前的一系列动作，其中与依赖收集相关的源码如下：

observer方法作用 
1. 是不是对象, 不是对象或空对象直接return
2. 有没有__ob__属性, 是不是Observer的实例
   1. 是: `ob = value.__ob__`
   2. 不是: **`ob = new Observer(value)`**
3. `ob.addVm(vm)`
4. `return ob`

Observer类的作用
1. 把Observer实例挂载在`原对象`的__ob__属性上
2. **实例化Dep**
3. `原对象`是不是数组
   1. 如果是数组,则对每个元素调用observer, 目的是为了递归的转为可观测对象
   2. 如果不是,则转为可观测对象

Watcher 

- 如何包装成观察者函数

```js
computed: {
    name() {
        return `${this.firstName} ${this.lastName}`;
    }
}
```
<div style='color:red'>包装成<div>

```js
new Watcher(this, function name() {
    return `${this.firstName} ${this.lastName}`
}, callback);
```

Watcher工作流程

1. 传入组件实例、观察者函数、回调函数、选项
    `deps`: 缓存上一轮执行观察者函数用到的dep实例
    `newDeps`: 存储本轮执行观察者函数用到的dep实例
2. 进行初始化, 会调用`watch.get()`
3. `watch.get()`会 
   1. 初始准备工作
       - 将当前Watcher实例赋给Dep.target
       - 清空数组newDeps、newDepIds
   2. 调用 **观察者函数** 来计算
       - 由于数据观测阶段执行了defineReactive()，所以计算过程用到的数据会得以访问，从而触发数据的getter，从而执行watcher.addDep()方法，将特定的数据记为依赖
       - 数据对应的dep如果在newDeps里不存在，就会加入到newDeps里，因为同样的依赖只能收集一次
       - 如果dep里也不存在, 则表示当前watcher未依赖过某个数据, 所以要将当前watcher加入到数据的dep.subs里
   3. 事后清理
        - 释放Dep.target
        - 拿newDeps和deps进行对比
          - newDeps里不存在，deps里存在的数据，表示是过期的缓存数据。相应的，从数据对应的dep.subs移除掉当前watcher
          - 将newDeps赋给deps，表示缓存本轮的计算结果，这样子下轮计算如果<u>再依赖同一个数据，就不需要再收集了</u>
4. 当某个数据更新时,由于进行了setter拦截，所以会对该数据的dep.subs这一观察者队列里的watchers进行通知，从而执行watcher.update()方法，而update()方法会重复求值过程（即为步骤3），从而使得观察者函数重新计算，而render()这种观察者函数重新计算的结果，就使得视图同步了最新的数据

