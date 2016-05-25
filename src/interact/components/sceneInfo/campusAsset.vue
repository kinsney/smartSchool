<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	.widgets
	{
		height:100%;
	}
</style>

<template>
	<div class="widgets" v-el:obj>
		<tag state="off" :tagpos="{x:97,y:3000,z:-23915}"></tag>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
			
		}},
		components: {tag: require('./tags/energy.vue')},
		vuex:
		{
			getters:
			{
				nowRoute: ({routeSite}) => {return routeSite.scope+routeSite.menu;}
			}
		}
	}
</script>
