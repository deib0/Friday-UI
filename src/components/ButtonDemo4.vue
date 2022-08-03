<demo>
    不同尺寸 big、small，通过设置size属性来配置它们。
</demo>
<template>
    <div class="wrapper">
        <Button size="big">
            大按钮
        </Button>
        <Button>
            默认按钮
        </Button>
        <Button size="small">
            小按钮
        </Button>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components:{
        Button
    },
}
</script>

<style lang="scss" scoped>
.wrapper>*{
    margin-right: 20px;
}
</style>