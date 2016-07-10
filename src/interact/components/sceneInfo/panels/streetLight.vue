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
	.ctl
	{
		padding:0 10px;
		.title
		{
			position:relative; margin:20px 0px; height:37px;
			&>* { position:absolute; top:0 }
			h3 { left:0; font-size:18px; height:37px; line-height:37px;}
			.btn
			{
				right:0; box-sizing:border-box; padding:2px; border:1px solid $colorLine;
				.in
				{
					font-size:14px; color:white; font-weight:lighter;
					background-color:$colorBg;
					text-align:center;
					height:30px; line-height:30px;
					span{display:inline-block; width:120px;}
				}
			}
		}

		table
		{
			width:100%;
			border-collapse:collapse;
			th{background-color:$colorBg; font-size:14px;}
			td,th {border:1px solid $colorLine;height:30px; vertical-align:middle; text-align:center;}
			td { font-size:12px;}
		}
			
	}
}

</style>

<template>
	<backboard name="路灯控制系统" :size="{w:600,h:620}" :toshow="toshow">
		<div class="wrapper" v-el:wrap>
			<div>
				<div class="ctl">
					<div class="title">
						<h3>故障路灯一览</h3>
						<div class="btn"> <div class="in"> <span>查看历史</span> </div> </div>
					</div>
					<table>
						<tr>
							<th>编号</th> <th>路灯编号</th> <th>所属区域</th> <th>故障原因</th>
						</tr>
						<tr v-for="item in errorView">
							<td v-text="$index"></td>
							<td v-for="(key,val) in item" v-text="val"></td>
						</tr>

					</table>
				</div>
				<line margin="40px 0"></line>
				<div class="ctl">
					<div class="title">
						<h3>智能控制方案</h3>
						<div class="btn"> <div class="in"> <span>修改控制计划</span> </div> </div>
					</div>
					<table>
						<tr>
							<th>编号</th> <th>计划路灯</th> <th>所属区域</th> <th>自动关闭时间</th>
						</tr>
						<tr v-for="item in ctlPlan">
							<td v-text="$index"></td>
							<td v-for="(key,val) in item" v-text="val"></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</backboard>
</template>

<script>

	const iScroll = require('iscroll');
	module.exports =
	{
		data() {return {
			errorView:
			[
				{num:'5号路灯',locate:'主干道',reason:'电路接触不良'},
				{num:'5号路灯',locate:'主干道',reason:'电路接触不良'},
				{num:'5号路灯',locate:'主干道',reason:'电路接触不良'},
				{num:'5号路灯',locate:'主干道',reason:'电路接触不良'},
			],
			ctlPlan:
			[
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
				{whichLight:'5号路灯',locate:'主干道',plan:'每天晚上 9：30'},
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
				if(isShow)
				{
					var _this = this;
					setTimeout(()=>{_this.scroller = new iScroll(_this.$els.wrap,_this.options);},600);
				}
			}
		}
	}
</script>