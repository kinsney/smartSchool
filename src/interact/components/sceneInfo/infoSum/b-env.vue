<style lang="sass" scoped>
$colorLt : #6cf09c;
$colorBt : rgba(255,255,255,0.1);

* { font-family: 'PingFang SC','微软雅黑' ;}

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
	}
}

</style>

<template>
	<info-box :w="460">
		<div class="cont">
			<img src="./img/temp.png" />
			<div class="vlist">
				<h3>大楼均温</h3>
				<data-box :minw="80" :data="[temp]"></data-box>
			</div>
			<span class="vLine"></span>
			<img src="./img/bigWindMachine.png" />
			<div class="vlist">
				<h3>大楼新风机</h3>
				<data-box :minw="80" :data="[wind]"></data-box>
			</div>
			<span class="vLine"></span>
			<img src="./img/centAircon.png" />
			<div class="vlist">
				<h3>大楼中央空调</h3>
				<data-box :minw="80" :data="[aircon]"></data-box>
			</div>
		</div>
	</info-box>
</template>

<script>
	module.exports =
	{
		data() {return{
			temp:"23°C 舒适",
			wind:"654 m³",
			aircon:"1293 kj"
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