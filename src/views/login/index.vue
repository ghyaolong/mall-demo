<template>
  <div>
    <el-card class="login-form-layout">
      <el-form autoComplete="on"
               :model="loginForm"
               :rules="loginRules"
               ref="loginForm"
               label-position="left">
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <h2 class="login-title color-main">mall-admin-web</h2>

        <el-form-item prop="username">
          <el-input name="username"
                    type="text"
                    v-model="loginForm.username"
                    autoComplete="on"
                    placeholder="请输入用户名">
              <span slot="prefix">
            <svg-icon icon-class="user" class="color-main"></svg-icon>
          </span>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input name="password"
                    :type="pwdType"
                    v-model="loginForm.password"
                    autocomplete="on"
                    aria-placeholder="请输入密码">
            <span slot="prefix">
              <svg-icon icon-class="password" class="color-main"></svg-icon>
            </span>
            <span slot="suffix" @click="showPwd">
              <svg-icon icon-class="eye" class="color-main"></svg-icon>
          </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button style="width: 100%" type="primary" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
        </el-form-item>

      </el-form>
    </el-card>
    <img :src="login_center_bg" class="login-center-layout">

  </div>
</template>

<script>
    import {isvalidUsername} from '@/utils/validate';
    import login_center_bg from '@/assets/images/login_center_bg.png';
    import {setSupport,getSupport,SupportUrl} from '@/utils/support';

    export default {
        name: "login",
        data() {
            const validateUsername = (rule, value, callback) => {
                if (!isvalidUsername(value)) {
                    callback(new Error('请输入正确的用户名'));
                } else {
                    callback();
                }
            };

            const validatePass = (rule, value, callback) => {
                if (value.length < 3) {
                    callback(new Error('密码不能小于3位'))
                } else {
                    callback()
                }
            };

            return {
                loginForm: {
                    username: 'admin',
                    password: '123456',
                },
                loginRules: {
                    username: [{required: true, trigger: 'blur', validator: validateUsername}],
                    password: [{required: true, trigger: 'blur', validator: validatePass}]
                },
                login_center_bg,
                loading: false,
                pwdType: 'password'
            }
        },
        methods: {
            showPwd() {
                if (this.pwdType === 'password') {
                    this.pwdType = ''
                } else {
                    this.pwdType = 'password'
                }
            },
            handleLogin(){
              this.$refs.loginForm.validate((valid) => {
                  if(valid){
                    let isSupport = getSupport();
                    if(isSupport===undefined || isSupport==null){

                    }
                  }else{
                      console.log('error submit!!');
                      return false;
                  }
              })
            }
        }
    }
</script>

<style scoped>
  .login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409EFF;
  }

  .login-title {
    text-align: center;
  }

  .login-center-layout {
    background: #409EFF;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
  }

  .total-icon {
    color: #409EFF;
    width: 60px;
    height: 60px;
  }
</style>
