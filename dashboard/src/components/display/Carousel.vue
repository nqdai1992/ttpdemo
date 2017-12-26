<template>
  <i-carousel autoplay loop v-model="currentCarousel" style="min-height: 200px; max-height: 300px; background-color: #f5f7f9">
    <i-carousel-item v-for="(car, i) in carousels" :key="'car_' + i">
      <img :src="'/images/carousel/' + car" alt="" />
    </i-carousel-item>
  </i-carousel>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      currentCarousel: 0
    }
  },
  computed: {
    ...mapGetters([
      'carousels'
    ])
  }
}
</script>
