<style lang="sass" scoped>
* { font-family: 'PingFang SC','微软雅黑' ;}
$colorBg:#18512d;
$colorLine:#6cf09c;

.wrapper
{
	box-sizing:border-box;
	height:500px;
	overflow:hidden;
	// position:relative;
	ul>li{width:95%; margin:0 auto}
	.item
	{
		.head{span{display:inline-block; padding:5px 20px 5px 5px;font-size:16px;}}
		.cont
		{
			padding:5px 0 0;
			.databox
			{
				
			}
			&>*{display:inline-block; vertical-align:middle;text-align:center;}
			.v1{width:20%; img{height:100%;}}
			.v2
			{
				text-align:center;width:35%;
				&>*{margin:10px auto;}
				.u span{font-size:20px; font-weight:bold;}
				.m span{font-size:12px;}
				.d span{font-size:12px;background-color:#610101;padding:2px;display:inline-block;width:75px;}
			}
			.v3
			{
				width:40%;
				li
				{
					margin:10px auto;
					&>* {display:inline-block;}
					h4 { width:60px;font-size:14px;}
					span{width:100px;font-size:12px; text-align:center;padding:2px;}
				}
			}
		}
	}
		
}

</style>

<template>
	<backboard name="天气状态" :size="{w:500,h:620}" :toshow="toshow">
		<div class="wrapper" v-el:wrap>
			<ul>
				<template v-for="item in items">
					<li class="item">
						<div class="head">
							<span v-for="(key,val) in item.date" v-text="val"></span>
						</div>
						<div class="cont">
							<div class="v1">
								<img src="./img/weather.png" />
							</div>
							<div class="v2">
								<div class="u"><span v-text="item.temprange"></span></div>
								<div class="m"><span v-text="item.temp"></span></div>
								<div class="d"><span v-text="item.pollution"></span></div>
							</div>
							<ul class="v3">
								<li><h4>湿度</h4><span style="background-color:#00afff;" v-text="item.hum"></span></li>
								<li><h4>PM2.5</h4><span style="background-color:#610101;" v-text="item.PM2_5"></span></li>
								<li><h4>风向</h4><span style="background-color:#6f6f6f;" v-text="item.wind"></span></li>
							</ul>
						</div>
					</li>
					<li><line margin="10px auto 40px"></line></li>
				</template>
			</ul>
		</div>
	</backboard>
</template>

<script>

	const iScroll = require('iscroll');

	module.exports =
	{
		data() {return {
			items:
			[
				{
					date:{week:'周三',date:'2月15号',time:'21:19:32'},
					temprange:'13°C ~ 19°C',temp:'实时15°C',pollution:'重度污染',
					hum:'234%RH',PM2_5:'234 严重超标',wind:'3级东北风'
				},
				{
					date:{week:'周三',date:'2月15号',time:'21:19:32'},
					temprange:'13°C ~ 19°C',temp:'实时15°C',pollution:'重度污染',
					hum:'234%RH',PM2_5:'234 严重超标',wind:'3级东北风'
				},
				{
					date:{week:'周三',date:'2月15号',time:'21:19:32'},
					temprange:'13°C ~ 19°C',temp:'实时15°C',pollution:'重度污染',
					hum:'234%RH',PM2_5:'234 严重超标',wind:'3级东北风'
				},
				{
					date:{week:'周三',date:'2月15号',time:'21:19:32'},
					temprange:'13°C ~ 19°C',temp:'实时15°C',pollution:'重度污染',
					hum:'234%RH',PM2_5:'234 严重超标',wind:'3级东北风'
				},
				{
					date:{week:'周三',date:'2月15号',time:'21:19:32'},
					temprange:'13°C ~ 19°C',temp:'实时15°C',pollution:'重度污染',
					hum:'234%RH',PM2_5:'234 严重超标',wind:'3级东北风'
				},
				{
					date:{week:'周三',date:'2月15号',time:'21:19:32'},
					temprange:'13°C ~ 19°C',temp:'实时15°C',pollution:'重度污染',
					hum:'234%RH',PM2_5:'234 严重超标',wind:'3级东北风'
				},
				{
					date:{week:'周三',date:'2月15号',time:'21:19:32'},
					temprange:'13°C ~ 19°C',temp:'实时15°C',pollution:'重度污染',
					hum:'234%RH',PM2_5:'234 严重超标',wind:'3级东北风'
				}
			],
			scroller:false,
			options:
			{
				mouseWheel:true,
				scrollbars:true,
				bounce:true,
				snap:true,
				fadeScrollbars:true
			}
		}},
		props:
		{
			toshow:{type:Boolean, default:false}
		},
		components:
		{
			line:require('./line.vue'),
			backboard:require('./backBoard.vue')
		},
		ready() { },
		watch:
		{
			"toshow":function(isShow)
			{
				if(isShow&&(!this.scroller))
				{
					var _this = this;
					setTimeout(()=>{_this.scroller = new iScroll(_this.$els.wrap,_this.options);},600);
				}
			}
		}
	}
</script>