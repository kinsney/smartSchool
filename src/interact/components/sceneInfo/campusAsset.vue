<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	.widgets
	{
		height:100%;
	}
</style>

<template>
	<div class="widgets" v-el:obj>
		<tag state="off" :pos="{x:pos.x,y:pos.y}"></tag>
	</div>
</template>

<script>
	const getPos = require('../../getPos.js');
	module.exports =
	{
		data() {return{
			haha:{x:100,y:200},
			position:{x:97,y:3000,z:-23915},
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
		components: {tag: require('./tags/energy.vue')},
		vuex:
		{
			getters:
			{
				nowRoute: ({routeSite}) => {return routeSite.scope+routeSite.menu;}
			}
		}
	}
</script>
