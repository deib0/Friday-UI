import "./lib/friday.scss"
import "./index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from './router';
import './icons/iconfont.js'
import 'github-markdown-css'
import 'prismjs/themes/prism-okaidia.css'
const app = createApp(App);
app.use(router);
app.mount("#app");