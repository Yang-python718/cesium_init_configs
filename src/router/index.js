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
    },
    {
        path:'/add_entity_material',
        name:'添加entity材质',
        meta:{
            tips:'添加几种材质加载方式',
        },
        component:()=>import('@/components/class4-add_entity_material')
    }
]
const router = new VueRouter({
    routes,
    mode:'history',
})
export default router
