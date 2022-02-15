<template>
  <div>
    <div class="container">
      <large-card-display
        v-for="cardInfo in largeCardInfo.slice(0, 1)"
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
  layout: 'default',
  data () {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections
    }
  }
}
</script>

<style scoped>

</style>
