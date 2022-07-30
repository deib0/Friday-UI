<template>
  <div class="layout">
    <Topnav class="nav" menuToggleVisible="true" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>菜单</h2>
        <ol>
          <li>
            <router-link to="/doc/introduce">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
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
  flex-direction: column;
  .content{
    display: flex;
    flex-direction: row;
    width: 1440px;
    margin: 0 auto;
    overflow: hidden;
    aside{
      width: 222px;
      font-weight: 700;
      padding: 0 32px;
      overflow-y: scroll;
      >h2{
        padding: 10px 0;
        font-size: 18px;
        text-align: center;
        border-bottom: 1px solid #e7e7e7;
      }
      >ol{
        >li{
          padding: 10px;
          color: $grey;
          :hover{
            color: #213547;
          }
          .router-link-active{
            color: $green;
          }
        }
      }
    }
    main{
      flex-grow: 1;
      flex-shrink: 1;
      padding: 62px;
    }
  }
}
@media(max-width:960px){
  .layout{
    .content{
      width: 100%;
      aside{
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