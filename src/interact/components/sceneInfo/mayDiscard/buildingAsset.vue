<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	.widgets
	{
		height:100%;
	}
</style>

<template>
	<div class="widgets" v-el:obj>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
		}},
		computed:
		{
		},
		components: {},
		vuex:
		{
			getters:
			{
				nowRoute: ({routeSite}) => {return routeSite.scope+routeSite.menu;}
			}
		}
	}
</script>
