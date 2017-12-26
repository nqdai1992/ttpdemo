<template>
  <i-card dis-hover>
    <div style="text-align: right; margin-bottom: 24px;">
      <i-button type="primary" @click="$router.push('new')">Thêm bài viết</i-button>
    </div>
    <i-row type="flex" justify="space-between" style="margin-bottom: 24px;">
      <i-col :md="8" :sm="10">
        <blog-category :category.sync="category"></blog-category>
      </i-col>
      <i-col :sm="12">
        <i-input
          v-model="search"
          icon="search"
          placeholder="Tìm kiếm theo thông tin bài viết..."
        ></i-input>
      </i-col>
    </i-row>
    <blog-table
      :category="category"
      :search="new RegExp(search.replace(/ /g, '|'), 'gi')"
      @view-blog="viewBlog"
      @remove-blog="emitRemove"
    ></blog-table>
    <i-modal
      v-model="showInfoModal"
      :title="blogInfo.title"
      width="768"
      :styles="{top: '20px'}"
    >
      <div v-html="blogInfo.content"></div>
      <div slot="footer">
        <i-button type="primary" @click="showInfoModal = false">Đóng</i-button>
      </div>
    </i-modal>
    <i-modal
      v-model="showRemoveModal"
      ok-text="Xóa"
      cancel-text="Hủy"
      @on-ok="dispatchRemove"
      @on-cancel="showRemoveModal = false"
      :loading="removing"
      width="300px;"
      :closable="false"
    ><span style="font-size: 20px; font-weight:">
        Xóa bài viết này?
      </span>
    </i-modal>
  </i-card>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import BlogCategory from '@/components/blog/Select'
import BlogTable from '@/components/blog/Table'

export default {
  components: {
    BlogCategory,
    BlogTable
  },
  data () {
    return {
      category: '',
      search: '',
      selecting: '',
      showInfoModal: false,
      showRemoveModal: false,
      removing: false
    }
  },
  methods: {
    ...mapActions(['removeBlog']),
    viewBlog (id) {
      this.selecting = id
      this.showInfoModal = true
    },
    emitRemove (id) {
      this.selecting = id
      this.showRemoveModal = true
    },
    async dispatchRemove () {
      this.removing = true
      const err = await this.removeBlog(this.selecting)
      if (err) this.$Message.error(err)
      else this.$Message.success('Xóa bài viết thành công')
      this.removing = false
      this.selecting = ''
    }
  },
  computed: {
    ...mapGetters(['blog']),
    blogInfo () {
      return this.blog(this.selecting) || {}
    }
  }
}
</script>
