<template>
	<el-row class="HBC-el-row">
		<el-col :span="24">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item v-show="ishavePm" >{{ PMname }}</el-breadcrumb-item>
				<el-breadcrumb-item v-show="ishavecm" >{{ CMname }}</el-breadcrumb-item>
			</el-breadcrumb>
		</el-col>
	</el-row>
</template>
<script>
	export default {
		name: 'Hrrbreadcrumb',
		props:{
			PMname: String,
			CMname: String
		},
		computed: {
			ishavePm: function () {
				if(this.PMname!=""||this.PMname!="undefined"||this.PMname!=null)
					{return true;}
				else
					{return false;}
			},
			ishavecm: function () {
				if(this.CMname!=""||this.CMname!="undefined"||this.CMname!=null)
					{return true;}
				else
					{return false;}
			}
		}
	}
</script>
<style>
.HBC-el-row{ width: 100%; height: 50px;background-color: #FFF; padding: 0 15px;}
.HBC-el-row *{line-height: 50px;}
.el-breadcrumb{width: 100%;}
</style>