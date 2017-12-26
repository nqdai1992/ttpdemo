<template>
  <div class="card">
    <div class="card-header rounded-0 bg-white">
      <h5 class="card-title mb-0 ml-2">Đối tác</h5>
    </div>
    <div class="card-body row mx-0">
      <div v-for="(client, i) in clients" :key="'client_'+i" class="col-2 p-2 d-flex align-items-center">
        <div class="border w-100">
          <img :src="client" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clients: [ 
        'https://cdn6.bigcommerce.com/s-ltak85in0q/product_images/uploaded_images/vendor-logo-1-min.png',
        'https://cdn6.bigcommerce.com/s-ltak85in0q/product_images/uploaded_images/vendor-logo-3-min.png',
        'https://cdn6.bigcommerce.com/s-ltak85in0q/product_images/uploaded_images/vendor-logo-5-min.png',
        'https://cdn6.bigcommerce.com/s-ltak85in0q/product_images/uploaded_images/vendor-logo-8-min.png',
        'https://cdn6.bigcommerce.com/s-ltak85in0q/product_images/uploaded_images/vendor-logo-11-min.png',
        'https://cdn6.bigcommerce.com/s-ltak85in0q/product_images/uploaded_images/vendor-logo-1-min.png',
        'http://www.ttpsolutions.com.vn/Upload/Partners/Unitech1.jpg',
        'http://www.ttpsolutions.com.vn/Upload/Partners/Logo%20Darveen.jpg',
        'http://www.ttpsolutions.com.vn/Upload/Partners/Motorola1.jpg',
        'http://www.ttpsolutions.com.vn/Upload/Partners/Zebra1.jpg',
        'http://www.ttpsolutions.com.vn/Upload/Partners/Motorola1.jpg',
        'http://www.ttpsolutions.com.vn/Upload/Partners/Cisco1.jpg'
      ]
    }
  }
}
</script>

<style>

</style>
