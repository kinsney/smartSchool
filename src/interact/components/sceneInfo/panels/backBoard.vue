<style lang="sass" scoped>
* { font-family: 'PingFang SC','微软雅黑' ;}
.v-panelBoard
{
	$pad:20px;

	box-sizing:border-box;
	border-radius:3px;
	padding:$pad;
	overflow:hidden;
	position:absolute; left:50%; top:10%; //165
	z-index:2000;
	background-color:rgba(0,0,0,0.8);
	color:white; font-weight:lighter;
	.close{position:absolute;top:$pad;right:$pad;cursor:pointer; img{display:block; height:20px}}
	.panelName { height:24px;line-height:24px; font-size:20px; }
}

.switch-transition {transition:ease 0.5s;opacity: 1;top:10%;}
.switch-enter { opacity: 0;top:0%;}
.switch-leave { opacity: 0;}
</style>

<template>
	<div class="v-panelBoard" v-show="toshow" :style="{width:size.w+'px',height:size.h+'px',marginLeft:(-size.w/2)+'px'}" transition="switch" transition-mode="out-in" @mousedown.stop="">
		<div class="close" @click="closePanel"><img src="./img/close.png" /></div>
		<h2 class="panelName" v-text="name"></h2>
		<line margin="10px auto 30px"></line>

		<slot></slot>
	</div>
</template>

<script>
	module.exports =
	{
		props:
		{
			size:{type:Object, default:()=>{return {w:800,h:500};}},
			name:{type:String, default:"管理面板"},
			toshow:{type:Boolean, default:false}
		},
		components:
		{
			line:require('./line.vue')
		},
		vuex:
		{
			getters:
			{
				panels:({routeSite,selectors}) => selectors[routeSite.scope][routeSite.menu].panel
			}
		},
		methods:
		{
			closePanel()
			{
				var panels = this.panels;
				Object.keys(panels).forEach((key)=>{if(panels[key]) panels[key]=false;});
			}
		}
	}
</script>