<demo>
    分栏间隔 Row组件提供gutter属性来指定每一栏之间的间隔，默认间隔为0。
</demo>
<template>
    <Row :gutter="20" class="row">
    <Col :span="6"><div class="grid-content bg-purple"></div></Col>
    <Col :span="6"><div class="grid-content bg-purple"></div></Col>
    <Col :span="6"><div class="grid-content bg-purple"></div></Col>
    <Col :span="6"><div class="grid-content bg-purple"></div></Col>
    </Row>
</template>
<script lang="ts">
import Row from "../lib/Row.vue"
import Col from "../lib/Col.vue"
export default {
    components:{
        Row,Col
    },
}
</script>

<style lang="scss" scoped>
  .row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>