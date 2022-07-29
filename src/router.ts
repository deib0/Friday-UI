import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import Markdown from "./components/Markdown.vue"
import { h } from "vue";

const history = createWebHashHistory();
const fetchMarkDown=(filename)=>{
  const path =`../markdown/${filename}`
  // need
  const key=filename
  return h(Markdown,{path,key})
}
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", component: DocDemo },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "introduce", component: fetchMarkDown('introduce.md') },
        { path: "get-started", component:fetchMarkDown('get-started.md') },
        { path: "install", component:fetchMarkDown('install.md')},
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});