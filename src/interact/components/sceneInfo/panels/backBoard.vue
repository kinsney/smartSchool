<style lang="sass" scoped>
* { font-family: 'PingFang SC','微软雅黑' ;}
.v-panelBoard
{
	$pad:20px;

	box-sizing:border-box;
	border-radius:3px;
	padding:$pad;
	overflow:hidden;
	position:absolute; left:50%; top:50px; //165
	z-index:2000;
	background-color:rgba(0,0,0,0.8);
	color:white; font-weight:lighter;
	.close{position:absolute;top:$pad;right:$pad; img{display:block; height:20px}}
	.panelName { height:24px;line-height:24px; font-size:20px; }
}
</style>

<template>
	<div class="v-panelBoard" :style="{width:size.w+'px',height:size.h+'px',marginLeft:(-size.w/2)+'px'}">
		<div class="close"><img src="./img/close.png" /></div>
		<h2 class="panelName" v-text="name"></h2>
		<line margin="10px auto 30px"></line>

		<slot></slot>
	</div>
</template>

<script>
	module.exports =
	{
		props:
		{
			size:{type:Object, default:()=>{return {w:800,h:500};}},
			name:{type:String, default:"管理面板"}
		},
		components:
		{
			line:require('./line.vue')
		}
	}
</script>