<template>
  <div class="login-page-container">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
      <h3 class="title">
        系统登录
      </h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <el-form-item style="width: 100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit2" :loading="logining">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        logining: false,
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        rules2: {
          account: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }],
          checkPass: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        },
        checked: true
      }
    },
    mounted () {
      this.getlocalStorage()
    },
    created () {
      var lett = this
      if (localStorage.getItem('user') != null) {
        lett.$router.push('/')
      }
      document.onkeydown = function (e) {
        var key = window.event.keyCode
        if (key === 13) {
          lett.handleSubmit2()
        }
      }
    },
    methods: {
      setlocalStorage (name, pwd) {
        localStorage.siteName = name
        localStorage.sitePassword = pwd
      },
      getlocalStorage: function () {
        this.ruleForm2.account = localStorage.getItem(localStorage.key(1))
        this.ruleForm2.checkPass = localStorage.getItem(localStorage.key(2))
      },
      // 点击忘记密码，清空localStorage里的存储
      clearlocalStorage: function () {
        this.setlocalStorage('', '')
      },
      handleSubmit2 (ev) {
        const _this = this
        _this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            _this.logining = true
            const loginParam = {
              username: this.ruleForm2.account,
              password: this.ruleForm2.checkPass
            }
            this.axios({
              method: 'get',
              url: window.config.Host + 'api/login',
              params: loginParam,
              timeout: 6000
            }).then(function (resp) {
              if (resp.data.code === 200) {
                if (_this.checked === true) {
                  _this.setlocalStorage(loginParam.username, loginParam.password)
                } else {
                  _this.clearlocalStorage()
                }
                _this.logining = false
                localStorage.setItem('user', JSON.stringify(loginParam))
                _this.$router.push('/')
              } else {
                _this.logining = false
                _this.$message({
                  message: resp.data.msg,
                  type: 'error'
                })
              }
            }).catch(resp => {
              _this.logining = false
              _this.$alert('系统出现错误,请联系管理人员！', '信息提醒', {
                confirmButtonText: '确定'
              })
            })
            return false
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  label.el-checkbox.remember {
    margin: 0px 0px 35px 0px;
  }
</style>
