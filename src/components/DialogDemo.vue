<template>
  <Button @click="showDialog">展示</Button>
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
        content(){return '内容'},
        ok(){console.log('ok')},
        cancel(){console.log('cancel')}
        }
      openDialog(options)
    }
      return {showDialog}
  },
}
</script>
