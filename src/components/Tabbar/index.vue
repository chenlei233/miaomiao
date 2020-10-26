<template>
  <footer>
      <ul>
        <routerLink to="/movie" tag="li" active-class="active">
          <i class="iconfont icon-dianying"></i>
          <span>电影</span>
        </routerLink>
        <routerLink to="/cinema" tag="li" active-class="active">
          <i class="iconfont icon-yingyuan"></i>
          <span>影院</span>
        </routerLink>
        <routerLink to="/my" tag="li" active-class="active">
          <i class="iconfont icon-wode"></i>
          <span>我的</span>
        </routerLink>
      </ul>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer{
  width: 100%;
  height: .5rem;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    li{
      display: flex;
      flex-direction: column;
      i{
        font-size: .2rem;
      }
      span{
        font-size: .12rem;
        line-height: .18rem;
      }
    }
  }
}
.active{
  color: #f03d37;
}
</style>