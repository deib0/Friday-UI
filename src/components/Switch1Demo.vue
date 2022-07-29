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