<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
</style>
<template>
	<top-bar></top-bar>
	<login-box></login-box>
	<scene-info></scene-info>
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
			bottomBar:require('./bottomBar/bottomBar.vue')
		}
	}
</script>