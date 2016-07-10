<style lang="sass" scoped>
* { font-family: 'PingFang SC','微软雅黑' ;}
$colorBg:#18512d;
$colorLine:#6cf09c;
$grey: #595959;

.warningctl
{
	&>div { box-sizing:border-box; float:left; height:520px;}
	.leftBox
	{
		width:25%;border:1px solid $colorBg;
		.wrapper
		{
			overflow:hidden; height:482px;
		}
		
		&>h3 { height:36px;font-size:14px;line-height:36px; color:white;background-color:$colorBg; margin:0;padding-left:10px; }
		.container
		{
			position:relative; margin:15px;background-image:url('img/vline.png');background-repeat:repeat-y;
			background-position:49.2%;
			&>h4 { width:70px;height:30px;line-height:30px; font-size:14px; background-color:$grey;margin:0 auto;text-align:center; }
			ul
			{
				margin: 10px auto;
				li
				{
					margin:0;padding:5px 0; text-align:center;
					img { display:inline-block; width:100%;}
				}
			}
		}
	}
	.rightBox
	{
		width:75%; padding-left:15px;
		.solveWarn
		{
			padding:0 10px;
			.title h3 {  font-size:18px; }
			.wrapper
			{
				overflow:hidden; height:180px;
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
		.history
		{
			margin-top:20px;
			padding:0 10px;
			.title h3 {  font-size:18px; }
			.data {text-align:center;}
		}
	}
}

</style>

<template>
	<backboard name="警报系统" :size="{w:780,h:620}" :toshow="toshow">
		<div class="warningctl">
			<div class="leftBox">
				<h3>最近警报</h3>
				<div class="wrapper"  v-el:leftwrap><div class="container">
					<template v-for="(key,val) in warnInfo">
						<h4 v-text="key"></h4>
						<ul>
							<li v-for="item in val"><img src="img/warnItem.png" /></li>
						</ul>
					</template>
					<div style="height:20px;"></div>
				</div></div>
			</div>
			<div class="rightBox">
				<div class="solveWarn">
					<div class="title">
						<h3>待处理警报</h3>
						<line margin="15px auto"></line>
					</div>
					<div class="wrapper"  v-el:rightwrap>
						<table>
							<tr>
								<th>编号</th> <th>类型</th> <th>地点</th> <th>时间</th> <th>处理决定</th>
							</tr>
							<template v-for="(key,val) in warnInfo">
								<tr v-for="item in val">
									<td v-text="$index+1"></td>
									<td v-text="item.type"></td>
									<td v-text="item.locate"></td>
									<td v-text="key+'/'+item.month+'/'+item.day+' '+item.day"></td>
									<td v-text="item.solve"></td>
								</tr>
							</template>
						</table>
					</div>
				</div>
				<div class="history">
					<div class="title">
						<h3>历史统计</h3>
						<line margin="15px auto"></line>
					</div>
					<div class="data">
						<img src="img/warnPic.png" height="220" />
					</div>
				</div>
			</div>
		</div>
	</backboard>
</template>

<script>

	const iScroll = require('iscroll');
	const $ = require('jquery');
	module.exports =
	{
		data() {return {

			warnInfo:
			{
				2015:[
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
				],
				2016:[
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
					{locate:'教三楼',month:'06',day:'03',time:'21:30',type:'有人入侵',solve:'解除'},
				]
			},
			scroller1:false,
			scroller2:false,
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
				if(isShow&&(!this.scroller1))
				{
					var _this = this;
					setTimeout(function()
					{
						_this.scroller1 = new iScroll(_this.$els.leftwrap ,_this.options);
						_this.scroller2 = new iScroll(_this.$els.rightwrap,_this.options);
					},600);
				}
			}
		}
	}
</script>