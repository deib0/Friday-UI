<demo>
    基础布局 通过Row和Col组件，并通过Col组件的span属性我们就可以自由地组合布局。
</demo>
<template>
<Row class="row">
  <Col :span="24"><div class="grid-content bg-purple-dark"></div></Col>
</Row>
<Row class="row">
  <Col :span="12"><div class="grid-content bg-purple"></div></Col>
  <Col :span="12"><div class="grid-content bg-purple-light"></div></Col>
</Row>
<Row class="row">
  <Col :span="8"><div class="grid-content bg-purple"></div></Col>
  <Col :span="8"><div class="grid-content bg-purple-light"></div></Col>
  <Col :span="8"><div class="grid-content bg-purple"></div></Col>
</Row>
<Row class="row">
  <Col :span="6"><div class="grid-content bg-purple"></div></Col>
  <Col :span="6"><div class="grid-content bg-purple-light"></div></Col>
  <Col :span="6"><div class="grid-content bg-purple"></div></Col>
  <Col :span="6"><div class="grid-content bg-purple-light"></div></Col>
</Row>
<Row class="row">
  <Col :span="4"><div class="grid-content bg-purple"></div></Col>
  <Col :span="4"><div class="grid-content bg-purple-light"></div></Col>
  <Col :span="4"><div class="grid-content bg-purple"></div></Col>
  <Col :span="4"><div class="grid-content bg-purple-light"></div></Col>
  <Col :span="4"><div class="grid-content bg-purple"></div></Col>
  <Col :span="4"><div class="grid-content bg-purple-light"></div></Col>
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
