<template>
	<el-container>
		<el-aside width="108px">
			<finance-left></finance-left>
		</el-aside>
		<el-container>
			<el-header class="">
				<finance-head></finance-head>
			</el-header>
			<el-main>
				<div name="tabs-links" class="tabs-links">
					<e-tag :key="info" hit=true closable :disable-transitions="false">shouye</e-tag>
					<el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)"> {{tag}} </el-tag>
				</div>
				<slot name="main-top-bar"></slot>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>
<script>
	import FinanceLeft from '@/components/Left.vue';
	import FinanceHead from '@/components/Head.vue';

	export default{
		name:'finance',
		data:function(){
			return{
				editableTabsValue2: '2',
				editableTabs2: [{
				title: 'Tab 1',
				name: '1',
				content: 'Tab 1 content'
				}, {
				title: 'Tab 2',
				name: '2',
				content: 'Tab 2 content'
				}],
				tabIndex: 2,
				dynamicTags:[]
			}
		},
		components:{
			FinanceLeft,
			FinanceHead
		},
		methods:{
			removeTab(targetName) {
				let tabs = this.editableTabs2;
				let activeName = this.editableTabsValue2;
				if (activeName === targetName) {
					tabs.forEach((tab, index) => {
						if (tab.name === targetName) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if (nextTab) {
								activeName = nextTab.name;
							}
						}
					});
				}
			}
		}
	}
</script>
<style>
.el-container{
	width:100%;
	height: 100%;}
.el-scrollbar__wrap{overflow-x:hidden!important;}
.el-main{
	    background-color: #f0f2f5;
    overflow: hidden;
}
.tabs-links{
	height: 34px;
	cursor: default;
	border-top: 1px solid #e6e6e6;
	border-bottom: 1px solid #e6e6e6;
	background-color: #e2e6ee;
}
.sidebar {
    width: 108px;
	height:100%;
    background-color: #fafcff;
    float: left;
    box-shadow: 1px 0 0 0 #e6e6e6;
    background-color: #0089bd;
}
</style>