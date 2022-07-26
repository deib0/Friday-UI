<template>
        <button 
        class="friday-switch" @click="toggle" :class="{'friday-checked':checked}">
            <span></span>
        </button>        
</template>

<script lang="ts">
export default {
    props:{
      checked:Boolean
    },
    name:'Switch',
    setup(props,context) {        
      const toggle=()=>{
      context.emit('update:checked',!props.checked)
      }
      return {toggle}
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
    background: #5f6368;
    span {
      left: calc(100% - #{$h2} - 2px);// calc()运算符前后空格
    }
  }
}



</style>