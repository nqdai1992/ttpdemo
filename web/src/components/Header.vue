<template>
  <header class="container-fluid px-0">
    <div class="header-setting px-md-5">
      <span class="text-light px-md-5 font-weight-light" style="line-height: 40px;">Chào mừng đến với TTP Solution</span>
    </div>
    <div class="header-logo px-md-5">
      <span class="logo pl-md-5">TTP Solution</span>
    </div>
    <nav class="header-nav navbar py-md-0 px-md-5 navbar-expand-md navbar-dark sticky-top">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="px-md-5 collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">TRANG CHỦ<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/product">SẢN PHẨM<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/solution">GIẢI PHÁP<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/news">TIN TỨC<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/contact">LIÊN HỆ<span class="sr-only">(current)</span></router-link>
          </li>
        </ul>
        <form class="form-inline">
          <div class="quick-search" style="position: relative">
          <input class="form-control rounded-0 bg-light" style="width: 300px;" type="search" placeholder="Tìm kiếm sản phẩm" aria-label="Search">
          </div>
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
 
}
</script>

<style scoped>
  .quick-search::before {
    content: "\f002";
    box-sizing: border-box;
    font: normal normal normal 14px/1 FontAwesome;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: block;
    position: absolute;
    right: 10px;
    border: none;
    color: #999;
    height: 38px;
    line-height: 38px;
    padding: 0;
  }
  .header-setting {
    background-color: #1d2734;
    height: 40px;
  }
  .header-logo {
    background-color: #2f4055;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: 'space-around';
    font-family: 'Impact';
    letter-spacing: 6px;
  }
  .header-logo .logo {
    font-size: 35px;
    font-weight: bold;
    color: #f8f8f8
  }
  .header-nav {
    background-color: #252b3d;
    border-top: 1px solid #424d6d
  }
  .header-nav .nav-item {
    padding: 5px 16px;
    border-left: 1px solid #424d6d;
    font-weight: bold;
  }
  .header-nav .nav-link {
    color: #eee!important;
    letter-spacing: -0.5px;
    font-size: 16px;
  }
  .header-nav .nav-item:hover .nav-link{
    color: #29c769!important;
  }
  .header-nav .nav-item:hover {
    border-bottom: 5px solid #29c769;
    padding-bottom: 0;
    color: #29c769;
    cursor: pointer;
  }
</style>
