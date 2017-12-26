<template>
  <i-table
    :columns="columns"
    :data="displayBlogs"
    :loading="loading"
    no-data-text="Chưa có bài viết"
    no-filtered-data-text="Không có bài viết nào trong mục này"
    stripe
  ></i-table>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  props: ['category', 'search'],
  data () {
    return {
      loading: false,
      columns: [
        {title: 'Tiêu đề', key: 'title'},
        {title: 'Chuyên mục', key: 'cat', width: 150},
        {title: 'Ngày cập nhật', key: 'updatedAt', width: 150},
        {
          title: ' ',
          width: 150,
          align: 'right',
          render: (h, params) => {
            return h('div', [
              h('i-button', {
                props: {size: 'small'},
                style: {marginRight: '5px'},
                on: {click: () => {this.view(params.row._id)}}
              }, 'Xem'),
              h('i-button', {
                props: {size: 'small'},
                style: {marginRight: '5px'},
                on: {click: () => {this.edit(params.row._id)}}
              }, 'Sửa'),
              h('i-button', {
                props: {size: 'small'},
                on: {click: () => {this.remove(params.row._id)}}
              }, 'Xóa'),
            ])
          }
        }
      ],
      categories: {
        solution: 'Giải pháp',
        introduction: 'Giới thiệu',
        contact: 'Liên hệ',
        news: 'Tin tức'
      }
    }
  },
  async created () {
    this.loading = true
    await this.getBlogs()
    this.loading = false
  },
  computed: {
    ...mapGetters([
      'blogs'
    ]),
    displayBlogs () {
      return this.blogs.filter(blog => {
        const target = Object.values(blog).join(' ').replace(/<[^>]*>/g, '')
        blog.cat = this.categories[blog.category]
        blog.updatedAt = blog.updatedAt.slice(0, 10)
        return (!this.category || blog.category === this.category) && (this.search.test(target))
      })
    }
  },
  methods: {
    ...mapActions([
      'getBlogs'
    ]),
    view (id) {
      this.$emit('view-blog', id)
    },
    edit (id) {
      this.$router.push('edit?id=' + id)
    },
    remove (id) {
      this.$emit('remove-blog', id)
    }
  }
}
</script>
