<template>
  <el-row>
    <el-col
        v-for="(o, index) in 12"
        :key="o"
        :span="5"
        :offset="computedoffset(index)"
    >
      <el-card class="water_card" shadow="hover">
        <img loading="lazy"
            src="../public/百岁山.jpg"
            class="water_card_image"
            alt="百岁山"/>
        <div class="water_card_info">
          <span>{{ water_name }}</span>
          <p>市场价:{{ water_price }}元/瓶 </p>
          <el-row class="water_card_bottom">
            <el-col :span="6" :offset="18">
              <el-button text class="water_card_button" @click="DetailWaterInfo = true">了解更多信息<el-icon><arrow-right-bold/></el-icon></el-button>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-col>

  </el-row>



<!--    分页-->
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

  <!--详细信息-->
  <el-dialog v-model="DetailWaterInfo" title="详细信息">
    <el-table :data="waterInfo">
<!--      浊度 TDS PH 电导率-->
      <el-table-column property="turbidity" label="浊度" width="150" />
      <el-table-column property="tDS" label="TDS" width="200" />
      <el-table-column property="pH" label="PH" />
      <el-table-column property="conductivity" label="电导率"/>
    </el-table>
  </el-dialog>

</template>
<script lang="ts" setup>
import {ArrowRightBold} from "@element-plus/icons-vue";
import {ref} from "vue"

const DetailWaterInfo=ref(false)
const water_name="百岁山"
const water_price= 4

const waterInfo= [
  {
    // 浊度
    turbidity: '浊度',
    // TDS
    tDS: 'TDS',
    // PH
    pH:"PH",
    // 电导率
    conductivity:"电导率",
  },
]

function computedoffset(index){
  return (index%4===0 ? 0 : 1);
}


</script>

<style scoped>

.water_card {
  margin-bottom: 30px;
  width: 350px;
  height: 486px;
  overflow: hidden;
}

.water_card:hover .water_card_image{
  transform: scale(1.1);
}

.water_card_bottom {
  margin-top: 25px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.water_card_image {
  width: 100%;
  display: block;
  transition: all 0.5s;
}

.water_card_button {
  margin-top: 25px;
  padding: 0;
  min-height: auto;
}

.water_card .water_card_info {
  margin-top: 20px;
  padding: 14px;
  text-align: center;
}

</style>