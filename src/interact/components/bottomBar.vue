<style lang="sass" scoped>
$greenA : #6af29a;
$greenB : #2a9050;
$greenC : #1d6d39;
$WordEN : #76f19a;
$WordCN : #e0fae9;
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

	ul
	{
		height:100%; width:$itemW * 4 + 12px;
		margin:0 auto;
		li.separate
		{
			position:relative; float:left;
			height:100%;
			img {height:100%;width:2px;}
		}
		li.items
		{ 
			height:100%; width: $itemW;
			position:relative; float:left;
			overflow:hidden;
			cursor: pointer;
			transition:0.3s ease-in-out;
			.menuItem
			{
				text-align:center;
				h3 
				{ 
					color: $WordEN; 
					margin:10px 0 7px; 
					font-size:10px; -webkit-transform:scale(0.8);
					font-weight:lighter; 
					letter-spacing:4px;
				}
				div
				{
					position:relative; left:-4px;
					* {display: inline-block; vertical-align:top; height:20px;}
					span{line-height:20px; color:$WordCN; font-size:15px;}
				}
			}
			div.chose
			{
				$w:80px;
				transition:0.3s ease-in-out;
				position:absolute;
				z-index:20;
				img { display: block; }
				&.left  { height:$barH; left:-10px; top:-1px; img{height:100%;}}
				&.right { height:$barH; right:-10px; top:-1px; img{height:100%;}}
				&.down  { width:$itemW - $w; left:$w / 2; bottom:-10px; img{width:100%;}}
			}
			&.nowItem
			{
				div.left  { left:0;}
				div.right { right:0;}
				div.down  { bottom:-1px;}
				background-color : $greenC;
			}
		}
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
	<ul>
		<template v-for="item in items">
			<li class="separate"><img src="./img/bottomBar/seprate.png" /></li>
			<li class="items" :class="{'nowItem':item.route==menu}" @click="changeMenu($index)">
				<div class="menuItem">
					<h3 v-text="item.en"></h3>
					<div>
						<img :src='"./img/bottomBar/"+item.img' />&nbsp;&nbsp;
						<span v-text="item.cn"></span>
					</div>
				</div>
				<div class="chose left"><img src="./img/bottomBar/left.png" /></div>
				<div class="chose right"><img src="./img/bottomBar/right.png" /></div>
				<div class="chose down"><img src="./img/bottomBar/down.png" /></div>
			</li>
		</template>
		<li class="separate"><img src="./img/bottomBar/seprate.png" /></li>
	</ul>
	<div class="Bar"><img src="./img/bottomBar/bar.png" /></div>
  </div>
</template>

<script>
	module.exports =
	{
		data() {return{
			items:
			[
				{en:"ENVIRONMENT",img:"env.png", cn:"环境",route:"Environment"},
				{en:"SECURITY",img:"sec.png", cn:"安防",route:"Security"},
				{en:"ENERGY",img:"ene.png", cn:"能源",route:"Energy"},
				{en:"ASSETS",img:"ass.png", cn:"资产",route:"Asset"}
			]
		}},
		methods:
		{
			changeMenu(index)
			{
				this.items.forEach((item)=>item.select = false);
				this.items[index].select = true;
				this.$store.dispatch('SetRoutSite',{menu:this.items[index].route});
			}
		},
		vuex:
		{
			getters:
			{
				scope:({routeSite})=>routeSite.scope,
				menu:({routeSite})=>routeSite.menu
			}
		}
	}
</script>