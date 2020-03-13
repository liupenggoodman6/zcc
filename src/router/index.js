import Vue from 'vue'
import Router from 'vue-router'
//main
import Index from '../components/Index.vue';
import MainPage from '../components/MainPage.vue';
import Login from '../components/Login.vue';

//voucher
import RecordVoucher from '../components/voucher/RecordVoucher.vue';  //录凭证
import CheckVoucher from '../components/voucher/CheckVoucher.vue';  //查凭证
import VoucherSum from '../components/voucher/VoucherSum.vue';  //凭证汇总
import OriginalVoucher from '../components/voucher/OriginalVoucher.vue';  //原始凭证

//ledger
import SubsidiaryLedger from '../components/accountBook/subsidiaryLedger.vue';  //明细账
import GeneralLedger from '../components/accountBook/generalLedger.vue';  //总账
import SubjectBalance from '../components/accountBook/subjectBalance.vue';  //科目余额表
import MultiColumnAccount from '../components/accountBook/multiColumnAccount.vue';  //多栏账
import Accountingprojectbalance from '../components/accountBook/AccountingProjectBalance.vue';  //核算项目余额表
import AccountingItemLedger from '../components/accountBook/AccountingItemLedger.vue';  //核算项目明细表
import AccountingPortfolioTable from '../components/accountBook/AccountingPortfolioTable.vue';  //核算项目组合表

//reportForm

import BalanceSheet from '../components/reportForm/BalanceSheet.vue';  //资产负债表
import IncomeCostStatement from '../components/reportForm/IncomeCostStatement.vue';  //收入费用表
import StatementChangesAssets from '../components/reportForm/StatementChangesAssets.vue';  //净资产变动表
import StatementCashFlow from '../components/reportForm/StatementCashFlow.vue';  //现金流量表
import BudgetAndExpenditure from '../components/reportForm/BudgetAndExpenditure.vue';  //预算收入支出表
import StatementChangeSbudget from '../components/reportForm/StatementChangeSbudget.vue'; //预算结转结余变动表
import BudgetIncomeAllocation from '../components/reportForm/BudgetIncomeAllocation.vue';  //财政拨款预算收入支出表

//settleAccounts

import SettleAccounts from '../components/settleAccounts/SettleAccounts.vue';

//setting

import SubjectList from '../components/setting/SubjectList.vue';  //科目
import VoucherWord from '../components/setting/VoucherWord.vue'; //凭证字
import Currency from '../components/setting/Currency.vue';  //币别
import Assisting from '../components/setting/Assisting.vue';  //辅助核算
import InitialBalance from '../components/setting/InitialBalance.vue';  //财务初始余额
import BSCategory from '../components/setting/BSCategory.vue';  //业务分类
import Parameter from '../components/setting/Parameter.vue';    //系统参数
import Authority from '../components/setting/Authority.vue';  //权限设置
import Backup from '../components/setting/Backup.vue';  //备份与恢复
import TemplateList from '../components/setting/TemplateList.vue';  //凭证模板
import PrintTemplates from '../components/setting/PrintTemplates.vue';  //套打模板
import OperationLog from '../components/setting/OperationLog.vue'//操作日志

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'finance',
      component: Index
    },
    {
      path:'/login',
      name: 'R_login',
      component: Login
    },
    {
      path:'/index',
      component: Index,
      children:[
        {
          path:'',
          component:MainPage
        }
      ]
    },
    //-------------voucher
    {
      path:'/voucher/',
      name:'voucher',
      component:Index,
      children:[
        {
          path:'record',
          name:'record_voucher',
          component:RecordVoucher
        },
        {
          path:'check',
          name:'check_voucher',
          component:CheckVoucher
        },
        {
          path:'vouchersum',
          name:'sum_voucher',
          component:VoucherSum
        },
        {
          path:'original',
          name:'original_voucher',
          component:OriginalVoucher
        },
      ]
    },
    //----------------ledger
    {
      path:'/ledger/',
      name:'ledger',
      component:Index,
      children:[
        {
          path:'subsidiaryledger',
          name:'subsidiaryledger',
          component:SubsidiaryLedger
        },
        {
          path:'generalledger',
          name:'generalledger',
          component:GeneralLedger
        },
        {
          path:'subjectbalance',
          name:'subjectbalance',
          component:SubjectBalance
        },
        {
          path:'multicolumn',
          name:'multiColumna',
          component:MultiColumnAccount
        },
        {
          path:'projectbalance',
          name:'accountingprojectbalance',
          component:Accountingprojectbalance
        },
        {
          path:'itemledger',
          name:'accountingitemledger',
          component:AccountingItemLedger
        },
        {
          path:'portfoliotable',
          name:'accountingportfoliotable',
          component:AccountingPortfolioTable
        },
      ]
    },
    //----------------report
    {
      path:'/report/',
      name:'report',
      component:Index,
      children:[
        {
          path:'balancesheet',
          name:'balancesheet',
          component:BalanceSheet
        },
        {
          path:'incomecoststatement',
          name:'incomecoststatement',
          component:IncomeCostStatement
        },
        {
          path:'statementchangesassets',
          name:'statementchangesassets',
          component:StatementChangesAssets
        },
        {
          path:'statementcashFlow',
          name:'statementcashFlow',
          component:StatementCashFlow
        },
        {
          path:'budgetandexpenditure',
          name:'budgetandexpenditure',
          component:BudgetAndExpenditure
        },
        {
          path:'statementchangesbudget',
          name:'statementchangesbudget',
          component:StatementChangeSbudget
        },
        {
          path:'budgetIncomeallocation',
          name:'budgetIncomeallocation',
          component:BudgetIncomeAllocation
        },
      ]
    },
    //--------------settleAccounts
    {
      path:'/settleAccounts',
      name:'settleAccounts',
      component:SettleAccounts
    },
    //-------------setting
    {
      path:'/setting/',
      name:'setting',
      component:Index,
      children:[
        {
          path:'subjectlist',
          name:'subjectlist',
          component:SubjectList
        },
        {
          path:'voucherword',
          name:'voucherword',
          component:VoucherWord
        },
        {
          path:'currency',
          name:'currency',
          component:Currency
        },
        {
          path:'assisting',
          name:'assisting',
          component:Assisting
        },
        {
          path:'initialbalance',
          name:'initialbalance',
          component:InitialBalance
        },
        {
          path:'bscategory',
          name:'bscategory',
          component:BSCategory
        },
        {
          path:'parameter',
          name:'parameter',
          component:Parameter
        },
        {
          path:'templateList',
          name:'templateList',
          component:TemplateList
        },
        {
          path:'authority',
          name:'authority',
          component:Authority
        },
        {
          path:'backup',
          name:'backup',
          component:Backup
        },
        {
          path:'printtemplates',
          name:'printtemplates',
          component:PrintTemplates
        },
        {
          path:'operationLog',
          name:'operationLog',
          component:OperationLog
        },
      ]
    }
  ]
})
