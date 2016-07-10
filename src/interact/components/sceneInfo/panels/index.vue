<style lang="sass" scoped>

</style>

<template>
	<component></component>
</template>

<script>
	module.exports =
	{
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
				panels:({routeSite,selectors}) => selectors[routeSite.scope][routeSite.menu].panel;
			}
		}
	}
</script>
