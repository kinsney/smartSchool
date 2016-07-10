<style lang="sass" scoped>
* { font-family: 'PingFang SC','微软雅黑' ;}
.v-energy
{
	position:absolute;
	width:300px; height:300px; left:50%; top:50%;
	margin: -150px 0 0 -150px;
	background-color:rgba(0,0,0,0.3);
	// overflow:hidden;

	.inner
	{
		height:1000px;margin:0 20px;
		background: linear-gradient(lightgreen, pink);
	}
}
</style>

<template>
	<div class="v-energy" v-el:wrap>
		<div class="inner"></div>
	</div>
</template>

<script>

	const iScroll = require('iscroll');

	module.exports =
	{
		data(){return{
			scroller:false,
			options:
			{
				mouseWheel:true,
				scrollbars:true,
				bounce:true,
				snap:true,
				fadeScrollbars:true
			}
		}},
		props:
		{
			name:{type:String, default:"管理面板"}
		},
		components:
		{
		},
		ready() { },
		watch:
		{
			"toshow":function(isShow)
			{
				if(isShow&&(!this.scroller))
				{
					var _this = this;
					setTimeout(()=>{_this.scroller = new iScroll(_this.$els.wrap,_this.options);},600);
				}
			}
		}
	}
</script>