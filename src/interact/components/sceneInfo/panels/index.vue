<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	
	.v-panel 
	{ 
	}
</style>

<template>
	<div class="v-panel">
		<template v-for="(key,val) in panels">
			<component :is="key" :toshow="val"></component>
		</template>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{

		}},
		components:
		{
			asset: require('./asset.vue'),
			camera: require('./camera.vue'),
			streetLight: require('./streetLight.vue'),
			warning: require('./warning.vue'),
			weather: require('./weather.vue'),
			energy: require('./energy.vue')
		},
		vuex:
		{
			getters:
			{
				scope: ({routeSite}) => {return routeSite.scope;},
				menu: ({routeSite}) => {return routeSite.menu;},
				panels:({routeSite,selectors}) => selectors[routeSite.scope][routeSite.menu].panel
			}
		},
		computed: {}
	}
</script>
