<style lang="sass" scoped>

* { font-family: 'PingFang SC','微软雅黑' ;}
.v-switchFloor
{
	position:absolute; top:50%; right:30px; margin-top:-80px;
	div
	{ 
		text-align:center; cursor:pointer;
		img{display:inline-block; height:50px;} 
		span{display:block;font-size:16px;padding:20px 0}
	}
}
</style>

<template>
	<div class="v-switchFloor" v-if="scope=='floor'" @mousedown.stop="">
		<div class="up" @click="(num>=10)||num++">
			<img src="./img/up.png" />
		</div>
		<div><span v-text="'第'+num+'层'"></span></div>
		<div class="down" @click="(num<=1)||num--">
			<img src="./img/down.png" />
		</div>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
			num:4
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