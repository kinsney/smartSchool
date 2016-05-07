<style lang="sass" scoped>
$colorLt : #6cf09c;
$colorBg : rgba(32,81,45,0.9);
$colorBt : rgba(255,255,255,0.1);
$colorBorder : #278d4c;
$titleL : 14px;
$titleS : 12px;

* { font-family: 'PingFang SC','微软雅黑' ;}
.infoSum-c
{
	position:relative;
	padding: 10px; margin: 20px auto;
	width:460px;
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
		height: 45px;
		text-align:center;

		&>* { height:100%; display:inline-block; vertical-align:middle; margin:0 5px;}
		&>img { height:30px;}

		.vLine {height:100%; width:1px; background-color: $colorLt;}
		
		.vlist
		{
			color:white; font-weight: lighter;
			h3{ font-size:14px; margin-bottom:5px;}
			.infoBox
			{
				box-sizing:border-box;
				padding:2px;
				border:1px solid $colorBt;

				.in
				{
					font-size:12px;
					background-color:$colorBt;
					text-align:center;
					min-width:80px; height:20px; line-height:20px;
				}
			}
		}
	}
}
</style>

<template>
	<div class="infoSum-c">
		<span class="conor conor1"><img src="./img/conor1.png" /></span>
		<span class="conor conor2"><img src="./img/conor2.png" /></span>
		<span class="conor conor3"><img src="./img/conor3.png" /></span>
		<span class="conor conor4"><img src="./img/conor4.png" /></span>

		<div class="cont">
			<img src="./img/temp.png" />
			<div class="vlist">
				<h3>大楼均温</h3>
				<div class="infoBox">
					<div class="in"><span v-text="temp"></span></div>
				</div>
			</div>
			<span class="vLine"></span>
			<img src="./img/bigWindMachine.png" />
			<div class="vlist">
				<h3>大楼新风机</h3>
				<div class="infoBox">
					<div class="in"><span v-text="wind"></span></div>
				</div>
			</div>
			<span class="vLine"></span>
			<img src="./img/centAircon.png" />
			<div class="vlist">
				<h3>大楼中央空调</h3>
				<div class="infoBox">
					<div class="in"><span v-text="aircon"></span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
			temp:"23°C 舒适",
			wind:"654 m³",
			aircon:"1293 kj"
		}},
		vuex:
		{
			getters:
			{
				
			}
		}
	}
</script>