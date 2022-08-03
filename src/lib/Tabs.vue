<template>
<div class="friday-tabs">
  <div class="friday-tabs-nav" ref="container">
      <div 
      class="friday-tabs-nav-item" v-for="(t,index) in titles" :key="index"
      @click="selectTab(t)" :class="{'selected':t===selected}"
      :ref="el=>{if(t===selected)selectedItem=el}"
      >{{t}}
      </div>
      <div class="friday-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="friday-tabs-content">
      <component class="friday-tabs-content-item" 
      :is="current" :key="selected"/>
  </div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import { computed,  onMounted, ref, watchEffect } from 'vue'
export default {
    props:{selected:String},
    setup(props, context) {
        const selectedItem =ref<HTMLDivElement>(null)
        const container=ref<HTMLDivElement>(null)
        const indicator=ref<HTMLDivElement>(null)
        onMounted(()=>{
            watchEffect(() => {
                // 动态获得indicator的宽度
                const width=selectedItem.value.getBoundingClientRect().width
                indicator.value.style.width=width+'px'
                // 动态获得indicator的位置
                const {left:left1}=container.value.getBoundingClientRect()
                const {left:left2}=selectedItem.value.getBoundingClientRect()
                const left =left2-left1+'px'
                indicator.value.style.left=left
            },{flush:'post'})
        })
        // 拿到子组件并检查子组件的类型
        const defaults = context.slots.default()
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
        current,
        selectedItem,
        indicator,
        container
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
        position: relative;
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
        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }
    &-content {
        padding: 8px 0; 
    }
}
</style>