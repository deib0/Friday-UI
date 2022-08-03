<demo>
    混合布局 通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
</demo>
<template>
    <Row  class="row" :gutter="20">
    <Col :span="16"><div class="grid-content bg-purple"></div></Col>
    <Col :span="8"><div class="grid-content bg-purple"></div></Col>
    </Row>
    <Row  class="row" :gutter="20">
    <Col :span="8"><div class="grid-content bg-purple"></div></Col>
    <Col :span="8"><div class="grid-content bg-purple"></div></Col>
    <Col :span="4"><div class="grid-content bg-purple"></div></Col>
    <Col :span="4"><div class="grid-content bg-purple"></div></Col>
    </Row>
    <Row class="row" :gutter="20">
    <Col :span="4"><div class="grid-content bg-purple"></div></Col>
    <Col :span="16"><div class="grid-content bg-purple"></div></Col>
    <Col :span="4"><div class="grid-content bg-purple"></div></Col>
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