<template>
  <i-form
    ref="catInfo"
    :model="catInfo"
    :rules="rules"
  >
    <i-form-item label="Tên danh mục" prop="title">
      <i-input autofocus v-model="catInfo.title"></i-input>
    </i-form-item>
    <i-form-item label="Mô tả">
      <i-input type="textarea" v-model="catInfo.description"></i-input>
    </i-form-item>
    <i-form-item style="text-align: right">
      <i-button @click="$emit('cancel')">Hủy</i-button>
      <i-button @click="saveCat" type="primary">Lưu</i-button>
    </i-form-item>
  </i-form>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  props: ['selectingPath', 'action'],
  data () {
    return {
      catInfo: {
        title: '',
        description: '',
        path: ''
      },
      rules: {
        title: [{required: true, message: 'Hãy nhập tên danh mục', trigger: 'change'}]
      }
    }
  },
  created () {
    const path = this.selectingPath
    if (this.action === 'editCat') {
      const {title, description} = this.getCategory(path) || {}
      this.catInfo = {
        title,
        description,
        path
      }
    } else {
      this.catInfo.path = path
    }
  },
  computed: {
    ...mapGetters([
      'getCategory'
    ])
  },
  methods: {
    ...mapActions([
      'createCategory',
      'updateCategory'
    ]),
    saveCat () {
      this.$refs.catInfo.validate(valid => {
        if (valid) this.actions(this.action)
      })
    },
    async actions(action) {
      const actions = {
        addCat: () => this.createCategory(this.catInfo),
        editCat: () => this.updateCategory(this.catInfo)
      }
      const err = await actions[action]()
      if (err) return this.$Message.error(err)
      this.$emit('cancel')
      this.$Message.success('Tạo danh mục thành công')
    }
  }
}
</script>
