<template>
  <blog-thumbnail :blogs="blogs.concat(blogs)"></blog-thumbnail>
</template>

<script>
import BlogThumbnail from '@/components/BlogThumbnail'
export default {
  components: {
    BlogThumbnail
  },
  data () {
    return {
      blogs: [
        {title: 'Giải pháp quản lý kho', link: '#', content: `Thu thập thông tin về hàng tồn kho bằng máy quét và máy tính di động tiên tiến của chúng tôi hoặc công nghệ nhận dạng tần số radio (RFID) với các ứng dụng từ những đối tác dẫn đầu ngành của chúng tôi.

Sử dụng mạng cục bộ không dây của Motorola, Cisco (WLAN) truyền dữ liệu đường dây trở về hệ thống chủ của bạn cho phép nhân viên truy cập thời gian thực vào dữ liệu để có quyết định sáng suốt hơn. Quản lý từ xa các thiết bị của bạn với Nền tảng Phần mềm Di động để có được hiệu quả tốt hơn cho toàn bộ kho hàng thành phẩm của bạn....`},
        {title: 'Giải pháp quản lý bán hàng POS', link: '#', content: `
Các tính năng và lợi ích của giải pháp:
·         Kiểm soát được tình hình hoạt động kinh doanh.

·         Cung cấp các nghiệp vụ: Chính xác + đầy đủ + tiện lợi + dễ sử dụng.

·         Số liệu được bảo mật và an toàn.

·         Mang đến sự tự do tối đa về thời gian cho người chủ và quản lý.

·         Không tốn sức và thời gian cho việc nắm rõ tình hình hoạt động hàng ngày.

·         Khi bạn đi vắng, việc kinh doanh hàng ngày vẫn vận hành tốt như khi bạn đang có mặt. Và dễ dàng kiểm soát được lại tình hình hoạt động nhanh chóng.

·         Việc kinh doanh sẽ được duy trì và liên tục. Vì chúng tôi hỗ trợ kỹ thuật và khắc phục sự cố nhanh chóng.

·         Là công cụ hỗ trợ giúp bạn đưa ra các quyết sách kinh doanh.

·         Bạn ở tại nhà có thể quản lý tình hình hoạt động kinh doanh qua môi trường mạng Internet.

·         Hệ thống tự động đồng bộ số liệu như danh mục, giá cả, nhập kho, xuất kho, chuyển kho, phát sinh bán hàng nhanh chóng....`}
      ]
    }
  }
}
</script>

<style>

</style>
