<template>
    <div class="product-container">
      <ul class="product-list">
        <!-- Repeat this li element for each product -->
        <li class="product-item" v-for="item in items" :key = 'item.id'>
          <h3 class="product-title">{{item.make+' '+item.model}}</h3>
          <p class="product-description">{{item.description}}</p>
          <p class="product-price">${{item.price}}</p>
          <p class="product-features">{{item.features}}</p>
            <p class="product-mileage">Mileage:{{ item.mileage }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import {ref, onMounted} from 'vue'
  import axios from 'axios'
  import { useRoute } from 'vue-router';

  export default {
    name:'CarItem',
    setup(){
        const items = ref([])
        const route = useRoute()
        const keyword = route.params.keyword || ''

        console.log(keyword);

        const fetchData = async () => {
            try{
                const response = await axios.get('https://gist.githubusercontent.com/joaofs/6a4eb62499572a29485ac5924a0c9e64/raw/97ac2191e65fb6d84f6f336dc8867efbc97410a3/cars.json')
                items.value = response.data.filter(item =>{
                  return (
                  item.make.toLowerCase().includes(keyword.toLowerCase())||
                  item.model.toLowerCase().includes(keyword.toLowerCase())||
                  item.description.toLowerCase().includes(keyword.toLowerCase())
                  
                  )
                })
            } catch(error){
               alert(error.message)
            }
        }
       
        onMounted(()=>{
            fetchData()
            
        })
        return {
            items,
           
            
        }
    }
  }
  </script>
  
  <style scoped>
.product-container {
    display: flex;
    justify-content: center;
    padding: 20px;
    height: 100vh;
    background-color: #131313;
}
.product-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px 20px;
    margin: 0;
    padding: 0;
    width: 100%;
}
.product-item {
  background-color: #dadada;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 200px;
}
  
  .product-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #303030;
  }
  
  .product-description {
    margin: 5px 0;
    color: #666;
  }
  
  .product-price {
    font-size: 1.2rem;
    color: #333;
    margin-top: 10px;
  }
  
  .product-features {
    color: #666;
    margin-top: 5px;
  }
  
  .product-mileage {
    color: #666;
    margin-top: 5px;
  }
  </style>
  