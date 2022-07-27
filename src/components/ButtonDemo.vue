<template>
  <div>
    <Button theme="button" size="big" level="danger">
      我是一个按钮
    </Button>
    <Button theme="link" size="small" level="main">
      我是一个按钮
    </Button>
    <Button theme="text">
      我是一个按钮
    </Button>
    <Button disabled>
      我是一个按钮
    </Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components:{ Button },
  setup() {  
  },
}
</script>