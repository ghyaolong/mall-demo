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
              <span slot="prefix"></span>
            </el-input>
        </el-form-item>

      </el-form>
    </el-card>

  </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return{
                loginForm: {
                    username: 'admin',
                    password: '123456',
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
