<template>

  <el-table :data="recordsData" border
            style="width: 100%"
            table-layout="fixed"
  >
    <el-table-column prop="resource_name" label="水资源名称"/>
    <el-table-column prop="WQI" label="水质综合指数"/>
    <el-table-column prop="date" label="日期"/>
    <el-table-column prop="comment" label="评价"/>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <!--        可以通过row属性,获得一行的数据-->
        <el-button link type="primary" size="small"
                   @click.prevent="dialogTitle=scope.row.resource_name ;DetailsDialog=true">具体数据
        </el-button>
        <el-button link type="primary" size="small" @click.prevent="index=scope.$index;ConfirmDialog=true;">删除</el-button>
      </template>
    </el-table-column>
  </el-table>


  <!--详细信息-->
  <!--        在argusRow设置高亮,也就是row-class-name设置-->
  <el-dialog v-model="DetailsDialog" :title="dialogTitle">
    <el-table
        :data="argusData"
        style="width: 100%"
        :row-class-name="argusRow"
        table-layout="fixed"
        border
        size="large"
    >
      <el-table-column prop="argus" label="参数"/>
      <el-table-column prop="detection" label="测量值"/>
      <el-table-column prop="reference" label="参考值"/>
      <el-table-column prop="mistake" label="误差"/>
    </el-table>
  </el-dialog>

<!--确认框-->
  <el-dialog
      v-model="ConfirmDialog"
      title="Tips"
      width="30%"
  >
    <span>确定删除吗?</span>
    <template #footer>
      <span class="ConfirmDialog-footer">
        <el-button @click="ConfirmDialog = false">取消</el-button>
        <el-button type="primary" @click="ConfirmDialog = false; deleteRow(index)">确定</el-button>
      </span>
    </template>
  </el-dialog>


</template>


<script lang="ts" setup>
import {ref} from 'vue'

const DetailsDialog = ref(false);
const ConfirmDialog = ref(false)
let index=0;
let dialogTitle = '';





interface Records {
  resource_name: string
  WQI: number
  comment: String
  date: Date
}

const recordsData = ref([
  {
    resource_name: '农夫山泉',
    WQI: 98,
    comment: "优秀",
    date: new Date().toLocaleDateString(),
  },
  {
    resource_name: '怡宝',
    WQI: 52,
    comment: "垃圾",
    date: new Date().toLocaleDateString(),
  },
  {
    resource_name: '百岁山',
    WQI: 25,
    comment: "垃圾中的垃圾",
    date: new Date().toLocaleDateString(),
  },
  {
    resource_name: '康师傅',
    WQI: 78,
    comment: "还行",
    date: new Date().toLocaleDateString(),
  },
  {
    resource_name: '健力宝',
    WQI: 85,
    comment: "优良",
    date: new Date().toLocaleDateString(),
  },
])

const deleteRow = (index: number) => {
  recordsData.value.splice(index, 1);
}




interface rowData {
  argus: string
  detection: number
  reference: number
  mistake: number
}

const argusRow = ({
                    row,
                    rowIndex,
                  }: {
  row: rowData
  rowIndex: number
}) => {
  //可以通过row对象访问到列中的每个属性值
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

const argusData: rowData[] = [
  {
    argus: "浊度/%",
    detection: 1,
    reference: 0.1,
    mistake: 0.99,
  },
  {
    argus: "TDS/%",
    detection: 1,
    reference: 0.1,
    mistake: 0.99,
  },
  {
    argus: "溶解度/%",
    detection: 1,
    reference: 0.1,
    mistake: 0.99,
  },
  {
    argus: "pH/%",
    detection: 1,
    reference: 0.1,
    mistake: 0.99,
  },
]








</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}


</style>
