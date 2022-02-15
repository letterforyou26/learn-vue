<template>
  <div class="container">
    <cart-item
      v-for="item in cart"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'no-nav',
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style>

</style>
