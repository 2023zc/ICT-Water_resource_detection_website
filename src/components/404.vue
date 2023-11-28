<template>
  <div class="errorpage">
    <img src="@/assests/404.jpg" alt="404" style="margin-top:10%">
    <h1>您访问的页面不存在，请查看网络连接是否正常，或查看地址输入是否正确!</h1>
    <h1>The page you visited does not exist Please check whether the network connection is normal or check whether the address input is correct !</h1>
    <el-button @click="toHome">返回登录页面</el-button>
  </div>
</template>

<script>
export default {
  methods:{
    toHome(){
      this.$emit('login')
    }
  }
}
</script>

<style>
.errorpage{
  text-align: center;
}
.errorpage h1{
  margin: 10px;
  font-weight: 300;
}
</style>

