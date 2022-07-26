<template>
  <div>
    <Button theme="button">
      我是一个按钮
    </Button>
    <Button theme="link">
      我是一个按钮
    </Button>
    <Button theme="xxx">
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