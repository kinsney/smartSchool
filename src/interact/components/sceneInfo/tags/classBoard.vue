<style lang="sass" scoped>
$green : #6cf09c;
$red : #f85656;
$black : #000000;
$colorLine : #278d4c;
$colorBg : rgba(0,0,0,0.75);
$colorBt : #2fae5d;

* { font-family: 'PingFang SC','微软雅黑' ;}
.tag-classBoard
{
	position: absolute;
	border:1px solid $red;
	.info
	{
		position:absolute; bottom:25px; left:-367px;
		width:420px;
		padding:12px 17px;
		background-color: $colorBg;
		border-radius: 3px 3px 0 0;
		border-bottom: 3px solid $green;
		font-weight:lighter;

		.title
		{
			position: relative;
			color: $green; font-size:16px;
			h3 {display:inline-block; font-size:20px; height:34px; line-height:34px;}
			.btn
			{
				box-sizing:border-box; padding:2px; border:1px solid $colorBt;
				position:absolute; right:0; top:0;
				border-radius:3px; cursor: pointer; 
				.in
				{
					padding: 2px; font-size:14px; color:white;
					text-align:center; background-color:$colorBt;
					min-width:90px; height:24px; line-height:24px;
				}
			}
		}
		ul.classInfo li
		{
			$H:36px; padding:3px 10px; height:$H;
			span{display:block; box-sizing:border-box; float:left; height:$H; line-height:$H; 
				font-size:16px; color:white;}
			.key{width:20%;}
			.val{width:80%; text-align:center; background-color:rgba(255,255,255,0.1);}
		}
		div.msg
		{
			margin:10px 10px 5px; padding:10px; background-color:rgba(255,255,255,0.1);
			h4{font-size:18px; color:$green; text-align:center; margin-bottom:10px;}
			p{color:white; font-size:14px; line-height:18px;}
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
	}
	.tag-transition {transition:ease 0.5s;opacity: 1; bottom:25px;}
	.tag-enter, .tag-leave { opacity: 0; bottom:0;}
}
</style>

<template>
	<div class="tag-classBoard" v-show="toshow" :style="{left:pos.x+'px',top:pos.y+'px'}" @mousedown.stop>
		<div class="info" v-show="disShow" transition="tag" :class="state" v-el:info>
			<div class="title">
				<h3>教四楼202</h3>
				<div class="btn" @click=""> <div class="in">所有课表</div> </div>
			</div>
			<div class="h-dotline"><span class="dot-l"></span><span class="dot-r"></span></div>
			<ul class="classInfo" style="margin-bottom:20px;">
				<li v-for="(key,val) in classInfo">
					<span class="key" v-text="key"></span>
					<span class="val" v-text="val"></span>
				</li>
			</ul>


			<div class="title">
				<h3>通知通告</h3>
				<div class="btn" @click=""> <div class="in">所有通知</div> </div>
			</div>
			<div class="h-dotline"><span class="dot-l"></span><span class="dot-r"></span></div>
			<div class="msg">
				<h4>关于中秋节放假的通知</h4>
				<p>值中秋节来临之际，跟进国务院办公厅公布的《201*年节假日安排的通知》的有关规定，结合我公司实际情况，经领导班子研究，现将201*年中秋节放假事项通知如下：
    			<br>一、中秋节放假时间为9月27日，共1天。
    			<br>二、各部门接通知后，妥善安排好值班工作，并将各部门值班表于201*年*月*日下午17:00以前报公司办公室。
    			<br>公司值班电话：********</p>
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
			classInfo:{'教师人数':'30人','当前课程':'《数学》','上课学生':'高一(2)班','授课老师':'李老师','授课时间':'08:00--08:45',},
			cameraPos:require('../../../../render/controller/camera.js').position,
		}},
		props:
		{
			tagPos: {type: Object, default:()=>{return { x:200,y:300,z:0};}},
			state: { type:String, default:"on" }, // on off
			objName: { type:String, default:"ClassBoard" },
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
			
		},
		ready()
		{
			
		}
	}
</script>
