<template>
  <div class="layout">
    <Topnav class="nav" menuToggleVisible="true" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
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
  .router-link-active{
    color: red;
  }
.layout {
  display: flex;
  border: 1px solid #000;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    width: 1440px;
    margin: 0 auto;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  border: 1px solid red;
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  border: 1px solid green;
  width: 223px;
  padding: 16px;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
main {
  overflow: auto;
}
</style>