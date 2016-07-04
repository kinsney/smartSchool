<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	
	.v-panelLine
	{
		position:relative; height:1px;
		background-color: #278d4c; box-sizing:border-box;
		span 
		{ 
			position:absolute; height:3px; width:3px;  
			border-radius: 4px;
			background-color: #278d4c;
		}
		.dot-l { left:0; top:-1px; }
		.dot-r { right:0; top:-1px; }
	}
</style>

<template>
	<div class="v-panelLine" :style="{margin:margin,width:width}">
		<span class="dot-l"></span><span class="dot-r"></span>
	</div>
</template>

<script>
	module.exports =
	{
		props:
		{
			margin: {type:String, default:"10px auto"},
			width: {type:String, default:"100%"},
		}
	}
</script>