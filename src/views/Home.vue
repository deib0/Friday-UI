<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>Friday UI</h1>
      <h2>简单优雅的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
    <ul class="features">
      <li>
          <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tishi"></use>
        </svg>
        <div class="info">
          <h3>基于Vue3</h3>
          <p>使用了Vue3 Composition API</p>
        </div>
      </li>
      <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Vue"></use>
          </svg>
        <div class="info">
          <h3>基于Typescript</h3>
          <p>源码采用Typescript书写</p>
        </div>
      </li>
      <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-typescript"></use>
          </svg>
        <div class="info">
          <h3>代码易读</h3>
          <p>每个组件的源码极其简洁</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
$color:#007974;
.banner {
  padding: 100px 0;
  display: flex;
  color:$color;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(222,252,250);
  background: linear-gradient(135deg, rgba(222,252,250,1) 0%, rgba(188,235,232,1) 100%);
  clip-path: ellipse(69% 61% at 50% 39%);
  > .actions{
    margin-top: 10px;
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #02bcb0;
      display: inline-block;
      color: #fff;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
.features{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  >li{
    display: flex;
    width: 300px;
    flex-direction: row;
    justify-content: start;
    margin-top: 10px;
    >.icon{
      margin-top:px;
      width: 40px;
      height: 40px;
    }
    >.info{
      margin-left: 10px;
    }
  }
}
@media (min-width: 1000px){
  .features{
    flex-direction: row;
    justify-content: center;
  }
}
</style>