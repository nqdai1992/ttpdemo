<template>
  <i-row type="flex">
    <i-col span="5" class="layout-menu-left">
      <app-sidebar></app-sidebar>
    </i-col>
    <i-col span="19">
      <app-header style="height: 9vh;"></app-header>
      <section style="padding: 10px; overflow: auto; height: 91vh; box-sizing: border-box">
        <router-view></router-view>
      </section>
    </i-col>
  </i-row>
</template>
<script>
  import {mapGetters} from 'vuex'
  import Sidebar from '@/components/Sidebar'
  import Header from '@/components/Header'
  export default {
    components: {
      'app-sidebar': Sidebar,
      'app-header': Header
    },
    created () {
      if (!this.login) {
        this.$router.push('/login')
      }
    },
    computed: {
      ...mapGetters([
        'login'
      ])
    }
  }
</script>

<style>
  .layout-menu-left{
    background: rgb(73, 80, 96);
  }
</style>
