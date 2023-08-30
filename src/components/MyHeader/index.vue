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
    background-color: #1d1d1d; /* 背景颜色 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 阴影效果 */
    display: flex;
    justify-content: flex-start; /* 居中 */
    align-items: center;
    height: 5vw; /* 头部高度 */
    position: fixed; /* 固定在顶部 */
    top: 0;
    left: 0;
    width: 100%; /* 横向覆盖屏幕 */
    z-index: 1; /* 提高层级，确保内容在上层 */
}
p{
  color: rgb(205, 208, 213);
  margin-left: auto;
  margin-right: 3vw;
  font-size: 1.1em;
}
img {
    max-height: 180%; /* 图片宽度最大为其容器的100% */
}


</style>