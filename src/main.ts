import { createApp } from 'vue'
import App from './App.vue'
import { createWebHashHistory,createRouter } from 'vue-router' 
import './index.css'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/foo',component:Foo},
        {path:'/bar',component:Bar},
    ]
})

const app =createApp(App)
app.use(router)
app.mount('#app')
