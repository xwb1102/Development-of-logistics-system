import React, {
	Component
} from 'react';
import '../css/tubiao.css'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// import '../js/china';
// import '../js/echart.min'
// 引入柱状图
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/heatmap';
import 'echarts/lib/chart/map';
import 'echarts/map/js/china';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/legend';

//学习地址：
// https://www.cnblogs.com/wgl1995/p/6489038.html
// http://echarts.baidu.com/echarts2/index.html

class Map extends Component {
	componentDidMount() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('mainMap'));
		// 绘制图表
		myChart.setOption({
			title: {
				text: '订单量',
				subtext: '纯属虚构',
				x: 'center'
			},
			tooltip: { //提示框组件。
				trigger: 'item' //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
			},
			legend: {
				orient: 'horizontal', //图例的排列方向

				x: 'left', //图例的位置
				data: ['订单量']
			},

			visualMap: { //颜色的设置  dataRange
				x: 'left',
				y: 'center',
				splitList: [{
						start: 1500
					},
					{
						start: 900,
						end: 1500
					},
					{
						start: 310,
						end: 1000
					},
					{
						start: 200,
						end: 300
					},
					{
						start: 10,
						end: 200,
						label: '10 到 200（自定义label）'
					},
					{
						start: 5,
						end: 5,
						label: '5（自定义特殊颜色）',
						color: 'black'
					},
					{
						end: 10
					}
				],
				min: 0,
				max: 2500,
				calculable: true, //颜色呈条状
				text: ['高', '低'], // 文本，默认为数值文本
				color: ['#E0022B', '#E09107', '#A3E00B']
			},
			toolbox: { //工具栏
				show: true,
				orient: 'vertical', //工具栏 icon 的布局朝向
				x: 'right',
				y: 'center',
				feature: { //各工具配置项。
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					}, //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
					restore: {
						show: true
					}, //配置项还原。
					saveAsImage: {
						show: true
					} //保存为图片。
				}
			},
			roamController: { //控制地图的上下左右放大缩小 图上没有显示
				show: false,
				x: 'top',
				mapTypeControl: {
					'china': false
				}
			},
			series: [{
				name: '订单量',
				type: 'map',
				mapType: 'china',
				roam: false, //是否开启鼠标缩放和平移漫游
				itemStyle: { //地图区域的多边形 图形样式
					normal: { //是图形在默认状态下的样式
						label: {
							show: true, //是否显示标签
							textStyle: {
								color: "rgb(249, 249, 249)"
							}
						}
					},
					emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
						label: {
							show: true
						}
					}
				},
				top: "3%", //组件距离容器的距离
				data: [{
						name: '北京',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '天津',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '上海',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '重庆',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '河北',
						value: 0
					},
					{
						name: '河南',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '云南',
						value: 5
					},
					{
						name: '辽宁',
						value: 305
					},
					{
						name: '黑龙江',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '湖南',
						value: 200
					},
					{
						name: '安徽',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '山东',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '新疆',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '江苏',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '浙江',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '江西',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '湖北',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '广西',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '甘肃',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '山西',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '内蒙古',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '陕西',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '吉林',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '福建',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '贵州',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '广东',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '青海',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '西藏',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '四川',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '宁夏',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '海南',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '台湾',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '香港',
						value: Math.round(Math.random() * 2000)
					},
					{
						name: '澳门',
						value: Math.round(Math.random() * 2000)
					}
				]
			}]
		});
	}
	render() {
		return(
			<div id="mainMap" style={{ width: 800, height: 600 ,}}></div>
		);
	}
}

export default Map;