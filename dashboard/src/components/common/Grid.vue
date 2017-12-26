<template>
  <div style="text-align: center">
    <i-row type="flex" style="min-width: 80px;" align="middle">
      <i-col v-for="(img, i) in currentImgs" :span="8" :key="'img-' + i" style="padding: 8px;">
        <div class="img-wrapper">
          <div class="img-cover">
            <i-icon @click.native="$emit('add-img', img)" size="35" type="checkmark-circled"></i-icon>
            <i-icon @click.native="confirm(img)" size="35" type="ios-trash-outline"></i-icon>
          </div>
          <img :src="'/images/' + img" width="100%" alt="" />
        </div>
      </i-col>
    </i-row>
    <i-page
      :current.sync="currentPage"
      :page-size="9"
      :total="total"
      size="small"
    ></i-page>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      currentPage: 1
    }
  },
  async created () {
    if (this.images.length) return null
    this.$Message.loading({content: 'Loading...'})
    await this.getImages()
    this.$Message.destroy()
  },
  computed: {
    ...mapGetters(['images']),
    total () {
      return this.images.length
    },
    currentImgs () {
      const start = (this.currentPage - 1) * 9
      return this.images.slice(start, start + 9)
    }
  },
  methods: {
    ...mapActions([
      'getImages',
      'removeImage'
    ]),
    async removeImg (img) {
      const err = await this.removeImage(img)
      if (err) {
        this.$Message.error(err)
      } else {
        this.$Message.success('Xóa ảnh thành công')
      }
    },
    confirm (img) {
      this.$Modal.confirm({
        content: 'Tiếp tục xóa ảnh này?',
        onOk: () => {
          this.removeImg(img)
        }
      })
    }
  }
}
</script>

<style scoped>
  .img-wrapper {
    box-shadow: 0 0 3px 1px rgba(0,0,0,.2);
  }
  .img-wrapper:hover .img-cover {
    display: flex;
  }
  .img-cover {
    display: none;
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    margin: 3px;
    background: rgba(0,0,0,.3);
    justify-content: space-around;
    align-items: center;
  }
  .img-cover i{
    color: #fff;
    cursor: pointer;
    margin: 0 2px;
  }
  .img-cover i:hover {
    color: #ccc
  }
</style>
