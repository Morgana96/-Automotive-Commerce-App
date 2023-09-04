<template>
<div>
  <div class="overflow-hidden flex flex-col justify-center h-screen  bg-cover bg-no-repeat backgroundImage">
    <ul class="mt-14 flex flex-wrap list-none absolute top-0 left-0">
      <li class="ml-8 mt-1 text-zinc-400 cursor-pointer"
        @click="() => handleSearch(item.make)"
        v-for="item in items" 
        :key="item.id">
        {{ item.make+' '+ item.model }}
      </li>
    </ul>
    <div class="flex flex-col justify-center items-center">
      <h1 class="font-bold text-5xl text-white flex justify-center">Welcome to MotorK</h1>
      <h3 class="text-3xl font-semibold text-gray-300 flex justify-center">All the cars. One search</h3>
      <router-link to="/CarItem" class="z-index">
        <button class="font-bold text-5xl text-white border-2 p-7 border-white hover:border-gray-700 flex justify-center items-center mt-14 transform hover:scale-110 transition-transform duration-300">START</button>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import {fetchCarsData} from '@/api/index'
import {ref, onMounted } from 'vue'
import {useRouter} from 'vue-router'

export default {
    name:'Home',

    setup(){
      const items = ref([])
      const router = useRouter()

      const fetchData = async () =>{
        try {
          const response = await fetchCarsData()
          items.value = response.data
          console.log(items.value);
        } catch (error) {
          alert(error.message)
        }
      }

      const handleSearch = (make) =>{
        router.push({name:'CarItem', params:{keyword : make}})
        console.log(111);
      }

      onMounted(()=>{
        fetchData()
      })

      return{
        items,
        handleSearch
      }
    }
}
</script>

<style scoped>
  .backgroundImage{
    background-image: url('./CarBG.jpg');
    
  }
</style>