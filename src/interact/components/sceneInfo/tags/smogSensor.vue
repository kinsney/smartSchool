<style lang="sass" scoped>
$green : #6cf09c;
$red : #f85656;
$colorLine : #278d4c;
$colorBg : rgba(0,0,0,0.75);

* { font-family: 'PingFang SC','微软雅黑' ;}
.smog-sensor
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
		.smogData
		{
			overflow:hidden; height:0; color:white; font-size:12px; text-align:center;
			span{display:inline-block; vertical-align:middle;margin-top:10px;}
			.normal {padding:2px; width:60px; background-color:rgba(255,255,255,0.1);}
			.danger {background-color:rgba(250,85,85,0.5);}
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
		@mixin state($color)
		{
			border-bottom-color:$color;
			.v-dotline {background-color: $color; .dot {background-color: $color; } }
		}
		&.on { @include state($green); }
		&.error { @include state($red); }
	}
}
</style>

<template>
	<div class="smog-sensor" :style="{left:pos.x+'px',top:pos.y+'px'}" @mousedown.stop="">
		<div class="info" :class="state" @mouseenter="show" @mouseleave="hide" v-el:info>
			<div class="u">
				<span>烟雾传感器</span>
				<img src="img/more.png" />
			</div>
			<div class="h-dotline"><span class="dot-l"></span><span class="dot-r"></span></div>
			<div class="smogData">
				<span>烟雾浓度</span>
				<span class="normal" :class="{danger:danger}" v-text="smog"></span>
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
			danger:false,
			smog:"1691 正常",
			locate:"教四楼"
		}},
		props:
		{
			pos: {type: Object, default:()=>{return { x:200,y:300 };}},
			state: { type:String, default:"on" } // on error
		},
		methods:
		{
			hide() 
			{
				if(this.state=='error') return;
				var ele = this.$els.info;
				$(ele).find('.smogData').stop().animate({height:0});
			},
			show() 
			{
				if(this.state=='error') return;
				var ele = this.$els.info;
				$(ele).find('.smogData').stop().animate({height:'42px'});
			}
		}
	}
</script>