<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	.widgets
	{
		background-color:#f3f9f5;
		height:100%;
		h1{font-size:28px; text-align:center;padding-top:20px;}
		overflow:scroll;
	}
</style>

<template>
	<div class="widgets">
		<h1 v-text="nowRoute"></h1>
		<f-env></f-env>
		<f-sec></f-sec>
		<f-ene></f-ene>
		<f-ass></f-ass>
		<hr/>
		<b-env></b-env>
		<b-sec></b-sec>
		<b-ene></b-ene>
		<b-ass></b-ass>
		<hr/>
		<c-env></c-env>
		<c-sec></c-sec>
		<c-ene></c-ene>
		<c-ass></c-ass>
		<div style="height:100px;"></div>
	</div>
</template>

<script>
	module.exports =
	{
		components:
		{
			cEnv: require('./widget-infoSum/c-env.vue'),
			cSec: require('./widget-infoSum/c-sec.vue'),
			cEne: require('./widget-infoSum/c-ene.vue'),
			cAss: require('./widget-infoSum/c-ass.vue'),
			bEnv: require('./widget-infoSum/b-env.vue'),
			bSec: require('./widget-infoSum/b-sec.vue'),
			bEne: require('./widget-infoSum/b-ene.vue'),
			bAss: require('./widget-infoSum/b-ass.vue'),
			fEnv: require('./widget-infoSum/f-env.vue'),
			fSec: require('./widget-infoSum/f-sec.vue'),
			fEne: require('./widget-infoSum/f-ene.vue'),
			fAss: require('./widget-infoSum/f-ass.vue')
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