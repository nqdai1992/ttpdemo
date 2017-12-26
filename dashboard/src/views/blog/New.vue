<template>
  <i-card dis-hover style="padding: 0 32px 32px 32px">
    <i-form
      ref="blogInfo"
      :model="blogInfo"
      :rules="rules"
    >
      <i-form-item label="Chuyên mục" style="margin-bottom: 0;"></i-form-item>
      <i-form-item prop="category" style="width: 50%; margin-bottom: 10">
        <blog-category :category.sync="blogInfo.category"></blog-category>
      </i-form-item>
      <i-form-item label="Tiêu đề bài viết" prop="title">
        <i-input autofocus v-model="blogInfo.title"></i-input>
      </i-form-item>
      <i-form-item label="Nội dung" style="margin-bottom: 0;"></i-form-item>
      <custom-quill
        v-model="blogInfo.content"
        style="margin-bottom: 1.5rem"
      ></custom-quill>
      <i-form-item label="Tags" style="margin-bottom: 12px">
        <i-select v-model="blogInfo.tags" filterable multiple>
          <i-option v-for="(tag, i) in tags" :value="tag" :key="'tag_' + i">{{ tag }}</i-option>
        </i-select>
      </i-form-item>
      <i-poptip placement="right">
        <i-button>Thêm tag</i-button>
        <div slot="content">
          <i-input v-model="newTag" placeholder="..." style="width: 120px;"></i-input>
          <i-button @click="addTag">Thêm</i-button>
        </div>
      </i-poptip>
      <i-form-item style="text-align: right; margin-bottom: 0">
        <i-button
          @click="$router.push('list')"
          size="large"
          style="width: 75px;"
        >Hủy</i-button>
        <i-button
          @click="saveBlog"
          :loading="loading"
          :disabled="loading"
          type="primary"
          size="large"
          style="width: 100px; margin-left: 10px;"
        >Lưu</i-button>
      </i-form-item>
    </i-form>
  </i-card>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import CustomQuill from '@/components/blog/Quill'
import BlogCategory from '@/components/blog/Select'

export default {
  components: {
    CustomQuill,
    BlogCategory
  },
  data () {
    return {
      cats: [
        {text: 'Trang giải pháp', val: 'solution'},
        {text: 'Trang tin tức', val: 'news'},
        {text: 'Trang giới thiệu', val: 'introduction'},
        {text: 'Trang liên hệ', val: 'contact'}
      ],
      blogInfo: {
        category: 'solution',
        title: '',
        content: null,
        tags: []
      },
      rules: {
        category: [{required: true, message: 'Hãy nhập chuyên mục', trigger: 'blur'}],
        title: [{required: true, message: 'Hãy nhập tiêu đề bài viết', trigger: 'change'}]
      },
      loading: false,
      newTag: '',
      addedTags: []
    }
  },
  created () {
    this.getBlogs()
    if (this.isCreate) return null
    const id = this.$route.query.id
    const blogInfo = this.blog(id)
    if (blogInfo) {
      for (let key in this.blogInfo) {
        this.blogInfo[key] = blogInfo[key]
      }
    } else {
      this.$router.push('list')
    }
  },
  methods: {
    ...mapActions([
      'getBlogs',
      'createBlog',
      'updateBlog'
    ]),
    saveBlog () {
       this.$refs.blogInfo.validate(async valid => {
        if (!valid) return null
        this.loading = true
        let err
        if (this.isCreate) {
          err = await this.createBlog(this.blogInfo)
        } else {
          err = await this.updateBlog({
            id: this.$route.query.id,
            blogInfo: this.blogInfo
          })
        }
        this.loading = false
        if (err) {
          this.$Message.error(err)
        } else {
          this.$Message.success('Lưu bài viết thành công')
          this.$router.push('list')
        }
      })
    },
    handleImageAdded (file, Editor, cursorLocation) {
      const reader = new FileReader()
      reader.onload = ({target: {result}}) => {
        Editor.insertEmbed(cursorLocation, 'image', result)
      }
      reader.readAsDataURL(file)
    },
    addTag () {
      if (!this.newTag) return null
      console.log(this.addedTags)
      this.addedTags.push(this.newTag)
      console.log(this.newTag)
      console.log(this.addedTags)
      this.blogInfo.tags.push(this.newTag)
      this.newTag = ''
    }
  },
  computed: {
    ...mapGetters(['blog', 'blogs']),
    tags () {
      const allTags = this.blogs.reduce((tags, blog) => tags.concat(blog.tags), [])
      return Array.from(new Set([...allTags, ...this.addedTags]))
    },
    isCreate () {
      return this.$route.path === '/blog/new'
    }
  }
}
</script>
