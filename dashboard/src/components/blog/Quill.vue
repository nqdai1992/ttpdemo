<template>
  <div class="quillWrapper">
    <div ref="quillContainer" :id="id"></div>
    <choose-image
      :show.sync="imageModal"
      @add-image="addImage"
    ></choose-image>
  </div>
</template>

<script>
import Quill from 'quill'
import ImageResize from 'quill-image-resize-module'
import ChooseImage from '@/components/blog/ChooseImage'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

Quill.register('modules/imageResize', ImageResize)

export default {
  components: {
    ChooseImage
  },
  props: {
    value: String,
    id: {
      type: String,
      default: 'quill-container'
    },
    placeholder: String,
    disabled: Boolean,
    editorToolbar: Array,
    useCustomImageHandler: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      quill: null,
      editor: null,
      toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        ['link', 'image', 'video']
      ],
      imageModal: false
    }
  },
  mounted() {
    this.initializeVue2Editor()
    this.handleUpdatedEditor()
  },
  methods: {
    initializeVue2Editor() {
      this.setQuillElement()
      this.setEditorElement()
      this.checkForInitialContent()
    },
    setQuillElement() {
      this.quill = new Quill(this.$refs.quillContainer, {
        modules: {
          toolbar: this.toolbar,
          imageResize: {
            modules: ['Resize', 'Toolbar']
          }
        },
        placeholder: this.placeholder ? this.placeholder : '',
        theme: 'snow',
        readOnly: this.disabled ? this.disabled : false,
      })
      this.setupCustomImageHandler()
    },
    setupCustomImageHandler() {
      let toolbar = this.quill.getModule('toolbar');
      toolbar.addHandler('image', this.customImageHandler);
    },
    customImageHandler(image, callback) {
      this.imageModal = true
    },
    checkForInitialContent() {
      this.editor.innerHTML = this.value || ''
    },
    setEditorElement() {
      this.editor = document.querySelector(`#${this.id} .ql-editor`)
    },
    handleUpdatedEditor() {
      this.quill.on('text-change', () => {
        this.$emit('input', this.editor.innerHTML)
      })
    },
    addImage (url) {
      if (!url) return null
      const Editor = this.quill
      const range = Editor.getSelection()
      let cursorLocation = range ? range.index : 0
      Editor.insertEmbed(cursorLocation, 'image', url)
    }
  },
  watch: {
    value (val) {
      if (val !=  this.editor.innerHTML && !this.quill.hasFocus()) {
        this.editor.innerHTML = val
      }
    },
    disabled(status) {
      this.quill.enable(!status)
    }
  }
}
</script>

<style>
  .ql-editor {
    min-height: 200px;
    font-size: 16px;
  }
  .ql-snow .ql-thin, .ql-snow .ql-stroke.ql-thin {
      stroke-width: 1px !important;
  }
  .quillWrapper .ql-snow.ql-toolbar {
      padding-top: 8px;
      padding-bottom: 4px;
  }
  .quillWrapper .ql-snow.ql-toolbar button {
    margin: 1px;
  }
  .quillWrapper .ql-snow.ql-toolbar .ql-formats {
    margin-bottom: 10px;
  }
  .quillWrapper .ql-snow.ql-toolbar button svg, .ql-snow .ql-toolbar button svg {
    width: 22px;
    height: 22px;
  }
  .quillWrapper .ql-editor ul[data-checked=true] > li::before, .quillWrapper .ql-editor ul[data-checked=false] > li::before {
    font-size: 1.35em;
    vertical-align: baseline;
    bottom: -0.065em;
    font-weight: 900;
    color: #222;
  }
  .quillWrapper  .ql-snow .ql-stroke {
      stroke: rgba(63, 63, 63, 0.95);
      stroke-linecap: square;
      stroke-linejoin: initial;
      stroke-width: 1.7px;
  }
  .quillWrapper .ql-picker-label {
    font-size: 15px;
  }
  .quillWrapper .ql-snow .ql-active .ql-stroke {
      stroke-width: 2.25px;
  }
  .quillWrapper .ql-toolbar.ql-snow .ql-formats {
    vertical-align: top;
  }
</style>