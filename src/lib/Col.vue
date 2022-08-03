<template>
<div class="colWrapper">
    <slot />
</div>
</template>

<script lang="ts">
export default {
    name:"Col",
    props:{
        span:{
            type:Number,
            default:0
        }
    },
    setup(){
        
    }
}
</script>

<style lang="scss" scoped>
.colWrapper{
    width: 100%;
}
</style>