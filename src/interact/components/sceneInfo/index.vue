<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
</style>

<template>
	<info-sum></info-sum>
	<tags></tags>
	<panel></panel>
</template>

<script>
	module.exports =
	{
		data() {return{
		}},
		components:
		{
			infoSum:require('./infoSum/index.vue'),
			tags:require('./tags/index.vue'),
			panel:require('./panels/index.vue')
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