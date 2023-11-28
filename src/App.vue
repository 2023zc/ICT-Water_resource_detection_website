<template>
  <router-view @login="toHome" @home="changFunc" @NotFound="toLogin" :username="username" :password="password" :uniqueId="uniqueId"></router-view>
</template>
<script>

export default {
  mounted() {
    this.$router.push('/login')
  },



  data(){
    return{
      func:'',
      username:'',
      password:'',
      uniqueId:'',
    }
  },

  methods:{
    toLogin(){
      this.$router.push('/login')
    },
    toHome(username,password,uniqueId){
      this.username=username
      this.password=password
      this.uniqueId=uniqueId
      this.$router.push('/home')
    },
    changFunc(func){
      if(func==='logout')
      {
        this.$router.push('/login')
      }
      else{
        this.$router.push(`/home/${func}`)
      }
    }
  },

}
</script>
<style>
</style>