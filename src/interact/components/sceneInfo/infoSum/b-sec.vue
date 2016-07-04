<style lang="sass" scoped>
$colorLt : #6cf09c;
$colorBt : rgba(255,255,255,0.1);

* { font-family: 'PingFang SC','微软雅黑' ;}

.cont
{
	position:relative; 
	height:26px;
	text-align:center;

	&>* { height:100%; display:inline-block; vertical-align:middle; margin:0 5px;}
	&>img { height:20px;}

	.vLine {height:100%; width:1px; background-color: $colorLt;}
}

</style>

<template>
	<info-box :w="520">
		<div class="cont">
			<img src="./img/camera.png" />
			<data-box :minw="260" :data="[working,breakdown]"></data-box>
			<span class="vLine"></span>
			<img src="./img/warn.png" />
			<data-box :minw="120" :data="[warning]"></data-box>
		</div>
	</info-box>
</template>

<script>
	module.exports =
	{
		data() {return{
			working:"10个大楼摄像头正在工作中",
			breakdown:"2个摄像头故障",
			warning:"5条待处理大楼警报"
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