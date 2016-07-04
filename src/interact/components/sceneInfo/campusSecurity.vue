<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	.widgets
	{
		height:100%; background-color:#f5faf6;
	}
</style>

<template>
	<div class="widgets">
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
			tagLamp: require('./tags/streetLight.vue'),
			tagCamera: require('./tags/camera.vue')
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
