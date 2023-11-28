<template>
  <el-col :span="6">
    <div class="login">
      <el-form
          ref="loginRef"
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

        <el-form-item label="唯一标识" prop="uniqueId">
          <el-input v-model="ruleForm.uniqueId"
                    type="password"
                    autocomplete="off"
                    class="register-uniqueId"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="loginForm(loginRef)">登录</el-button>
          <el-button @click="resetForm(loginRef)">重置</el-button>
          <slot></slot>
        </el-form-item>
      </el-form>
    </div>
  </el-col>




</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
import {reactive, ref} from 'vue'
import type {FormInstance, FormRules} from 'element-plus'

const loginRef = ref<FormInstance>()
const emits=defineEmits(['login'])



const checkusername = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请输入用户名!'))
  }
  else{
    callback();
  }
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码!'))
  } else {
    setTimeout(()=>{
      let re=/[0-9a-zA-Z]{6,12}/;
      if(!re.test(value)){
        callback(new Error("请输入6-12位的数字或字母组合"));
        return false;
      }
      else{
        callback()
        return true;
      }
    },500)

  }
}


const validateId= (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入设备的唯一标识!'))
  }
  else {
    callback()
  }
}


const ruleForm = reactive({
  username: '',
  password: '',
  uniqueId: '',
})

//不能直接修改reactive对象,需要通过其他方法改变
const rules = reactive<FormRules<typeof ruleForm>>({
  username: [{validator: checkusername, trigger: 'blur'}],
  password: [{validator: validatePass, trigger: 'blur'}],
  uniqueId: [{validator: validateId, trigger: 'blur'}],
})



//TODO: 登录功能实现,向主组件传递用户名,密码,UID
const loginForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
    formEl.validate((valid) => {
      if(valid){
        emits('login',ruleForm.username,ruleForm.password,ruleForm.uniqueId);
        return true;
      }
      else{
        alert('提交失败')
        return false;
      }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}



</script>