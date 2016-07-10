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
	
	table.filter
	{
		margin:0 10px 20px; border-collapse:collapse;
		td 
		{
			width:80px; height:30px;line-height:30px;text-align:center;
			border:1px solid #6cf09c; cursor:pointer;
			&.nowitem { background-color: #18512d;}
		}
	}
	.ctl
	{
		padding:0 10px;
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
	<backboard name="资产管理" :size="{w:800,h:620}" :toshow="toshow">
		<div class="wrapper" v-el:wrap>
			<div>
				<table class="filter">
					<tr>
						<td v-for="item in filter.items" 
							v-text="item" 
							:class="{nowitem:filter.nowitem==item}" 
							@click="doFilter(item)" ></td>
					</tr>
				</table>
				<div class="ctl">
					<table>
						<tr>
							<th>编号</th> <th>设备</th> <th>故障类型</th> <th>地点</th> <th>故障时间</th> <th>恢复时间</th>
						</tr>
						<tr v-for="item in errorView"  v-show="filter.nowitem=='全部' ? true : filter.nowitem==item.device">
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
			filter:
			{
				nowitem:'全部',
				items:['全部','摄像头','路灯','红外围栏','断路器']
			},
			errorView:
			[
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'摄像头',type:'超负荷',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'路灯',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'红外围栏',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'超负荷',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'摄像头',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'路灯',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'摄像头',type:'超负荷',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'路灯',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'红外围栏',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'超负荷',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'摄像头',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'路灯',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'摄像头',type:'超负荷',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'路灯',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'红外围栏',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'超负荷',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'摄像头',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'断路器',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
				{device:'路灯',type:'损坏',locate:'教三楼',breaktime:'2016/03/04 21:30',fixedtime:'待恢复'},
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