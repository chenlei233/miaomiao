<template>
  <header>{{title}}</header>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default: '喵喵电影'
    }
  }
}
</script>

<style lang="scss" scoped>
    header{
        width: 100%;
        height: .5rem;
        background: #e54847;
        text-align: center;
        line-height: .5rem;
        font-size: 0.18rem;
        color: #fff;
    }
</style>>
