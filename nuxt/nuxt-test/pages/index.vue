<template>
  <div>
    <div class="container">
      <the-hero />
      <large-card-display
        v-for="cardInfo in largeCardInfo"
        :key="cardInfo.id"
        :cards-section="cardInfo"
      />
      <small-card-display
        v-for="cardInfo in smallCardInfo"
        :key="cardInfo.id"
        :cards-section="cardInfo"
      />
    </div>
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from '@/assets/data.js'
export default {
  data () {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
</style>
