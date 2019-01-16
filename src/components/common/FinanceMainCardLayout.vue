<template>
	<div class="MainCardLayout">
		<el-card class="main-el-card">
			<slot name="custom"></slot>
		</el-card>
	</div>
</template>
<script>
	export default{
		name:'MainCardLayout'
	}
</script>
<style>
.MainLayout{padding: 15px;}
</style>
