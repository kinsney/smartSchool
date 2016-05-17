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
		<tag-energy></tag-energy>
		<somg-sensor state="on" :pos="{x:400,y:300}"></somg-sensor>
		<somg-sensor state="error" :pos="{x:600,y:300}"></somg-sensor>
		<tag-aircon state="off" :pos="{x:800,y:300}"></tag-aircon>
		<room-lamp state="error" :pos="{x:1000,y:300}"></room-lamp>
		<tag-door state="on" :pos="{x:1200,y:340}"></tag-door>
		<tag-door state="off" :pos="{x:1200,y:235}"></tag-door>
		<breaker state="on" :pos="{x:200,y:500}"></breaker>
		<breaker state="error" :pos="{x:400,y:500}"></breaker>
		<equipment :state="{c:'on',p:'error'}" :pos="{x:600,y:500}"></equipment>
		<equipment :state="{c:'off',p:'off'}" :pos="{x:800,y:500}"></equipment>
	</div>
</template>

<script>
	module.exports =
	{
		components:
		{
			tagEnergy: require('./widget-tags/energy.vue'),
			somgSensor: require('./widget-tags/smogSensor.vue'),
			tagAircon: require('./widget-tags/aircon.vue'),
			roomLamp: require('./widget-tags/roomLamp.vue'),
			tagDoor: require('./widget-tags/door.vue'),
			breaker: require('./widget-tags/breaker.vue'),
			equipment: require('./widget-tags/equipment.vue')
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
