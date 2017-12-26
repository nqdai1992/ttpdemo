<template>
  <i-upload
    ref="photo"
    accept="image/*"
    :show-upload-list="false"
    :before-upload="handleBeforeUpload"
    :multiple="multiple"
    type="drag"
    action=""
    style="margin-bottom: 16px"
  >
    <span class="upload-field">Thêm ảnh</span>
  </i-upload>
</template>

<script>
export default {
  props: {
    getFileListOnly: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleBeforeUpload (file) {
      if (this.getFileListOnly) {
        return this.$emit('add-img', file)
      }
      const reader = new FileReader()
      reader.onload = ({target: {result}}) => {
        this.$emit('add-img', result, file)
      }
      reader.readAsDataURL(file)
      return false
    }
  }
}
</script>

<style scoped>
  .upload-field {
    font-size: 30px;
    color: #9ea7b4;
    line-height: 80px;
    margin-bottom: 16px;
    text-align: center;
  }
</style>
