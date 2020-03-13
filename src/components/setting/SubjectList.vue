<template>
    <div class="page-tab">
        
        <div class="wrapperNew">
            <div name="main-top-bar" class="mod-toolbar-top">
                <div class="left">
                    <span>类别</span>
                    
                </div>
                <div class="right" style="display: inline-block;">
                    <el-button type="primary" size="small">新增</el-button>
                    <el-button type="primary" size="small">导入</el-button>
                    <el-button type="primary" size="small">导出</el-button>
                    <el-button type="primary" size="small">删除</el-button>
                </div>
            </div>
            <el-table :data="tableData3" height="250" border style="width: 100%">
                <el-table-column type="selection" width="30"></el-table-column>
                <el-table-column label="操作" width="120" align="center">
                    <template slot-scope="scope">
                        <el-button icon="el-icon-plus" @click.stop="Rowview(scope.row)" type="text" size="small"></el-button>
                        <el-button icon="el-icon-edit" @click.stop="RowEdit(scope.row)" type="text"  size="small"></el-button>
                        <el-button icon="el-icon-delete" @click.stop="Rowdelete(scope.row)" type="text"  size="small"></el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="code" label="编码" width="120" align="center">
                    <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
                </el-table-column>
                <el-table-column prop="name" label="名称" width="350" align="center"></el-table-column>
                <el-table-column prop="balanceDirection" label="余额方向" width="80" align="center"></el-table-column>
                <el-table-column prop="auxiliaryAccounting" label="辅助核算" width="150" align="center"></el-table-column>
                <el-table-column prop="auxiliaryAccounting" label="外币" width="150" align="center"></el-table-column>
                <el-table-column label="状态" width="70" align="center" >
                    <template slot-scope="scope">
                        <el-tag  :type="scope.row.status?'primary':'danger'" disable-transitions>{{scope.row.status?'启用':'禁用'}}</el-tag>
                    </template>
                </el-table-column>
            </el-table>
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
                pagesize:"10000",
            },
                dynamicTags:[]
        }
    },
    methods: {
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