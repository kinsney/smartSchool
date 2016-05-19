<style lang="sass" scoped>

$colorBg : rgba(32,81,45,0.9);
$colorBorder : #278d4c;

* { font-family: 'PingFang SC','微软雅黑' ;}
.v-infoBox
{
	position:relative;
	padding: 10px; margin: 20px auto;
	background-color: $colorBg;
	border:1px solid $colorBorder;
	box-shadow: 0 0 15px rgba(0,0,0,0.4);
	.conor
	{
		display:block;
		position:absolute; z-index:10;
		img{diaplay:block; height:15px;}

		&.conor1{ left:-4px; top:-4px; }
		&.conor2{ right:-4px; top:-4px; }
		&.conor3{ right:-4px; bottom:-6px; }
		&.conor4{ left:-4px; bottom:-6px; }
	}
}


</style>
<template>
	<div class="v-infoBox" :style="{width:w+'px'}" @mousedown.stop="">
		<span class="conor conor1"><img src="./img/conor1.png" /></span>
		<span class="conor conor2"><img src="./img/conor2.png" /></span>
		<span class="conor conor3"><img src="./img/conor3.png" /></span>
		<span class="conor conor4"><img src="./img/conor4.png" /></span>
		
		<slot></slot>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
		}},
		props:
		{
			w: {type: Number, default:600},
		},
	}
</script>