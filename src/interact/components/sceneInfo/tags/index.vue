<style lang="sass" scoped>

	* { font-family: 'PingFang SC','微软雅黑' ;}
	
	.v-tags 
	{ 
		
	}

</style>

<template>
	<div class="v-tags" mousedown.stop>
		<component 
			v-for="(key,val) in data"
			:is="val.model"
			:toshow="hardware[val.model]?true:false"
			:obj-name="key" 
			:tag-pos="val.position">
		</component>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
			
		}},
		props:
		{
			data: {type: Object, default:()=>{return {};}}
		},
		components:
		{
			aircon:require('./aircon.vue'),
			breaker:require('./breaker.vue'),
			camera:require('./camera.vue'),
			door:require('./door.vue'),
			energy:require('./energy.vue'),
			equipment:require('./equipment.vue'),
			streetLight:require('./streetLight.vue'),
			roomLight:require('./roomLight.vue'),
			smogSensor:require('./smogSensor.vue'),
			curtain:require('./curtain.vue'),
			classBoard:require('./classBoard.vue'),
			gasPurifier:require('./gasPurifier.vue'),
		},
		vuex:
		{
			getters:
			{
				scope: ({routeSite}) => {return routeSite.scope},
				menu: ({routeSite}) => {return routeSite.menu},
				hardware:({routeSite,selectors})=>selectors[routeSite.scope][routeSite.menu].hardware
			}
		}
	}
</script>