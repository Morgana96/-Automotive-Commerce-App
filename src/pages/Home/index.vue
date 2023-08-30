<template>
  <div class="welcome-banner">
    <h1>Welcome to AutoLuxe Cars</h1>
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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 8vw;
}

.welcome-banner {
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    color: white;
}

h1 {
    font-weight: bold;
    font-size: 5vw;
}

</style>