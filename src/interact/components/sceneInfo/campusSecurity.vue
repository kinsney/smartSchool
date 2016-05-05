<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	.widgets
	{
		height:100%;
		h1{font-size:28px; text-align:center;padding-top:20px;}
	}
</style>

<template>
	<div class="widgets">
		<h1 v-text="nowRoute"></h1>
		<tag-lamp state="on" :pos="{x:100,y:200}"></tag-lamp>
		<tag-lamp state="off" :pos="{x:400,y:200}"></tag-lamp>
		<tag-lamp state="error" :pos="{x:700,y:200}"></tag-lamp>
		<tag-lamp state="overload" :pos="{x:1000,y:200}"></tag-lamp>

		<tag-camera state="on" :pos="{x:200,y:500}"></tag-camera>
		<tag-camera state="off" :pos="{x:500,y:500}"></tag-camera>
		<tag-camera state="error" :pos="{x:800,y:500}"></tag-camera>
	</div>
</template>

<script>
	module.exports =
	{
		components:
		{
			tagLamp: require('./widget-tags/lamp.vue'),
			tagCamera: require('./widget-tags/camera.vue')
		},
		vuex:
		{
			getters:
			{
				nowRoute: ({routeSite}) => {return routeSite.scope+routeSite.menu;}
			}
		}
	}
</script>
