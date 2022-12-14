import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import LayoutDemo from "./components/LayoutDemo.vue"
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import Markdown from "./components/Markdown.vue";
import introduce from './markdown/introduce.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
import { h } from "vue";
import TooltipDemo from './components/TooltipDemo.vue'

const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      redirect: to => {
        return 'doc/introduce'
      },
      component: Doc,
      children: [
        { path: "layout", component: LayoutDemo },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "tooltip", component: TooltipDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "introduce", component:md(introduce)},
        { path: "get-started", component:md(getStarted)},
        { path: "install", component:md(install)}
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});