<template>
  <el-col :span="6">
    <div class="register">
      <el-form
          ref="registerRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="registerForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" type="text" autocomplete="off" class="register-username"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
              class="register-password"
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="ruleForm.checkPass"
                    type="password"
                    autocomplete="off"
                    class="register-checkPass"
          />
        </el-form-item>
        <el-form-item label="唯一标识" prop="uniqueId">
          <el-input v-model="ruleForm.uniqueId"
                    type="password"
                    autocomplete="off"
                    class="register-uniqueId"
          />
        </el-form-item>
        <el-form-item label="手机号" prop="phoneNumber">
          <el-input v-model="ruleForm.phoneNumber"
                    type="text"
                    autocomplete="off"
                    class="register-phoneNumber"
                    style="width: 178px ;float:left "
          />
          <el-button type="primary" :on-click="sendCode" :disabled="flag">发送验证码</el-button>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code"
                    type="text"
                    autocomplete="off"
                    class="register-code"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="registerForm(registerRef)">注册</el-button>
          <el-button @click="resetForm(registerRef)">重置</el-button>
          <slot></slot>
        </el-form-item>
      </el-form>
    </div>
  </el-col>


</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import type {FormInstance, FormRules} from 'element-plus'

var flag = true  //标志按钮是否可用

const registerRef = ref<FormInstance>()

const checkusername = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入用户名!'))
  }
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码!'))
  } else {
    setTimeout(() => {
      let re = /[0-9a-zA-Z]{6,12}/;
      if (!re.test(value)) {
        callback(new Error("请输入6-12位的数字或字母组合"));
      } else {
        callback()
      }
    }, 500)

  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码!'))
  } else if (value !== ruleForm.password) {
    callback(new Error("两次密码不一致!"))
  } else {
    callback()
  }
}

const validateId = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入唯一标识!'))
  } else {
    callback()
  }
}


const validatePhoneNumber = (rule: any, value: any, callback: any) => {
  if (value === '') {
    flag = true;
    callback(new Error('请输入手机号码!'))
  } else {
    let re = /\d{11}/
    if (!re.test(value)) {
      flag =true
      callback(new Error("请输入11位手机号码"))
    } else {
      flag = false
      callback()
    }
  }
}

const validateCode = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入验证码!'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  username: '',
  password: '',
  checkPass: '',
  uniqueId: '',
  phoneNumber: '',
  code: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  username: [{validator: checkusername, trigger: 'blur'}],
  password: [{validator: validatePass, trigger: 'blur'}],
  checkPass: [{validator: validatePass2, trigger: 'blur'}],
  uniqueId: [{validator: validateId, trigger: 'blur'}],
  phoneNumber: [{validator: validatePhoneNumber, trigger: 'blur'}],
  code: [{validator: validateCode, trigger: 'blur'}],
})

//TODO:手机验证码发送功能补充
const sendCode = function () {

}

//TODO:注册功能实现
const registerForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}


const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>





<style lang="scss">
@import "../assests/login.css";
</style>
