<template>
  <div id="app">
    <Header @back="back"></Header>
    <Main ref="main"></Main>
  </div>
</template>
<script>
  import Header from "@/components/header" ;
  import Main from "@/components/main" ;
  export default {
    name:"App",
    methods:{
      back(){
        this.$refs.main.back()
      }
    },
    components:{
      Header,
      Main,
    }
  }
</script>

<style lang="less">
  #app{
    width: 400px;
    margin: 0 auto;
  }
</style>
