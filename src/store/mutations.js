import { Toast } from 'mint-ui'
const mutations = {
  // 增加数量
  addCartCount (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) {
        item.count ++
      }
      return item
    })
  },
  // 减少数量 数量到1不能减
  reduceCartCount (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id && item.count > 1) {
        item.count --
      }
      return item
    })
  },
  // 加入购物车，如果有就+1 没有就把这商品（对象）push到state.cart
  addToCart (state, product) {
    const isInCart = state.cart.some(item => item.id === product.id)
    if (isInCart) {
      state.cart.map(item => {
        if (item.id === product.id) {
          item.count ++
          Toast({
            message: '已加入购物车',
            duration: 700
          })
        }
        return item
      })
    } else {
      state.cart.push({
        ...product,
        count: 1,
        isChecked: false
      })
      Toast({
        message: '添加成功',
        duration: 500
      })
    }
  },
  // 切换选择状态对应的布尔值
  toggleChecked (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) {
        item.isChecked = !item.isChecked
      }
      return item
    })
  },
  // 点击全选按钮控制商品选择按钮状态
  changeAllCheck (state, checked) {
    state.cart = state.cart.map(item => {
      item.isChecked = checked
      return item
    })
  },
  // 删除商品
  deleteItem (state, id) {
    state.cart = state.cart.filter(item => {
      return item.id !== id
    })
  },
  // 成功登录
  loginSuccess (state, username) {
    state.isLogin = true
    // state.userInfo = username
    window.localStorage.setItem('user-info', JSON.stringify(username))
    state.userInfo = JSON.parse(window.localStorage.getItem('user-info'))
  },
  // 已经登陆成功，没退出
  alrLoginSucc(state) {
    state.isLogin = true
  },
  // 注册成功，通过参数存储注册用户信息
  registerSuccess (state, registeruser) {
    state.isRegister = true
    state.user.push({
      ...registeruser
    })
  },
  // 退出登陆
  logout (state) {
    state.isLogin = false
    window.localStorage.setItem('user-info', JSON.stringify({}))
  }
}

export default mutations
