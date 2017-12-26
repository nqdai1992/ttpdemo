<template>
  <div class="container-fluid px-0" id="app">
    <custom-header></custom-header>
    <div class="px-md-5 mx-lg-5">
      <custom-carousel></custom-carousel>
      <div class="row">
        <div class="col-md-4 col-lg-3 pr-0 d-none d-md-block">
          <custom-sidebar></custom-sidebar>
          <solution-bar></solution-bar>
        </div>
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
      <div class="row mx-0 my-3">
        <client></client>
      </div>
    </div>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomHeader from '@/components/Header'
import CustomCarousel from '@/components/Carousel'
import CustomSidebar from '@/components/Sidebar'
import SolutionBar from '@/components/SolutionBar'
import Client from '@/components/Client'
import CustomFooter from '@/components/Footer'

export default {
  name: 'app',
  components: {
    CustomHeader,
    CustomCarousel,
    CustomSidebar,
    SolutionBar,
    Client,
    CustomFooter
  }
}
</script>
