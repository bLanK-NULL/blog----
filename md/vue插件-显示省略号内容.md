---
title: vue插件-显示省略号内容
date: 2023-09-25 15:05:38
tags:
---

1. 依赖`element-ui/elementUI-plus`
2. 自定义指令：`v-abbreviation`

```js
import ElementUI from "element-ui"
export default {
    install(Vue) {
        let mt = null; //弹框实例
        Vue.directive('abbreviation', {
            inserted(element, binding) {
                const Popover1 = Vue.extend(ElementUI.Popover)

                if (!mt) { //没有实例就创建
                    const vmtest = new Popover1()
                    mt = vmtest
                    mt.trigger = "hover"
                    mt.placement = 'bottom'
                }
                element.addEventListener('mouseover', function () {
                    console.log('listen hover', element);
                    if (element && element.scrollWidth > element.offsetWidth) {
                        mt.reference = element
                        mt.referenceElm = element
                        mt.content = element.innerText
                        mt.$mount()
                        document.body.appendChild(mt.$el)
                    }
                })

            }
        })
    }
}
```