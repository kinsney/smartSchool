<style lang="sass" scoped>
.v-sortAndItemize
{
	width:100%;margin:20px 0;padding:20px;box-sizing:border-box;border-radius:5px;
    background-color:rgba(255,255,255,0.2);
}
</style>

<template>
	<div class="v-sortAndItemize">
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
				"sort": 
				[
					{"value":15,"name":"热"},
					{"value":10,"name":"水"},
					{"value":15,"name":"电"},
					{"value":5,"name":"其它"}
				],
				"type": 
				[
					{"value":5,"name":"供暖"},
					{"value":10,"name":"空调"},
					{"value":15,"name":"照明"},
					{"value":20,"name":"其它"}
				]
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
				var options = 
				{
		            title : {text: '分类分项', textStyle:{color:'#fff'} },
		            tooltip : {trigger: 'item', formatter: "{a} <br/>{b} : {c} ({d}%)"},
		            legend: 
		            {
		                x : 'center', y : 'top',
		                data:['热','水','电','供暖','照明','空调','多媒体设备','其它'],
		                textStyle:{color:'#fff', }
		            },
		            toolbox: 
		            {
		                show : true,
		                feature : 
		                {
		                    mark : {show: true},
		                    dataView : {show: true, readOnly: false},
		                    magicType : {show: true, type: ['pie', 'funnel'] },
		                    restore : {show: true},
		                    saveAsImage : {show: true}
		                },
		                iconStyle: 
		                {
		                    normal: {borderColor: '#fff'},
		                    emphasis:{borderColor:'#00cc66'}
		                }
		            },
		            calculable : true,
		            series : 
		            [
		                {
		                    name:'分类能耗',
		                    color:['#d87a80','#5ab1ef','#32B26C','#fff'],
		                    type:'pie',
		                    itemStyle:
		                    {
		                        normal:
		                        {
		                            label:{show: true, formatter: '{b} : {c} ({d}%)'},
		                            labelLine :{show:true}
		                        }
		                    },
		                    radius : [20, 110],
		                    center : ['25%', 200],
		                    roseType : 'radius',
		                    data:chartData["sort"]
		                },
		                {
		                    name:'分项能耗',
		                    type:'pie',
		                    itemStyle:
		                    {
		                        normal:
		                        {
		                            label:{show: true, formatter: '{b} : {c} ({d}%)'},
		                            labelLine :{show:true}
		                        }
		                    },
		                    color:['#ffb980','#e5cf0d','#8d98b3','#fff'],
		                    radius : [30, 110],
		                    center : ['75%', 200],
		                    roseType : 'area',
		                    data:chartData["type"]
		                }
		            ]
		        };

			    this.thisChart.setOption(options);
			}
		}
	}
</script>