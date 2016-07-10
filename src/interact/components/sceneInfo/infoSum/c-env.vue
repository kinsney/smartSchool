<style lang="sass" scoped>
$colorLt : #6cf09c;
$colorBt : rgba(255,255,255,0.1);

* { font-family: 'PingFang SC','微软雅黑' ;}

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
	.v-dataBox {display:inline-block; vertical-align:middle;}
	.v2,.v3
	{
		.d { margin-top:5px; }
		.u,.d 
		{ 
			&>span { display:inline-block; min-width:40px; vertical-align:middle;}
		}
	}
}

</style>

<template>
	<info-box :w="550">
		<div class="cont">
			<div class="v1">
				<img src="./img/weather.png" />
				<div class="weather">
					<div class="u"><span v-text="temp.range"></span></div>
					<div class="d"><span v-text="weather.tag"></span></div>
				</div>
			</div>
			<span class="vLine"></span>
			<div class="v2">
				<div class="u">
					<span>实 时</span>
					<data-box :minw="100" :data="[temp.now]"></data-box>
				</div>
				<div class="d">
					<span>湿 度</span>
					<data-box :minw="100" :data="[hum]"></data-box>
				</div>
			</div>
			<span class="vLine"></span>
			<div class="v3">
				<div class="u">
					<span>PM2.5</span>
					<data-box :minw="100" :data="[air]"></data-box>
				</div>
				<div class="d">
					<span>风 向</span>
					<data-box :minw="100" :data="[wind]"></data-box>
				</div>
			</div>
		</div>
	</info-box>
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