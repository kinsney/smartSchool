<style lang="sass" scoped>
$greenB : #2a9050;
$greenC : #1d6d39;
$WordEN : #76f19a;
$WordCN : #e0fae9;
$barH : 60px;
$itemW : 200px;

* { font-family: 'PingFang SC','微软雅黑' ;}

.v-itemLi
{ 
	height:100%; width: $itemW;
	float:left; position:relative;
	
	// &:hover .v-selector { height:150px; background-color:$greenB; .arrow{height:0;}}

	.menuBox
	{
		position:relative;
		cursor: pointer;
		height:100%;
		overflow:hidden;
		background-color: $greenB;
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

</style>

<template>
	<li class="v-itemLi" @click="changeMenu">
		<div class="menuBox" :class="{'nowItem':menu==nowMenu}">
			<div class="menuItem">
				<h3 v-text="names.en"></h3>
				<div>
					<img :src='"./img/bottomBar/"+icon' />&nbsp;&nbsp;
					<span v-text="names.cn"></span>
				</div>
			</div>
			<div class="chose left"><img src="./img/left.png" /></div>
			<div class="chose right"><img src="./img/right.png" /></div>
			<div class="chose down"><img src="./img/down.png" /></div>
		</div>
		<selector :choice="choice" :isnow="menu==nowMenu"></selector>
	</li>
</template>

<script>
	module.exports =
	{
		data() {return{
			
		}},
		props:
		{
			choice: {type:Object, default:()=>{}},
			menu:{type:String, default:""},
			icon:{type:String, default:""},
			names: {type:Object, default:()=>{}}
		},
		components:
		{
			selector:require('./selector.vue')
		},
		methods:
		{
			changeMenu()
			{
				this.$store.dispatch('SetRoutSite',{menu:this.menu});
			}
		},
		vuex:
		{
			getters:
			{
				nowMenu:({routeSite})=>routeSite.menu
			}
		}
	}
</script>