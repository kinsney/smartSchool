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
	<info-box :w="520">
		<div class="cont">
			<img src="./img/battery.png" />
			<div class="vlist">
				<h3>今日园区总耗电量</h3>
				<data-box :minw="100" :data="[electric]"></data-box>
			</div>
			<span class="vLine"></span>
			<img src="./img/money.png" />
			<div class="vlist">
				<h3>今日园区总费用</h3>
				<data-box :minw="100" :data="[money]"></data-box>
			</div>
			<span class="vLine"></span>
			<img src="./img/calorie.png" />
			<div class="vlist">
				<h3>今日园区总耗热量</h3>
				<data-box :minw="100" :data="[calorie]"></data-box>
			</div>
		</div>
	</info-box>
</template>

<script>
	module.exports =
	{
		data() {return{
			electric:"654 kwh",
			money:"654 ¥",
			calorie:"1293 kj"
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