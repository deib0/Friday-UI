<template>
<!-- 直接添加到body,脱离当前层迭上下文 -->
<Teleport to="body"> 
    <template v-if="visible">
        <div class="friday-dialog-overlay" @click="onClickOverlay"></div>
        <div class="friday-dialog-wrapper">
          <div class="friday-dialog">
            <header>
                <slot name="title" />
                <span class="friday-dialog-close" @click="close"></span></header>
            <main>
                <slot name="content"/>
            </main>
            <footer>
              <Button level="main" @click="onOk">OK</Button>
              <Button @click="onCancel">Cancel</Button>
            </footer>
          </div>
        </div>
    </template>
</Teleport>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
props: {
    visible: {
      type: Boolean,
      default:false
    },
    closeOnclickOverlay:{
        type:Boolean,
        default:true
    },
    ok:{
        type:Function
    },
    cancel:{
        type:Function
    }
},
components: {
    Button
},
setup(props,content){
    const close =()=>{
        content.emit('update:visible',false)
    }
    // 点击遮罩层是否关闭？
    const onClickOverlay=()=>{
        if(props.closeOnclickOverlay){
            close()
        }
    }
    const onOk = () => {
        close()
    }
    const onCancel=()=>{
        content.emit('cancel')
        close()
    }
    return {close,onClickOverlay,onOk,onCancel}
}
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.friday-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;
    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, 0.5);
        z-index: 10;
    }
    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }
    >header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }
    >main {
        padding: 12px 16px;
    }
    >footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }
    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;
        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: rgb(4, 3, 3);
            width: 100%;
            top: 50%;
            left: 50%;
        }
        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
</style>