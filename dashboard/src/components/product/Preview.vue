<template>
  <i-row :gutter="6" type="flex" align="middle">
    <i-col :span="8" v-for="(src, i) in srcs" :key="'img_' + i" style="padding: 5px;">
      <div class="img-wrapper">
        <img :src="src" alt="" width="100%" />
        <div class="img-cover">
          <i-icon @click.native="moveImg(i, -1)" type="arrow-left-b"></i-icon>
          <i-icon type="ios-trash-outline" @click.native="removeImg(i)" style="font-size: 20px;"></i-icon>
          <i-icon @click.native="moveImg(i, 1)" type="arrow-right-b"></i-icon>
        </div>
      </div>
    </i-col>
  </i-row>
</template>

<script>
export default {
  props: ['srcs'],
  methods: {
    removeImg (i) {
      this.$emit('remove-img', i)
    },
    moveImg (i, step) {
      const targetIndex = i + step
      if (0 <= targetIndex && targetIndex < this.srcs.length) {
        this.$emit('move-img', {i, step})
      }
    }
  }
}
</script>

<style scoped>
  .img-wrapper {
    box-shadow: 0 0 3px 1px rgba(0,0,0,.2);
  }
  .img-wrapper:hover .img-cover{
    display: flex;
  }
  .img-cover {
    display: none;
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    background: rgba(0,0,0,.3);
    text-align: right;
    justify-content: space-between;
    align-items: center;
  }
  .img-cover i{
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    margin: 0 2px;
  }
  .img-cover i:hover {
    color: #ccc
  }
</style>
