<style lang="sass" scoped>
$colorLt : #6cf09c;
$colorBg : rgba(32,81,45,0.9);
$colorBt : rgba(255,255,255,0.1);
$colorBorder : #278d4c;
$titleL : 14px;
$titleS : 12px;

* { font-family: 'PingFang SC','微软雅黑' ;}
.infoSum-d
{
	position:relative;
	padding: 10px; margin: 20px auto;
	width:570px;
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
		height:57px;
		text-align:center;

		&>* { height:100%; display:inline-block; vertical-align:top; margin:0 5px;}

		.vLine {height:100%; width:1px; background-color: $colorLt;}
		
		.vlist
		{
			color:white; font-weight: lighter;
			text-align:left;
			.item
			{
				&>* {display:inline-block; vertical-align:middle; margin:0 5px;}
				h3{ font-size:14px; margin:0; width:60px; height:20px; line-height:20px;}
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
						span{display:inline-block; min-width:60px;}
					}
				}
			}
			.d { margin-top:5px; }
		}
	}
}
</style>

<template>
	<div class="infoSum-d">
		<span class="conor conor1"><img src="./img/conor1.png" /></span>
		<span class="conor conor2"><img src="./img/conor2.png" /></span>
		<span class="conor conor3"><img src="./img/conor3.png" /></span>
		<span class="conor conor4"><img src="./img/conor4.png" /></span>

		<div class="cont">
			<div class="vlist">
				<div class="item">
					<h3>楼层均温</h3>
					<div class="infoBox">
						<div class="in"> <span v-text="tempAverage"></span> </div>
					</div>
				</div>
				<div class="item d">
					<h3>楼层湿度</h3>
					<div class="infoBox">
						<div class="in"> <span v-text="hum"></span> </div>
					</div>
				</div>
			</div>
			<span class="vLine"></span>
			<div class="vlist">
				<div class="item">
					<h3>空气质量</h3>
					<div class="infoBox">
						<div class="in"> <span v-text="AQI"></span> </div>
					</div>
				</div>
				<div class="item d">
					<h3>CO₂浓度</h3>
					<div class="infoBox">
						<div class="in"> <span v-text="CO2"></span> </div>
					</div>
				</div>
			</div>
			<span class="vLine"></span>
			<div class="vlist">
				<div class="item">
					<h3>VOC浓度</h3>
					<div class="infoBox">
						<div class="in"> <span v-text="VOC"></span> </div>
					</div>
				</div>
				<div class="item d">
					<h3>光照条件</h3>
					<div class="infoBox">
						<div class="in"> <span v-text="light"></span> </div>
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
			tempAverage:"16°C 怡人",
			hum:"234RH%",
			AQI:"23 优",
			CO2:"223/m³",
			VOC:"223/m³",
			light:"23 明亮"
		}},
		vuex:
		{
			getters:
			{
				
			}
		}
	}
</script>