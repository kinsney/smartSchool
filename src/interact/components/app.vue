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
			topBar: require('./topBar/index.vue'),
			sceneInfo:require('./sceneInfo/index.vue'),
			mapBox:require('./map.vue'),
			bottomBar:require('./bottomBar/bottomBar.vue'),
			switchFloor:require('./switchFloor.vue'),
			angleCtl:require('./angleCtl.vue'),
		}
	}
</script>