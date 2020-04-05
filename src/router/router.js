// 导入Vue
import Vue from 'vue';

// 导入子组件
import login from '../view/login/login.vue';

// 导入vue-router插件
import VueRouter from 'vue-router';

// 注册vue-router
Vue.use(VueRouter);

// 创建路由对象
let router = new VueRouter({
    // 路由表
    routes: [
        {
        path: '/',
        component: login
        }, 
    ]
});

// 导出路由对象
export default router;