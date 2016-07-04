<style lang="sass" scoped>

$blackBg : rgba(0,0,0,0.4);
$greenA : #30ae5d;
$boxW : 460px;
$boxH : 300px;

* { font-family: 'PingFang SC','微软雅黑' ;}

.fade-transition {transition:ease-in-out 0.3s; opacity:1; }
.fade-enter, .fade-leave { opacity: 0; }

.v-login
{
	position:absolute; top:0; left:0; 
	width:100%; height:100%; z-index:5000;
	background-color:$blackBg;
	
	.logBox
	{
		box-sizing:border-box;
		position: absolute; top:50%; left:50%;
		width: $boxW; height:$boxH; margin: (- $boxH / 2) 0 0 (- $boxW / 2); padding:20px;
		background-color: white; border-radius:5px;

		.close 
		{
			text-align: right;
			img{display:inline-block; height:18px; cursor:pointer;}
		}
		
		h2 { text-align:center; font-size:22px; font-weight:300; color:#4a4a4a; margin:10px 0 30px;}

		.inputBox
		{
			$H: 36px;
			width:320px; height:$H; margin:10px auto;
			border: 1px solid #dedede; border-radius:4px;
			&>* { height:$H; line-height:$H; float:left; box-sizing:border-box;border:none; outline:none; }
			span 
			{
				width: 35%; text-align:center;font-size: 14px;
				background-color: #fafafa; border-right:1px solid #dedede;
			}
			input { padding-left: 10px; width:65%; }
		}

		.infoBox
		{
			box-sizing:border-box;
			width: 160px; padding:2px; margin:30px auto 0;
			cursor:pointer;
			color : white;
			border:1px solid $greenA;
			.in
			{
				font-size:14px;
				background-color:$greenA;
				text-align:center;
				height:32px; line-height:32px;
			}
		}
	}
}
</style>
<template>
	<div class="v-login" v-if="show" transition="fade" @mousedown.stop="">
		<div class="logBox">
			<div class="close">
				<img src="./img/close.png" @click="hideBox"/>
			</div>
			<h2>用管理员账号登录即可开启控制模式</h2>
			<form action="">
				<div class="inputBox">
					<span>管理员账号</span>
					<input type="text" placeholder="Your User Name" value=""/>
				</div>
				<div class="inputBox">
					<span>管理员密码</span>
					<input type="password" placeholder="Your Password" value=""/>
				</div>
				<div class="infoBox" @click="login">
					<div class="in"><span>登录</span></div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	module.exports =
	{
		data() {return{
		}},
		methods:
		{
			login() 
			{
				this.$store.dispatch('switchLogin',true); 
				this.hideBox();
			},
			hideBox() {this.$store.dispatch('switchLoginBox',false); }
		},
		vuex:
		{
			getters:
			{
				show:({loginBox})=>loginBox
			}
		},
	}
</script>