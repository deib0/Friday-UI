<demo>
    常规用法 绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。
</demo>
<template>
    <Switch v-model:checked="checked" />
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
    setup() {
      const checked =ref(true)
      return {checked}
    },
    components: { Switch }
}
</script>