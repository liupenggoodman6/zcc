<template>
    <div class="page-tab">
        
        <div class="wrapperNew">
            <div name="main-top-bar" class="mod-toolbar-top">
                <div class="left" style="display: inline-block;">
                    <span>类别</span>
                    <el-button type="primary" size="small" icon="el-icon-refresh"></el-button>
                    <span>币别</span>
                    <span>汇率</span>
                    <el-checkbox>隐藏数量</el-checkbox>
                </div>
                <div class="right" style="display: inline-block;">
                    <el-button type="primary" size="small">保存</el-button>
                    <el-button type="primary" size="small">试算平衡</el-button>
                    <el-button type="primary" size="small">导出</el-button>
                </div>
            </div>
            <el-table :data="tableData" border show-summary style="width: 100%">          
                <el-table-column prop="code" label="科目编码" width="155" align="center"></el-table-column>
                <el-table-column prop="balanceDirection" label="科目名称" width="355" align="center"></el-table-column>
                <el-table-column prop="auxiliaryAccounting" label="方向" width="85" align="center"></el-table-column>
                <el-table-column prop="balanceDirection" label="期初余额" width="310" align="center">
                    <el-table-column prop="auxiliaryAccounting" label="数量" width="155" align="center"></el-table-column>
                    <el-table-column prop="auxiliaryAccounting" label="金额" width="155" align="center"></el-table-column>
                </el-table-column>
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