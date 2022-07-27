<template>
    <h1>Tabs:</h1>\{{context.slots.default()[0].type}}
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  components: { Tab },
    setup(props,context) {
        // 拿到子组件
        const defaults = context.slots.default()
        // 检查子组件的类型
        defaults.forEach((item)=>{if(item.type!==Tab)throw new Error('Tabs标签只允许存在Tab组件')})
        return {context}
    },
}
</script>