<template>
	<el-container>
		<el-scrollbar style="height: 100%;background-color: #20222a;min-width: 220px;" >
			<el-aside width="220px">
				<Finance-left />
			</el-aside>
		</el-scrollbar>
		<el-container>
			<el-header><Finance-head /></el-header>
			<el-main>
				<router-view/>	
			</el-main>
		</el-container>
	</el-container>
</template>
<script>
	import FinanceLeft from './Left.vue';
	import FinanceHead from './Head.vue';

	export default{
		name:'console',
		data:function(){
			return{
			}
		},
		components:{
			FinanceLeft,
			FinanceHead
		}
	}
</script>
<style>
.el-container{height: 100%;}
.el-scrollbar__wrap{overflow-x:hidden!important;}
</style>