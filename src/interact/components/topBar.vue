<style lang="sass" scoped>

$greenA : #6cf09c;
$greenB : #017c37;
$greenC : #01642c;
$greenD : #184f2c;
$padTop: 3px;
$barH : 40px;
$marginSide : 50px;

* { font-family: 'PingFang SC','微软雅黑' ;}
.v-topBar
{
	// position: absolute; left:0; top:0;
	height:$barH + $padTop; width:100%;
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
		font-weight:lighter;
		color:white;
		span
		{
			display: block;
			height: $barH;
			line-height:$barH;
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
}
</style>

<template>
	<div class="v-topBar">
		<div class="leftPart">
			<span>游客模式</span>
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
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
			campusName:"3D智慧校园"
		}},
	}
</script>