<template>
    <header class=" overflow-hidden bg-black flex items-center justify-between h-12 w-full fixed top-0 left-0">
      <router-link  to="/Home">
        <img class="ml-2 object-cover w-28" src="./carLogo.jpg" alt="">
      </router-link>

      <div class="flex justify-center w-30">
          <input 
            class=" pl-5 text-gray-700 bg-white border rounded-l shadow-sm focus:outline-none focus:ring"
            v-model="keyword" 
            @keydown="handleKeyDown" 
            type="text" 
            placeholder="Search...">
          <button class=" px-3 py-1 bg-sky-600 text-white rounded-r hover:bg-sky-700 focus:outline-none focus:ring" @click="handleSearch">Search</button>
      </div>
      <p class="text-gray-400 p-1 mr-5">MotorK</p>
    </header>
    
</template>

<script>
import {ref } from 'vue'
import {useRouter} from 'vue-router'

export default {
  name: 'MyHeader',
  setup() {
    const keyword = ref('');
    const router = useRouter();

    const handleSearch = () => {
      router.push({ name: 'CarItem', params: { keyword: keyword.value } });
      keyword.value = ''
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        handleSearch();
      }
    };

    return {
      keyword,
      handleSearch,
      handleKeyDown
    };

}}
</script>

