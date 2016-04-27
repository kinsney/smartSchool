<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	.widgets
	{
		background-color:#f3f9f5;
		height:100%;
		h1{font-size:28px; text-align:center;padding-top:20px;}

	}
</style>

<template>
	<div class="widgets">
		<h1 v-text="nowRoute"></h1>
		<info-suma></info-suma>
		<info-sumb></info-sumb>
		<info-sumc></info-sumc>
		<info-sumd></info-sumd>
	</div>
</template>

<script>
	module.exports =
	{
		components:
		{
			infoSuma: require('./widget-infoSum/c-env.vue'),
			infoSumb: require('./widget-infoSum/c-sec.vue'),
			infoSumc: require('./widget-infoSum/c-ene.vue'),
			infoSumd: require('./widget-infoSum/c-ass.vue')
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