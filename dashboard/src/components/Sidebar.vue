<template>
  <i-menu
    :active-name="activeRoute"
    :open-names="[openGroup]"
    @on-select="redirect"
    theme="dark"
    width="auto"
    style="height: 100vh; padding-top: 15px; min-width: 210px; box-sizing: border-box"
    accordion
  >
    <div class="layout-logo-left"></div>
    <i-sub-menu 
      v-for="group in navItems"
      :name="group.path"
      :key="group.name"
    >
      <template slot="title">
        <i-icon :type="group.icon"></i-icon>
        {{group.name}}
      </template>
      <i-menu-item
        v-for="item in group.children"
        v-if="!item.hidden"
        :name="group.path + '/' + item.path"
        :key="item.name"
      >
        {{item.name}}
      </i-menu-item>
    </i-sub-menu>
  </i-menu>
</template>

<script type="text/babel">
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'navItems'
      ]),
      activeRoute () {
        return this.$route.path
      },
      openGroup () {
        return this.$route.matched[0].path
      }
    },
    methods: {
      redirect (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin-left: 5%;
    margin-bottom: 10px;
  }
</style>
