<template>
  <h1>Dialog 对话框</h1>
  <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
  <Demo :component="DialogDemo1"/>
</template>

<script lang="ts">
import Demo from './Demo.vue' 
import DialogDemo1 from './DialogDemo1.vue'
export default {
  components:{ Demo },             
  setup() {  
    return {
      DialogDemo1
    }
  },
}
</script>