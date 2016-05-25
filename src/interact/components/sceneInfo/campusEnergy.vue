<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	.widgets
	{
		height:100%; background-color:#f5faf6;
	}
</style>

<template>
	<div class="widgets">
		<somg-sensor state="on" :pos="{x:400,y:300}"></somg-sensor>
		<somg-sensor state="on" :danger="true" :pos="{x:600,y:300}"></somg-sensor>
		<somg-sensor state="error" :pos="{x:800,y:300}"></somg-sensor>
		<tag-aircon state="off" :pos="{x:200,y:550}"></tag-aircon>
		<room-lamp state="error" :pos="{x:400,y:550}"></room-lamp>
		<room-lamp state="on" :pos="{x:600,y:550}"></room-lamp>
		<tag-door state="on" :pos="{x:800,y:550}"></tag-door>
		<tag-door state="off" :pos="{x:800,y:445}"></tag-door>
		<breaker state="on" :pos="{x:200,y:800}"></breaker>
		<breaker state="error" :pos="{x:400,y:800}"></breaker>
		<equipment :state="{c:'on',p:'error'}" :pos="{x:600,y:800}"></equipment>
		<equipment :state="{c:'off',p:'off'}" :pos="{x:800,y:800}"></equipment>
	</div>
</template>

<script>
	module.exports =
	{
		components:
		{
			somgSensor: require('./tags/smogSensor.vue'),
			tagAircon: require('./tags/aircon.vue'),
			roomLamp: require('./tags/roomLight.vue'),
			tagDoor: require('./tags/door.vue'),
			breaker: require('./tags/breaker.vue'),
			equipment: require('./tags/equipment.vue')
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
