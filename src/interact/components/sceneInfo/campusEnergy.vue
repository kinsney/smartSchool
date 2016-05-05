<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	.widgets
	{
		height:100%;
		h1{font-size:28px; text-align:center;padding-top:20px;}
	}
</style>

<template>
	<div class="widgets">
		<h1 v-text="nowRoute"></h1>
		<tag-energy></tag-energy>
	</div>
</template>

<script>
	module.exports =
	{
		components:
		{
			tagEnergy: require('./widget-tags/energy.vue')
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
