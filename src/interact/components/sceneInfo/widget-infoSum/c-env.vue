<style lang="sass" scoped>
$colorLt : #6cf09c;
$colorBg : rgba(32,81,45,0.9);
$colorBt : rgba(255,255,255,0.1);
$colorBorder : #278d4c;
$titleL : 14px;
$titleS : 12px;

* { font-family: 'PingFang SC','微软雅黑' ;}
.infoSum-a
{
	position:relative;
	padding: 10px; margin: 20px auto;
	width:560px;
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
		
		position:relative; height:57px;
		span
		{
			color:white;
			font-size:12px;
			font-weight:lighter;
		}
		.v1,.v2,.v3{ float:left; margin:0 15px; height:100%}
		.vLine { display:block; float:left; height:100%; width:1px; background-color: $colorLt;}

		.v1
		{
			img { display:inline-block; height:50px; margin:5px 5px 0 10px;}
			.weather
			{
				display:inline-block;vertical-align:top;
				padding-top:4px;
				.u,.d 
				{ 
					text-align:center;
					height:26px;line-height:26px;
				}
				.u span{font-size:14px;}
			}
		}
		.infoBox
		{
			display:inline-block; vertical-align:middle;
			box-sizing:border-box;
			padding:2px;
			border:1px solid $colorBt;

			.in
			{
				background-color:$colorBt;
				text-align:center;
				min-width:100px; height:20px; line-height:20px;
			}
		}
		.v2,.v3
		{
			.d { margin-top:5px; }
			.u,.d 
			{ 
				&>span { display:inline-block; min-width:40px; vertical-align:middle;}
			}
		}
	}
}
</style>

<template>
	<div class="infoSum-a">
		<span class="conor conor1"><img src="./img/conor1.png" /></span>
		<span class="conor conor2"><img src="./img/conor2.png" /></span>
		<span class="conor conor3"><img src="./img/conor3.png" /></span>
		<span class="conor conor4"><img src="./img/conor4.png" /></span>

		<div class="cont">
			<div class="v1">
				<img src="./img/weather1.png" />
				<div class="weather">
					<div class="u"><span v-text="temp.range"></span></div>
					<div class="d"><span v-text="weather.tag"></span></div>
				</div>
			</div>
			<span class="vLine"></span>
			<div class="v2">
				<div class="u">
					<span>实 时</span>
					<div class="infoBox">
						<div class="in"><span v-text="temp.now"></span></div>
					</div>
				</div>
				<div class="d">
					<span>湿 度</span>
					<div class="infoBox">
						<div class="in"><span v-text="hum"></span></div>
					</div>
				</div>
			</div>
			<span class="vLine"></span>
			<div class="v3">
				<div class="u">
					<span>PM2.5</span>
					<div class="infoBox">
						<div class="in"><span v-text="air"></span></div>
					</div>
				</div>
				<div class="d">
					<span>风 向</span>
					<div class="infoBox">
						<div class="in"><span v-text="wind"></span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
			weather:{type:1,tag:"多云转小雨"},
			temp:{range:"12°C ~ 19°C",now:"16°C 怡人"},
			hum:"234RH%",
			air:"234 严重超标",
			wind:"3级东北风"
		}},
		vuex:
		{
			getters:
			{
				
			}
		}
	}
</script>