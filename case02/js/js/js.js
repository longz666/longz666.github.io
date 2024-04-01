 $(window).load(function(){  
             $(".loading").fadeOut()
            })  
			
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});


 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1()
    echarts_2()
    echarts_3()
    echarts_4()
    echarts_5()
    echarts_6()
    pe01()
    pe02()
    pe03()

function echarts_1() {
 var myChart = echarts.init(document.getElementById('echarts1'));

 option = {
  tooltip: {
 trigger: 'axis',
 axisPointer: {type: 'shadow'},
},"grid": {
  "top": "20%",
"right":"50",
"bottom":"20",
"left":"30",
},
legend: {
  data: ['一产增加值', '二产增加值', '三产增加值','一产增速','二产增速','三产增速'],
  right: 'center', width:'100%',
  textStyle: {
      color: "#fff",fontSize: '9'
  },
  itemWidth: 12,
  itemHeight: 10,
},



 "xAxis": [
   {
     "type": "category",
     data: ['2019年', '2020年', '2021年', '2022年', '2023年'],
     axisLine: { lineStyle: {color: "rgba(255,255,255,.1)"}},
     axisLabel:  { textStyle: {color: "rgba(255,255,255,.7)", fontSize: '12', },
         },
 
     },
],
 "yAxis": [
   {
     "type": "value",
     "name": "单位：亿元",
     axisTick: {show: false},
     splitLine: {
      show: false,
     
  },
     "axisLabel": {
       "show": true,
       fontSize:10,
       color: "rgba(255,255,255,.6)"
      
     },
     axisLine: {
      min:0,
      max:10,
       lineStyle: {color: 'rgba(255,255,255,.1)'}
      },//左线色
     
   },
   {
     "type": "value",
     "name": "增速%",
     "show": true,
     "axisLabel": {
       "show": true,
       fontSize:10,
       formatter: "{value} %",
       color: "rgba(255,255,255,.6)"
     },
     axisTick: {show: false},
   axisLine: {lineStyle: {color: 'rgba(255,255,255,.1)'}},//右线色
    splitLine: {show:true,lineStyle: {color:'rgba(255,255,255,.1)'}},//x轴线
   },
 ],
 "series": [
  
   {
     "name": "一产增加值",
     "type": "bar",
     "data": [4.56,4.62, 4.98, 7.24, 6.90],
     "barWidth": "15%",
     "itemStyle": {
       "normal": {
        barBorderRadius: 15,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#8bd46e'
      }, {
          offset: 1,
          color: '#09bcb7'
      }]),
       }
     },
     "barGap": "0.2"
   },
   {
    "name": "二产增加值",
    "type": "bar",
    "data":[10.64,13.16, 19.16, 18.22, 20.70],
    "barWidth": "15%",
    "itemStyle": {
      "normal": {
       barBorderRadius: 15,
       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#248ff7'
    }, {
        offset: 1,
        color: '#6851f1'
    }]),
      }
    },
    "barGap": "0.2"
  },
  {
    "name": "三产增加值",
    "type": "bar",
    "data":[16.84,17.59, 20.97, 22.15, 23.46],
    "barWidth": "15%",
    "itemStyle": {
      "normal": {
       barBorderRadius: 15,
       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
         offset: 0,
         color: '#fccb05'
     }, {
         offset: 1,
         color: '#f5804d'
     }]),
      }
    },
    "barGap": "0.2"
  },
   {
     "name": "一产增速",
     "type": "line",
        smooth: true,
     "yAxisIndex": 1,
     "data": [5.1, 0, 8.5,5.6, 4.3],
   lineStyle: {
        normal: {
          width: 2
        },
      },
     "itemStyle": {
       "normal": {
         "color": "#86d370",
    
       }
     },
   
   }
   ,
   {
     "name": "二产增速",
     "type": "line",
     "yAxisIndex": 1,
 
     "data": [6.7, 24.9, 14.2,-11.6, 4.7],
   lineStyle: {
   normal: {
     width: 2
   },
 },
     "itemStyle": {
       "normal": {
         "color": "#3496f8",
    
       }
     },
     "smooth": true
   } ,
   {
     "name": "三产增速",
     "type": "line",
     "yAxisIndex": 1,
 
     "data":[12.6,2.6, 13.3, 2.7, 4.5],
   lineStyle: {
   normal: {
     width: 2
   },
 },
     "itemStyle": {
       "normal": {
         "color": "#fbc30d",
    
       }
     },
     "smooth": true
   }
 ]
};

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

	
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts2'));

       option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'shadow'},
       // formatter:'{c}' ,
    },
    grid: {
        left: '0',
	  	top: '30',
        right: '10',
        bottom: '-20',
        containLabel: true
    },
    legend: {
        data: ['规上工业总产值增速', '规上工业增加值增速'],
        right: 'center',
        top:0,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
  rotate:0,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
          fontSize:12,
         
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.1)'
			}

        },

   data: ['2019年', '2020年', '2021年', '2022年', '2023年        ',]

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
       // splitNumber: 6,
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
        formatter: "{value} %",
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '规上工业总产值增速',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
				color: 'rgba(228, 228, 126, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(228, 228, 126, .2)'
                }, {
                    offset: 1,
                    color: 'rgba(228, 228, 126, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
        color: 'rgba(228, 228, 126, 1)',
				borderColor: 'rgba(228, 228, 126, .1)',
				borderWidth: 12
			}
		},
        data: [27.3, 25.3, 31.6, -6.7, 6.7 ]

    }, {
        name: '规上工业增加值增速',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: 'rgba(255, 128, 128, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 128, 128,.2)'
                }, {
                    offset:1,
                    color: 'rgba(255, 128, 128, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: 'rgba(255, 128, 128, 1)',
				borderColor: 'rgba(255, 128, 128, .1)',
				borderWidth: 12
			}
		},
        data: [23.0, 29.4, 28.0, -13.8,11.2]
    }, 
		 ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts3'));

        option = {

          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['农业', '林业', '牧业', '渔业', '农林牧渔服务业'],
            right: 'center',width:'100%',
  textStyle: {
      color: "#fff",fontSize: '9'
  },
            top:0,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 10,
            itemHeight: 8,
            // itemGap: 35
        },
          grid: {
            left: '0',
            right: '20',
            bottom: '0',
            top:'15%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['2019年','2020年','2021年','2022年','2023年'],
            axisLine: {
              lineStyle: {
                color: 'white'
   
              }
            },
            axisLabel: {
              rotate:0,
              // formatter:function(value){return value.split("").join("\n");},
         textStyle: {
              color: "rgba(255,255,255,.6)",
             fontSize:12,
                   }
        },
            axisLine: {
               lineStyle: {
                   color: 'rgba(255,255,255,0.3)'
               }
           },
          },
   
          yAxis: {
            type: 'value',
            splitNumber: 4,
            axisTick: {show: false},
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.1)'
              }
            },
            axisLabel: {textStyle: {
              color: "rgba(255,255,255,.6)",
             fontSize:12,
                   }},
            axisLine: {show:false},
          },
     
          series: [{
            name: '农业',
            type: 'bar',
            stack: 'a',
            barWidth: '30',barGap: 0,
            itemStyle: {
               normal: {
                color: '#03c893', }
            },
            data: [4.66, 4.72, 5.21, 5.28, 5.75]
          },
          {
            name: '林业',
            type: 'bar',
            stack: 'a',
            barWidth: '30',barGap: 0,
            itemStyle: {
               normal: {
                color: '#ffff00',
               barBorderRadius:0, }
            },
            data: [1.02, 1.10, 1.08, 1.30, 1.20]
          },
          {
            name: '牧业',
            type: 'bar',
            stack: 'a',
            barWidth: '30',barGap: 0,
            itemStyle: {
               normal: {
                color: '#ffaa00',
               barBorderRadius:0, }
            },
            data: [ 1.30, 1.20, 1.41, 1.77, 1.44]
          },
		  {
		    name: '渔业',
		    type: 'bar',
		    stack: 'a',
		    barWidth: '30',barGap: 0,
		    itemStyle: {
		       normal: {
		        color: '#00aaff',
		       barBorderRadius:0, }
		    },
		    data: [0.27, 0.27, 0.30, 0.31, 0.32]
		  },
		  {
		    name: '农林牧渔服务业',
		    type: 'bar',
		    stack: 'a',
		    barWidth: '30',barGap: 0,
		    itemStyle: {
		       normal: {
		        color: '#ff5500',
		       barBorderRadius:0, }
		    },
		    data: [0.34, 0.38, 0.47, 0.51, 0.52]
		  },
        ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_5() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts5'));

      option = {
        tooltip: {
       trigger: 'axis',
       axisPointer: {type: 'shadow'},
      },"grid": {
        "top": "15%",
      "right":"10%",
      "bottom":"20",
      "left":"10%",
      },
       legend: {
        data: ['总产值（当年价）', '增速'],
        right: 'center',width:'90%',
  textStyle: {
      color: "#fff",fontSize: '3'
  },
        top:0,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
      },
       "xAxis": [
         {
           "type": "category",
       
           data: ['2019年', '2020年', '2021年', '2022年', '2023年'],
        axisLine: { lineStyle: {color: "rgba(255,255,255,.1)"}},
           axisLabel:  { textStyle: {color: "rgba(255,255,255,.7)", fontSize: '10', },
               },
       
           },
     ],
       "yAxis": [
         {
           "type": "value",
           "name": "单位1",
           splitLine: {show: false},
           axisTick: {show: false},
           "axisLabel": {
             "show": true,
             color: "rgba(255,255,255,.6)"
            
           },
           axisLine: {lineStyle: {color: 'rgba(255,255,255,.1)'}},//左线色
           
         },
         {
           "type": "value",
           "name": "单位2",
           "show": true,
           axisTick: {show: false},
           "axisLabel": {
             "show": true,
             formatter: "{value} %",
             color: "rgba(255,255,255,.6)"
           },
         axisLine: {lineStyle: {color: 'rgba(255,255,255,.1)'}},//右线色
          splitLine: {show:true,lineStyle: {color:'rgba(255,255,255,.1)'}},//x轴线
         },
       ],
       "series": [
        
         {
           "name": "总产值（当年价）",
           "type": "bar",
           "data": [
            22.42 ,29.07 ,39.84 ,37.91 ,41.93
           ],
           "barWidth": "20%",

           "itemStyle": {
             "normal": {
              barBorderRadius: 15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#fccb05'
            }, {
                offset: 1,
                color: '#f5804d'
            }]),
             }
           },
           "barGap": "0"
         },
         {
           "name": "增速",
           "type": "line",
           "yAxisIndex": 1,
       
           "data": [27.3,25.3,31.6,-6.7,6.7],
         lineStyle: {
         normal: {
           width: 2
         },
       },
           "itemStyle": {
             "normal": {
               "color": "#ffff7f",
          
             }
           },
           "smooth": true
         }
       ]
   };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize",function(){
          myChart.resize();
      });
  }
    function echarts_4() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts4'));
      var myColor=['#eb2100','#eb3600','#d0570e','#d0a00e','#34da62','#00e9db','#00c0e9','#0096f3'];
      option = {
           
              grid: {
                  left: '2%',
                  top:'1%',
                  right: '5%',
                  bottom: '0%',
                  containLabel: true
              },
              xAxis: [{
                  show: false,
              }],
              yAxis: [{
                      axisTick:'none',
                      axisLine:'none',
                      offset:'7',
                      axisLabel: {
                              textStyle: {
                                  color: 'rgba(255,255,255,.6)',
                                  fontSize:'14',
                              }
                          },
                      data: ['联泰','新昊天','科锐','宜森','寰宇','华纳','糖厂','贵能','虎鹰','电厂']

                  }, {
                      axisTick:'none',
                      axisLine:'none',
                      axisLabel: {
                              textStyle: {
                                color: 'rgba(255,255,255,.6)',
                                  fontSize:'14',
                              }
                          },
                      data: [0.72, 0.73, 0.92,0.94,1.01,1.08 ,1.26,2.56,4.60,20.62]

                       },{
                      name:'单位：亿元',
                          nameGap:'50',
                          nameTextStyle:{
                            color: 'rgba(255,255,255,.6)',
                              fontSize:'16',
                          },
                      axisLine:{
                        lineStyle:{
                          color:'rgba(0,0,0,0)'
                        }
                      },
                      data: [],
              }],
              series: [{
                  name: '占比',
                  type: 'bar',
                  yAxisIndex: 0,
                  data: [1.7,1.7,2.1,2.2,2.4,2.6,3.0,6.1,11.0,49.2],
                  label:{
                        normal:{
                          show:true,
                          position:'right',
                          formatter:function(param){
                            return param.value + '%';
                          },
                          textStyle:{
                            color: 'rgba(255,255,255,.8)',
                             fontSize:'12',
                          }
                        }
                  },
                  barWidth: 15,
                  itemStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                  offset: 0,
                                  color: '#03c893'
                              },
                              {
                                  offset: 1,
                                  color: '#0091ff'
                              }
                          ]),
                          barBorderRadius: 15,
                      }
                  },
                  z: 2
              }, {
                  name: '白框',
                  type: 'bar',
                  yAxisIndex: 1,
                  barGap: '-100%',
                  data: [99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5],
                  barWidth: 15,
                  itemStyle: {
                      normal: {
                        color:'rgba(0,0,0,.2)',
                          barBorderRadius:15,
                      }
                  },
                  z: 1
              }]
          };
   

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize",function(){
          myChart.resize();
      });
  }
  function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts6'));
   

  option = {
    title:{
      text:'41.93亿元',
      subtext:'规上工业总产值',
      x:'center',
      y:'45%',
      textStyle:{
          color:'#fff',
          fontSize:23,
          lineHeight:10,
      },
      subtextStyle: {
          color:'#90979c',
          fontSize:16,
          lineHeight:10,

      },
  },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['50%', '50%'],
        color: ['rgb(170, 85, 255)', '#FBFE27', '#FE5050', '#00aa7f', '#ffaa00', '#0055ff', '#1DB7E5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
          "value": 21.47,
          "name": "电力生产业"
      }, {
          "value": 1.26,
          "name": "农副食品加工业"
      }, {
          "value": 0.21,
          "name": "非金属矿采选业"
      }, {
          "value": 7.23,
          "name": "非金属矿物制品业"
      }, {
          "value": 1.33,
          "name": "化学原料和化学制品制造业"
      }, {
          "value": 0.91,
          "name": "医药制造业"
      }, {
          "value": 4.00,
          "name": "木材加工业"
      }, {
          "value": 0.88,
          "name": "电气机械和器材制造业"
      }, {
          "value": 0.25,
          "name": "高纯金属制造"
      }, {
          "value": 2.56,
          "name": "煤炭开采和洗选业"
      }, {
          "value": 0.90,
          "name": "橡胶和塑料制品业"
      }, {
          "value": 0.93,
          "name": "纺织业和纺织服装、服饰业"}
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                formatter: ['{c|{c}亿}', '{b|{b}}'].join('\n'),
                rich: {
                    c: {
                        color: 'rgb(241,246,104)',
                        fontSize: 11,
                        fontWeight:'bold',
                        lineHeight: 5
                    },
                    b: {
                        color: 'rgb(255, 255, 255)',
                        fontSize: 8,
                        height: 15
                    },
                },
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 3,
                length2: 10,

            }
        }
    }]
};
 

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}


    function pe01() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe01'));
        var txt=13.5
        option = {
            title: {
              text: txt+'%',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#00ff00',
                fontSize: '15'
              }
            },
            color:'rgba(255,255,255,.3)',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color:'#00ff00',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未使用',
                value: 100-txt
              }]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function pe02() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe02'));
        var txt=40.5
        option = {
            title: {
              text: txt+'%',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#ffff00',
                fontSize: '15'
              }
            },
            color:'rgba(255,255,255,.3)',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color:'#ffff00',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未使用',
                value: 100-txt
              }]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function pe03() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe03'));
        var txt=46
        option = {
            title: {
              text: txt+'%',
              x: 'center',
             y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#ff5500',
                fontSize: '15'
              }
            },
            color:'rgba(255,255,255,.3)',
         
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['65%', '80%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color:'#ff5500',
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未使用',
                value: 100-txt
              }
            ]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		



















