<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
	.widgets
	{
		height:100%; background-color:#f5faf6;
	}
</style>

<template>
	<div class="widgets">
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
			tagEnergy: require('./tags/energy.vue'),
			somgSensor: require('./tags/smogSensor.vue'),
			tagAircon: require('./tags/aircon.vue'),
			roomLamp: require('./tags/roomLamp.vue'),
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
