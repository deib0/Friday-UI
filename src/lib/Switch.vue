<template>
        <button 
        :style="{ background: color}" :disabled="disabled"
        class="friday-switch" @click="toggle" :class="{'friday-checked':checked}">
            <span></span>
        </button>        
</template>

<script lang="ts">
import { ref, watchEffect } from "vue"
export default {
    props:{
      checked:Boolean,
      activeColor:{
        type:String,
        default:'#42b883'
      },
      inactiveColor:{
        type:String,
        default:'#5f6368'
      },
      disabled:{
            type:Boolean
      }
    },
    name:'Switch',
    setup(props,context) {     
      const color = ref<String>('')
      watchEffect(()=>{
        if(props.disabled){
          color.value=props.checked?'#78cea8':'#eaecf0'
        }else{
          color.value=props.checked?props.activeColor:props.inactiveColor
        }
      })
      const toggle=()=>{
      context.emit('update:checked',!props.checked)
      }
      return {toggle,color}
    },
}
</script>

<style scoped lang="scss">
$h: 22px;
$h2: $h - 4px;
.friday-switch{
  height: $h;
  width: $h*2;
  border: none;
  background: blue;
  border-radius: $h/2;
  position: relative;
  span{
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background:white;
  border-radius: $h2 / 2;
  transition: left 250ms;
  } 
  &.friday-checked{
    span {
      left: calc(100% - #{$h2} - 2px);// calc()运算符前后空格
    }
  }
  &[disabled] {
    cursor: not-allowed;
  }
}




</style>