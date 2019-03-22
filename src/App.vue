<template>
  <div class="app">
    <div class="app-header">
      <router-view name="appHeader"></router-view>
    </div>
    <div class="app-main">
      <router-view></router-view>
    </div>
    <div class="app-tabbar">
      <router-view name="tabbar"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '../static/styles/reset.scss';

.app {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-main {
    flex: 1;
    overflow-x: hidden;
  }
}
</style>
