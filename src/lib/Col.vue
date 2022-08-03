<template>
<div class="colWrapper">
    <slot />
</div>
</template>

<script lang="ts">
export default {
    name:"Col",
    setup(){
        
    }
}
</script>

<style lang="scss" scoped>
.colWrapper{
    width: 100%;
}
</style>