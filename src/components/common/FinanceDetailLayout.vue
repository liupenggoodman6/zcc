<template>
	<div class="detailLayout">
		<el-card class="main-el-card">
			<div slot="header" >
				<slot name="head"></slot>
			</div>
			<slot name="Form"></slot>
			<br />
			<div class="buttons">
				<slot name="buttons" ></slot>
			</div>
		</el-card>
	</div>
</template>
<script>
	export default{
		name:'detailLayout'
	}
</script>
<style>
.detailLayout{padding: 15px;}
.detailLayout .buttons{border-top:1px solid #ebeef5; padding: 18px 20px;}

</style>