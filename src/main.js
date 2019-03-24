// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入router配置文件
import router from './router'
// 引入Vuex的实例store
import store from './store'

// 引入MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 把所有的请求方法导入并赋值给$http
import * as $http from './requests'
Vue.prototype.$http = $http

Vue.config.productionTip = false

// 全局注册MintUI
Vue.use(MintUI)

// 全局混入
const mixin = {
  filters: {
    tofix (val) {
      return val.toFixed(2)
    },
    omitted (val) {
      return val > 10000 ? parseInt(val / 10000) + '.' + parseInt((val % 10000) / 1000) + '万' : val
    },
    cartFix (val) {
      return val > 99 ? 99 + '+' : val
    }
  }
}

Vue.mixin(mixin)

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/mine') {
    const userInfo = JSON.parse(window.localStorage.getItem('user-info'))
    if(userInfo && userInfo.username) {
      store.commit('alrLoginSucc')
    }
    next()
  } else {
    if (to.meta.isAuthRequired && store.state.isLogin === false) {
      // 如果需要权限并且没有登录，就需要跳转登录页
      const userInfo = JSON.parse(window.localStorage.getItem('user-info'))
      if(userInfo && userInfo.username) {
        store.commit('alrLoginSucc')
      }else {
        next({
          name: 'login',
          params: {
            redirect: to.path
          }
        })
      }
    }
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
