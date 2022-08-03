<template>
    <div class="friday-tooltip">
        <slot/>
        <div class="top" :class="{'selected':placement==='top'}">{{content}}</div>
        <div class="bottom" :class="{'selected':placement==='bottom'}">{{content}}</div>
        <div class="right" :class="{'selected':placement==='right'}">{{content}}</div>
        <div class="left" :class="{'selected':placement==='left'}">{{content}}</div>
    </div>
</template>

<script lang="ts">
export default {
    props:{placement:{
            type:String,
            default:'top'
        },
        content:{
            type:String,
            default:'提示提示'
        }
    },
    setup() {
    },
}
</script>

<style lang="scss" scoped>
.friday-tooltip{
    display: inline-block;
    position: relative;
    text-align: center;
    line-height: 50px;
    .top,
    .bottom,
    .right,
    .left {
        position: absolute;
        visibility: hidden;
        width: 150px;
        height: 50px;
        background: #303133;
        border: 1px solid transparent;
        border-radius: 4px;
        &::before{
            content: '';
            position: absolute;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid #303133;
            border-bottom: 10px solid transparent;
        }
    }
    .top{
        top: -50px;
        left: 50%;
        margin-left: -75px;
        &::before{
            bottom: -20px;
            left: 50%;
            margin-left: -10px;
        }
    }
    .bottom{
        bottom: -50px;
        left: 50%;
        margin-left: -75px;
        &::before{
            transform:rotate(180deg);
            top: -20px;
            left: 50%;
            margin-left: -10px;
        }
    }
    .right{
        right: -160px;
        margin-top: -25px;
        top: 50%;
        &::before{
            transform:rotate(90deg);
            left: -20px;
            top: 50%;
            margin-top: -10px;
        }
    }
    .left{
        left: -160px;
        top: 50%;
        margin-top: -25px;
        &::before{
            transform:rotate(-90deg);
            top: 50%;
            right: -20px;
            margin-top: -10px;
        }
    }
    &:hover{
        .selected{
            visibility: visible;
            color: #fff;
        }
    }
}
</style>

