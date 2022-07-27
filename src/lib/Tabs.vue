<template>
<div class="friday-tabs">
  <div class="friday-tabs-nav">
      <div 
      class="friday-tabs-nav-item" v-for="(t,index) in titles" :key="index"
      @click="selectTab(t)" :class="{'selected':t===selected}"
      :ref="el=>{if(el)navItems[index]=el}"
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
import { computed, onMounted, ref } from 'vue'
export default {
    props:{selected:String,yyy:Number},
    setup(props, context) {
        const navItems=ref<HTMLDivElement[]>([])
        const indicator=ref<HTMLDivElement>(null)
        onMounted(() => {
            // 动态获得indicator的宽度
            const navItem=navItems.value.find(item=>item.classList.contains('selected'))
            const width=navItem.getBoundingClientRect().width
            indicator.value.style.width=width+'px'
        })
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
        current,
        navItems,
        indicator
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
            border: 1px solid #000;
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
        }
    }
    &-content {
        padding: 8px 0; 
    }
}
</style>