<template>
  <div>
    <h1>Page Not Found</h1>
    <img :src="require('@/assets/images/fe25.jpg')" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45rem
  }
  h1 {
    font-size: 6.5rem;
  }
  img {
    width: 15rem;
    margin: 0 auto
  }
</style>
