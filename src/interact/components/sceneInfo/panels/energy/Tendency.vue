<style lang="sass" scoped>
.v-tendency
{
	width:100%;margin:20px 0;padding:20px;box-sizing:border-box;border-radius:5px;
    background-color:rgba(255,255,255,0.2);
}
</style>

<template>
	<div class="v-tendency">
       <div v-el:chart style="width: 800px;height:400px; margin:0 auto;"></div>
	</div>
</template>

<script>

	const Echart = require('echarts');
	
	module.exports =
	{
		data(){return{

			thisChart:{},
			chartData:
			{
			  "2015":[ 20,24,31,33,44,32,54,45,27,14,12,21],
			  "2016":[14,15,16,38,29,38,21,29,31,29,21,23]
			}
		}},

		ready()
		{
			this.thisChart = Echart.init(this.$els.chart);
			this.freshOption(this.chartData);
		},

		methods:
		{
			freshOption(chartData)
			{
				var options = {
			        color:['#fff','#00cc66'],
			        title: {text:'能源趋势', textStyle:{color:'#fff'} },
			        tooltip : {trigger:'axis', axisPointer:{type : 'shadow'} },
			        toolbox: 
			        {
			            show: true,
			            feature: 
			            {
			                magicType: {type: ['line', 'bar']},
			                restore: {},
			                saveAsImage: {}
			            },
			            iconStyle: 
			            {
			                normal: {borderColor: '#fff'},
			                emphasis:{borderColor:'#00cc66'}
			            }
			        },
			        legend: {data:['今年','去年'], textStyle:{color:'#fff', }},
			        xAxis: 
			        {
			            data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
			            axisLabel : {show : true, textStyle : {color : '#fff', align : 'left'} },
			            axisTick:{show: false},
			        },
			        yAxis: 
			        {
			            axisLabel : {show: true, textStyle:{color:'#fff'} },
			            axisTick : {show: false, } 
			        },
			        series: 
			        [
			            {
			                name: '今年',
			                type: 'line',
			                symbolSize:6,
			                data: chartData['2016']
			            },
			            {
			                name: '去年',
			                type: 'line',
			                symbolSize:6,
			                data: chartData['2015']
			            }
			        ]
			    };

			    this.thisChart.setOption(options);
			}
		}
	}
</script>