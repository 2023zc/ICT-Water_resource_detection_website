<template>
  <!--  回到顶部-->
  <el-backtop :bottom="100">
    <div
        style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      UP
    </div>


  </el-backtop>
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
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                <el-dropdown-item @click="UIDdialog = true">我的UID</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>


      </el-header>


      <!--        侧边栏-->
      <el-container>

        <el-menu
            active-text-color="#409EFF"
            :collapse="isCollapse"
            default-active="1"
            background-color="#FFFFFF"
        >
          <el-col :span="24">
            <el-icon :size="20" style="vertical-align: middle ;cursor: pointer" @click="tocollapse(1)"
                     v-if="!isCollapse">
              <arrow-left/>
            </el-icon>
            <el-icon :size="20" style="vertical-align: middle ; cursor: pointer" @click="tocollapse(1)"
                     v-if="isCollapse">
              <arrow-right/>
            </el-icon>
          </el-col>

          <el-menu-item index="1" @click="Health_articles">
            <el-icon>
              <document/>
            </el-icon>
            <span>健康文章</span>
          </el-menu-item>
          <el-menu-item index="2" @click="Water_resource_pus">
            <el-icon>
              <ice-drink/>
            </el-icon>
            <span>水资源推送</span>
          </el-menu-item>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><tools/></el-icon>水质检测
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="show_data">历史数据</el-menu-item>
              <el-menu-item index="3-2" @click="start">开始检测</el-menu-item>
            </el-menu-item-group>

          </el-sub-menu>

          <el-menu-item index="4" @click="Water_intake">
            <el-icon>
              <notebook/>
            </el-icon>
            <span>今日饮水量</span>
          </el-menu-item>

          <el-menu-item index="5" @click="My_info">
            <el-icon>
              <info-filled/>
            </el-icon>
            <span>关于我们</span>
          </el-menu-item>

<!--          UID提示框-->
          <el-dialog
              v-model="UIDdialog"
              width="30%"
              title="UID"
          >
            <span>{{uniqueId}}</span>
          </el-dialog>


        </el-menu>

        <!--        内容-->
        <el-main>

          <router-view :username="username" :password="password" :uniqueId="uniqueId"></router-view>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {ArrowLeft, ArrowRight, Document, IceDrink, InfoFilled, Notebook, Setting, Tools} from "@element-plus/icons-vue";
import {ref} from "vue";

export default {
  props: ['username', 'password', 'uniqueId'],

  components: {ArrowRight, ArrowLeft, InfoFilled, Notebook, Tools, IceDrink, Setting, Document},
  data() {
    return {
      message: "你好",
      isCollapse: ref(false),
      UIDdialog: ref(false),
    }
  },
  methods: {
    Health_articles() {
      this.$emit('home', 'articles')
      this.tocollapse(2);
    },
    Water_resource_pus() {
      this.$emit('home', 'resource')
      this.tocollapse(2);
    },
    Water_analysis() {
      this.$emit('home', 'analysis')
      this.tocollapse(2);
    },
    Water_intake() {
      this.$emit('home', 'intake')
      this.tocollapse(2);
    },
    My_info() {
      this.$emit('home', 'info')
      this.tocollapse(2);
    },
    logout() {
      this.$emit('home', 'logout')
    },
    show_data() {
      this.$emit('home', 'historydata')
    },
    start() {
      this.$emit('home', 'start')
    },



    tocollapse(data) {
      if (data === 1) {
        this.isCollapse = !this.isCollapse;
      } else {
        this.isCollapse = (this.isCollapse ? false : this.isCollapse)
      }
    },


  },
  mounted() {
    this.Health_articles();
  },

}
</script>
<style>
@import "@/pages/main/assests/home.css";
</style>


