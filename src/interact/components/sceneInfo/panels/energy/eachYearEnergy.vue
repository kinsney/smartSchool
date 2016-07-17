<style lang="sass" scoped>
.v-eachYearEnergy
{
	width:100%;margin:20px 0;padding:20px;box-sizing:border-box;border-radius:5px;
    background-color:rgba(255,255,255,0.2);
}
</style>

<template>
	<div class="v-eachYearEnergy">
       <div v-el:chart style="width: 800px;height:400px; margin:0 auto;"></div>
	</div>
</template>

<script>

	const Echart = require('echarts');
	
	module.exports =
	{
		data(){return{

			thisChart:{},
			chartData:[ 20,24,31,33,44,32,54,45,27,14,12,21],
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
		            title: {text: '十年能源趋势', textStyle:{color:'#fff'} },
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
		            legend: {data:['今年','去年'], textStyle:{color:'#fff'} },
		            xAxis: 
		            {
		                axisTick:{show:false },
		                axisLine:{lineStyle:{color:'#fff'} },
		                splitLine: {show:false},
		                data: ["2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016"],
		                axisLabel : 
		                {
		                    show : true,
		                    textStyle : {color : '#fff', align : 'left'}
		                }
		            },
		            yAxis: {
		                axisLabel : {show : true, textStyle : {color : '#fff'} },
		                axisLine:{lineStyle:{color:'#fff'} },
		                splitLine: {lineStyle:{type:'dashed'}},
		                axisTick:{show:false},
		            },
		            series: 
		            [
		                {
		                    name: '总能耗',
		                    type: 'bar',
		                    symbolSize:7,
		                    data: chartData
		                }
		            ],
		        };

			    this.thisChart.setOption(options);
			}
		}
	}
</script>