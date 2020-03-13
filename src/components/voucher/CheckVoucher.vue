<template>
    <div class="page-tab">
        <div class="wrapperNew">
            <div name="main-top-bar" class="mod-toolbar-top">
              <div class="left" style="display: inline-block;">
                <span>查凭证</span>
                <div class="menu-btn" style="display: inline-block;"> 
                  <el-form label-width="65px" :model="formLabelAlign" inline-message size="small" style="display:none">
                    <el-form-item label="会计期间:">
                      <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="凭证字:">
                      <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="凭证号:">
                      <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="状态:">
                      <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="摘要:">
                      <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="科目:">
                      <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="辅助核算:">
                      <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="金额:">
                      <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="制单人:">
                      <el-input ></el-input>
                    </el-form-item>
                    <el-form-item label="币别:">
                      <el-input ></el-input>
                    </el-form-item>
                    <div class="btns">
                        <a href="#" id="conditions-trigger" class="conditions-trigger conditions-expand" tabindex="-1">收起更多<b></b></a>
                        <a class="ui-btn ui-btn-sp" id="filter-submit" href="javascript:;">查询</a>
                        <a class="ui-btn" id="filter-reset" href="#" tabindex="-1" style="display: inline;">重置</a>
                    </div>
                  </el-form>
                </div>
                <el-button type="primary" size="small" icon="el-icon-refresh"></el-button>
              </div>
              <div class="right" style="display: inline-block;">
                <el-button type="primary" size="small">新增</el-button>
                <el-button type="primary" size="small">打印</el-button>
                <el-button type="primary" size="small">导出</el-button>
                <el-button type="primary" size="small">审核</el-button>
                <el-dropdown @command="handleCommand">
                  <el-button type="primary" size="small"><span>更多</span></el-button>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="a">反审核</el-dropdown-item>
                      <el-dropdown-item command="b">整理</el-dropdown-item>
                      <el-dropdown-item command="c">插入</el-dropdown-item>
                      <el-dropdown-item command="d">导入</el-dropdown-item>
                      <el-dropdown-item command="e">批量删除</el-dropdown-item>
                      <el-dropdown-item command="d">列表打印</el-dropdown-item>
                      <el-dropdown-item command="e">按导入模板格式导出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column type="selection" width="30"></el-table-column>            
                <el-table-column prop="code" label="日期" width="85" align="center">
                    <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
                </el-table-column>
                <el-table-column prop="name" label="凭证字号" width="85" align="center"></el-table-column>
                <el-table-column prop="balanceDirection" label="摘要" width="377" align="center"></el-table-column>
                <el-table-column prop="auxiliaryAccounting" label="科目" width="563" align="center"></el-table-column>
                <el-table-column prop="auxiliaryAccounting" label="借方金额" width="105" align="center"></el-table-column>
                <el-table-column prop="auxiliaryAccounting" label="贷方金额" width="105" align="center"></el-table-column>
                <el-table-column prop="auxiliaryAccounting" label="原单据编号" width="125" align="center"></el-table-column>
                <el-table-column prop="auxiliaryAccounting" label="附件" width="55" align="center"></el-table-column>
                <el-table-column prop="auxiliaryAccounting" label="制单人" width="85" icon="icon-attachment" align="center"></el-table-column>
                <el-table-column prop="auxiliaryAccounting" label="审核人" width="85" align="center"></el-table-column>
                <el-table-column label="操作" width="55" align="center">
                    <template slot-scope="scope">
                        <el-button icon="el-icon-plus" @click.stop="Rowview(scope.row)" type="text" size="small">修改</el-button>
                        <el-button icon="el-icon-edit" @click.stop="RowEdit(scope.row)" type="text"  size="small">删除</el-button>
                        <el-button icon="el-icon-delete" @click.stop="Rowdelete(scope.row)" type="text"  size="small">冲销</el-button>
                    </template>
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
      height:34px;
        padding: 10px 16px;
        margin: 16px 0;
        color: #2E3033;
        zoom: 1;
    }
</style>