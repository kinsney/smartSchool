<style lang="sass" scoped>
$green : #6cf09c;
$red : #f85656;
$black : #000000;
$colorLine : #278d4c;
$colorBg : rgba(0,0,0,0.75);
$colorBt : #2fae5d;

* { font-family: 'PingFang SC','微软雅黑' ;}
.tag-equipment
{
	position: absolute; height:0; width:0;
	.tag { position:absolute; height:60px; left:-25px; img{height:100%;} }

	.info
	{
		position:absolute; bottom:25px; left:-87px;
		width:140px;
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
	<div class="tag-equipment" v-show="toshow" :style="{left:pos.x+'px',top:pos.y+'px'}" @mousedown.stop @mouseenter="show" @mouseleave="hide">
		<div class="tag" transition="tag" v-show="disShow">
			<img v-if="sumState=='on'" src="img/equipment-on.png" />
			<img v-if="sumState=='off'" src="img/equipment-off.png" />
			<img v-if="sumState=='error'" src="img/equipment-err.png" />
		</div>
		<div class="info" v-show="infoShow" transition="info" :class="sumState" v-el:info>
			<div class="u">
				<span>教学设备</span>
				<img src="img/more.png" />
			</div>
			<div class="h-dotline"><span class="dot-l"></span><span class="dot-r"></span></div>
			<div class="btn" :class="'btn'+state.c" eqmt="c">
				<div class="in">
					<span v-show="state.c=='off'">打开电脑</span>
					<span v-show="state.c=='on'">关闭电脑</span>
					<span v-show="state.c=='error'">电脑故障</span>
				</div>
			</div>
			<div class="btn" :class="'btn'+state.p" eqmt="p">
				<div class="in">
					<span v-show="state.p=='off'">打开投影仪</span>
					<span v-show="state.p=='on'">关闭投影仪</span>
					<span v-show="state.p=='error'">投影仪故障</span>
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
			cameraPos:require('../../../../render/controller/camera.js').position,
			timer:null,
			infoShow:false,
		}},
		computed:
		{
			sumState()
			{
				if(this.state.c=='error'||this.state.p=='error') return 'error';
				if(this.state.c=='on'||this.state.p=='on') return 'on';
				else return 'off';
			},
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
		props:
		{
			tagPos: {type: Object, default:()=>{return { x:400,y:600 };}},
			state: { type:Object, default:{c:'off',p:'on'} }, // on off error
			objName: { type:String, default:"Equipment" },
			tagData:{type: Object, default:()=>{return {};}},
			toshow:{type:Boolean, default:true}
		},
		methods: 
		{
			show() {clearTimeout(this.timer); this.infoShow=true; },
			hide() {var _this=this; this.timer=setTimeout(()=>{_this.infoShow=false;},500); }
		},
		ready()
		{
			var ele = this.$els.info;
			var _this = this;
			$(ele).find('.btn').click(function()
			{
				if($(this).hasClass('btnerror')) return;
				var eqmt = $(this).attr('eqmt');
				if($(this).hasClass('btnon')) _this.state[eqmt] = 'off';
				if($(this).hasClass('btnoff')) _this.state[eqmt] = 'on';
			});
		}
	}
</script>