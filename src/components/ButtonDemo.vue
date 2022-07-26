<template>
  <div>
    <Button theme="button" size="big">
      我是一个按钮
    </Button>
    <Button theme="link" size="small">
      我是一个按钮
    </Button>
    <Button theme="text">
      我是一个按钮
    </Button>
    <Button>
      我是一个按钮
    </Button>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  components:{ Button },
  setup() {  
  },
}
</script>