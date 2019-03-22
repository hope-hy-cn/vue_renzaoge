<template>
  <div class="home">
    <HomeNav />
    <Activity />
    <DailyRanking />
    <Recommend />
  </div>
</template>

<script>
import HomeNav from './components/HomeNav'
import Activity from './components/Activity'
import DailyRanking from './components/DailyRanking'
import Recommend from './components/Recommend'
export default {
  components: {
    HomeNav,
    Activity,
    DailyRanking,
    Recommend
  },
  created() {
    this.$http.getPanda()
      .then(resp => {
        console.log(resp.data.data.banners)
      })
  }
}
</script>

<style>

</style>
