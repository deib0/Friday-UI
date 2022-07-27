<template>
<Tabs v-model:selected="xxx">
  <Tab title="标题1">content1</Tab>
  <Tab title="标题22222222222222">content2</Tab>
  <Tab title="标题3333333333333333">content3</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue"
import Tab from "../lib/Tab.vue" 
import { ref } from "vue"
export default {
  
  components:{ Tabs, Tab },
  setup(){
    let xxx =ref('标题1')
    return{xxx}
  }
}
</script>