<template>
    <h1>Tooltip 文字提示</h1>
    <p>常用于展示鼠标 hover 时的提示信息。</p>
    <Demo :component="TooltipDemo1" />
    <Markdown :content="tooltipApi" />
</template>

<script lang="ts">
import Demo from "./Demo.vue"
import TooltipDemo1 from "./TooltipDemo1.vue"
import Markdown from './Markdown.vue';
import tooltipApi from '../markdown/tooltipApi.md'
export default {
    components:{ Demo,Markdown},
    setup(){
        return {TooltipDemo1,tooltipApi}
    }
}
</script>