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
  import {ref, onMounted, watch} from 'vue'
  import axios from 'axios'
  import { useRoute } from 'vue-router';
  import {fetchCarsData} from '@/api/index'

  export default {
    name:'CarItem',
    setup(){
      const items = ref([])
      const route = useRoute()
      const keyword = ref(route.params.keyword || '')

      console.log(keyword);
      console.log(fetchCarsData());

      const fetchData = async () =>{
        try{
          const response = await fetchCarsData()
          items.value = response.data.filter(item => {
          return (
            item.make.toLowerCase().includes(keyword.value.toLowerCase()) ||
            item.model.toLowerCase().includes(keyword.value.toLowerCase()) ||
            item.description.toLowerCase().includes(keyword.value.toLowerCase())
          );
        })
        }catch (error) {
        console.error(error);
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
      }
    
    }}
  </script>
  
  <style scoped>
.product-container {
    display: flex;
    justify-content: center;
    padding: 20px;
    height: 100%;
    background-color: #131313;
    min-height: 100vh;

}
.product-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px 20px;
    margin: 0;
    padding: 0;
    width: 100%;
    margin-top: 50px;
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
  