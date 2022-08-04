<template>
<h1>Tabs 标签页</h1>
<p>分隔内容上有关联但属于不同类别的数据集合。</p>
<Demo :component="TabsDemo1" />
<Markdown :content="tabsApi" />
</template>

<script lang="ts">
import TabsDemo1 from "./TabsDemo1.vue"
import Demo from "./Demo.vue"
import Markdown from './Markdown.vue';
import tabsApi from '../markdown/tabsApi.md'
export default {
  components:{Demo,Markdown},
  setup(){
    return{TabsDemo1,tabsApi}
  }
}
</script>