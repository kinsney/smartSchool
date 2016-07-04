<style lang="sass" scoped>

$itemW : 200px;
$arrowH : 20px;
$greenA : rgba(30,110,60,0.4);
$greenB : rgba(30,110,60,0.6);
$greenC : #6cf09c;

* { font-family: 'PingFang SC','微软雅黑' ;}

.fade-transition {transition:ease-in-out 0.3s; opacity:1; height:$arrowH;}
.fade-enter, .fade-leave { opacity: 0; height:0;}

	

.v-selector
{
	position:absolute; bottom:100%; left:0;
	width:$itemW; overflow:hidden;
	background-color:$greenA;
	border-radius: 3px 3px 0 0;
	color:white;
	.arrow
	{ 
		overflow:hidden;height:$arrowH; position:relative;
		transition:ease-in-out 0.3s;
		img {display:block; width:20px; margin:4px auto;}
	}
	.h-dotline
	{
		position:relative; width:$itemW - 16px; height:1px; margin: 0 auto;
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
	&:hover { height:150px; background-color:$greenB; .arrow{height:0;}}
	
	.hardwares
	{
		padding:15px 15px 10px;
		li
		{
			display:inline-block; width:45%; text-align:center;
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

</style>
<template>
	<div class="v-selector" transition="fade" v-show="isnow">
		<div class="arrow"> <img src="./img/toOpen.png" /> </div>
		<ul class="hardwares">
			<li>
				<label><input type="checkbox"><div></div></label>
				<span>路灯</span>
			</li>
			<li>
				<label><input type="checkbox"><div></div></label>
				<span>断路器</span>
			</li>
		</ul>
		<div class="h-dotline"><span class="dot-l"></span><span class="dot-r"></span></div>
		<ul class="panels">
			<li>
				<label><input type="checkbox"><h3>天气系统</h3></label>
			</li>
			<li>
				<label><input type="checkbox"><h3>路灯控制系统</h3></label>
			</li>
		</ul>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
			
		}},
		props:
		{
			isnow: {type:Boolean, default:false}
		},
		methods: {},
		vuex:
		{
			getters:
			{
				scope:({routeSite})=>routeSite.scope,
				menu:({routeSite})=>routeSite.menu
			}
		}
	}
</script>