<template>
  <div>
    <mt-index-list>
      <mt-index-section :index="item.index" v-for="item in list" :key="item.id">
        <mt-cell :title="item1.nm" v-for="item1 in item.lis" :key="item1.nm"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[],
      hotList:[]
    }
  },
  mounted(){
    this.axios.get('/dianying/cities.json').then((res)=>{
      if(res.status === 200){
        var cityList = res.data.cts
        this.formatList(cityList)
      }
    })
  },
  methods:{
    formatList(cityList){
      var cityLis = [];
      for(let i=0;i<cityList.length;i++){
        let firstLetter = cityList[i].py.substring(0,1).toUpperCase();
        if(toCom(firstLetter)){
          cityLis.push({index:firstLetter,lis : [{id:cityList[i].id,nm:cityList[i].nm}]})
        }
        else {
          for(let j=0;j<cityLis.length;j++){
            if(cityLis[j].index===firstLetter){
              cityLis[j].lis.push( { nm : cityList[i].nm , id : cityList[i].id } );
            }
          }
        }
      }
      function toCom(firstLetter){
        for(let i=0;i<cityLis.length;i++){
          if(cityLis[i].index === firstLetter){
            return false
          }
        }
        return true
      }
      this.list=cityLis
      this.list.sort((n1,n2)=>{
        if(n1.index>n2.index){
          return 1;
        }
        else{
          return -1;
        }
      })
    },
  }
};
</script>

<style>
</style>