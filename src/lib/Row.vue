<template>
<div class="friday-row" ref="row">
    <component
    v-for="(item,index) in defaults"
     :key="index" :is="item"
     :style="{ 'flex-grow' : item.props.span,'margin-right':index===lastIndex?'0':gutter+'px'}"
     />
</div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Col from './Col.vue'
export default {
    props:{
        gutter:{
            type:Number,
            default:0
        }
    },
    setup(props, context) {
        const row  =ref<HTMLDivElement>(null)
        // 拿到子组件并检查子组件的类型
        const defaults = context.slots.default()
        defaults.forEach((col) => {
        if (col.type !== Col) {
            throw new Error('子标签必须是 Col ')
        }
        })
        // 拿到最后有一个元素的索引
        const lastIndex =Object.getOwnPropertyNames(defaults).length-2
        return {
        row,
        defaults,
        lastIndex
        }
    }
}
</script>

<style lang="scss">
.friday-row{
    width: 100%;
    display: flex;
    flex-direction: row;
}
</style>