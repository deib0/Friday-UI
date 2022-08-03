<demo>
    禁用状态 设置disabled属性，接受一个Boolean，设置true即可禁用。
</demo>
<template>
    <div class="switchWrapper">
        <Switch :checked="true"
        :disabled="true"/>
        <Switch :checked="false"
        :disabled="true"/>
    </div>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue'
    export default {
        components: { Switch }
    }
</script>

<style lang="scss" scoped>
.switchWrapper>*{
    margin-right: 20px;
}
</style>