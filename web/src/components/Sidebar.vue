<template>
  <div class="card px-0 rounded-0 mb-3">
    <div class="card-heading">
      <h6 class="text-white card-heading-title">DANH MỤC SẢN PHẨM</h6>
    </div>
    <nav class="d-none d-sm-block sidebar">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(item, i) in categories" :key="i">
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
      categories: [
        {label: 'Máy in tem mã vạch'},
        {label: 'Máy di động cầm tay'},
        {label: 'Máy tính gắn trên phương tiện'},
        {label: 'Thiết bị PDA công nghiệp'},
        {label: 'Mực in và giấy in nhãn'},
        {label: 'Vestibulum at eros'},
        {label: 'Dapibus ac facilisis in'},
        {label: 'Vestibulum at eros'},
        {label: 'Cras justo odio'}
      ]
    }
  }
}
</script>

<style scoped>
  .card-heading {
    background-image: linear-gradient(to bottom,#34d575 0,#209d53 100%);
  }
  .card-heading::before {
    background: #1c8848;
  }
  .list-group-item {
    border-top: .1px solid #595959!important;
    background-color: #444;
    color: #f8f9fa;
    cursor: pointer;
    font-weight: lighter!important;
    line-height: 30px;
    letter-spacing: 0.5px;
    font-size: 14px;
  }
  .list-group-item:hover {
    background-color: #2b2b2b;
  }
</style>
