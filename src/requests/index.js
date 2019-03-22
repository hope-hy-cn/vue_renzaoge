import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'

const ajax = axios.create({
  baseURL: 'http://www.xiongmaoyouxuan.com'
})

// 拦截请求参数
ajax.interceptors.request.use(config => {
  // 显示'加载中…'
  Indicator.open('加载中…')
  return config
})
// 拦截响应
ajax.interceptors.response.use(resp => {
  // 隐藏'加载中…'
  Indicator.close()

  if (resp.data.code === 200) {
    return resp
  } else {
    // 显示一个错误信息，在3s后自动隐藏
    Toast({
      message: '请求出错',
      duration: 3000
    })
  }
})

// 获取首页 轮播图/推荐 接口（熊猫优选）
export const getPanda = () => {
  return ajax.get('/api/tab/1?start=0')
}

// 获取首页更多推荐商品
export const getHomeMorePanda = (pages) => {
  return ajax.get(`/api/tab/1/feeds?start=${pages}&sort=0`)
}