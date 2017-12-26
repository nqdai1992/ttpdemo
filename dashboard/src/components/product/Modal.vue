<template>
  <i-modal
    v-model="visible"
    title="Thêm sản phẩm"
    ok-text="Lưu"
    cancel-text="Hủy"
    :styles="{'top': '50px'}"
    @on-visible-change="reset"
    :width="768"
  >
    <i-row type="flex" justify="space-around">
      <i-col :sm="11" :xs="24">
        <i-form
          ref="prodInfo"
          :model="prodInfo"
          :rules="rules"
          :label-width="110"
          label-position="right"
        > 
          <i-form-item label="Danh mục" prop="category">
            <category-cascader :path="prodInfo.category.split('-')" @path="v => prodInfo.category = v" v-if="visible"></category-cascader>
          </i-form-item>
          <i-form-item label="Tên sản phẩm" prop="name">
            <i-input v-model="prodInfo.name"></i-input>
          </i-form-item>
          <i-form-item label="Mã sản phẩm" prop="code">
            <i-input v-model="prodInfo.code"></i-input>
          </i-form-item>
          <i-form-item label="Nhãn hiệu" prop="brand">
            <i-input v-model="prodInfo.brand"></i-input>
          </i-form-item>
          <i-form-item label="Giá" prop="price">
            <i-input-number :min="0" v-model="prodInfo.price" style="min-width: 100%"></i-input-number>
          </i-form-item>
          <i-form-item label="Tình trạng" prop="condition">
            <i-input v-model="prodInfo.condition"></i-input>
          </i-form-item>
          <i-form-item label="Khả dụng" prop="availability">
            <i-input v-model="prodInfo.availability"></i-input>
          </i-form-item>
        </i-form>
      </i-col>
      <i-col :sm="11">
        <img-upload 
          @add-img="addImg"
          multiple
        ></img-upload>
        <prod-preview
          :srcs="imgSrcs"
          @remove-img="removeImg"
          @move-img="moveImg"
        ></prod-preview>
      </i-col>
    </i-row>
    <div slot="footer">
      <i-button @click="visible = false">Hủy</i-button>
      <i-button
        type="primary"
        @click="saveProd"
        :loading="saving"
        :disabled="saving"
      >Lưu</i-button>
    </div>
  </i-modal>
</template>

<script>
import CategoryCascader from '@/components/category/Cascader'
import ImgUpload from '@/components/common/ImgUpload'
import ProdPreview from '@/components/product/Preview'
import {mapGetters, mapActions} from 'vuex'
export default {
  components: {
    CategoryCascader,
    ImgUpload,
    ProdPreview
  },
  props: ['show', 'edittingId'],
  data () {
    return {
      prodInfo: {
        category: '',
        code: '',
        name: '',
        brand: '',
        price: null,
        condition: '',
        availability: ''
      },
      photos: [],
      rules: {
        category: [{required: true, message: 'Chưa chọn danh mục', trigger: 'blur'}],
        code: [{required: true, message: 'Chưa nhập mã sản phẩm', trigger: 'blur'}],
        name: [{required: true, message: 'Chưa nhập tên sản phẩm', trigger: 'blur'}]
      },
      saving: false,
      fileList: [],
      action: '',
      imgSrcs: []
    }
  },
  computed: {
    ...mapGetters([
      'product'
    ]),
    visible: {
      get () {
        return this.show
      },
      set (v) {
        this.$emit('update:show', v)
      }
    }
  },
  methods: {
    ...mapActions([
      'createProduct',
      'updateProduct'
    ]),
    reset () {
      if (this.edittingId) {
        this.action = 'updateProdut'
        const product = this.product(this.edittingId)
        for (let key in this.prodInfo) {
          this.prodInfo[key] = product[key]
        }
        this.photos = product.photos || []
        this.imgSrcs = this.photos.map(cat => '/images/' + cat)
        this.fileList = Array.from({length: this.imgSrcs.length}, x => '')
      } else {
        this.action = 'createProduct'
        this.$refs.prodInfo.resetFields()
        this.fileList = []
      }
    },
    saveProd () {
      this.$refs.prodInfo.validate(async valid => {
        if (!valid) return null
        this.saving = true
        const formData = this.createFormData()
        let err
        if (this.edittingId) {
          err = await this.updateProduct({id: this.edittingId, prodInfo: formData})
        } else {
          err = await this.createProduct(formData)
        }
        this.saving = false
        if (err) return this.$Message.error(err)
        else this.$Message.success('Lưu sản phẩm thành công')
        this.visible = false
      })
    },
    createFormData () {
      const formData = new FormData()
      formData.append('photos', this.photos.join())
      this.fileList.forEach(file => {
        if (file) formData.append('photo', file)
      })
      for (let key in this.prodInfo) {
        formData.append(key, this.prodInfo[key])
      }
      return formData
    },
    addImg (newImg, newFile) {
      this.imgSrcs.push(newImg)
      this.fileList.push(newFile)
      this.photos.push('')
    },
    moveImg ({i, step}) {
      const swap = (arr) => {
        const target = arr[i + step] || ''
        arr[i + step] = arr[i]
        arr[i] = target
        return [...arr]
      }
      this.imgSrcs = swap(this.imgSrcs)
      swap(this.fileList)
      swap(this.photos)
    },
    removeImg (i) {
      const remove = (arr) => {
        arr.splice(i, 1)
      }
      remove(this.imgSrcs)
      remove(this.fileList)
      remove(this.photos)
    }
  }
}
</script>
