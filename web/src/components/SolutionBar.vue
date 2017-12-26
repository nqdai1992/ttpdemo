<template>
  <div class="card px-0 rounded-0 mb-3">
    <div class="card-heading">
      <h6 class="text-white card-heading-title">GIẢI PHÁP</h6>
    </div>
    <nav class="d-none d-sm-block sidebar">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(item, i) in blogs" :key="i">
          <i class="fa fa-angle-right pr-md-3 pr-sm-1" aria-hidden="true"></i>
          {{item.label}}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogs: [
        {label: 'Giải pháp quản lý kho'},
        {label: 'Giải pháp bán hàng POS'},
        {label: 'Giải pháp chăm sóc sức khỏe'},
        {label: 'Giải pháp quản lý tài sản'},
        {label: 'Giải pháp quản lý giao nhận hàng'}
      ]
    }
  }
}
</script>

<style scoped>
  .card-heading {
    background-image: linear-gradient(to bottom,#4ba3df 0,#1e6fa6 100%)
  }
  .list-group-item {
    cursor: pointer;
    font-weight: 550;
    line-height: 30px;
    letter-spacing: 0.5px;
    font-size: 14px;
  }
  .list-group-item:hover {
    background-color: #f3f3f3;
  }
</style>
