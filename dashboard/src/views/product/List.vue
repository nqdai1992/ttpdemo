<template>
  <i-card dis-hover>
    <i-row type="flex" justify="end" style="margin-bottom: 24px;">
      <i-button @click="catModalState = true" style="margin-right: 16px;">Quản lý danh mục</i-button>
      <i-button type="primary" @click="emitAdd">Thêm sản phẩm</i-button>
    </i-row>
    <i-row type="flex" justify="space-between" style="margin-bottom: 24px;">
      <i-col :md="8" :sm="10">
        <category-cascader @path="v => selectingPath = v"></category-cascader>
      </i-col>
      <i-col :md="10" :sm="12">
        <i-input
          v-model="searchText"
          icon="search"
          placeholder="Tìm kiếm theo thông tin sản phẩm..."
        ></i-input>
      </i-col>
    </i-row>
    <product-table
      :filterPath="selectingPath"
      :searchText="searchText"
      @edit-prod="emitEdit"
      @remove-prod="emitRemove"
    ></product-table>
    <category-handler :show="catModalState" @toggle="v => catModalState = v"></category-handler>
    <product-modal
      :show.sync="prodModalState"
      :edittingId="selecting"
    ></product-modal>
    <i-modal
      v-model="confirmDel"
      ok-text="Xóa"
      cancel-text="Hủy"
      @on-ok="dispatchRemove"
      @on-cancel="cancelRemoveProd"
      :loading="removing"
      width="300px;"
      :closable="false"
    ><span style="font-size: 20px; font-weight:">
        Xóa sản phẩm này?
      </span>
    </i-modal>
  </i-card>
</template>

<script>
import {mapActions} from 'vuex'
import CategoryCascader from '@/components/category/Cascader'
import ProductTable from '@/components/product/Table'
import CategoryHandler from '@/components/category/Tree'
import ProductModal from '@/components/product/Modal'
export default {
  components: {
    CategoryCascader,
    ProductTable,
    CategoryHandler,
    ProductModal
  },
  data () {
    return {
      searchText: '',
      selectingPath: [],
      catModalState: false,
      prodModalState: false,
      selecting: '',
      confirmDel: false,
      removing: false
    }
  },
  methods: {
    ...mapActions([
      'getCategories',
      'removeProduct',
      'API'
    ]),
    emitRemove (id) {
      this.selecting = id
      this.confirmDel = true
    },
    emitEdit (id) {
      this.selecting = id
      this.prodModalState = true
    },
    emitAdd () {
      this.selecting = ''
      this.prodModalState = true
    },
    async dispatchRemove () {
      this.removing = true
      const err = await this.removeProduct(this.selecting)
      this.removing = false
      if (err) this.$Message/error(err)
      else this.$Message.success('Xóa sản phẩm thành công')
    },
    cancelRemoveProd () {
      this.selecting = ''
      this.confirmDel = false
    }
  },
  async created () {
    // const err = await this.getCategories()
    const err = await this.API(['fetch', 'category'])
    if (err) this.$Message.error(err)
  }
}
</script>
