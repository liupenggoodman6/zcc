<template>
  <div id="mainleft" class="sidebar" style="width:108px">
    <div class="logo">{{sysytemname}}</div>  
    <el-menu :default-active="this.$router.path" router mode="horizontal" class="el-menu-vertical-demo" popper-append-to-body=true @open="handleOpen" @close="handleClose" >
      <el-submenu index="/voucher/" >
        <template slot="title">
          <span slot="title">凭证</span>
        </template>
        <el-menu-item-group style="float:left">
            <el-menu-item index="/voucher/record">录凭证</el-menu-item>
            <el-menu-item index="/voucher/check">查凭证</el-menu-item>
            <el-menu-item index="/voucher/vouchersum">凭证汇总</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group style="float:left">
            <el-menu-item index="/voucher/original">原始凭证</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/ledger/">
          <template slot="title">账簿</template>
          <el-menu-item-group style="float:left">              
              <el-menu-item index="/ledger/subsidiaryledger">明细账</el-menu-item>
              <el-menu-item index="/ledger/generalledger">总账</el-menu-item>
              <el-menu-item index="/ledger/subjectbalance">科目余额表</el-menu-item>
              <el-menu-item index="/ledger/multicolumn">多栏账</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group style="float:left">
              <el-menu-item index="/ledger/projectbalance">核算项目余额表</el-menu-item>
              <el-menu-item index="/ledger/itemledger">核算项目明细账</el-menu-item>
              <el-menu-item index="/ledger/portfoliotable">核算项目组合表</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/report/">
          <template slot="title">报表</template>
          <el-menu-item-group style="float:left">
              <el-menu-item index="/report/balancesheet">资产负债表</el-menu-item>
              <el-menu-item index="/report/incomecoststatement">收入费用表</el-menu-item>
              <el-menu-item index="/report/statementchangesassets">净资产变动表</el-menu-item>
              <el-menu-item index="/report/statementcashFlow">现金流量表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group style="float:left">
              <el-menu-item index="/report/budgetandexpenditure">预算收入支出表</el-menu-item>
              <el-menu-item index="/report/statementchangesbudget">预算结转结余变动表</el-menu-item>
              <el-menu-item index="/report/budgetIncomeallocation">财政拨款预算收入支出表</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/settleAccounts">结账</el-menu-item>
      <el-submenu index="/setting/">
          <template slot="title">设置</template>
          <el-menu-item-group style="float:left">
              <el-menu-item index="/setting/subjectlist">科目</el-menu-item>
              <el-menu-item index="/setting/voucherword">凭证字</el-menu-item>
              <el-menu-item index="/setting/currency">币别</el-menu-item>
              <el-menu-item index="/setting/assisting">辅助核算</el-menu-item>
              <el-menu-item index="/setting/initialbalance">财务初始余额</el-menu-item>
              <el-menu-item index="/setting/bscategory">业务分类</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group style="float:left">
              <el-menu-item index="/setting/parameter">系统参数</el-menu-item>
              <el-menu-item index="/setting/authority">权限设置</el-menu-item>
              <el-menu-item index="/setting/backup">备份与恢复</el-menu-item>
              <el-menu-item index="/setting/templateList">凭证模板</el-menu-item>
              <el-menu-item index="/setting/printtemplates">套打模板</el-menu-item>
              <el-menu-item index="/setting/operationLog">操作日志</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "main_left",
  data: function() {
    return {
      currentPath: this.$route.path,
      sysytemname: "农科院财务云",
      collapse:false,
      tabPosition:"left"
    };
  },
  methods: {
    initdata(){

    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    naventer(){
      this.menuenter()
    },
    menuenter(){
      console.log(1)
    }
  },
  created: function() {
    this.initdata();
  },
  computed: {
    sysytemnamec: function() {
      var restr = "";
      if (!this.$store.state.Collapse) {
        restr = this.sysytemname;
      }
      return restr;
    }
  }
};
</script>
<style>
.sidebar{
  position: absolute;
  left: 0;
  top: 0;
}
.el-menu {
  border-right: 0 solid #20222a !important;
  position: relative;
}
.logo {
  height: 60px;
  width: 100%;
  line-height: 60px;
  font-size: 16px;
  color: #fff;
  text-align: center;
}

</style>
