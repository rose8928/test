

function DrawEcharts(js, isSrcs, src){

	 // 路径配置
		require.config({
			paths: {
				echarts: '../../../js/echarts-2.2.1/build/dist'
			}
		});
		
 		legend = js[js.length - 2];
		categoryList = js[js.length - 1];	
		count = js.length - 3;
		
		
		// 使用
		require(
			[
				'echarts',
				'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
			],function (ec){
				// 基于准备好的dom，初始化echarts图
				
				document.getElementById("main").innerHTML = "";
				var parent = document.getElementById("main");
				for(j = 0; j < count; j++){
					var div = document.createElement("div");
					div.name = "main";			  
					div.id = "main" + j;
					div.style.height = "400px";
					parent.appendChild(div);				
				}
				
				for(var k = 0; k < count; k++){
					seriesList = js[k];
					var titleText;
					
					if(isSrcs == 1)
						titleText = src + ' → ' + seriesList[0].bsName ;
					else if(isSrcs == 0) 
						titleText = seriesList[0].bsName + ' → ' + src ;
					else
						titleText = seriesList[0].bsName ;
					
					
					if(legend[1].indexOf("量") > -1){
						titleText = titleText + "(MB)";
						
						for(var index = 0; index < 4; index ++){
							var serData = seriesList[index].data;
							for(var serIndex = 0; serIndex < serData.length; serIndex ++)
								serData[serIndex] = (serData[serIndex]/1048576).toFixed(4) ;
						}
					}
					
				
					
					var myChart = ec.init(document.getElementById("main" + k));
					option = {
						title: {
							text:  titleText,
							textStyle: {
								
								fontSize: 18,
								fontWeight: 'normal'
							}
						},
						tooltip : {
							trigger: 'axis'
						},
						legend: {
							data:legend,
							x: 'right',
							y: 30
							
						},
						calculable : true,
						xAxis : [
							{
								type : 'category',
								boundaryGap : false,
								data :categoryList
							}
						],
						yAxis : [
							{
								type : 'value'
							}
						],
						series : seriesList
					}; 
					myChart.setOption(option);
				}
			}
		);
		
	}

/**
 * 画曲线图(系统监测-平台资源页面使用)
 * @param data 数据
 * @param conf 配置项：{title:'',yAxisText:''}
 */
function drawCurveChart(data, conf){

	 // 路径配置
		require.config({
			paths: {
				echarts: '../../../../js/echarts-2.2.1/build/dist'
			}
		});
		$('#container').height(parent.$('.tabs-panels').height() - 100);
		
		if(!conf) conf = {};
		conf.title = conf.title ? conf.title : '';
		if(!conf.tooltip) conf.tooltip = {};
		conf.tooltip.unit = conf.tooltip.unit ? conf.tooltip.unit : '';
		
		// 使用
		require(
			[
				'echarts',
				'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
			],function (ec){
				// 基于准备好的dom，初始化echarts图
				
				
					var myChart = ec.init(document.getElementById("container"));
					option = {
							title: {
								text: conf.title,
								x: 'center',
								textStyle: {
									
									fontSize: 18,
									fontWeight: 'normal'
								}
							},
							noDataLoadingOption:{
								text:'暂无数据',
								effect: 'bubble',
								effectOption:{
									effect:{
										n:0
									}
								}
							},
							tooltip : {
								trigger: 'item',
								show: true,
								formatter : function(params) {
									var date = new Date(params.value[0]);
									var minute = date.getMinutes() > 10 ? date.getMinutes() : ('0' + date.getMinutes());
									data = date.getFullYear() + '-' 
											+ (date.getMonth() + 1) + '-' 
											+ date.getDate() + ' '
											+ date.getHours() + ':' 
											+ minute + ':00';
											
									return '<b>' + params.series.name + ':' + params.value[1].toFixed(2) + conf.tooltip.unit + '</b><br/>'
									+ data;
								},
								axisPointer:{
									type:'line',
									lineStyle:{
										type:'dashed',
										width:1
									}
								}
							},
							dataZoom:{
								show:true,
								start:70
							},
							grid:{
								y2:80
							},
							legend: {
								show: false	,
								data: [conf.title]
							},
							xAxis : [
								{
									type : 'time',
									splitNumber:15
									
								}
							],
							yAxis : [
								{
									type: 'value',
									title : {
										text : conf.yAxisText
									},
									min : 0,
									max : 100
								}
							],
							series : [
								{
									name: conf.yAxisText,
									type:'line',
									showAllSymbol:true,
									symbolSize:0,
									itemStyle:{
										normal:{
											lineStyle:{
												color: '#7cb5ec',
												width: 1
											},
											areaStyle:{
												color: 'rgba(124,181,236,0.5)'
													/*color:(function(){
													var zrColor = require('zrender/tool/color');
													return zrColor.getLinearGradient(0,400,0,800,[[0,'rgba(124,181,236,1)'],[1,'rgba(124,181,236,0.1)']]);
												 })()*/
											}
										}
										
									},
									data:data
								}
							]
						}; 
						myChart.setOption(option); 
			}
		);
		
	}
	



