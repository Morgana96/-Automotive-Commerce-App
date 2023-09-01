<template>
    <header>
      <router-link class="logo-container" to="/Home">
        <img src="./carLogo.jpg" alt="">
      </router-link>

      <div class="search-area">
          <input v-model="keyword" @keydown="handleKeyDown" type="text" placeholder="Search...">
          <button @click="handleSearch">Search</button>
      </div>
      <p> MotorK</p>
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

<style scoped>
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

.logo-container {
  width: 150px; 
  height: 150px;
  overflow: hidden; 
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain; 
}

header {
    background-color: #040404; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 阴影效果 */
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    height: 50px; 
    width: 100%; 
    overflow: hidden;
   
    position: fixed;
}
.search-area {
    margin-left: auto;
    display: flex;
    align-items: center;
    padding: 0.2em;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.search-area input {
    padding: 0.5em;
    border: none;
    border-radius: 4px 0 0 4px;
    width: 20vw;
}

.search-area button {
    display: flex;
    padding: 0.5em 1em;
    background-color: #8ba5c2;
    border: none;
    border-radius: 0 4px 4px 0;
    color: white;
    cursor: pointer;
}
p{
  color: rgb(205, 208, 213);
  margin-left: auto;
  margin-right: 3vw;
  font-size: 1.1em;
}

</style>