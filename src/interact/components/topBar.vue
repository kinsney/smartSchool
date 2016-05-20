<style lang="sass" scoped>

$greenA : #6cf09c;
$greenB : #017c37;
$greenC : #01642c;
$greenD : #184f2c;
$greenE : #113f22;
$greenF : #264e36;
$greenG : #30ae5d;
$padTop: 3px;
$barH : 40px;
$marginSide : 30px;

* { font-family: 'PingFang SC','微软雅黑' ;}
.v-topBar
{
	// position: absolute; left:0; top:0;
	height:$barH + $padTop; width:100%;
	font-weight:lighter;
	z-index:1000;
	background-color: $greenD;
	box-shadow: 0 0 100px rgb(0,0,0);
	
	.leftPart
	{
		position:absolute; top:0; left:0;
		padding-top: $padTop;
		height:$barH;
		margin-left:$marginSide;
		font-size:14px;
		color:white;
		&>div
		{
			height: $barH; overflow:hidden;
			transition: ease-in-out 0.3s;
			background-color: $greenD;
			&:hover { background-color: $greenE; }
			.title
			{
				padding: 0 10px; cursor:pointer;
				* { display: inline-block; vertical-align:middle; }
				span { height:$barH; line-height: $barH;}
				img { height:14px; }
			}
		}
		.isLogin
		{
			&:hover { height: 185px; }
			.item
			{
				background-color: $greenF;
				padding: 10px; margin: 10px 0; cursor:pointer;
				* { display: inline-block; vertical-align:middle; font-size:12px;}
				img { height:14px; }
			}
			.infoBox
			{
				box-sizing:border-box;
				width: 96px; padding:2px; margin:0 auto;
				cursor:pointer;
				border:1px solid $greenG;
				.in
				{
					font-size:12px;
					background-color:$greenG;
					text-align:center;
					height:28px; line-height:28px;
				}
			}
		}
	}
	.centPart
	{
		position:absolute; top:0; left:0;
		width:100%;  height: $padTop;
		.bar 
		{ 
			position:absolute; top:0; left:0; z-index:10;
			width:100%;  height:$padTop;
			background-color:$greenA;
		}
		.cent
		{
			width: 400px;
			margin:0 auto;
			z-index:1000;
			position: relative;
			img { display:block; margin:0 auto; height:80px;}
			h2
			{
				position:absolute; top:22px;
				width:100%;
				text-align:center;
				color:white;
				font-size:16px;
				font-weight:lighter;
			}
		}
	}
	.rightPart
	{
		position:absolute; top:0; right:0;
		padding-top: $padTop;
		height:$barH;
		margin-right:$marginSide;
		img.logo
		{
			display: block;
			height: $barH / 2;
			margin-top:$barH / 4 - 2px;
		}
	}
	.switch
	{
		position:absolute; top:0; right:120px;
		padding-top: $padTop;
		height:$barH;
		margin-right:$marginSide;
		color: white;
		cursor:pointer;
		li { display:inline-block; font-size:14px; line-height:$barH; margin:0 10px;}
		li.now { color: pink; }
	}
}
</style>

<template>
	<div class="v-topBar" @mousedown.stop="">
		<div class="leftPart">
			<div class="noLogin" v-if="!isLogin">
				<div class="title" @click="loginBox">
					<img src="./img/topBar/user.png" />
					<span>游客模式</span>
				</div>
			</div>
			<div class="isLogin" v-if="isLogin">
				<div class="title">
					<img src="./img/topBar/user.png" />
					<span>管理员模式</span>
				</div>
				<div class="item">
					<img src="./img/topBar/data.png" />
					<span>模型创建</span>
				</div>
				<div class="item">
					<img src="./img/topBar/modle.png" />
					<span>管理员数据</span>
				</div>
				<div class="infoBox" @click="logout">
					<div class="in"><span>退出登录</span></div>
				</div>
			</div>
		</div>
		<div class="date">
			
		</div>
		<div class="centPart">
			<div class="bar"></div>
			<div class="cent">
				<img src="./img/topBar/centPart.png" />
				<h2 v-text="campusName"></h2>
			</div>
		</div>
		<div class="rightPart">
			<img class="logo" src="./img/topBar/logo.png" />
		</div>
		<ul class="switch" v-el:switch>
			<li :class="{now:scope=='campus'}">campus</li>
			<li :class="{now:scope=='building'}">building</li>
			<li :class="{now:scope=='floor'}">floor</li>
		</ul>
	</div>
</template>

<script>
	const $ = require('jquery');
	module.exports =
	{
		data() {return{
			campusName:"3D智慧校园"
		}},
		methods:
		{
			login() {this.$store.dispatch('switchLogin',true); },
			logout() {this.$store.dispatch('switchLogin',false); },
			loginBox() {this.$store.dispatch('switchLoginBox',true); }
		},
		vuex:
		{
			getters:
			{
				scope:({routeSite})=>routeSite.scope,
				menu:({routeSite})=>routeSite.menu,
				isLogin:({isLogin})=>isLogin
			}
		},
		ready()
		{
			var ele = this.$els.switch;
			var $store = this.$store;
			$(ele).find('li').click(function()
			{
				var text = $(this).text();
				$(ele).find('.now').removeClass('now');
				$(this).addClass('now');
				$store.dispatch('SetRoutSite',{scope:text});
			});
		}
	}
</script>