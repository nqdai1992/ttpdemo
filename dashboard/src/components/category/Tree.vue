<template>
  <i-modal
    v-model="visible"
    :closable="false"
    title="Quản lý danh mục"
    scrollable
    :styles="{'top': '50px'}"
    @on-visible-change="showForm = false"
  >
    <i-row type="flex" justify="space-between" style="background-color: #f5f7f9; padding: 2px;">
      <i-col :span="12">
        <i-tree
          :data="tree"
          @on-select-change="updateSelectingPath"
          empty-text="Không có danh mục nào"
          style="max-height: 350px; overflow: auto"
        ></i-tree>
      </i-col>
      <i-col :span="12">
        <div style="text-align: right">
          <i-button
            @click="showForm = true; action = 'addCat'"
            :disabled="action === 'editCat'"
          ><i-icon type="plus"></i-icon></i-button>
          <i-button
            @click="showForm = true; action = 'editCat'"
            :disabled="disabled || action === 'addCat'"
          ><i-icon type="edit"></i-icon></i-button>
          <i-poptip
            confirm
            title="Xóa danh mục này cùng những dang mục nằm trong?"
            @on-ok="delCat"
            ok-text="Xóa"
            cancel-text="Hủy"
            placement="bottom"
            style="text-align: left"
          >
            <i-button
              :disabled="disabled"
            ><i-icon type="trash-b"></i-icon></i-button>
          </i-poptip>
        </div>
        <cat-form
          v-if="showForm"
          :selectingPath="selectingPath"
          :action="action"
          @cancel="showForm = false; action = ''"
          style="padding: 5px;"
        ></cat-form>
      </i-col>
    </i-row>
    <template slot="footer">
      <i-button @click="visible = false">Đóng</i-button>
    </template>
  </i-modal>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import CatForm from '@/components/category/Form'
export default {
  components: {CatForm},
  props: ['show'],
  data () {
    return {
      loading: false,
      selectingPath: '',
      showForm: false,
      action: ''
    }
  },
  computed: {
    ...mapGetters([
      'catTree'
    ]),
    disabled () {
      return this.selectingPath === ''
    },
    visible: {
      get () {
        return this.show
      },
      set (v) {
        this.$emit('toggle', v)
      },
    },
    tree () {
      return [{
        title: 'Tất cả',
        value: '',
        expand: true,
        children: this.catTree
      }]
    }
  },
  methods: {
    ...mapActions([
      'removeCategories'
    ]),
    updateSelectingPath ([{path = ''}]) {
      this.selectingPath = path
    },
    async delCat () {
      const err = await this.removeCategories(this.selectingPath)
      if (err) this.$Message.error(err)
      else this.$Message.success('Xóa danh mục thành công')
    }
  }
}
</script>

<style scoped>
  .ivu-modal-body {
    padding: 0!important;
  }
</style>
