<template>
    <header>
        <img src="./carLogo.jpg" alt="">
        <p> AutoLuxe Cars</p>
    </header>
    
</template>

<script>
export default {
  name:'MyHeader'
}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}
header {
    background-color: #040404; /* 背景颜色 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 阴影效果 */
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    height: 5vw; 
    width: 100%; 
    overflow: hidden;
   
   
}
p{
  color: rgb(205, 208, 213);
  margin-left: auto;
  margin-right: 3vw;
  font-size: 1.1em;
}
img {
    max-height: 180%;
}


</style>