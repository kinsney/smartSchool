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
			.icon
			{
				width:25px;
				text-align:center;
				img { display:inline-block; height:20px;}
			}
			h3{ font-size:14px; margin:0; height:20px; line-height:20px;}
		}
		.d { margin-top:5px; }
	}
}

</style>

<template>
	<info-box :w="800">
		<div class="cont">
			<div class="vlist">
				<div class="item">
					<div class="icon"><img src="./img/breaker.png" /></div>
					<h3 style="width:60px;">断路器</h3>
					<data-box :minw="130" :data="[workingCamera,breakdownCamera]"></data-box>
				</div>
				<div class="item d">
					<div class="icon"><img src="./img/equipment.png" /></div>
					<h3 style="width:60px;">教学设备</h3>
					<data-box :minw="130" :data="[windState]"></data-box>
				</div>
			</div>
			<span class="vLine"></span>
			<div class="vlist">
				<div class="item">
					<div class="icon"><img src="./img/camera.png" /></div>
					<h3 style="width:45px;">摄像头</h3>
					<data-box :minw="130" :data="[workingFence,breakdownFence]"></data-box>
				</div>
				<div class="item d">
					<div class="icon"><img src="./img/sensor.png" /></div>
					<h3 style="width:45px;">传感器</h3>
					<data-box :minw="130" :data="[overloadBreaker]"></data-box>
				</div>
			</div>
			<span class="vLine"></span>
			<div class="vlist">
				<div class="item">
					<div class="icon"><img src="./img/aircon.png" /></div>
					<h3 style="width:30px;">空调</h3>
					<data-box :minw="130" :data="[workingFence,breakdownFence]"></data-box>
				</div>
				<div class="item d">
					<div class="icon"><img src="./img/roomLamp.png" /></div>
					<h3 style="width:30px;">灯泡</h3>
					<data-box :minw="130" :data="[overloadBreaker]"></data-box>
				</div>
			</div>
		</div>
	</info-box>
</template>

<script>
	module.exports =
	{
		data() {return{
			workingCamera:"123 正常",
			breakdownCamera:"2 故障",
			windState:"正常运作",
			workingFence:"23 正常",
			breakdownFence:"4 故障",
			overloadBreaker:"12 超负荷"
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