<style lang="sass" scoped>
$colorLt : #6cf09c;
$colorBg : rgba(32,81,45,0.9);
$colorBt : rgba(255,255,255,0.1);
$colorBorder : #278d4c;
$titleL : 14px;
$titleS : 12px;

* { font-family: 'PingFang SC','微软雅黑' ;}
.infoSum-b
{
	position:relative;
	padding: 10px; margin: 20px auto;
	width:540px;
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

	.cont
	{
		position:relative; 
		height:26px;
		text-align:center;

		&>* { height:100%; display:inline-block; vertical-align:middle; margin:0 5px;}
		&>img { height:20px;}

		.vLine {height:100%; width:1px; background-color: $colorLt;}

		.infoBox
		{
			box-sizing:border-box;
			padding:2px;
			border:1px solid $colorBt;

			.in
			{
				font-size:12px; color:white; font-weight:lighter;
				background-color:$colorBt;
				text-align:center;
				padding:0 10px;
				min-width:80px; height:20px; line-height:20px;
			}
		}
	}
}
</style>

<template>
	<div class="infoSum-b">
		<span class="conor conor1"><img src="./img/conor1.png" /></span>
		<span class="conor conor2"><img src="./img/conor2.png" /></span>
		<span class="conor conor3"><img src="./img/conor3.png" /></span>
		<span class="conor conor4"><img src="./img/conor4.png" /></span>

		<div class="cont">
			<img src="./img/camera.png" />
			<div class="infoBox">
				<div class="in"><span v-text="working"></span></div>
			</div>
			<div class="infoBox">
				<div class="in"><span v-text="breakdown"></span></div>
			</div>
			<span class="vLine"></span>
			<img src="./img/warn.png" />
			<div class="infoBox">
				<div class="in"><span v-text="warning"></span></div>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
			working:"10个大楼摄像头正在工作中",
			breakdown:"2个摄像头故障",
			warning:"5条待处理大楼警报"
		}},
		vuex:
		{
			getters:
			{
				
			}
		}
	}
</script>