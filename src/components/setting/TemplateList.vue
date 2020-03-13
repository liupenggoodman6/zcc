<template>
    <div class="page-tab">
        
        <div class="wrapperNew">
            <div name="main-top-bar" class="mod-toolbar-top">
                <div class="left" style="display: inline-block;">
                    <span>凭证模板</span>
                </div>
            </div>
            <el-table :data="tableData" border show-summary style="width: 100%">   
                <el-table-column type="selection" width="30"></el-table-column>
                <el-table-column label="操作" width="120" align="center">
                    <template slot-scope="scope">
                        <el-button icon="el-icon-plus" @click.stop="Rowview(scope.row)" type="text" size="small"></el-button>
                        <el-button icon="el-icon-edit" @click.stop="RowEdit(scope.row)" type="text"  size="small"></el-button>
                        <el-button icon="el-icon-delete" @click.stop="Rowdelete(scope.row)" type="text"  size="small"></el-button>
                    </template>
                </el-table-column>    
                <el-table-column prop="code" label="类别" width="105" align="center"></el-table-column>
                <el-table-column prop="balanceDirection" label="名称" width="333" align="center"></el-table-column>
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