<template>
  <h1>Switch 组件示例</h1>
  <Demo :component="Switch1Demo" />
</template>

<script lang="ts">
import Switch1Demo from './Switch1.Demo.vue'
import Demo from './Demo.vue'
import 'prismjs';
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism
export default {
    components: { Demo },
    setup(){
      return {
      Switch1Demo,
      Prism 
      }
    }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >button{
      background: #fff;
      border: 1px solid #000;
      padding: 3px;
      cursor: pointer;
    }
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>