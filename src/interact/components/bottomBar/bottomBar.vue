<style lang="sass" scoped>
$greenA : #6af29a;
$greenB : #2a9050;
$padBottom: 3px;
$barH : 60px;
$itemW : 200px;

* { font-family: 'PingFang SC','微软雅黑' ;}
.v-bottomBar
{
	position:absolute; left:0; bottom:0;
	z-index: 1000;
	height: $barH; width:100%;
	padding-bottom: $padBottom;
	background-color: $greenB;

	ul.menuBar
	{
		height:100%; width:$itemW * 4 + 12px;
		margin:0 auto;
		li.separate {position:relative; float:left; height:100%; img {height:100%;width:2px;}}
	}

	.Bar
	{
		position:absolute; left:0; bottom:0;
		height:$padBottom * 3; width:100%;
		img { display:block; width:100%; height:100%; }
	}
}
</style>

<template>
  <div class="v-bottomBar" @mousedown.stop="">
	<ul class="menuBar">
		<template v-for="item in items">
			<li class="separate"><img src="./img/seprate.png" /></li>
			<menu-li :data="item" :index="$index"></menu-li>
		</template>
		<li class="separate"><img src="./img/seprate.png" /></li>
	</ul>
	<div class="Bar"><img src="./img/bar.png" /></div>
  </div>
</template>

<script>
	module.exports =
	{
		data() {return{
			items:
			[
				{en:"ENVIRONMENT", cn:"环境", route:"Environment"},
				{en:"SECURITY",    cn:"安防", route:"Security"},
				{en:"ENERGY",      cn:"能源", route:"Energy"},
				{en:"ASSETS",      cn:"资产", route:"Asset"}
			]
		}},
		components:
		{
			menuLi:require('./menuItem.vue')
		},
		methods: {}
	}
</script>