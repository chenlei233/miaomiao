<template>
  <div class="wrap">
    <Header></Header>
    <main>
      <div class="nav">
        <div class="city">
          <span>大连</span>
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="play">
          <router-link tag="div" to="/movie/nowplaying" active-class="active">正在热映</router-link>
          <router-link tag="div" to="/movie/comingsoon" active-class="active">即将上映</router-link>
        </div>
        <div class="search">
          <router-link tag="div" to="/movie/search">
            <i class="iconfont icon-sousuo"></i>
          </router-link>
        </div>
      </div>
      <router-view />
    </main>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Tabbar from "@/components/Tabbar";
export default {
  components: {
    Header,
    Tabbar,
  },
};
</script>

<style lang="scss" scoped>
main {
  flex:1; overflow:auto; margin-bottom: 50px;  display: flex; flex-direction:column;
  .nav{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    width: 100%;
    height: .45rem;
    align-items: center;
    z-index: 10;
    .city{
      margin-left: .2rem;
    }
    .play {
      display: flex;
      height: 100%;
      .active{
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
      }
      div{
        margin: 0 .12rem;
        color: #666;
        font-weight: 700;
        width: .8rem;
        font-size: .15rem;
        height: 100%;
        line-height: .45rem;
        text-align: center;
      }
    }
    .search{
      margin-right: .2rem;
      .searchActive{
        color: #ef4238;
      }
      i{
        font-size: .24rem;
        color: red;
      }
    }
  }
}

</style>
