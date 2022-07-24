ts报错：cannot find moduels '.vue'

```
// shims.vue.d.ts
declare module '*.vue' {
    import { ComponentOptions } from "vue"
    const componentOptions:ComponentOptions
    export default componentOptions
}
```

使用`provide`和`inject`实现父组件和自己拿的变量通信
```
// 父组件
const menuVisible = ref(false)
provide('menuVisible', menuVisible)
// 子组件
const menuVisible = inject<Ref<boolean>>('menuVisible') 
```
