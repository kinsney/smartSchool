<style lang="sass" scoped>
* { font-family: 'PingFang SC','微软雅黑' ;}
$colorBg:#18512d;
$colorLine:#6cf09c;

.filter
{
	position:relative;z-index:1000;
	$bdColor:green; $H:30px; &>ul{display:inline-block;vertical-align:middle;}
	.yearChose
	{
		margin-right:30px;width:150px;height:$H;border-top:1px solid $bdColor;
		$bg1:rgba(255,255,255,0.1);$bg2:rgba(255,255,255,0.2);
		li
		{
			width:100%;height:0;line-height:$H;box-sizing:border-box;text-align:center;
			border:none;overflow:hidden;opacity:0;transition: 0.3s ease-in-out;
			font-size:14px;background-color:$bg2;cursor:pointer;
		}
		li.nowYear { height:$H;opacity:1;border:1px solid $bdColor; border-top:none;background-color:$bg1;}
		li:hover {background-color:$bg1;}
		&:hover{li{height:$H;opacity:1;border:1px solid $bdColor; border-top:none;}}
	}
	.timeScope
	{
		li
		{
			width:100px;height:$H;line-height:$H;box-sizing:border-box;float:left;
			text-align:center;border:1px solid $bdColor; background-color:#18512d;
			font-size:14px;transition: 0.2s ease-in-out;cursor:pointer;
			&:hover { background-color:#0f321c; }
		}
		.year {border-radius:3px 0 0 3px;}
		.month {border-left:none;border-right:none;}
		.day {border-radius:0 3px 3px 0;}
		.nowScope { background-color:#0f321c; }
	}
}

.wrapper
{
	box-sizing:border-box;
	height:460px;
	overflow:hidden; margin:20px 0;
}

</style>

<template>
	<backboard name="能源管理" :size="{w:860,h:620}" :toshow="toshow">
		<div class="filter">
			<ul class="yearChose">
				<li v-for="year in years.S" :class="{nowYear:$index==years.now}" @click="years.now=$index" v-text="year"></li>
			</ul>
			<ul class="timeScope">
				<li class="year nowScope">年例图</li>
				<li class="month">月例图</li>
				<li class="day">日例图</li>
			</ul>
		</div>
		<div class="wrapper" v-el:wrap>
			<div>
				<data-over-view></data-over-view>
				<sort-and-itemize></sort-and-itemize>
				<each-month-energy></each-month-energy>
				<each-year-energy></each-year-energy>
				<cost-manage></cost-manage>
				<carbon-trail></carbon-trail>
				<div style="height:10px"></div>
			</div>
		</div>
	</backboard>
</template>

<script>

	const iScroll = require('iscroll');
	module.exports =
	{
		data() {return {
			years:{now:3,S:['2016年','2015年','2014年','2013年','2012年','2011年']},
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
			backboard:require('./backBoard.vue'),
			dataOverView:require('./energy/dataOverView.vue'),
			sortAndItemize:require('./energy/sortAndItemize.vue'),
			eachMonthEnergy:require('./energy/eachMonthEnergy.vue'),
			eachYearEnergy:require('./energy/eachYearEnergy.vue'),
			costManage:require('./energy/costManage.vue'),
			carbonTrail:require('./energy/carbonTrail.vue')
		},
		methods:
		{
			doFilter(item)
			{
				this.filter.nowitem = item;
				var _this = this;
				setTimeout(()=>{_this.scroller.refresh();},100);
			}
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