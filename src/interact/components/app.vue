<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
</style>
<template>
	<top-bar></top-bar>
	<goback></goback>
	<angle-ctl></angle-ctl>
	<login-box></login-box>
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
			topBar: require('./topBar.vue'),
			loginBox: require('./login.vue'),
			sceneInfo:require('./sceneInfo.vue'),
			mapBox:require('./map.vue'),
			bottomBar:require('./bottomBar/bottomBar.vue'),
			goback:require('./goback.vue'),
			switchFloor:require('./switchFloor.vue'),
			angleCtl:require('./angleCtl.vue'),
		}
	}
</script>