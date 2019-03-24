const getters = {
  // 当前选中商品数量
  getAllCartItem ({ cart }) {
    return cart.filter(item => item.isChecked === true).reduce((total, item) => {
      total += item.count
      return total
    }, 0)
  },
  // 计算选中的价格
  getTotalPrice ({ cart }) {
    return cart.filter(item => item.isChecked === true).reduce((total, item) => {
      total += item.count * item.price
      return total
    }, 0)
  },
  // 商品按钮状态全为true 全选按钮状态才为true
  allCheckState ({ cart }) {
    return cart.every(item => item.isChecked === true)
  },
  // 购物车商品总数
  getTotalCartCount ({ cart }) {
    return cart.reduce((total, item) => {
      total += item.count
      return total
    }, 0)
  }
}

export default getters
