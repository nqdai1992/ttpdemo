<template>
  <i-row type="flex" justify="center" style="margin-top: 10%;">
    <i-col :sm="10">
      <i-card>
        <i-form
          ref="credential"
          :model="credential"
          :rules="rules"
          :label-width="115"
          label-position="right"
          style="padding-top: 30px;"
        >
          <i-form-item label="Tên đăng nhập" prop="username">
            <i-input v-model="credential.username" autofocus @on-enter="submitSignin"></i-input>
          </i-form-item>
          <i-form-item label="Mật khẩu" prop="password">
            <i-input v-model="credential.password" type="password" @on-enter="submitSignin"></i-input>
          </i-form-item>
          <i-form-item>
            <i-button type="primary" @click="submitSignin" :loading="loading" :disabled="loading">Đăng nhập</i-button>
          </i-form-item>
        </i-form>
      </i-card>
    </i-col>
  </i-row>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        credential : {
          username: '',
          password: ''
        },
        rules: {
          username: [{required: true, message: 'Yêu cầu điền tên đăng nhập', trigger: 'change'}],
          password: [{required: true, message: 'Yêu cầu nhập mật khẩu', trigger: 'change'}]
        },
        loading: false
      }
    },
    created () {
      if (this.login) this.redirect()
    },
    computed: {
      ...mapGetters([
        'login'
      ])
    },
    methods: {
      ...mapActions([
        'signin'
      ]),
      submitSignin () {
        if (this.loading) return null
        this.$refs.credential.validate(async valid => {
          if (valid) {
            this.loading = true
            const err = await this.signin(this.credential)
            if (err) this.$Message.error(err)
            else this.redirect()
            this.loading = false
          }
        })
      },
      redirect () {
        this.$router.push('/product')
      }
    }
  }
</script>
