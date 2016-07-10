<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	.widgets
	{
		height:100%;
	}
</style>

<template>
	<div class="widgets">
	</div>
</template>

<script>
	module.exports =
	{
		components:
		{
			panel:require('./panels/asset.vue')
		},
		vuex:
		{
			getters:
			{
				nowRoute: ({routeSite}) => {return routeSite.scope+routeSite.menu;}
			}
		}
	}
</script>
