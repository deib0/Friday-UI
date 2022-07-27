<template>
  <Dialog v-model:visible="visible">
  <template v-slot:title>提示</template>
  <template v-slot:content>content在此</template>
  </Dialog>
  <Button @click="show">展示</Button>
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from './Button.vue'
export default{
  components:{ Dialog, Button },
  setup() {
    let visible=ref(false)
    const show =()=>{
      visible.value=true
    }
      return {visible,show}
  },
}
</script>
