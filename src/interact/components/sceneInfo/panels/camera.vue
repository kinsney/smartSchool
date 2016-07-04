<style lang="sass" scoped>
* { font-family: 'PingFang SC','微软雅黑' ;}
$colorBg:#18512d;
$colorLine:#6cf09c;

.cameractl
{
	box-sizing:border-box;
	height:500px;
	overflow:hidden;
	// position:relative;
	&>div {float:left;}
	.left
	{
		width:18%; margin-right:2%;
		box-sizing:border-box;

		&>div
		{
			border:1px solid #18512d;
			h3{padding-left:10px;height:25px;line-height:25px;font-size:16px;background-color:#18512d;}
		}
		.viewArea 
		{	
			.wrapper 
			{
				padding:5px 10px;height:300px;position:relative;overflow:hidden;
				&>ul>li
				{
					h4{height:30px;line-height:30px;font-size:14px;border-bottom:1px solid #18512d;}
					ul
					{
						border-bottom:1px solid #18512d;transition:0.3s ease-in-out;overflow:hidden;
						height:0;opacity:0;padding:0 0 0 10px;
						li{padding:5px 0;}
					}
					&.nowItem
					{ 
						h4 {}
						ul {height:110px; opacity:1;padding:5px 0 5px 10px;}
					}
				}
			}
		}
		.datepick
		{
			margin-top:15px; text-align:center;
			padding-bottom:10px;
			.adjust
			{
				box-sizing:border-box;
				margin:10px auto 0;
				display:inline-block;
				padding:1px;
				border:1px solid #2fae5d;
				border-radius:2px;
				overflow:hidden; zoom:1;
				li
				{
					float:left;
					padding: 2px;
					font-size:12px; color:black;
					background-color:#2fae5d;
					text-align:center;
					width:16px; height:16px; line-height:16px;
				}
				.c { background-color:transparent; width:90px; color:white;}
				.l,.r { cursor:pointer; }
			}
		}
	}
	.right {width:80%; img{width:100%;} }
}

</style>

<template>
	<backboard name="监控管理系统" :size="{w:960,h:620}">
		<div class="cameractl">
			<div class="left">
				<div class="viewArea">
					<h3> 监控区域</h3>
					<div class="wrapper" v-el:wrap>
						<ul>
							<li v-for="area in areas" :class="{nowItem:$index==nowItem}" @click="nowItem=$index">
								<h4 v-text="area"></h4>
								<ul>
									<li v-for="floor in floors"><span v-text="floor"></span></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<div class="datepick">
					<h3> 选择日期</h3>
					<ul v-for="(key,val) in date" class="adjust">
						<li class="l" @click="val--">-</li>
						<li class="c" v-text="val+dateCn[key]"></li>
						<li class="r" @click="val++">+</li>
					</ul>
				</div>
			</div>
			<div class="right">
				<img src="img/cameractl.png" />
			</div>
		</div>
	</backboard>
</template>

<script>

	const iScroll = require('iscroll');
	module.exports =
	{
		data() {return {
			areas:['主干道','家属区','教三楼区','教四楼区','教五楼区','主楼区','图书馆','教三楼区'],
			floors:['第一层','第二层','第三层','第四层','第五层'],
			date:{year:2016,month:3,day:19},
			dateCn:{year:'年',month:'月',day:'日'},
			nowItem:0
		}},
		props:
		{
			
		},
		components:
		{
			line:require('./line.vue'),
			backboard:require('./backBoard.vue')
		},
		ready()
		{
			var element = this.$els.wrap;
			var options = 
			{
				mouseWheel:true,
				scrollbars:true,
				bounce:true,
				snap:true,
				fadeScrollbars:true
			}
			var myScroll = new iScroll(element,options);
			console.dir(myScroll.options);

		}
	}
</script>