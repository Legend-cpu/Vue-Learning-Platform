<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  text-align: center;
  font-size: var(--base-font-size);
  color: var(--normal-text-color);

  a {
    cursor: pointer;
    text-decoration: none;

    &.router-link-exact-active {
      color: #8f13d2;
    }
  }

}

</style>

<script>
import Header from '@/components/layout/HeaderComponent.vue'
import Home from '@/views/HomePage.vue'
import Login from '@/views/LoginPage.vue'
import Footer from '@/components/layout/FooterComponent.vue'
import UserCenter from '@/views/UserCenter.vue'

export default {
  components: {
    Header,
    Footer,
    Home,
    Login,
    UserCenter,
  },
  created() {
  }
}
</script>
