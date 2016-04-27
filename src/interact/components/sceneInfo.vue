<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
</style>

<template>
	<component :is="currentView"></component>
</template>

<script>
	module.exports =
	{
		data() {return{
		}},
		components:
		{
			campusEnvironment:require('./sceneInfo/campusEnvironment.vue'),
			campusSecurity:require('./sceneInfo/campusSecurity.vue'),
			campusEnergy:require('./sceneInfo/campusEnergy.vue'),
			campusAsset:require('./sceneInfo/campusAsset.vue')
		},
		vuex:
		{
			getters:
			{
				currentView: ({routeSite}) => {return routeSite.scope+routeSite.menu;}
			}
		}
	}
</script>