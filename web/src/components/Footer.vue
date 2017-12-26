<template>
  <footer class="py-4 mt-5 mx-0 row d-flex justify-content-around bg-dark" style="min-height: 200px; font-size: 14px;">
    <div class="col-md-3 px-3 px-md-0">
      <h3>TTP Solution</h3>
      <p class="text-muted">Chúng tôi hiện nay cung cấp giải pháp tư vấn, nghiên cứu, triển khai dịch vụ và tích hợp hệ thống cho nhiều khách hàng đa dạng như: Giải pháp công nghệ cao, giải pháp viễn thông, Giải pháp cho cảng biển, Giải pháp cho nhà máy sản xuất, giải pháp cho công ty Dược. Với đội ngũ giàu kinh nghiệm và chuyên nghiệp, Chúng tôi tin tưởng sẽ mang lại giải pháp tốt nhất cho quý khách hàng.
      </p>
    </div>
    <div class="row col-md-6 mx-0 px-0">
      <div v-for="(group, i) in linkGroups" :key="i" class="col-4">
        <h3>{{group.title}}</h3>
        <ul class="list-unstyled">
          <li v-for="(link, i) in group.links" :key="i">
            <a :href="link.href" class="text-muted">{{link.title}}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      linkGroups: [
        {
          title: 'Navigate',
          links: [
            {title: 'Shipping & Return', href: '#'},
            {title: 'Contact us', href: '#'},
            {title: 'Blog', href: '#'},
            {title: 'RSS Syndication', href: '#'},
            {title: 'Sitemap', href: '#'}
          ]
        },
        {
          title: 'Categories',
          links: [
            {title: 'Shop all', href: '#'},
            {title: 'Thiết bị mã vạch', href: '#'},
            {title: 'Máy tính di động và kiểm kho', href: '#'}
          ]
        },
        {
          title: 'INFO',
          links: [
            {title: `CÔNG TY CỔ PHẦN TIN HỌC VIỄN THÔNG TÍN THÀNH PHÁT
41/7 Đường số 19, P. Bình Hưng Hòa A, Q. Bình Tân, Tp. HCM 
Tel: (+84-8) 6265 9286 - Fax: (+84-8) 6265 9287`, href: '#'}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  footer {
    color: #eee;
  }
</style>
