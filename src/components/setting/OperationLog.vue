<template>
    <div class="page-tab">  
        <div class="wrapperNew">
            <div name="main-top-bar" class="mod-toolbar-top">
                <div class="left">

                </div>
                <div class="right" style="display: inline-block;">
                    <el-button type="primary" size="small">导入模板</el-button>
                </div>
            </div>
            <el-table :data="tableData" border show-summary style="width: 100%">      
                <el-table-column prop="code" label="日期" width="205" align="center"></el-table-column>
                <el-table-column prop="balanceDirection" label="用户名" width="205" align="center"></el-table-column>
                <el-table-column prop="auxiliaryAccounting" label="姓名" width="205" align="center"></el-table-column>
                <el-table-column prop="auxiliaryAccounting" label="操作类型" width="405" align="center"></el-table-column>
                <el-table-column label="日志" width="155" align="center"></el-table-column>
            </el-table>
            <el-pagination background  @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="form.currentPage" :page-sizes="[100,  300, 500]" :page-size="form.pagesize" layout="total, sizes, prev, pager, next" :total="form.total"></el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                typeList:[],
                status:false,
                pageNum:"1",
                pagesize:10000,
                total:100,
                currentPage:1,
            }
        }
    },
    methods: {
      handleCurrentChange(){

      },
      handleSizeChange(){

      },
      handleSelectionChange(){

      },
      handleClick(){

      },
      init(){
          console.log(this.$api.setting.getSubjiectType)
          this.$financeaxios.get(this.$api.setting.getSubjiectType,{

          }).then((res)=>{
              console.log(res)
              this.typeList = res.data;
          }).catch((error)=>{
              console.log(error);
          })
      }
    },
    created(){
        this.init()
    }
}
</script>
<style>
    
    .mod-toolbar-top {
        padding: 10px 16px;
        margin: 16px 0;
        color: #2E3033;
        zoom: 1;
    }
</style>
