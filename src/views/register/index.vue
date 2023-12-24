<template>
  <div class="register-container">
    <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="register-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h2 class="title">欢迎注册守护星家校沟通平台</h2>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="registerForm.username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="email">
        <span class="svg-container">
          <svg-icon icon-class="email" />
        </span>
        <el-input
          ref="email"
          v-model="registerForm.email"
          placeholder="邮箱"
          name="email"
          type="email"
          tabindex="2"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="role">
        <span class="svg-container">
          <svg-icon icon-class="role" />
        </span>
        <el-select v-model="registerForm.role" placeholder="身份">
          <el-option label="老师" value="teacher"></el-option>
          <el-option label="学生" value="student"></el-option>
          <el-option label="家长" value="parent"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="registerForm.password"
          :type="passwordType"
          placeholder="密码"
          name="password"
          tabindex="3"
          auto-complete="on"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-form-item prop="confirmPassword">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="confirmPasswordType"
          ref="confirmPassword"
          v-model="registerForm.confirmPassword"
          :type="confirmPasswordType"
          placeholder="确认密码"
          name="confirmPassword"
          tabindex="4"
          auto-complete="on"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="confirmPasswordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleRegister">注 册</el-button>

    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        username: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: ''
      },
      passwordType: 'password',
      confirmPasswordType: 'password'
    };
  },
  methods: {
    handleRegister() {
      // 在这里添加你的注册处理函数
    },
    showPwd() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
      this.confirmPasswordType = this.confirmPasswordType === 'password' ? 'text' : 'password';
    }
  }
};
</script>

<style scoped>

.register-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.title-container {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  color: #333;
  font-size: 24px;
}

.svg-container {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.el-form-item {
  position: relative;
}

.show-pwd {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

.el-button {
  background-color: #409EFF;
  color: #fff;
}
</style>


