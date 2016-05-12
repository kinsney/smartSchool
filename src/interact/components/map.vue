<style lang="sass" scoped>
$greenA : #278d4c;
$padBottom: 3px;
$barH : 60px;
$mathSide : 10px;
$size : 200px;

* { font-family: 'PingFang SC','微软雅黑' ;}
.v-mapBox
{
	position:absolute; right:$mathSide; bottom:$mathSide + $barH + $padBottom;
	width:$size; height:$size;
	border: 2px solid $greenA;
	border-radius: 500px;

	img{display:block; height:100%; width:100%;}
}
</style>

<template>
	<div class="v-mapBox" v-show="isCampus"  @mousedown.stop="">
		<img src="./img/map/map.png" />
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
				isCampus: ({routeSite}) => {return routeSite.scope == "campus";}
			}
		}
	}
</script>