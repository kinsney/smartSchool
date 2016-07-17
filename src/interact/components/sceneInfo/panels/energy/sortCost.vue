<style lang="sass" scoped>
.v-sortCost
{
	width:100%;margin:20px 0;padding:20px;box-sizing:border-box;border-radius:5px;
    background-color:rgba(255,255,255,0.2);
    >div.line {border-top:1px dashed white;margin-bottom:15px; }
}
</style>

<template>
	<div class="v-sortCost">
       <div v-el:chartu style="width: 800px;height:230px; margin:0 auto;"></div>
       <div class="line"></div>
       <div v-el:chartd style="width: 800px;height:300px; margin:0 auto;"></div>
	</div>
</template>

<script>

	const Echart = require('echarts');
	
	module.exports =
	{
		data(){return{

			thisChart:{chart1:{},chart2:{}},
			chartData:
			{
				"options1":
				{
					"heat" :[{"name":"other", "value":65, "itemStyle" : "labelBottom"}, {"name":"电", "value":35,"itemStyle" : "labelTop"}],
					"water":[{"name":"other", "value":65, "itemStyle" : "labelBottom"}, {"name":"电", "value":35,"itemStyle" : "labelTop"}],
					"elec":[{"name":"other", "value":65, "itemStyle" : "labelBottom"}, {"name":"电", "value":35,"itemStyle" : "labelTop"}],
					"other":[{"name":"other", "value":65, "itemStyle" : "labelBottom"}, {"name":"电", "value":35,"itemStyle" : "labelTop"}]
				},
				"options2":
				{
					"heat":[14,15,16,38,29,38,21,29,31,29,21,23],
					"water":[14,15,16,38,29,38,21,29,31,29,21,23],
					"elec":[14,15,16,38,29,38,21,29,31,29,21,23],
					"other":[14,15,16,38,29,38,21,29,31,29,21,23]
				}
			}
		}},

		ready()
		{
			this.thisChart.chart1 = Echart.init(this.$els.chartu);
			this.thisChart.chart2 = Echart.init(this.$els.chartd);
			this.freshOption(this.chartData);
		},

		methods:
		{
			freshOption(chartData)
			{
				var labelTop = 
		        {
		            normal : 
		            {
		                label : {show : true, position : 'center', formatter : '{b}', textStyle: {baseline : 'bottom'} },
		                labelLine : {show : false }
		            }
		        };

		        var labelFromatter = 
		        {
		            normal : 
		            {
		                label : 
		                {
		                    formatter : function (params){return 100 - params.value + '%'},
		                    textStyle: {baseline : 'top', fontSize:16 } 
		                }
		            },
		        }

		        var labelBottom = 
		        {
		            normal : 
		            {
		                color: '#ccc', 
		                label : {show : true, position : 'center'},
		                labelLine : {show : false },
		            },
		            emphasis: {color: 'rgba(0,0,0,0)'}
		        };

		        var radius = [50, 65];

		        var options1 = 
		        {
		            title : {text: '分类成本', textStyle:{color:'#fff'} },
		            toolbox: 
		            {
		                show : true,
		                iconStyle: {normal: {borderColor: '#fff'}, emphasis:{borderColor:'#00cc66'} },
		                feature : 
		                {
		                    dataView : {show: true, readOnly: false},
		                    magicType : 
		                    {
		                        show: true, type: ['pie', 'funnel'],
		                        option: 
		                        {
		                            funnel: 
		                            {
		                                width: '20%', height: '30%',
		                                itemStyle : 
		                                {
		                                    normal : 
		                                    {
		                                        label : 
		                                        {
		                                            formatter : function (params){return 'other\n' + params.value + '%\n'},
		                                            textStyle: {baseline : 'middle'}
		                                        }
		                                    },
		                                }
		                            }
		                        }
		                    },
		                    restore : {show: true},  saveAsImage : {show: true}
		                }
		            },
		            series : 
		            [
		                {
		                    type : 'pie', 
		                    center:['10%','50%'], 
		                    radius:radius,
		                    x:'0%', 
		                    itemStyle:labelFromatter,
		                    color:['#eee','#fe9f79','#32B26C','#fff'],
		                    data : 
		                    [
		                        {name:'other', value:56, itemStyle : labelBottom},
		                        {name:'热', value:44,itemStyle : labelTop}
		                    ]
		                },
		                {
		                    type : 'pie',
		                    center : ['37%', '50%'],
		                    radius : radius,
		                    color:['#d87a80','#6ad3e8','#32B26C','#fff'],
		                    x:'20%', // for funnel
		                    itemStyle : labelFromatter,
		                    data : 
		                    [
		                        {name:'other', value:56, itemStyle : labelBottom},
		                        {name:'水', value:44,itemStyle : labelTop}
		                    ]
		                },
		                {
		                    type : 'pie',
		                    center : ['66%', '50%'],
		                    radius : radius,
		                    x:'40%', // for funnel
		                    color:['#32B26C','#5adba4'],
		                    itemStyle : labelFromatter,
		                    data : 
		                    [
		                        {name:'other', value:65, itemStyle : labelBottom},
		                        {name:'电', value:35,itemStyle : labelTop}
		                    ]
		                },
		                {
		                    type : 'pie',
		                    center : ['90%', '50%'],
		                    radius : radius,
		                    color:['#32B26C','#9c89ff'],
		                    x:'60%', // for funnel
		                    itemStyle : labelFromatter,
		                    data : 
		                    [
		                        {name:'other', value:70, itemStyle : labelBottom},
		                        {name:'其它', value:30,itemStyle : labelTop}
		                    ]
		                }
		            ]
		        };
		        this.thisChart.chart1.setOption(options1);

		        var options2 = 
		        {
		            color:['#fe9f79','#6ad3e8','#5adba4','#9c89ff'],
		            tooltip : {trigger: 'axis', axisPointer : {type : 'shadow'} },
		            legend: 
		            {
		                left:55,
		                data:['热','水','电','其它'],
		                textStyle:{color:'#fff', },
		            },
		            grid: {left: '3%', right: '3%', bottom: '3%', containLabel: true, },
		            toolbox: 
		            {
		                right:40,
		                show: true,
		                feature: { magicType:{type:['line', 'bar']}, restore:{}, saveAsImage:{} },
		                iconStyle: 
		                {
		                    normal: {borderColor: '#fff'},
		                    emphasis:{borderColor:'#00cc66'}
		                }
		            },
		            xAxis : 
		            [
		                {
		                    type : 'category',
		                    data : ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
		                    axisTick:{show: false, },
		                    axisLabel : {show : true, textStyle : {color : '#fff', } },
		                    splitLine:{show:false },
		                    axisLine:{show:false }
		                }
		            ],
		            yAxis : 
		            [
		                {
		                    type : 'value',
		                    axisTick:{show: false, },
		                    texsStyle:{color:'#fff'},
		                    axisLine:{show:false },
		                    axisLabel : {show : false, textStyle : {color : '#fff', } },
		                    splitLine: {show:false }
		                }
		            ],
		            series : 
		            [
		                {
		                    name:'热',
		                    type:'bar',
		                    stack: '广告',
		                    data:chartData["options2"]["heat"]
		                },
		                {
		                    name:'水',
		                    type:'bar',
		                    stack: '广告',
		                    data:chartData["options2"]["water"]
		                },
		                {
		                    name:'电',
		                    type:'bar',
		                    stack: '广告',
		                    data:chartData["options2"]["elec"]
		                },
		                {
		                    name:'其它',
		                    type:'bar',
		                    stack: '广告',
		                    data:chartData["options2"]["other"]
		                }
		            ]
		        };
			    this.thisChart.chart2.setOption(options2);
			}
		}
	}
</script>