<demo>
    基础用法 使用content属性来决定hover时的提示信息。由placement属性决定展示效果：placement属性值为；四个方向：top、left、right、bottom；默认为top。
</demo>
<template>
    <div class="wrapper">
        <Tooltip content="top 提示文字" placement="top">
            <Button>向上</Button>
        </Tooltip>
        <Tooltip content="bottom 提示文字" placement="bottom">
            <Button>向下</Button>
        </Tooltip>
        <Tooltip content="left 提示文字" placement="left">
            <Button>向左</Button>
        </Tooltip>
        <Tooltip content="right 提示文字" placement="right">
            <Button>向右</Button>
        </Tooltip>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
import Tooltip from "../lib/Tooltip.vue"
export default {
    components:{
        Button,Tooltip
    },
}
</script>

<style lang="scss" scoped>
.wrapper>*{
    margin-right: 20px;
}
</style>