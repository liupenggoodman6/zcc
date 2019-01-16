<template>
	<div class="MainLayout">
		<el-card class="main-el-card">
			<div slot="header" class="clearfix">
				<slot name="searh"></slot>
			</div>
				<slot name="buttons"></slot>
				<br /><br />
				<slot name="table"></slot>
				<br />
				<slot name="Pagination"></slot>
		</el-card>
	</div>
</template>
<script>
	export default{
		name:'MainLayout'
	}
</script>
<style>
.MainLayout{padding: 15px;}
</style>