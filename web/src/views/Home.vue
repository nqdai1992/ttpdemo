<template>
  <div>
    <product-category :products="products" title="SẢN PHẨM NỔI BẬT"></product-category>
    <product-category :products="products" title="THIẾT BỊ MÃ VẠCH"></product-category>
    <product-category :products="products" title="THIẾT BỊ DI ĐỘNG VÀ KIỂM KHO"></product-category>
  </div>
</template>

<script>
import ProductCategory from '@/components/ProductCategory'

export default {
  components: {
    ProductCategory
  },
  data () {
    return {
      products: [
        {name: 'EOS series - một mẫu, hai kích thước', image: 'http://ttpsolutions.com.vn/Upload/CAB/product/eos1_800.jpg', price: 200},
        {name: 'MACH4 - nhỏ gọn cho không gian hẹp.', image: 'http://ttpsolutions.com.vn/Upload/CAB/product/a2plus_600.jpg', price: 300},
        {name: 'A+ series - cho nhu cầu ngành công nghiệp', image: 'http://ttpsolutions.com.vn/Upload/CAB/product/xd4t_600.jpg'},
        {name: 'Delfi Scan C71', image: 'http://ttpsolutions.com.vn/Upload/CAB/product/mach4-abreissen-600.jpg', price: 50}
      ]
    }
  }
}
</script>
