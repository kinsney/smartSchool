<style lang="sass" scoped>

$colorBt : rgba(255,255,255,0.1);

* { font-family: 'PingFang SC','微软雅黑' ;}

.v-dataBox
{
	box-sizing:border-box;
	padding:2px;
	border:1px solid $colorBt;

	.in
	{
		font-size:12px; color:white; font-weight:lighter;
		background-color:$colorBt;
		text-align:center;
		height:20px; line-height:20px;
		span{display:inline-block;}
		span+span { margin-left:16px; }
	}
}
</style>
<template>
	<div class="v-dataBox">
		<div class="in" :style="{minWidth:minw+'px'}">
			<span v-for="d in data" v-text="d"></span>
		</div>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
		}},
		props:
		{
			minw: {type: Number, default:100},
			data: {type:Array, default:()=>['null']}
		},
	}
</script>