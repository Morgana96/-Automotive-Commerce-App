<template>
    <div class="welcome-banner">
    <div class="text">
      <h1>Welcome to AutoLuxe Cars</h1>
      <h3>All the cars. One search</h3>
      <router-link to="/CarItem" class="z-index">
      <button>START</button>
    </router-link>
    </div>

    
  </div>
    
</template>

<script>
export default {
    name:'Home',
}
</script>

<style scoped>
.welcome-banner {
  background-image: url('./CarBG.jpg');
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-repeat: no-repeat;
  color: white;
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
    font-size: 3vw;
}
h3{
  font-size: 2vw;
  font-weight: lighter;
  color: rgb(205, 208, 213);
}
button {
  margin-top: 10vw;
  padding: 30px 40px;
  background-color: rgba(0, 0, 0, 0); /* 透明背景 */
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5); /* 边框效果 */
  border-radius: 5px;
  font-size: 3vw;
  cursor: pointer;
  transition: border-color 0.3s, transform 0.3s;
}

button:hover {
  border-color: rgba(255, 255, 255, 0.7); /* 鼠标悬停时的边框颜色 */
  transform: scale(1.05);
  background-color: rgba(0, 0, 0, 0.4); /* 鼠标悬停时的背景颜色 */
}

</style>