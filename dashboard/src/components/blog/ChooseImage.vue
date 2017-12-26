<template>
  <i-modal
    v-model="visible"
    title="Thêm hình ảnh"
    ok-text="Thêm"
    cancel-text="Hủy"
    @on-ok="$emit('add-image', imageUrl)"
    :styles="{top: '20px'}"
  >
    <i-tabs v-model="activeTab">
      <i-tab-pane label="URL" name="URL">
        <i-input
          v-model="imageUrl"
          autofocus
          placeholder="http://"
        ></i-input>
      </i-tab-pane>
      <i-tab-pane label="Tải ảnh lên" name="upload">
        <image-upload
          v-if="activeTab === 'upload'"
          getFileListOnly
          @add-img="uploadImage"
        ></image-upload>
      </i-tab-pane>
      <i-tab-pane label="Thư viện" name="browse">
        <image-grid
          v-if="activeTab === 'browse'"
          @add-img="chooseImg"
        ></image-grid>
      </i-tab-pane>
    </i-tabs>
  </i-modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import ImageUpload from '@/components/common/ImgUpload'
import ImageGrid from '@/components/common/Grid'
export default {
  components: {
    ImageUpload,
    ImageGrid
  },
  props: ['show'],
  data () {
    return {
      imageUrl: '',
      activeTab: 'URL'
    }
  },
  computed: {
    ...mapGetters(['images']),
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
    ...mapActions(['createImage']),
    async uploadImage (file) {
      const formData = new FormData()
      formData.append('photo', file)
      this.visible = false
      this.$Message.loading({content: 'Uploading...'})
      const err = await this.createImage(formData)
      this.$Message.destroy()
      if (err) {
        this.$Message.error(err)
      } else {
        this.$emit('add-image', '/images/' + this.images[0])
      }
    },
    chooseImg (img) {
      this.$emit('add-image', '/images/' + img)
      this.visible = false
    }
  }
}
</script>
