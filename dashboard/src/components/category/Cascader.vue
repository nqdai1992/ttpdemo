<template>
  <i-cascader
    :value="path" 
    :data="catTree"
    clearable
    placeholder="Chọn danh mục"
    :render-format="format"
    change-on-select
    @on-change="emitPath"
  ></i-cascader>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  props: ['path'],
  computed: {
    ...mapGetters([
      'catTree'
    ])
  },
  methods: {
    format (labels) {
      return labels.slice(-1)[0]
    },
    emitPath (val, itemData) {
      this.$emit('path', val.join('-'))
    }
  }
}
</script>
