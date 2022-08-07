<template>
    <aside class="aside">
        <h2>菜单</h2>
        <ol>
          <li class="title">
              开发指南
          </li>
          <li>
            <router-link to="/doc/introduce">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
          <li class="title">
            组件
          </li>
          <li>
            <router-link to="/doc/layout">Layout 布局</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
          <li>
            <router-link to="/doc/tooltip">Tooltip 文字提示</router-link>
          </li>
          <li>
            更多正在开发。。
          </li>
        </ol>
      </aside>
</template>

<script lang="ts">
export default {
    name:'Aside',
}
</script>

<style lang="scss" scoped>
$grey:#3c3c3cb3;
$green: #42B883;
.aside{
      width: 250px;
      height: 100%;
      padding: 0 32px;
      overflow-y: scroll;
      font-size: 16px;
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
          white-space: nowrap;
          &.title{
            color: #000;
            font-weight: 700;
          }
          :hover{
            color: #213547;
          }
          .router-link-active{
            color: $green;
          }
        }
      }
    }
</style>