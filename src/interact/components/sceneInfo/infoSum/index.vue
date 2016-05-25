<style lang="sass" scoped>

</style>

<template>
	<component :is="currentView"></component>
</template>

<script>
	module.exports =
	{
		components:
		{
			cEnv: require('./c-env.vue'),
			cSec: require('./c-sec.vue'),
			cEne: require('./c-ene.vue'),
			cAss: require('./c-ass.vue'),
			bEnv: require('./b-env.vue'),
			bSec: require('./b-sec.vue'),
			bEne: require('./b-ene.vue'),
			bAss: require('./b-ass.vue'),
			fEnv: require('./f-env.vue'),
			fSec: require('./f-sec.vue'),
			fEne: require('./f-ene.vue'),
			fAss: require('./f-ass.vue'),
		},
		vuex:
		{
			getters:
			{
				currentView: function({routeSite})
				{
					var str1 = routeSite.scope.substr(0,1);
					var str2 = routeSite.menu.substr(0,3);
					return str1+str2;
				}
			}
		}
	}
</script>
