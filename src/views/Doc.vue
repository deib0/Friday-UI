<template>
  <div class="layout" >
    <Aside class="aside2" :class="{'xxx':menuVisible}" />
    <div class="dialog" :class="{'xxx':menuVisible}" @click="()=>menuVisible=false"></div>
    <Topnav class="nav" v-model:menuVisible="menuVisible" />
    <div class="content">
      <Aside class="aside1" />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import Aside from "../components/Aside.vue";
import {  ref } from "vue";
export default {
  components: { Topnav, Aside },
  setup() {
    const menuVisible = ref(false)
    return { menuVisible };
  },
};
</script>
<style lang="scss" scoped>
$grey:#3c3c3cb3;
$green: #42B883;
.layout {
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  .content{
    display: flex;
    flex-direction: row;
    width: 1440px;
    margin: 0 auto;
    overflow: hidden;
    main{
      flex-grow: 1;
      flex-shrink: 1;
      padding: 62px;
    }
  }
  .aside2{
    position: absolute;
    background: #fff;
    top: 0;
    left: -250px;
    transition: left 500ms;
    z-index: 1;
    &.xxx{
      left: 0;
    }
  }
  .dialog{
    visibility: hidden;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    width: calc(100% - 250px);
    height: 100%;
    &.xxx{
      transition: all 500ms;
      visibility: visible;
      background: rgba(0,0,0,.6);
    }
  }
}
@media(max-width:960px){
  .layout{
    .content{
      width: 100%;
      .aside1{
        display: none;
      }
    }
  }
}
@media(min-width:960px){
  .layout{
    .content{
      width: 960px;
    }
    .aside2,
    .dialog{
        display: none !important;
    }
  }
}
@media (min-width:1440px) {
  .layout {
      .content{
        width: 1440px;
      }
  }
}
</style>