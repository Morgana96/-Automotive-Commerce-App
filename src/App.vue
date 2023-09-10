<template>
    <div>
    <MyHeader></MyHeader>
    <router-view></router-view>
  </div>
 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyHeader from './components/MyHeader/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    MyHeader
  }
});
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    
  }
</style>
