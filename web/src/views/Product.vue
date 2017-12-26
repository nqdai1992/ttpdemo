<template>
  <div>
    <div class="card rounded-0 container-fluid py-4">
      <div class="row">
        <div class="col-md-6">
          <div class="my-3 border">
            <img :src="imgs[currentImg]" alt="" style="max-height: 250px; max-width: 100%"/>
          </div>
          <div v-for="(img, i) in imgs" :key="img" class="mr-2 d-inline-block border" :class="{'border-success': currentImg === i}">
            <img :src="img" alt="" height="50px" @click="currentImg = i"/>
          </div>
        </div>
        <div class="col-md-6 my-3">
          <h4>EOS series - một mẫu, hai kích thước</h4>
          <span class="text-success" style="font-size: 20px; font-weight: bold;">$ 500.00</span>
          <div class="dropdown-divider my-3"></div>
          <h5>Description</h5>
          <p>Trong sản xuất, kho bãi hoặc nông nghiệp, ở những nơi mà yêu cầu in nhãn là bắt buộc nhưng lại không có nguồn cung cấp điện. Một nguồn cấp 24V cho phép máy in được cấp nguồn với nguồn pin kèm theo.
Nguồn pin 2 pack của EOS cho phép in nhiều hơn 500 nhãn kích thước 100x68mm mỗi lần sạc. Với pin 4 pack thì khả năng là gấp đôi. 
</p>
        </div>
      </div>
    </div>
    <div class="card rounded-0 my-3" style="min-height: 300px;">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist" style="font-size: 15px;">
          <li class="nav-item">
            <a class="nav-link active text-dark" id="home-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="home" aria-selected="true">
              Tổng quan</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" id="profile-tab" data-toggle="tab" href="#spec" role="tab" aria-controls="profile" aria-selected="false">
              Thông số kỹ thuật</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" id="contact-tab" data-toggle="tab" href="#sub" role="tab" aria-controls="contact" aria-selected="false">
              Phụ kiện</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" id="contact-tab" data-toggle="tab" href="#down" role="tab" aria-controls="contact" aria-selected="false">
              Download</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="tab-content pt-3" id="myTabContent">
          <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="home-tab">
            Thế hệ EOS mới kết hợp tất cả các tính năng của một máy in nhãn và sự tiện lợi cao trong vận hành.
  EOS1 thì được thiết kế nhỏ gọn. Đường kính lõi cuộn nhãn là 155mm. 
          </div>
          <div class="tab-pane fade" id="spec" role="tabpanel" aria-labelledby="profile-tab">Máy in di động

  Trong sản xuất, kho bãi hoặc nông nghiệp, ở những nơi mà yêu cầu in nhãn là bắt buộc nhưng lại không có nguồn cung cấp điện. Một nguồn cấp 24V cho phép máy in được cấp nguồn với nguồn pin kèm theo.
  Nguồn pin 2 pack của EOS cho phép in nhiều hơn 500 nhãn kích thước 100x68mm mỗi lần sạc. Với pin 4 pack thì khả năng là gấp đôi. </div>
          <div class="tab-pane fade" id="sub" role="tabpanel" aria-labelledby="contact-tab">
            1. Màn hình LCD cảm ứng
  Màn hình hiển thị rõ ràng giúp việc thao tác dễ dàng hơn.
  2. Kết nối USB
  Có 2 cổng USB phía trước cho kết nối thiết bị ngoại vi, 1 cổng USB phía sau cho thẻ nhớ, WLAN, bluetooth, bàn phím hoặc scanner. 
  3. Trục chứa cuộn nhãn
  Cuộn nhãn được đặt vào và tự động canh vào giữa khi đóng nắp đậy máy in. 
  4. Trục đỡ cuộn mực
  Có thể cân chình được vị trí cuộn mực.
  5. Cảm biến GAP và cảm biến phản xạ 
  Vị trí cảm biến có thể thay đổi được bằng cách di chuyển nút mày đỏ. Vị trí được mô tả bằng 1 đèn LED.
  6. Đường dẫn của nhãn.
  Đường dẫn của nhãn có thể chỉnh sửa được theo độ rộng của vật liệu in.
  Roller có thể được tháo rời để lau chùi hoặc thay thế mà không cần dùng thêm dụng cụ nào khác. Với các nhãn kích thước nhỏ có thể gây ra sự ma sát giữa đầu in và trục cuốn giấy. Chúng tôi khuyến cáo nên sử dụng các trục cuốn giấy nhỏ hơn với chiều rộng là 25 hoặc 50mm để đảm bảo chất lượng in được tốt hơn và giúp tăng tuổi thọ đầu in. 
          </div>
          <div class="tab-pane fade" id="down" role="tabpanel" aria-labelledby="contact-tab">...</div>
        </div>
      </div>
    </div>
    <product-category title="Sản phẩm có liên quan" :products="products"></product-category>
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
      imgs: [
        'http://www.ttpsolutions.com.vn/Upload/eos1_800.jpg',
        'http://www.ttpsolutions.com.vn/Upload/EOS4.JPG',
        'http://www.ttpsolutions.com.vn/Upload/EOS1.JPG',
        'http://www.ttpsolutions.com.vn/Upload/eos4_mobile_de_800.jpg'
      ],
      currentImg: 0,
      products: [
        {name: 'EOS series - một mẫu, hai kích thước', image: 'http://ttpsolutions.com.vn/Upload/CAB/product/eos1_800.jpg', price: 200},
        {name: 'MACH4 - nhỏ gọn cho không gian hẹp.', image: 'http://ttpsolutions.com.vn/Upload/CAB/product/a2plus_600.jpg', price: 300},
        {name: 'A+ series - cho nhu cầu ngành công nghiệp', image: 'http://ttpsolutions.com.vn/Upload/CAB/product/xd4t_600.jpg'},
        {name: 'Delfi Scan C71', image: 'http://ttpsolutions.com.vn/Upload/CAB/product/mach4-abreissen-600.jpg', price: 50},
      ]
    }
  }
}
</script>

<style>

</style>
