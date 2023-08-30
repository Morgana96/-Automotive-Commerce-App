<template>
    <div class="welcome-banner">
    <div class="text">
      <h1>Welcome to AutoLuxe Cars</h1>
      <h3>All the cars. One search</h3>
    </div>
    
    <button>START</button>
  </div>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style>
body {
  margin: 0;
    padding: 0;
    background-image: url('./CarBG.jpg'); /* 替换为您的背景图像路径 */
    background-size: cover;
    background-position: center center;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-repeat: no-repeat;
}
.text{
  margin-top: 15vw;
}

.welcome-banner {
    text-align: center;
    border-radius: 10px;
    color: white;
}

h1 {
    font-weight: bold;
    font-size: 4vw;
}
h3{
  font-size: 2vw;
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