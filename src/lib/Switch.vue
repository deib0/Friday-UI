<template>
    <div>
        <button @click="toggle" :class="x?'checked':''">
            <span></span>
        </button>        
        {{x}}
    </div>
</template>

<script lang="ts">
import { ref } from "vue" 
export default {
    name:'Switch',
    setup() {        
      let x =ref(false)
      const toggle=()=>{
        console.log('点击了')
        x.value=!x.value
      }
      return {x,toggle}
    },
}
</script>

<style scoped lang="scss">
$h: 22px;
$h2: $h - 4px;
button{
  height: $h;
  width: $h*2;
  border: none;
  background: blue;
  border-radius: $h/2;
  position: relative;
}
span{
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background:white;
  border-radius: $h2 / 2;
}
button.checked{
  span {
    left: calc(100% - #{$h2} - 2px);// 计算属性 
  }
}
</style>