<template>
    <div>
        <Topnav />
        <div class="banner">
            <h1>轮子UI</h1>
            <h2>好用且优雅的UI框架</h2>
            <p class="actions">
                <a href="">Github</a>
                <a href="">开始</a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue"
export default {
    components:{ Topnav}
}
</script>

<style lang="scss" scoped>
    .topnav {
        border: 1px solid #000;
        background: pink;
        display: flex;
        padding: 16px;
        > .logo {
            max-width: 6em;
            margin-right: auto;
        }
        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
        > li {
            margin: 0 1em;
        }
    } 
}
</style>