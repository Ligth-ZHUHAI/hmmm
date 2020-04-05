import Vue from 'vue'
import App from './App.vue'

// 导入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入路由对象
import router from './router/router.js'

// 注册elementUI
Vue.use(ElementUI);

Vue.config.productionTip = false

//注入vue实例 
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
