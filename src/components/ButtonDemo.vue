<template>
<h1>Button 按钮</h1>
<p>常用的操作按钮。</p>
<Demo :component="ButtonDemo1" />
<Demo :component="ButtonDemo2" />
<Demo :component="ButtonDemo3" />
<Demo :component="ButtonDemo4" />
<Markdown :content="buttonApi" />
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import ButtonDemo1 from './ButtonDemo1.vue'
import ButtonDemo2 from './ButtonDemo2.vue'
import ButtonDemo3 from './ButtonDemo3.vue'
import ButtonDemo4 from './ButtonDemo4.vue'
import Demo from './Demo.vue' 
import Markdown from './Markdown.vue';
import buttonApi from '../markdown/buttonApi.md'
export default {
  components:{ Button,Demo,Markdown },             
  setup() {  
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
      buttonApi
    }
  },
}
</script>