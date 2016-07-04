<style lang="sass" scoped>
$green : #6cf09c;
$red : #f85656;
$black : #000000;
$colorLine : #278d4c;
$colorBg : rgba(0,0,0,0.75);

* { font-family: 'PingFang SC','微软雅黑' ;}
.tag-camera
{
	position: absolute;
	height:100px;
	.tag { height:100%; img{height:100%;} }
	@mixin state($color)
	{
		border-bottom-color:$color;
		.v-dotline {background-color: $color; .dot {background-color: $color; } }
	}
	@mixin infoBox($w)
	{
		position:absolute; bottom:70px; left:26px - ($w / 2);
		display:none; opacity:0; filter:alpha(opacity=0);
		width:$w;
		padding:12px 17px;
		background-color: $colorBg;
		border-radius: 3px 3px 0 0;
		border-bottom: 2px solid transparent;
		font-weight:lighter;
		.v-dotline
		{
			position:absolute; bottom: -25px; left:50%;
			width:1px; height:25px;
			background-color: $green;
			.dot 
			{ 
				position:absolute; left:-1px; bottom:0;
				height:3px; width:3px;  
				border-radius: 4px;
				background-color: $green;
			}
		}
	}
	.info
	{
		@include infoBox(180px);
		.u
		{
			position: relative;
			color: $green; font-size:16px;
			*{display:inline-block; vertical-align:middle;}
			img{ position:absolute; right:0; height:15px; }
		}
		.d
		{
			color: white; font-size:14px;
			*{display:inline-block; vertical-align:middle;}
			img{height:14px; margin-right:5px;}
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
		
		&.off { @include state($black); }
		&.error { @include state($red); }
	}
	.video
	{
		@include infoBox(300px);
		color:white;
		.top
		{
			text-align:center;
			padding-bottom:10px;
			*{display:inline-block;vertical-align:middle;}
			img{height:14px;}
			span{height:20px;line-height:20px;font-size:16px;}
			.more{ float:right; height:15px;}
		}
		.player
		{
			position:relative;
			.videoBar
			{
				position:absolute; top:0; left:0;
				height:20px; width:100%;
				font-size:12px; line-height:20px;
				background-color: rgba(0,0,0,0.4);
				span{display:inline-block;vertical-align:middle;margin:0 5px;}
				.time{float:right;}
			}
			&>img{width:100%;}
		}

		&.on { @include state($green); }
	}
}
</style>

<template>
	<div class="tag-camera" :style="{left:pos.x+'px',top:pos.y+'px'}" @mouseleave="hide" @mousedown.stop="">
		<div class="tag" @mouseenter="show">
			<img v-if="state=='on'" src="img/camera-on.png" />
			<img v-if="state=='off'" src="img/camera-off.png" />
			<img v-if="state=='error'" src="img/camera-error.png" />
		</div>
		<div v-if="!isOn" class="info" :class="isOn?'':state" v-el:info>
			<div class="u">
				<span v-text="statetag[state]"></span>
				<img src="img/more.png" />
			</div>
			<div class="h-dotline"><span class="dot-l"></span><span class="dot-r"></span></div>
			<div class="d">
				<img src="img/locate.png" />
				<span v-text="locate"></span>
			</div>
			<div class="v-dotline"><span class="dot"></span></div>
		</div>
		<div v-if="isOn" class="video on" v-el:info>
			<div class="top">
				<img src="img/locate.png" />
				<span v-text="locate"></span>
				<img class="more" src="img/more.png" />
			</div>
			<div class="player">
				<div class="videoBar">
					<span v-text="locate"></span>
					<span class="time" v-text="nowDate+nowTime"></span>
				</div>
				<img src="./img/video.png" />
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
			statetag:{on:"开启中",off:"关闭中",error:"故障中，请维修"},
			locate:"教四楼南门",
			nowTime:"00:00:00",
			timer:{out:null,inter:null}
		}},
		props:
		{
			pos: {type: Object, default:()=>{return { x:200,y:300 };}},
			state: { type:String, default:"on" } // on off error
		},
		computed:
		{
			isOn() {return this.state=='on'},
			nowDate()
			{
				var date = new Date();
				return date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDay()+'日--';
			}
		},
		methods:
		{
			hide() 
			{ 
				var ele = this.$els.info
				this.timer.out = setTimeout(function()
				{
					$(ele).stop().fadeOut(100,function(){$(this).css({opacity:0,bottom:'70px'});});
				},100);

				clearInterval(this.timer.inter);
			},
			show() 
			{
				var ele = this.$els.info
				clearTimeout(this.timer.out);
				$(ele).stop().css({display:'block'}).animate({opacity:1,bottom:'90px'},300);

				this.getTime(); var _this = this;
				this.timer.inter = setInterval(function(){_this.getTime();},1000);
			},
			getTime()
			{
				var date = new Date();
				this.nowTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
			}
		}
	}
</script>