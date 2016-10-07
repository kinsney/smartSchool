<style lang="sass" scoped>
	* { font-family: 'PingFang SC','微软雅黑' ;}
</style>

<template>
	<info-sum></info-sum>
	<tags  :data="tagsData"></tags>
	<panel></panel>
</template>

<script>
	module.exports =
	{
		data() {return{
			store:require('../../../store.js'),
			buildings:require('../../../dataModel/data.json')
		}},
		vuex:
		{
			getters:
			{
				scope: ({routeSite}) => {return routeSite.scope;},
				menu: ({routeSite}) => {return routeSite.menu;}
			}
		},
		computed:
		{
			tagsData()
			{
				var namespace = this.store.currentObjectName.split('-');
				if(this.scope=='floor')
				{
					var devices = this.buildings[namespace[0]]['floors'][namespace[1]];
					return devices;
				}
				else return {};
			}
		},
		components:
		{
			infoSum:require('./infoSum/index.vue'),
			tags:require('./tags/index.vue'),
			panel:require('./panels/index.vue'),
		},
		ready()
		{
			var _this = this;
			// this.store.currentObjectName = 'building1';
			// setTimeout(()=>{_this.store.currentObjectName = 'building1-4';},10);
		}
	}
</script>