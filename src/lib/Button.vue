<template>
    <button 
    class="friday-button" :class="classes" :disabled="disabled" :round="round">
        <slot/>
    </button>
</template>

<script lang="ts">
import { computed } from '@vue/runtime-core'
export default {
    props:{
        type:{type:String,
            default:'normal'
        },
        size:{
            type:String,
            default:'normal'
        },
        level:{
            type:String,
            default:'normal'
        },
        disabled:{
            type:Boolean
        },
        round:{
            type:Boolean
        }
    },
    name:"Button",
    setup(props) {
        let {type,size,level,round}=props
        const classes =computed(()=>{
            return {
                [`friday-type-${type}`]:type,
                [`friday-size-${size}`]: size,
                [`friday-level-${level}`]: level,
                [`round`]:round
            }
        })
        return {classes}
    }
}
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$radius: 4px;
$blue:#409eff;
$grey:#d9d9d9;
.friday-button {
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  border:1px solid transparent;
  align-items: center;
  white-space: nowrap;
  color: black;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
    & + & {
        margin-left: 8px;
    }
    &:focus {
        outline: none;
    }
    &::-moz-focus-inner {// 兼容
        border: 0;
    }
    /* type-normal */
    &.friday-type-normal {
        background: #fff;
        border: 1px solid $border-color;
        &:hover,
        &:focus{
            border-color: $blue;
            background: #ecf5ff;
        }
    }
    /* type-primary */
    &.friday-type-primary {
        background: #409eff;
        color: #fff;
        border:1px solid transparent;
        &:hover,
        &:focus{
            opacity:0.8
        }
    }
    /* type-success */
    &.friday-type-success {
        background: #67c23a;
        color: #fff;
        border:1px solid transparent;
        &:hover,
        &:focus{
            opacity:0.8
        }
    }
    
    /* type-info */
    &.friday-type-info {
        background: #909399;
        color: #fff;
        border:1px solid transparent;
        &:hover,
        &:focus{
            opacity:0.8
        }
    }
    /* type-warning */
    &.friday-type-warning {
        background: #e6a23c;
        color: #fff;
        &:hover,
        &:focus{
            opacity:0.8
        }
    }
    /* type-danger */
    &.friday-type-danger {
        background: #f56c6c;
        color:#fff;
        &:hover,
        &:focus{
            opacity:0.8;
        }
    }
    /* type-text */
    &.friday-type-text {
        background: transparent;
        border:1px solid transparent;
    }
    /* size-big */
    &.friday-size-big{
            font-size: 24px;
            height: 48px;
            padding: 0 16px
        }
    /* size-small */
    &.friday-size-small{
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }
    /* disabled */
    &[disabled] {
        cursor: not-allowed;
        opacity:0.4;
        &:hover {
            outline: none;
            opacity: 0.4;
        }
        &.friday-type-normal{
            &:hover{
                border: 1px solid $border-color; 
                background: #ffffff;
            }
        }
    }
    /* round */
    &.round {
        border-top-left-radius: 20% 50%;
        border-top-right-radius: 20% 50%;
        border-bottom-left-radius: 20% 50%;
        border-bottom-right-radius: 20% 50%;
    }
}
</style>
