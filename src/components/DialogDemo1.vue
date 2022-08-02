<demo>
    基本用法 需要在showDialog函数中设置option，配置title标题，content内容来自定义那内容。
</demo>
<template>
    <Button @click="showDialog">点击打开 Dialog</Button>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {openDialog} from '../lib/openDialog'
export default{
  components:{ Dialog, Button },
  setup() {
    // 展示Dialog
    const showDialog=()=>{
      // 输入Dialog的配置项
      const options={
        title(){return '提示'},
        content(){return '这是一段信息'},
        ok(){console.log('ok')},
        cancel(){console.log('cancel')}
        }
      openDialog(options)
    }
      return {showDialog}
  },
}
</script>