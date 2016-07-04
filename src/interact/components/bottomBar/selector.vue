<style lang="sass" scoped>

$itemW : 200px;
$arrowH : 20px;
$greenA : rgba(30,110,60,0.4);
$greenB : rgba(30,110,60,0.6);
$greenC : #6cf09c;

* { font-family: 'PingFang SC','微软雅黑' ;}

.fade-transition {transition:ease-in-out 0.3s; opacity:1;bottom:60px;}
.fade-enter, .fade-leave { opacity: 0;bottom:20px;}

.v-selector
{
	position:absolute; left:0;
	width:$itemW;
	background-color:$greenA;
	border-radius: 3px 3px 0 0;
	color:white;
	.arrow
	{ 
		overflow:hidden;height:$arrowH; position:relative;
		transition:ease-in-out 0.3s;
		img {display:block; width:20px; margin:4px auto;}
	}
	&:hover {background-color:$greenB; .arrow{height:0;margin-bottom:15px;}}
	.slide
	{
		transition:ease-in-out 0.3s;
		overflow:hidden;
		.h-dotline
		{
			position:relative; width:$itemW - 16px; height:1px; margin: 10px auto;
			background-color: $greenC; box-sizing:border-box;
			span 
			{ 
				position:absolute; height:3px; width:3px;  
				border-radius: 4px;
				background-color: $greenC;
			}
			.dot-l { left:0; top:-1px; }
			.dot-r { right:0; top:-1px; }
		}
		.hardwares
		{
			padding: 0 10px;
			li
			{
				display:inline-block; width:48%; box-sizing:border-box; padding:5px 0 5px 5px;
				label
				{
					display:inline-block;height:16px;width:16px;position:relative; vertical-align:middle;
					input[type=checkbox] {display:none;}
					div {height:100%; background:url(img/notChose.png) no-repeat center center; background-size:100% 100%; }
					input[type=checkbox]:checked+div { background-image:url(img/chosed.png) }
				}
				span{display:inline-block;vertical-align:middle;font-size:12px;}
			}
		}
		.panels
		{
			li
			{
				margin:10px; background-color:rgba(255,255,255,0.2);
				label
				{
					padding:10px; display:block;
					input[type=checkbox] {display:none;}
					h3 {text-align:center; font-size:12px; transition:ease-in-out 0.2s;}
					input[type=checkbox]:checked+h3 { color:$greenC; }
				}
			}
		}
	}
}

</style>
<template>
	<div class="v-selector" transition="fade" v-show="isnow" @mouseenter="slideH=totalH" @mouseleave="slideH=0">
		<div class="arrow"> <img src="./img/toOpen.png" /> </div>
		<div class="slide" :style="{height:slideH+'px'}">
			<ul class="hardwares">
				<li v-for="(key,val) in choice.hardware">
					<label><input v-model="val" type="checkbox"><div></div></label>
					<span v-text="tagName[key]"></span>
				</li>
			</ul>
			<div class="h-dotline" v-show="numTag&&numPanel"><span class="dot-l"></span><span class="dot-r"></span></div>
			<ul class="panels">
				<li v-for="(key,val) in choice.panel">
					<label><input v-model="val" type="checkbox"><h3 v-text="panelName[key]"></h3></label>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
			tagName: 
			{
				aircon:'空调', breaker:'断路器', camera:'摄像头', door:'门', energy:'能源',
				equipment:'教学设备', streetLight:'路灯', roomLight:'室内灯', smogSensor:'烟雾传感'
			},
			panelName:
			{
				weather:'天气详情',streetLight:'路灯系统',camera:'监控系统',
				warning:'警报系统',energy:'能源系统',asset:'资产系统'
			},
			slideH:0
		}},
		props:
		{
			isnow: {type:Boolean, default:false},
			choice: {type:Object, default:()=>{}}
		},
		computed:
		{
			numTag(){ return Object.keys(this.choice.hardware).length; },
			numPanel(){ return Object.keys(this.choice.panel).length; },
			totalH()
			{
				return Math.ceil(this.numTag/2)*26 + 52*this.numPanel + 10;
			}
		},
		methods: {},
		vuex: { getters: {} }
	}
</script>