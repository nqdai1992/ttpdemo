<template>
  <i-card dis-hover>
    <i-tabs>
      <i-tab-pane label="Carousel">
        <carousel></carousel>
      </i-tab-pane>
      <i-tab-pane label="Logo">
      </i-tab-pane>
      <i-tab-pane label="Đối tác">
      </i-tab-pane>
    </i-tabs>
  </i-card>
</template>

<script>
import {mapActions} from 'vuex'
import Carousel from '@/components/display/Carousel'
export default {
  components: {
    Carousel
  },
  created () {
    this.getDisplays()
  },
  methods: {
    ...mapActions([
      'getDisplays'
    ])
  }
}
</script>

<style>

</style>
