<template>
  <div>
    <el-card class="login-form-layout">
      <el-form autoComplete="on"
               :model="loginForm"
               :rules="loginRules"
               ref="loginForm"
               label-position="left">
        <div style="text-align: center">
          <!--<svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>-->
        </div>
        <h2 class="login-title color-main">mall-admin-web</h2>

        <el-form-item prop="username">
          <el-input name="username"
                    type="text"
                    v-model="loginForm.username"
                    autoComplete="on"
                    placeholder="请输入用户名">
              <span slot="prefix">
            <!--<svg-icon icon-class="user" class="color-main"></svg-icon>-->
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

      </el-form>
    </el-card>

  </div>
</template>

<script>
  import {isvalidUsername} from '@/utils/validate';

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
        pwdType: 'password'
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
</style>
