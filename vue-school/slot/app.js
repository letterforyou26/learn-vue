import Vue from 'vue'
import SlotComponent from './SlotComponent.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(SlotComponent),
  }).$mount('#app')