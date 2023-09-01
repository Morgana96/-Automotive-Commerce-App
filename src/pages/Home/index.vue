<template>
  <div>
    <div class="welcome-banner">
      <ul>
      <li 
        @click="() => handleSearch(item.make)"
        v-for="item in items" 
        :key="item.id">
        {{ item.make+' '+ item.model }}
      </li>
    </ul>
    <div class="text">
      <h1>Welcome to MotorK</h1>
      <h3>All the cars. One search</h3>
      <router-link to="/CarItem" class="z-index">
      <button>START</button>
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
html, body {
  height: 100%;
  overflow: hidden;
  
}
.welcome-banner {
  background-image: url('./CarBG.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-repeat: no-repeat;
  color: rgb(255, 255, 255);
  overflow: hidden;
}
.welcome-banner ul{
  margin-top: 60px;
  list-style: none; 
  position: absolute; 
  top: 0; 
  left: 0;
  right: 0;
  display: flex;
  
  flex-wrap: wrap
}
li{
  margin-left: 3.5vw;
  margin-top: 1vh;
  color: rgb(162, 161, 182);
}
.center-content {
  display: flex;
  text-align: center;
}
.text{
  margin-top: 10vw;
}
h1 {
    font-weight: bold;
    font-size: 2.3vw;
}
h3{
  font-size: 1.3vw;
  font-weight: lighter;
  color: rgb(205, 208, 213);
}
button {
  margin-top: 7vw;
  padding: 30px 40px;
  background-color: rgba(0, 0, 0, 0); 
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  font-size: 2vw;
  cursor: pointer;
  transition: border-color 0.3s, transform 0.3s;
}

button:hover {
  border-color: rgba(255, 255, 255, 0.7);
  transform: scale(1.05);
  background-color: rgba(0, 0, 0, 0.4); 
}

</style>