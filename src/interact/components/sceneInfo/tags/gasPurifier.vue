<style lang="sass" scoped>
$green : #6cf09c;
$red : #f85656;
$black : #000000;
$colorLine : #278d4c;
$colorBg : rgba(0,0,0,0.75);
$colorBt : #2fae5d;

* { font-family: 'PingFang SC','微软雅黑' ;}
.tag-gasPurifier
{
	position: absolute; height:0; width:0;
	.tag { position:absolute; height:60px; left:-25px; img{height:100%;} }

	.info
	{
		position:absolute; bottom:25px; left:-97px;
		width:160px;
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
		.controls
		{
			overflow:hidden; height:0; color:white; font-size:12px; 
			.control
			{
				>span{ display:inline-block; min-width:42px; vertical-align:middle; }
				text-align:center; margin:6px 0 10px;
				&>* {display:inline-block; vertical-align:middle;}
				.adjust
				{
					box-sizing:border-box;
					padding:1px; margin: 0 0 0 5px;
					border:1px solid $colorBt;
					border-radius:2px;
					overflow:hidden; zoom:1;
					li
					{
						float:left;
						padding: 2px;
						font-size:12px; color:black;
						background-color:$colorBt;
						text-align:center;
						width:12px; height:12px; line-height:12px;
					}
					.c { background-color:transparent; width:60px; color:white;}
					.l,.r { cursor:pointer; }
				}
			}
		}
		.btn
		{
			box-sizing:border-box;
			padding:2px; margin: 0 0 7px;
			border-radius:3px;
			cursor: pointer;
			.in
			{
				padding: 2px;
				font-size:12px; color:white;
				text-align:center;
				min-width:80px; height:20px; line-height:20px;
			}
			&.btnon { border:1px solid $colorBt; .in{background-color:$colorBt;} }
			&.btnoff { border:1px solid rgba(0,0,0,0.3); .in{background-color:rgba(0,0,0,0.3);} }
			&.btnerror { border:1px solid $red; .in{background-color:rgba(0,0,0,0.3);} }
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
		&.off { @include state($black); }
		&.error { @include state($red); }
	}
	.tag-transition {transition:ease 0.5s;opacity: 1; bottom:0;}
	.tag-enter, .tag-leave { opacity: 0; bottom:-25px;}
	.info-transition {transition:ease 0.5s;opacity: 1;  bottom:82px;}
	.info-enter, .info-leave { opacity: 0; bottom:62px;}
}
</style>

<template>
	<div class="tag-gasPurifier" v-show="toshow" :style="{left:pos.x+'px',top:pos.y+'px'}" @mousedown.stop @mouseenter="show" @mouseleave="hide">
		<div class="tag" transition="tag" v-show="disShow">
			<img v-if="state=='on'" src="img/gasPurifier-on.png" />
			<img v-if="state=='off'" src="img/gasPurifier-off.png" />
			<img v-if="state=='error'" src="img/gasPurifier-err.png" />
		</div>
		<div class="info" v-show="infoShow" transition="info" :class="state" @mouseenter="slideUp" @mouseleave="slideDown" v-el:info>
			<div class="u">
				<span>净化器</span>
				<img src="img/more.png" />
			</div>
			<div class="h-dotline"><span class="dot-l"></span><span class="dot-r"></span></div>
			<div class="controls">
				<div class="control">
					<span>舒适度</span>
					<ul class="adjust">
						<li class="l" @click="(comfort<80)||comfort--">-</li>
						<li class="c" v-text="comfort+'良好'"></li>
						<li class="r" @click="(comfort>100)||comfort++">+</li>
					</ul>
				</div>
				<div class="control">
					<span>PM2.5</span>
					<ul class="adjust">
						<li class="l" @click="(pm25<=150)||pm25--">-</li>
						<li class="c" v-text="pm25+'正常'"></li>
						<li class="r" @click="(pm25>=180)||pm25++">+</li>
					</ul>
				</div>
				<div class="control">
					<span>温度</span>
					<ul class="adjust">
						<li class="l" @click="(temp<10)||temp--">-</li>
						<li class="c" v-text="temp+'°C'"></li>
						<li class="r" @click="(temp>25)||temp++">+</li>
					</ul>
				</div>
				<div class="control">
					<span>湿度</span>
					<ul class="adjust">
						<li class="l" @click="(hum<=0)||hum--">-</li>
						<li class="c" v-text="hum+'RH%'"></li>
						<li class="r" @click="(hum>=240)||hum++">+</li>
					</ul>
				</div>
			</div>
			<div class="btn" :class="'btn'+state" @click="toggle">
				<div class="in">
					<span v-show="state=='off'">开启净化器</span>
					<span v-show="state=='on'">关闭净化器</span>
					<span v-show="state=='error'">净化器故障</span>
				</div>
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
	const getPos = require('./getPos.js');

	module.exports =
	{
		data() {return{
			locate:"教四楼",
			comfort:92,
			pm25:168,
			temp:25,
			hum:60,
			cameraPos:require('../../../../render/controller/camera.js').position,
			timer:null,
			infoShow:false,
		}},
		props:
		{
			tagPos: {type: Object, default:()=>{return { x:400,y:600,z:0};}},
			state: { type:String, default:"on" }, // on off error
			objName: { type:String, default:"gasPurifier" },
			tagData:{type: Object, default:()=>{return {};}},
			toshow:{type:Boolean, default:true}
		},
		computed:
		{
			pos()
			{
				// return {x:this.tagPos.x,y:this.tagPos.y};
				var ranbingluan = this.cameraPos.x;
				return getPos(this.tagPos);
			},
			disShow()
			{
				// return true;
				var deltaX = this.cameraPos.x-this.tagPos.x;
				var deltaY = this.cameraPos.y-this.tagPos.y;
				var deltaZ = this.cameraPos.z-this.tagPos.z;

				var dis = Math.sqrt(deltaX*deltaX+deltaY*deltaY+deltaZ*deltaZ);
				if(dis>5000) return false;
				else return true;
			}
		},
		methods:
		{
			slideDown() 
			{
				if(this.state!='on') return;
				var ele = this.$els.info;
				$(ele).find('.controls').stop().animate({height:0});
			},
			slideUp() 
			{
				if(this.state!='on') return;
				var ele = this.$els.info;
				$(ele).find('.controls').stop().animate({height:'130px'});
			},
			toggle()
			{
				if(this.state=='error') return
				this.state = this.state=='on'?'off':'on';

				var ele = this.$els.info;
				if(this.state=='on') $(ele).find('.controls').stop().animate({height:'130px'});
				else $(ele).find('.controls').stop().animate({height:0});
			},
			show() {clearTimeout(this.timer); this.infoShow=true; },
			hide() {var _this=this; this.timer=setTimeout(()=>{_this.infoShow=false;},500); }
		}
	}
</script>