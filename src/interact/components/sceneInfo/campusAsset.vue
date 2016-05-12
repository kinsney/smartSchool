<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	.widgets
	{
		height:100%;
		h1{font-size:28px; text-align:center;padding-top:20px;}
	}
</style>

<template>
	<div class="widgets" v-el:obj>
		<h1 v-text="nowRoute"></h1>
		<tag state="off" :pos="{x:pos.x,y:pos.y}"></tag>
	</div>
</template>

<script>
	const getPos = require('../../getPos.js');
	module.exports =
	{
		data() {return{
			haha:{x:100,y:200},
			position:{x:0,y:3000,z:0},
			cameraPos:require('../../../render/controller/camera.js').position
		}},
		computed:
		{
			pos()
			{
				var ranbingluan = this.cameraPos.x;
				return getPos(this.position);
			}
		},
		components: {tag: require('./widget-tags/energy.vue')},
		vuex:
		{
			getters:
			{
				nowRoute: ({routeSite}) => {return routeSite.scope+routeSite.menu;}
			}
		}
	}
</script>
