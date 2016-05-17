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
	width:520px;
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
					min-width:100px; height:20px; line-height:20px;
				}
			}
		}
	}
}
</style>

<template>
	<div class="infoSum-c" @mousedown.stop="">
		<span class="conor conor1"><img src="./img/conor1.png" /></span>
		<span class="conor conor2"><img src="./img/conor2.png" /></span>
		<span class="conor conor3"><img src="./img/conor3.png" /></span>
		<span class="conor conor4"><img src="./img/conor4.png" /></span>

		<div class="cont">
			<img src="./img/battery.png" />
			<div class="vlist">
				<h3>今日大楼总耗电量</h3>
				<div class="infoBox">
					<div class="in"><span v-text="electric"></span></div>
				</div>
			</div>
			<span class="vLine"></span>
			<img src="./img/money.png" />
			<div class="vlist">
				<h3>今日大楼总费用</h3>
				<div class="infoBox">
					<div class="in"><span v-text="money"></span></div>
				</div>
			</div>
			<span class="vLine"></span>
			<img src="./img/calorie.png" />
			<div class="vlist">
				<h3>今日大楼总耗热量</h3>
				<div class="infoBox">
					<div class="in"><span v-text="calorie"></span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
			electric:"654 kwh",
			money:"654 ¥",
			calorie:"1293 kj"
		}},
		vuex:
		{
			getters:
			{
				
			}
		}
	}
</script>