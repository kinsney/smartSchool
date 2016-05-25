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
			<template v-for="(key,val) in choices">
				<li class="separate"><img src="./img/seprate.png" /></li>
				<menu-li :menu="key" :choice="val" :icon="icons[key]" :names="names[key]"></menu-li>
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
			icons:{Environment:'env.png', Security:'sec.png', Energy:'ene.png', Asset:'ass.png'},
			names:
			{
				Environment:{en:"ENVIRONMENT", cn:"环境"}, 
				Security:{en:"SECURITY", cn:"安防",}, 
				Energy:{en:"ENERGY", cn:"能源"}, 
				Asset:{en:"ASSETS", cn:"资产"}
			}
		}},
		components:
		{
			menuLi:require('./menuItem.vue')
		},
		methods: {},
		vuex:
		{
			getters:
			{
				choices:({routeSite,selectors})=>selectors[routeSite.scope]
			}
		}
	}
</script>