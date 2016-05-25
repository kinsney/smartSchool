<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
</style>

<template>
	<info-sum></info-sum>
	<tags></tags>
	<component :is="currentView"></component>
</template>

<script>
	module.exports =
	{
		data() {return{
		}},
		components:
		{
			infoSum:require('./sceneInfo/infoSum/index.vue'),
			tags:require('./sceneInfo/tags/index.vue'),

			campusEnvironment:require('./sceneInfo/campusEnvironment.vue'),
			campusSecurity:require('./sceneInfo/campusSecurity.vue'),
			campusEnergy:require('./sceneInfo/campusEnergy.vue'),
			campusAsset:require('./sceneInfo/campusAsset.vue'),
			buildingEnvironment:require('./sceneInfo/buildingEnvironment.vue'),
			buildingSecurity:require('./sceneInfo/buildingSecurity.vue'),
			buildingEnergy:require('./sceneInfo/buildingEnergy.vue'),
			buildingAsset:require('./sceneInfo/buildingAsset.vue'),
			floorEnvironment:require('./sceneInfo/floorEnvironment.vue'),
			floorSecurity:require('./sceneInfo/floorSecurity.vue'),
			floorEnergy:require('./sceneInfo/floorEnergy.vue'),
			floorAsset:require('./sceneInfo/floorAsset.vue')
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