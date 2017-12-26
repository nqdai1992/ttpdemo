<template>
  <i-table
    :columns="columns"
    :data="displayProds"
    :loading="loading"
    no-data-text="Không có sản phẩm"
    no-filtered-data-text="Không có sản phẩm trong mục này"
    stripe
  ></i-table>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  props: ['filterPath', 'searchText'],
  data () {
    return {
      loading: false,
      columns: [
        {title: 'Mã số', key: 'code'},
        {title: 'Tên SP', key: 'name'},
        {title: 'Danh mục', key: 'catTitle'},
        {title: 'Nhãn hiệu', key: 'brand'},
        {title: 'Khả dụng', key: 'availability'},
        {title: 'Tình trạng', key: 'condition'},
        {title: 'Giá', key: 'price', align: 'right', sortable: true},
        {
          title: ' ',
          width: 150,
          align: 'right',
          render: (h, params) => {
            return h('div', [
              h('i-button', {
                props: {size: 'small'},
                style: {marginRight: '5px'},
                on: {click: () => {this.edit(params.row._id)}}
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
      ]
    }
  },
  async created () {
    this.loading = true
    const err = await this.getProducts()
    this.loading = false
    if (err) this.$Message.error(err)
  },
  computed: {
    ...mapGetters([
      'products',
      'getCategory'
    ]),
    displayProds () {
      const path = this.filterPath
      const catReg = new RegExp('^' + path)
      const text = this.searchText.split(' ').join('|')
      const searchReg = new RegExp(`${text}`, 'i')
      return this.products.filter(prod => {
        const target = Object.values(prod).join(' ')
        const cat = this.getCategory(prod.category) || {}
        prod.catTitle = cat.title
        return catReg.test(prod.category) &&
          (!text || searchReg.test(target))
      })
    },
    brands () {
      const brands = Array.from(new Set(this.displayProds.map(({brand}) => brand)))
      return brands.map(brand => {
        return {label: brand, value: brand}
      })
    }
  },
  methods: {
    ...mapActions([
      'getProducts'
    ]),
    edit (id) {
      this.$emit('edit-prod', id)
    },
    remove (id) {
      this.$emit('remove-prod', id)
    }
  },
  watch: {
    displayProds (prods) {
      this.columns.splice(3, 1, {
        title: 'Nhãn hiệu',
        key: 'brand',
        filters: this.brands,
        filterMultiple: false,
        filterMethod (v, row) {
          return v ? row.brand === v : true
        }
      })
    }
  }
}
</script>
