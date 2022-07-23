ts报错：cannot find moduels '.vue'

```
// shims.vue.d.ts
declare module '*.vue' {
    import { ComponentOptions } from "vue"
    const componentOptions:ComponentOptions
    export default componentOptions
}
```