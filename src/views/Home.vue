<template>
  <div>
    <Topnav :menuNavVisible="false" />
    <div class="banner">
      <h1 class="tagline">
        <span class="accent">星期五</span>
        UI 框架
      </h1>
      <p class="description">一款用于构建 Web 界面，易用优雅，且功能丰富的UI框架。</p>
      <p class="actions">
        <router-link to="/doc" class="get-started">快速开始
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-right" ></use>
          </svg>
        </router-link>
        <a href="https://github.com/deib0/Friday-UI" class="github">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github" ></use>
          </svg>
         GitHub
        </a>
      </p>
    </div>
    <ul class="features">
      <li>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Vue"></use>
          </svg>

        <div class="info">
          <h3>基于Vue3</h3>
          <p>使用了Vue3 Composition API</p>
        </div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <div class="info">
          <h3>基于Typescript</h3>
          <p>源码采用Typescript书写</p>
        </div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tishi"></use>
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
$grey:#3c3c3cb3;
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #e7e7e7;
  >.tagline{
    display: flex;
    flex-direction: column;
    font-size: 48px;
    letter-spacing: -.5px;
    font-weight: 900;
    text-align: center;
    >span{
      background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent 
    }
  }
  >.description{
    font-size: 16px;
    color: $grey;
    margin-top: 24px;
    margin-bottom: 48px;
    padding: 20px;
  }
  > .actions{
    margin-top: 10px;
    padding: 8px 0;
    a {
      position: relative;
      margin:0 16px;
      font-size: 16px;
      background: #f1f1f1;
      display: inline-block;
      border-radius: 8px;
      padding: 8px 16px;
      &.get-started{
        padding-right: 32px;
        background: #42b883;
        color: #fff;
        .icon{
          position: absolute;
          right: 14px;
          top: 11px;
        }
        &:hover{
          background: #33a06f;
          .icon{
            right:10px;
            transition: right 250ms;
          }
        }
      }
      &.github{
        &:hover{
          background: #e5e5e5;
        }
      }
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
    align-items: center;
    margin-top: 10px;
    >.icon{
      margin: 5px;
      width: 40px;
      height: 40px;
    }
    >.info{
      margin-left: 10px;
      line-height: 2;
      >h3{
        font-weight: 700;
        font-size: 20px;
      }
      >p{
        color: $grey;
      }
    }
  }
}
@media (min-width: 960px){
  .banner{
    >.tagline{
    font-size: 76px;
  }
    >.description{
      font-size: 22px;
    }
  }
  .features{
    flex-direction: row;
    justify-content: center;
  }
}
</style>