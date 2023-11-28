<template>

    <el-row justify="center">
      <el-col :span="6">
        <div class="infos">
          <h2>欢迎来到水资源登陆界面</h2>
          <!--        一定要是src开始-->
          <img src="@/pages/login/assests/cat.gif" alt="">
          <p>更健康,更便捷</p>
        </div>
      </el-col>
      <el-col :span="1">
        <el-divider direction="vertical" border-style="solid" class="divider"/>
      </el-col>

      <login v-if="isRegisted" @login="checklogin">
        <el-button @click="toRegister">没有账号,去注册</el-button>
      </login>
      <register v-if="isLogined">
        <el-button @click="toRegister">已有账号,去登录</el-button>
      </register>
    </el-row>



</template>

<script>
import register from '@/pages/login/components/register.vue'
import login from '@/pages/login/components/login.vue'

export default {
  data() {
    return {
      isRegisted: true,
      isLogined:false,
    }
  },
  methods: {
    toRegister() {
      this.isRegisted = !this.isRegisted;
      this.isLogined=!this.isLogined;
    },

    checklogin(username,password,uniqueId){
      this.$emit('login',username,password,uniqueId)
    },

  },
  components: {register, login}
}
</script>


<style lang="scss" scoped>
@import "@/pages/login/assests/login.css";

</style>
