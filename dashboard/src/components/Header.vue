<template>
  <header class="layout-header">
    <i-row type="flex" justify="end">
      <i-dropdown 
        style="margin-right: 30px; padding-top: 12px;"
        trigger="click"
        @on-click="v => this[v]()"
        placement="bottom-end"
      >
        <i-button shape="circle" icon="person" size="large">
          <i-icon type="arrow-down-b"></i-icon>
        </i-button>
        <i-dropdown-menu slot="list">
          <i-dropdown-item class="text" name="changepass">Đổi mật khẩu</i-dropdown-item>
          <i-dropdown-item class="text" divided name="logout">Đăng xuất</i-dropdown-item>
        </i-dropdown-menu>
      </i-dropdown>
    </i-row>
  </header>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'login'
      ])
    },
    methods: {
      ...mapActions([
        'signout'
      ]),
      logout () {
        this.signout()
      },
      changepass () {
        console.log('change password')
      }
    },
    watch: {
      login (v) {
        if (!v) this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .layout-header {
    background-color: #ffffff;
    box-shadow: 0 2px 5px 0 rgba(1, 1, 1, 0.1);
    position: relative;
    z-index: 1;
  }
</style>


