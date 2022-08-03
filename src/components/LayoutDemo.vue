<template>
  <h1>Layout 布局</h1>
  <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
  <Demo :component="LayoutDemo1"/>
  <Demo :component="LayoutDemo2"/>
  <Demo :component="LayoutDemo3"/>
</template>

<script lang="ts">
import Demo from "./Demo.vue"
import LayoutDemo1 from "./LayoutDemo1.vue"
import LayoutDemo2 from "./LayoutDemo2.vue"
import LayoutDemo3 from "./LayoutDemo3.vue"
export default {
    components: {Demo},
    setup(){
      return {LayoutDemo1,LayoutDemo2,LayoutDemo3}
    }
}
</script>

<style lang="scss" scoped>
.Row{
  border: 1px solid #000;
  div{
    border: 1px solid #000;
  }
}
</style>