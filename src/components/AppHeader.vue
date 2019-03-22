<template>
    <div class="app-header">
      <p  class="app-header-input" @click="search">搜索商品发现更多优选</p>
    </div>
</template>

<script>
export default {
  methods: {
    search () {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-header {
    background-color: #fdde4a;
    height: 11.5vw;
    border-bottom: 1px solid #dedede;
    box-sizing: border-box;
    line-height: 11.5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    &-input{
      text-align: left;
      height: 8.2vw;
      width: 72vw;
      line-height: 8.2vw;
      font-size: 3.8vw;
      background: url("../../static/img/search.png") no-repeat 1.73vw center #fff;
      background-size: 8vw auto;
      color: #877a73;
      border: 1px solid #fdde4a;
      border-radius: 2vw 2vw 1.73vw 1.73vw;
      padding-left:10vw;
    }
  }
  .mint-button--default {
    font-size: black;
    background-color: #fdde4a;
    border: none;
    box-shadow: 0 0 0 #b8bbbf;
  }
</style>
