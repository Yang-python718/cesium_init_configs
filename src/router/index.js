import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//定义路由
const routes = [
    // {
    //     path: '/',
    //     // redirect:'/home'
    //     component:()=>import('@/components/home')
    // },
    {
        path: '/home',
        name:'首页',
        meta:{},
        component: ()=>import('@/components/home')
    },
    {
        path: '/add_entity',
        name:'加载实体功能',
        meta:{},
        component: ()=>import('@/components/class2-add_entity')
    },
    {
        path: '/add_3DTiles',
        name:'加载3DTiles',
        meta:{},
        component:()=>import('@/components/class3-add_3DTiles')
    }
]
const router = new VueRouter({
    routes,
    mode:'history',
})
export default router
