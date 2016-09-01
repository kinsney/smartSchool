<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
</style>
<template>
	<top-bar></top-bar>
	<angle-ctl></angle-ctl>
	<scene-info></scene-info>
	<switch-floor></switch-floor>
	<map-box></map-box>
	<bottom-bar></bottom-bar>
</template>

<script>
	module.exports =
	{
		components:
		{
			topBar: require('./components/topBar/index.vue'),
			sceneInfo:require('./components/sceneInfo/index.vue'),
			mapBox:require('./components/map.vue'),
			bottomBar:require('./components/bottomBar/bottomBar.vue'),
			switchFloor:require('./components/switchFloor.vue'),
			angleCtl:require('./components/angleCtl.vue'),
		}
	}
</script>