<style lang="sass" scoped>
$colorLt : #6cf09c;
$colorBt : rgba(255,255,255,0.1);

* { font-family: 'PingFang SC','微软雅黑' ;}

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
		}
		.d { margin-top:5px; }
	}
}

</style>

<template>
	<info-box :w="570">
		<div class="cont">
			<div class="vlist">
				<div class="item">
					<h3>楼层均温</h3>
					<data-box :minw="80" :data="[tempAverage]" />
				</div>
				<div class="item d">
					<h3>楼层湿度</h3>
					<data-box :minw="80" :data="[hum]"></data-box>
				</div>
			</div>
			<span class="vLine"></span>
			<div class="vlist">
				<div class="item">
					<h3>空气质量</h3>
					<data-box :minw="80" :data="[AQI]"></data-box>
				</div>
				<div class="item d">
					<h3>CO₂浓度</h3>
					<data-box :minw="80" :data="[CO2]"></data-box>
				</div>
			</div>
			<span class="vLine"></span>
			<div class="vlist">
				<div class="item">
					<h3>VOC浓度</h3>
					<data-box :minw="80" :data="[VOC]"></data-box>
				</div>
				<div class="item d">
					<h3>光照条件</h3>
					<data-box :minw="80" :data="[light]"></data-box>
				</div>
			</div>
		</div>
	</info-box>
</template>

<script>
	module.exports =
	{
		data() {return{
			tempAverage:"16°C 怡人",
			hum:"50%RH",
			AQI:"23 优",
			CO2:"800ppm",
			VOC:"0.06ppm",
			light:"100lux"
		}},
		components:
		{
			infoBox: require('./infoBox.vue'),
			dataBox: require('./dataBox.vue')
		},
		vuex:
		{
			getters:
			{
				
			}
		}
	}
</script>