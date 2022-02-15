<template>
  <div>
    <h3>Customer Reviews</h3>
    <div>
      <div v-if="!$fetchState.pending">
        <review-card
          v-for="review in reviews.results"
          :key="review.login.uuid"
          :review="review"
        />
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </div>
</template>

<script>
import ReviewCard from './ReviewCard.vue'
export default {
  components: { ReviewCard },
  data () {
    return {
      reviews: []
    }
  },
  async fetch () {
    this.reviews = await fetch(
      'https://randomuser.me/api/?results=5'
    ).then(res => res.json())
  }
}
</script>

<style>

</style>
