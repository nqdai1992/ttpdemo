<template>
  <i-select :value="category" @input="v => $emit('update:category', v)" clearable placeholder="Chọn chuyên mục">
    <i-option v-for="cat in cats" :value="cat.val" :key="cat.val">{{cat.text}}</i-option>
  </i-select> 
</template>

<script>
export default {
  props: ['category'],
  data () {
    return {
      cats: [
        {text: 'Trang giải pháp', val: 'solution'},
        {text: 'Trang tin tức', val: 'news'},
        {text: 'Trang giới thiệu', val: 'introduction'},
        {text: 'Trang liên hệ', val: 'contact'}
      ]
    }
  }
}
</script>