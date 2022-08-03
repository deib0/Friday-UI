<demo>
    基础用法 Tabs组件直接接受Tab组件，给他Tab添加title标题属性，在插槽里添加内容，在checked中指定选中的Tab的标题。
</demo>
<template>
<div class="wrapper">
    <Tabs v-model:selected="selected">
      <Tab title="三国演义">“汝死后，汝妻子我养之，汝勿虑也。”</Tab>
      <Tab title="西游记">“大师兄，师傅被妖精抓走了。”</Tab>
      <Tab title="水浒传">“大郎，该吃药了。”</Tab>
      <Tab title="红楼梦">“这个妹妹我曾见过的。”</Tab>
    </Tabs>
</div>
</template>
<script lang="ts">
import Tabs from "../lib/Tabs.vue"
import Tab from "../lib/Tab.vue" 
import { ref } from "vue"
export default {
  components:{ Tabs, Tab },
  setup(){
    let selected=ref('三国演义')
    return{selected}
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
    margin: 10px 0;
}
</style>