<style lang="sass" scoped>

	* { font-family: 'PingFang SC','微软雅黑' ;}
	
	.v-tags 
	{ 
		
	}

</style>

<template>
	<div class="v-tags" mousedown.stop>
		<template v-for="(key,val) in tags">
			<component 
				:is="key" 
				v-for="item in val"

				:toshow="hardware[key]"
				:obj-name="item.obj" 
				:state="item.state" 
				:tag-pos="item.tagpos" 
				:tag-data="item.data">
			</component>
		</template>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
			tags:
			{
				// camera:
				// [
				// 	{obj:"nameOfObj",state:"on",tagpos:{x:100,y:100,z:0},data:{}},
				// 	{obj:"nameOfObj",state:"on",tagpos:{x:300,y:100,z:0},data:{}}
				// ],
				// streetLight:
				// [
				// 	{obj:"nameOfObj",state:"on",tagpos:{x:100,y:300,z:0},data:{}},
				// 	{obj:"nameOfObj",state:"error",tagpos:{x:300,y:300,z:0},data:{}}
				// ],
				// breaker:
				// [
				// 	{obj:"nameOfObj",state:"on",tagpos:{x:100,y:500,z:0},data:{}},
				// 	{obj:"nameOfObj",state:"on",tagpos:{x:300,y:500,z:0},data:{}}
				// ]
				roomLight: 
				[{obj:'building1-4-jiaoshideng',state:'on',tagpos:{x:1903,y:540,z:-4342},data:{}} ]
			}
		}},
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
			smogSensor:require('./smogSensor.vue')
		},
		vuex:
		{
			getters:
			{
				scope: ({routeSite}) => {return routeSite.scope},
				menu: ({routeSite}) => {return routeSite.menu},
				hardware:({routeSite,selectors})=>selectors[routeSite.scope][routeSite.menu].hardware
			}
		},
		computed:
		{
			scopeData() { return require('../../../../data.js')[this.scope]; },
			tagData()
			{
				//根据 scope 和 menu 的值动态的去读取新的 tagData
				
			}
		}
	}
</script>