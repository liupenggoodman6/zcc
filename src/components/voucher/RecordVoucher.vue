<template>
    <div class="page-voucher">
        <div class="wrapper">
            <div class="wrapper-top">
                <div class="left">
                    <el-button type="primary" size="small">保存并新增</el-button>
                    <el-button type="primary" size="small">保存</el-button>
                    <el-dropdown @command="handleCommand">
                    <el-button type="primary" size="small"><span>更多</span></el-button>
                        <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">保存为凭证模板</el-dropdown-item>
                        <el-dropdown-item command="b">从模板生成凭证</el-dropdown-item>
                        <el-dropdown-item command="c">选项</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="right">
                    <el-button type="primary" size="small" icon=""></el-button>
                    <el-button type="primary" size="small" icon="el-icon-caret-left"></el-button>
                    <el-button type="primary" size="small" icon="el-icon-caret-right"></el-button>
                </div>
            </div>
            <div class="voucher-wrap">
                <div class="voucher-top">
                    <span>
                        <span>凭证字</span>
                        <span></span>
                        <span>号</span>
                        <span>日期</span>
                    </span>
                    <div class="tit_wrap">
                        <h1 class="voucher_tit">记账凭证</h1>
                        <span id="vch_year">2019</span>年第<span id="vch_period">1</span>期 
                    </div>
                    <span class="attach_wrap">
                        附单据
                        <input type="text" class="ui-input" id="vch_attach" value="0">
                        张
                    </span>
                </div>
                <el-table :data="tableData" border show-summary style="width: 100%">    
                    <el-table-column width="28" align="center">
                        <template solt-scope="scope">
                            <div>
                                <el-button v-model="add"></el-button>
                                <el-button v-model="del"></el-button>
                            </div>
                        </template>
                    </el-table-column>  
                    <el-table-column prop="zy" label="摘要" width="205" align="center">
                        
                    </el-table-column>
                    <el-table-column prop="kj" label="会计科目" width="205" align="center">
                        
                    </el-table-column>
                    <el-table-column prop="jf" label="借方金额" width="205" align="center">
                        
                    </el-table-column>
                    <el-table-column prop="df" label="贷方金额" width="405" align="center">
                        
                    </el-table-column>
                </el-table>
                <div class="voucher-bottom">

                </div>
            </div>
            <div class="wrapper-bottom">

            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
          msg1:"上一张",
          msg2:"下一张",
        // isCollapse: true,
          options:[],
          value:"",
          holderData:"",
          nowDate:"",
          year:"",
          month:"",
          add:"+",
          del:"-",
          tableData:[
              {
                zy:"",
                kj:"",
                jf:"",
                df:""
              },
              {
                zy:"",
                kj:"",
                jf:"",
                df:""
              },
              {
                zy:"",
                kj:"",
                jf:"",
                df:""
              },
              {
                zy:"",
                kj:"",
                jf:"",
                df:""
              }
          ]
      };
    },
    methods: {
        nowtime(){
            let nowDate = new Date();
            let year = nowDate.getFullYear();
            let month = nowDate.getMonth() + 1;
            let day = nowDate.getDate();
            this.holderData = year+"-"+month+"-"+day 
        },
        handleChange(){

        },
        Addclick(){
            this.init()
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        init(){
            // this.$financeaxios.get("http://192.168.0.110:8765/index").then((res)=>{
            //     console.log(res)
            // })
        },
    },
    created() {
        this.init();
        this.nowtime()
        
    },
  }
</script>
<style scoped>
.wrapper {
    width: 1156px;
    margin-left: 16px;
    margin-top: 16px;
    border: 1px solid #cfcfcf;
    background: #fff;
}
.wrapper-top{
    padding: 0px 45px;
    margin: 15px 0;
    color: #2E3033;
    zoom: 1;
}
</style>
