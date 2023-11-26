<template>
  <div class="layout">
    <el-container>
      <!--      头部-->
      <el-header>

        <el-col :span="1" :offset="23">
          <el-dropdown>
            <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>


      </el-header>

      <el-container>
        <!--        侧边栏-->
        <el-aside width="200px">
          <el-col :span="12">
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                default-active="1"
                text-color="#fff"
            >
              <el-menu-item index="1" @click="Health_articles">
              <el-icon><document/></el-icon><span>健康文章</span>
              </el-menu-item>
              <el-menu-item index="2" @click="Water_resource_pus">
                <el-icon><ice-drink/></el-icon><span>水资源推送</span>
              </el-menu-item>
              <el-menu-item index="3" @click="Water_analysis">
                <el-icon><tools/></el-icon><span>水质检测</span>
              </el-menu-item>
              <el-menu-item index="4" @click="Water_intake">
                <el-icon><notebook/></el-icon><span>今日饮水量</span>
              </el-menu-item>
            </el-menu>
          </el-col>

        </el-aside>

        <!--        内容-->
        <el-main>

          <router-view></router-view>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {Document, IceDrink, Notebook, Setting, Tools} from "@element-plus/icons-vue";

export default {
  components: {Notebook, Tools, IceDrink, Setting, Document},
  data() {
    return {
      message: "你好"
    }
  },
  methods:{
    Health_articles(){
      this.$router.push('/home/articles')
    },
    Water_resource_pus(){
      this.$router.push('/home/resource')
    },
    Water_analysis(){
      this.$router.push('/home/analysis')
    },
    Water_intake(){
      this.$router.push('/home/intake')
    }
  }
}
</script>
<style>
@import "./assests/home.css";
</style>


