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
      <div class="menu" @click="toggleMenu">
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
export default {
  props:{
    menuVisible:{
      type:Boolean,
      default:false
    }
  },
  setup(props,context) {
    const toggleMenu = () => {
      context.emit('update:menuVisible',!props.menuVisible)
    };
    return { toggleMenu};
  },
};
</script>
<style lang="scss" scoped>
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
            transition: all 250ms ;
            visibility:hidden;
            background: #fff;
            border-radius: 5px;
            width: 190px;
            font-size: 5px;
            position: absolute;
            top: 10px;
            right: 15px;
            box-shadow: 0px 0px 2px .1px black;
            >li{
              &:hover{
                color:#42b883;
              }
            }
          }
          &:hover{
            .doc-menu{
              visibility:visible;
              padding: 12px 0;
              font-size: 13px;
              padding: 0 16px;
              top: 40px;
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
@media (min-width:960px) {
  .nav{
    width: 100%;
  }
}
@media(max-width:960px){
  .menunav-wrapper{
    display: block;
    >.nav{
      width: 100%;
    }
  }
  .nav{
    width: 960px;
  }
}
@media (min-width:1440px) {
  .nav{
    width: 1440px;
  }
}
</style>