<template>
<div class="demo">
  <h2>{{title}}</h2>
  <div class="demo-component">
    <component :is="component" />
  </div>
  <div class="demo-actions">
    <Button @click="toggleCode">查看代码</Button>
  </div>
  <div class="demo-code" v-if="codeVisible">
  <span class="description">{{description}}</span>
    <pre class="language-html" v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')" />
  </div>

</div>
</template>

<script lang="ts">
import 'prismjs';
import { ref } from 'vue';
import Button from '../lib/Button.vue';
const Prism = (window as any).Prism
export default {
  props: {
    component: Object
  },
  components:{Button},
  setup(props) {
    const string:string =props.component.__sourceCodeTitle
    const title =string.trim().split(" ")[0]
    const description =string.trim().split(" ")[1]
    const codeVisible=ref<Boolean>(false)
    const toggleCode=()=>{
      codeVisible.value=!codeVisible.value
    }
    return {
      Prism,
      toggleCode,
      codeVisible,
      title,
      description
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
  .description{
    line-height: 2;
    .highLight{
      padding: 2px 6px;
      background: #fafafa;
    }
  }
}
</style>