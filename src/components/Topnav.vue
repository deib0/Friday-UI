<template>
  <div class="nav-wrapper">
    <nav class="nav topnav">
      <div class="logo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-home" ></use>
          </svg>
      </div>
      <ul>
        <li class="doc">文档
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangxia" ></use>
          </svg>
          <ul class="doc-menu">
            <li>开始</li>
            <li>安装</li>
            <li>介绍</li>
            <li>组件</li>
          </ul>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github" ></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mail" ></use>
          </svg>
        </li>
      </ul>
    </nav>    
  </div>
  <div class="nav-wrapper menunav-wrapper">
    <div class="nav">
      <div class="menu">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-menu" ></use>
        </svg>
        菜单
      </div>
      <span>返回顶部</span>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props:{
    menuToggleVisible:{
      type:Boolean,
      default:false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu};
  },
};
</script>
<style lang="scss" >
.nav-wrapper{
  height: 55px;
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  >.nav{
    padding: 0 32px;
    line-height: 55px;
    width: 1440px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .topnav{
    >ul{
      display: flex;
      flex-direction: row;
      >li{
        padding: 0 12px;
        &.doc{
          position: relative;
          .doc-menu{
            display: none;
            background: #fff;
            border-radius: 5px;
            padding: 12px 0;
            width: 190px;
            font-size: 13px;
            position: absolute;
            top: 30px;
            right: 10px;
            box-shadow: 0px 0px 2px .1px black;
            >li{
              padding: 0 16px;
              &:hover{
                color:#42b883;
              }
            }
          }
          &:hover{
            .doc-menu{
              display: block;
            }
          }
        }
      }
    }
  }
}
.menunav-wrapper{
    display: none;
  }
@media (max-width:960px) {
  .menunav-wrapper{
    display: block;
  }
}
</style>