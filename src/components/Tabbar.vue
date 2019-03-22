<template>
  <ul class="tabbar">
    <router-link
        v-for="route in tabbarBtn"
        :key="route.name"
        :to="route.path"
        tag="li"
        class="tabbar-item"
    >
      <div class="icon">
        <i class="iconfont" v-html="route.meta.icon"></i>
      </div>
      <div class="title">{{route.meta.title}}</div>
    </router-link>
  </ul>
</template>

<script>
import routes from '@/router/routes'
export default {
  data () {
    return {
      tabbarBtn: routes.filter(item => item.meta.isTabbar === true)
    }
  }
}
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 967809 */
    src: url('http://at.alicdn.com/t/font_967809_o32ndt4nulj.eot');
    src: url('http://at.alicdn.com/t/font_967809_o32ndt4nulj.eot?#iefix') format('embedded-opentype'),
    url('http://at.alicdn.com/t/font_967809_o32ndt4nulj.woff') format('woff'),
    url('http://at.alicdn.com/t/font_967809_o32ndt4nulj.ttf') format('truetype'),
    url('http://at.alicdn.com/t/font_967809_o32ndt4nulj.svg#iconfont') format('svg');
  }
.tabbar {
  background-color: #f5f5f5;
  height: 14vw;
  display: flex;

  &-item {
    text-align: center;
    color: black;
    width: 25%;

    &.router-link-active{
        color: #f6c847;
    }
    > .icon {
      height: 9vw;
      line-height: 9vw;
      > .iconfont {
          font-family: 'iconfont';
          font-size: 4.5vw;
      }
    }
    > .title {
      font-size: 3.5vw;
    }
  }
}
</style>