const syncCartInfo = store => {
  store.subscribe((mutation, state) => {
    window.localStorage.setItem('app-cart', JSON.stringify(state.cart))
    window.localStorage.setItem('usermsg', JSON.stringify(state.user))
  })
}

export default [syncCartInfo]
