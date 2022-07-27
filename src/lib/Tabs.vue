<template>
<div>
  <div v-for="(t,index) in titles" :key="index">{{t}}</div>
  <component v-for="(c,index) in defaults" :is="c" :key="index" />
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
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
    let titles=[]
    try{
        titles = defaults.map((tag) => {
            return tag.props.title
        })
    }catch{
        throw ('Tag需要一个标题')
    }
    return {
      defaults,
      titles
    }
  }
}
</script>