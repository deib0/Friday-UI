<template>
  <div class="nav-wrapper">
    <nav class="nav topnav">
      <div class="logo">
          <a href="#/">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-logo" ></use>
            </svg>
          </a>
      </div>
      <ul>
        <li class="doc">文档
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangxia" ></use>
          </svg>
          <ul class="doc-menu">
            <li><a href="#/doc/get-started">开始</a></li>
            <li><a href="#/doc/install">安装</a></li>
            <li><a href="#/doc/introduce">介绍</a></li>
            <li><a href="#/doc/layout">组件</a></li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/deib0/Friday-UI">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github" ></use>
            </svg>
          </a>
        </li>
        <li @click="copyEmail">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-mail" ></use>
              </svg>
        </li>
      </ul>
    </nav>    
  </div>
  <div class="nav-wrapper menunav-wrapper" v-if="menuNavVisible">
    <div class="nav">
      <div class="menu" @click="toggleMenu">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-menu" ></use>
        </svg>
        菜单
      </div>
      <span @click="scrollTop">返回顶部</span>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props:{
    menuVisible:{
      type:Boolean,
      default:false
    },
    menuNavVisible:{
      type:Boolean,
      default:true
    }
  },
  setup(props,context) {
    const copyEmail=()=>{
      const text = '596740705@qq.com';
      if (navigator.clipboard) {
        console.log('true')
        navigator.clipboard.writeText(text);
        alert('复制成功!')
      } else {
        console.log('false')
        var textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.style.position = 'fixed';
        textarea.style.clip = 'rect(0 0 0 0)';
        textarea.style.top = '10px';
        textarea.value = text;
        textarea.select();
        document.execCommand('copy', true);
        document.body.removeChild(textarea);
        alert('复制成功!')
      };
    }
  const scrollTop=()=>{
    context.emit('scrollTop')
  };    
  const toggleMenu = () => {
      context.emit('update:menuVisible',!props.menuVisible)
    };
    return { toggleMenu,copyEmail,scrollTop};
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
    width: 100%;
    padding: 0 72px;
    line-height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .topnav{
    >.logo{
      .icon{
        width: 100px;
        height: 50px;
      }
    }
    >ul{
      display: flex;
      flex-direction: row;
      >li{
        cursor: pointer;
        padding: 0 12px;
        &.doc{
          position: relative;
          .doc-menu{
            transition: all 250ms ;
            visibility:hidden;
            background: #fff;
            border-radius: 5px;
            width: 190px;
            font-size: 13px;
            position: absolute;
            top: 40px;
            right: 15px;
            box-shadow: 0px 0px 2px .1px black;
            >li{
              &:hover{
                display: none;
                color:#42b883;
              }
              >a{
                display: block;
                width: 100%;
              }
            }
          }
          &:hover{
            .doc-menu{
              visibility:visible;
              padding: 12px 0;
              padding: 0 16px;
              >li{
                display: block;
              }
            }
          }
        }
      }
    }
  }
}
.menu{
  cursor: pointer;
}
.menunav-wrapper{
    display: none;
}
@media(max-width:500px){
.nav-wrapper{
  .nav{
    padding: 0 20px;
  }
}
}
@media(max-width:960px){
.menunav-wrapper{
    display: block;
}
}
</style>