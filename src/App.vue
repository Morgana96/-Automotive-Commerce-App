<template>
  <div>
    <MyHeader :keyword = 'keyword' @search-request="handleSearchRequest"></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'

export default {
  name:'App',
  components:{
    MyHeader
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    
  }
</style>