<style lang="sass" scoped>

* { font-family: 'PingFang SC','微软雅黑' ;}
.v-goback
{
	position:absolute; top:70px; left:30px;
	&>div
	{
		display:inline-block; vertical-align:middle; cursor:pointer;
		*{display:inline-block; vertical-align:middle;}
		img{height:40px;}
		span{font-size:16px; color:#5B595B}
	}
	.vLine { width:1px;height:30px;background-color:#2a9050; margin:0 15px;}
}
</style>

<template>
	<div class="v-goback" @mousedown.stop="">
		<div class="tocampus" v-show="scope!='campus'" @click="getBack('campus')">
			<img src="./img/back.png" />
			<span>返回园区</span>
		</div>
		<div class="vLine" v-show="scope=='floor'"></div>
		<div class="tobuilding" v-show="scope=='floor'" @click="getBack('building')">
			<img src="./img/back.png" />
			<span>返回大楼</span>
		</div>
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
			},
			actions:
			{
				getBack({dispatch},scope) {dispatch('SetRoutSite',{scope:scope});}
			}
		}
	}
</script>