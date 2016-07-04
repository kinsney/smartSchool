<style lang="sass" scoped>
$green : #6cf09c;
$red : #f85656;
$black : #000000;
$yellow : #ffe400;
$colorLine : #278d4c;
$colorBg : rgba(0,0,0,0.75);

* { font-family: 'PingFang SC','微软雅黑' ;}
.tag-energy
{
	position: absolute;
	border:1px solid $red;
	.info
	{
		position:absolute; bottom:25px; left:-82px;
		width:130px;
		padding:12px 17px;
		background-color: $colorBg;
		border-radius: 3px 3px 0 0;
		border-bottom: 3px solid $green;
		font-weight:lighter;
		
		.u
		{
			position: relative;
			color: $green; font-size:16px;
			text-align:center;
			*{display:inline-block; vertical-align:middle;}
			img{ position:absolute; right:0; top:3px; height:15px; }
		}
		.d
		{
			color: white; font-size:14px; text-align: center;
			*{display:inline-block; vertical-align:middle;}
			img{height:14px; margin-right:10px;}
		}

		.h-dotline
		{
			position:relative;
			width:100%; height:1px;
			margin: 7px 0;
			background-color: $colorLine;
			span 
			{ 
				position:absolute; height:3px; width:3px;  
				border-radius: 4px;
				background-color: $colorLine;
			}
			.dot-l { left:0; top:-1px; }
			.dot-r { right:0; top:-1px; }
		}
		.energyData
		{
			overflow:hidden;
			height:0;
			background-color:rgba(0,0,0,0.2); 
		}
		.v-dotline
		{
			position:absolute; bottom: -25px; left:50%;
			width:1px; height:25px;
			background-color: $green;
			.dot 
			{ 
				position:absolute; left:-4px; bottom:0;
				height:7px; width:7px;  
				border-radius: 4px;
				background-color: $green;
				border:1px solid black;
			}
		}
	}
}
</style>

<template>
	<div class="tag-energy" :style="{left:pos.x+'px',top:pos.y+'px'}" @mousedown.stop="">
		<div class="info" @mouseenter="show" @mouseleave="hide" v-el:info>
			<div class="u">
				<span v-show="!open" v-text="'日均能耗:'+energy"></span>
				<span v-show="open">能耗趋势表</span>
				<img v-show="open" src="img/more.png" />
			</div>
			<div class="h-dotline"><span class="dot-l"></span><span class="dot-r"></span></div>
			<div class="energyData">
				
			</div>
			<div class="d">
				<img src="img/locate.png" />
				<span v-text="locate"></span>
			</div>
			<div class="v-dotline"><span class="dot"></span></div>
		</div>
	</div>
</template>

<script>
	const $ = require('jquery');
	module.exports =
	{
		data() {return{
			energy:"8476J",
			open:false,
			locate:"教四楼"
		}},
		props:
		{
			pos: {type: Object, default:()=>{return { x:200,y:300 };}}
		},
		methods:
		{
			hide() 
			{ 
				this.open = false;
				var ele = this.$els.info;
				$(ele).stop().animate({width:'130px',left:'-82px'});
				$(ele).find('.energyData').stop().animate({height:0,marginBottom:0});
			},
			show() 
			{
				var ele = this.$els.info;
				$(ele).stop().animate({width:'280px',left:'-157px'});
				$(ele).find('.energyData').stop().animate({height:'150px',marginBottom:'7px'},()=>this.open=true);
			}
		}
	}
</script>