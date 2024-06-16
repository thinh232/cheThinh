import {createRouter,createWebHistory} from 'vue-router'

import Home from '../components/home/homePage.vue'
import Detail from '../components/products/detail.vue'

const routes = [
    {path:'/',component:Home},
    {path:'/detail',component:Detail}
]

const router = createRouter(
    {
        history:createWebHistory(process.env.BASE_URL),
        routes:routes
    }
)
export default router