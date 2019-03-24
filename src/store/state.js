const state = {
  cart: JSON.parse(window.localStorage.getItem('app-cart')) || [],
  isLogin: false,
  isRegister: false,
  user: JSON.parse(window.localStorage.getItem('usermsg')) || [],
  userInfo: JSON.parse(window.localStorage.getItem('user-info')) || {}
}

export default state
