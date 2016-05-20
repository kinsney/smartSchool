<style lang="sass" scoped>

* { font-family: 'PingFang SC','微软雅黑' ;}
.v-angleCtl
{
	position:absolute; top:70px; right:15px;
	img{display:block; width:90px;}
}
</style>

<template>
	<div class="v-angleCtl"  @mousedown.stop="">
		<img src="./img/angleCtl.png" />
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
		}},
		vuex:
		{
			getters:
			{
				scope: ({routeSite}) => {return routeSite.scope;}
			}
		}
	}
</script>