<style lang="sass" scoped>
.v-eachMonthEnergy
{
	width:100%;margin:20px 0;padding:20px;box-sizing:border-box;border-radius:5px;
    background-color:rgba(255,255,255,0.2);
}
</style>

<template>
	<div class="v-eachMonthEnergy">
       <div v-el:chart style="width: 800px;height:400px; margin:0 auto;"></div>
	</div>
</template>

<script>

	const Echart = require('echarts');
	
	module.exports =
	{
		data(){return{

			thisChart:{},
			chartData:[-12,24,-31,33,44,-32,54,45,27,-14]
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
				var options = 
				{
		            color:['#00cc66','#fff'],
		            title: {text: '逐月环比', textStyle:{color:'#fff'} },
		            tooltip : {trigger: 'axis', axisPointer : {type : 'shadow'} },
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
		            xAxis: 
		            {
		                type : 'category',
		                axisLine: {show: false},
		                axisLabel: {show: false},
		                axisTick: {show: false},
		                splitLine: {show: false},
		                data : ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月','十一月','十二月']
		            },
		            yAxis: 
		            {
		                name:'百分比',
		                nameLocation:'start',
		                axisLabel : {show : true, textStyle : {color : '#fff', } },
		                axisLine: {lineStyle: {color: '#fff'} },
		                type : 'value',
		                position: 'top',
		                splitLine: {lineStyle:{type:'dashed'}},
		                axisTick:{show:false},
		            },
		            series : 
		            [
		                {
		                    name:'生活费',
		                    type:'bar',
		                    stack: '总量',
		                    label: {normal: {show: true, formatter: '{b}'} },
		                    data:chartData
		                }
		            ]
		        };

			    this.thisChart.setOption(options);
			}
		}
	}
</script>