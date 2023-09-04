<template>
    <div class="bg-gray-900 min-h-screen w-full">
      <div class="flex justify-center">
        <p class="text-white text-3xl absolute text-center mt-20 " v-show="loading">Loading</p>
        <p class="text-white text-3xl absolute text-center mt-20 " v-show="items.length==0 && !loading">Sorry, there is no result for searching</p>
        <ul class="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 w-full my-14">
          <li class="bg-gray-300 p-5 pb-10 placeholder-amber-700 m-2 rounded-lg" v-for="item in items" :key ='item.id'>
            <h3 class="text-lg font-bold">{{item.make+' '+item.model}}</h3>
            <p class="text-gray-400">{{item.description}}</p>
            <p class="">${{item.price}}</p>
            <p class="">{{item.features}}</p>
              <p class="text-gray-500">Mileage:{{ item.mileage }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import {ref, onMounted, watch} from 'vue'
  import { useRoute } from 'vue-router';
  import {fetchCarsData} from '@/api/index'

  export default {
    name:'CarItem',
    setup(){
      const items = ref([])
      const route = useRoute()
      const keyword = ref(route.params.keyword || '')
      const loading = ref(true)

      console.log(keyword);
      console.log(fetchCarsData());

      const fetchData = async () =>{
        try{
          loading.value = true
          const response = await fetchCarsData()
          loading.value = false
          items.value = response.data.filter(item => {
          return (
            item.make.toLowerCase().includes(keyword.value.toLowerCase()) ||
            item.model.toLowerCase().includes(keyword.value.toLowerCase()) ||
            item.description.toLowerCase().includes(keyword.value.toLowerCase())
          );
        })
        }catch (error) {
        alert(error.message)
      }
      }

      onMounted(()=>{
        fetchData()
      })

      watch(() => route.params.keyword, (newValue, oldValue) => {
      keyword.value = newValue || ''
      console.log(111);
      fetchData()
      })

      return {
          items,
          loading
      }
    
    }}
  </script>
  
