<demo>
    禁用状态 你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。
</demo>
<template>
    <Button disabled>
        默认按钮
    </Button>
    <Button type="primary" disabled>
        主要按钮
    </Button>
    <Button type="success" disabled>
        成功按钮
    </Button>
    <Button type="info" disabled>
        信息按钮
    </Button>
    <Button type="warning" disabled>
        警告按钮
    </Button>
    <Button type="danger" disabled>
        危险按钮
    </Button>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components:{
        Button
    }
}
</script>