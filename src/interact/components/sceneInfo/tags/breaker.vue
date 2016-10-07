<style lang="sass" scoped>
$green : #6cf09c;
$red : #f85656;
$black : #000000;
$colorLine : #278d4c;
$colorBg : rgba(0,0,0,0.75);

* { font-family: 'PingFang SC','微软雅黑' ;}
.tag-breaker
{
	position: absolute; height:0; width:0;
	.tag { position:absolute; height:60px; left:-25px; img{height:100%;} }

	.info
	{
		position:absolute; bottom:60px; left:-82px;
		padding:12px 17px; width:130px;
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
	<div class="tag-breaker" v-show="toshow" :style="{left:pos.x+'px',top:pos.y+'px'}" @mousedown.stop @mouseenter="show" @mouseleave="hide">
		<div class="tag" transition="tag" v-show="disShow">
			<img v-if="state=='on'" src="img/breaker-on.png" />
			<img v-if="state=='off'" src="img/breaker-off.png" />
			<img v-if="state=='error'" src="img/breaker-err.png" />
		</div>
		<div class="info" :class="state" v-show="infoShow" transition="info" v-el:info>
			<div class="u">
				<span v-text="'断路器:'+statetag[state]"></span>
				<img src="img/more.png" />
			</div>
			<div class="h-dotline"><span class="dot-l"></span><span class="dot-r"></span></div>
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
			isOpen:false,
			statetag:{on:"正常",off:"已关闭",error:"故障"},
			locate:"教四楼",
			cameraPos:require('../../../../render/controller/camera.js').position,
			timer:null,
			infoShow:false,
		}},
		props:
		{
			tagPos: {type: Object, default:()=>{return { x:400,y:600,z:0};}},
			state: { type:String, default:"on" }, // on error
			objName: { type:String, default:"Breaker" },
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
			show() {clearTimeout(this.timer); this.infoShow=true; },
			hide() {var _this=this; this.timer=setTimeout(()=>{_this.infoShow=false;},500); }
		}
	}
</script>