<template>
  <div class="container">
    <h4 class="header">
      {{ cardsSection.title }}
    </h4>
    <div class="snippet">
      {{ cardsSection.snippet }}
    </div>
    <div class="cards-container">
      <large-card
        v-for="card in cardsSection.cards"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardsSection: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .container {
    margin-top: 2rem;
  }
  .header {
    font-weight: 700;
    font-size: 1.5rem;
  }
  .snippet {
    color: grey;
    margin-bottom: 1.5rem;
  }
  .cards-container {
    display: flex;
    justify-content: space-between;
  }
</style>