/**
 * 设定时间范围查询(系统监测-平台资源页面使用)
 * @param action
 */
function submit(action){
	var sTime = $('#startTime').datetimebox('getValue');
	var eTime = $('#endTime').datetimebox('getValue');
	sTime = TimeUtil.parse(sTime);
	eTime = TimeUtil.parse(eTime);
	forwardTo(action + '&startTime=' + sTime.getTime() + '&endTime=' + eTime.getTime());
}

/**
 * 画饼图（系统监测-首页使用）
 * @param id
 */
function drawChart(id) {
	var type, title, total, usage, noUsage, timestamp;

	var obj = $('#' + id);
	timestamp = obj.attr('timestamp') * 1;
	
	if(timestamp <= 0){
		obj.replaceWith('<span>未找到数据</sapn>');
		return;
	}
	
	timestamp = TimeUtil.formatterDate(new Date(timestamp), 'yyyy-MM-dd hh:mm:ss');

	if (id.indexOf('cpu') > 0) {
		total = obj.attr('total') * 1;
		usage = obj.attr('usage') * 1;
		noUsage = 1 - usage;
		type = 'CPU';
		title = type + ': ' + (total ? total +'核，' : '') + timestamp;

	} else {
		total = obj.attr('total') * 1;
		usage = (obj.attr('usage') * 1) / total;
		noUsage = 1 - usage;
		if (id.indexOf('memory') > 0) {
			type = '内存';
		} else if (id.indexOf('disk') > 0) {
			type = '磁盘';
		}
		title = type + ':' + (total<1024 ? total + 'MB，':Math.round(total/1024) + 'GB，') + timestamp;

	}
	drawPie(id, title, usage, noUsage, type);
}


//--------------------------------------------------------------------------------------------------------------------
//JavaScript Document
function drawPie(pieId, vtext, used, unuse, vName) {
	require.config({
		paths: {
			echarts: '../../../MSWeb/js/echarts-2.2.1/build/dist'
		}
	});
	
	require(
			[
				'echarts',
				'echarts/chart/pie' 
			],function (ec){
				var myChart = ec.init(document.getElementById(pieId));

				option = {
						title: {
							text: vtext,
							x: 'center',
							textStyle: {
								
								fontSize: '12px',
								fontFamily: '微软雅黑'
							}
						},
						
						tooltip : {
							trigger:'item',
							formatter: "{a} <br/> {b} : {d}%"
						},
						
						series : [
							{
								name: vName,
								type : 'pie',
								radius: '50',
								data : [
								        {name:'使用', value: used},
								        {name:'未使用', value: unuse}
								       ]
							} 
						],
						color:['#434348', '#7cb5ec', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1']
					}; 
					myChart.setOption(option); 
			}
	);
}


function drawhistogram(divId, data) {
	require.config({
		paths : {
			echarts : '../../../MSWeb/js/echarts-2.2.1/build/dist'
		}
	});

	require([ 'echarts', 'echarts/theme/macarons', 'echarts/chart/bar' ], function(ec) {
		var myChart = ec.init(document.getElementById(divId), 'macarons');
		option = {
			title : {
				text : data.label,
				x : 180,
				textStyle : {
					fontSize : '12px',
					fontFamily : '宋体',
					color : 'black'
				}
			},
			tooltip : {
				trigger : 'item',
				backgroundColor : 'rgba(255,255,255,0.7)',
				axisPointer : {
					type : 'shadow'
				},
				formatter : function(params) {
					// for text color
					var color = 'black';
					var res = '<div style="color:' + color + '">';
					res += '<strong>' + params.name + '</strong>'
					res += '<br/>' + params.seriesName + ' : ' + params.value.toFixed(2) + '%';
					res += '<br/>更新时间：' + params.data.extra;
					res += '</div>';
					return res;
				}
			},
			legend : {
				show : true,
				x : 270,
				y : 30,
				itemWidth : 10,
				data : [ 'CPU', '磁盘', '内存' ]
			},
			yAxis : {
				type : 'value',
				title : {
					text : null
				}
			},
			xAxis : {
				type : 'category',
				data : data.serverName
			},
			series : data.series
		};
		myChart.setOption(option);

	});
}

