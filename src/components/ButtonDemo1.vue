<demo>
    基础用法 使用type和round属性来定义Button的样式。
</demo>
<template>
    <Button>
        默认按钮
    </Button>
    <Button type="primary" round>
        主要按钮
    </Button>
    <Button type="success">
        成功按钮
    </Button>
    <Button type="info" >
        信息按钮
    </Button>
    <Button type="warning" >
        警告按钮
    </Button>
    <Button type="danger">
        危险按钮
    </Button>
    <Button round>
        圆角按钮
    </Button>
    <Button type="primary" round>
        主要按钮
    </Button>
    <Button type="success" round>
        成功按钮
    </Button>
    <Button type="info" round >
        信息按钮
    </Button>
    <Button type="warning" round>
        警告按钮
    </Button>
    <Button type="danger" round>
        危险按钮
    </Button>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components:{
        Button
    },
    setup() {
    }
}
</script>