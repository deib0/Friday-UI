<demo>
    常规用法 绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。
</demo>
<template>
    <div class="switchWrapper">
        <Switch v-model:checked="checked"/>
        <Switch v-model:checked="checked"
        activeColor="red"
        inactiveColor="blue"/>
        <Switch v-model:checked="checked"
        activeColor="pink"
        inactiveColor="brown"/>
        <Switch v-model:checked="checked"
        activeColor="orange"
        inactiveColor="purple"
        />
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
import Row from '../lib/Row.vue'
export default {
    setup() {
      const checked =ref(true)
      return {checked}
    },
    components: { Switch, Row }
}
</script>
<style lang="scss" scoped>
    .switchWrapper>*{
        margin-right: 20px;
    }
</style>