<template>
  <el-row>
    <el-text size="large" type="primary">每天都要记得多喝水哦꒰⑅•ᴗ•⑅꒱<el-icon :size="20" color="#409EFF" style="vertical-align: middle"><ice-drink/></el-icon></el-text>
  </el-row>

  <el-row
  v-for="(o,index) in 6" :key="index">
    <div class="article-container">
      <img src="@/pages/main/public/blue.jpg" alt="" class="article-img"/>
      <h1 class="titles">我是文章标题</h1>
    </div>
  </el-row>
<!--  分页-->
  <el-row justify="center">
    <el-col :span="4">
      <el-pagination
          small
          background
          layout="prev, pager, next"
          :total="50"
          class="mt-4"
      />
    </el-col>
  </el-row>
</template>


<style scoped>
@import "@/pages/main/assests/articles.css";

</style>
<script>
</script>