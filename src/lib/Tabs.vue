<template>
<div class="friday-tabs">
  <div class="friday-tabs-nav">
      <div 
      class="friday-tabs-nav-item" v-for="(t,index) in titles" :key="index"
      @click="selectTab(t)" :class="{'selected':t===selected}"
      >{{t}}
      </div>
  </div>
  <div class="friday-tabs-content">
      <component class="friday-tabs-content-item" 
      :is="current" :key="selected"/>
  </div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import { computed } from 'vue'
export default {
    props:{selected:String,yyy:Number},
    setup(props, context) {
        // 拿到子组件
        const defaults = context.slots.default()
        // 检查子组件的类型
        defaults.forEach((tag) => {
        if (tag.type !== Tab) {
            throw new Error('Tabs 子标签必须是 Tab')
        }
        })
        // 拿到子组件的属性中的标题
        const titles = defaults.map((tab) => {
            return tab.props.title
        })
        const current =computed(()=>{
            return defaults.find(tab=>tab.props.title===props.selected)
        })
        const selectTab=(title)=>{
            context.emit('update:selected',title)
        }
        return {
        defaults,
        titles,
        selectTab,
        current
        }
    }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.friday-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>