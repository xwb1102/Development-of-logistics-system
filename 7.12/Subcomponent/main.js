import React, {
	Component
} from 'react'
import '../css/main.css';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../js/action';
import cookie from 'react-cookies';
import echarts from 'echarts/lib/echarts';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('main'));
		// 绘制图表
		myChart.setOption({
			title: {
				text: '一周运营情况',
				subtext: '12312312'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['123', '最高']
			},
			toolbox: {
				show: true,
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar', 'pie']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			calculable: true,
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日', '123']
			}],
			yAxis: [{
				type: 'value',
				// min:0,
				// max:100,
				axisLabel: {
					formatter: '{value} °C'
				}
			}],
			series: [{
					name: '123',
					type: 'line',
					smooth: true,
					itemStyle: {
						normal: {
							areaStyle: {
								color: "red",
							}
						}
					},
					data: [11, 11, 15, 13, 12, 13, 10, 19],
					markPoint: {
						data: [{
								type: 'max',
								name: '最大值'
							},
							{
								type: 'min',
								name: '最小值'
							}
						]
					},
					markLine: {
						data: [{
							type: 'average',
							name: '平均值'
						}]
					}
				},
				{
					name: '最低',
					type: 'line',
					data: [1, -2, 2, 5, 3, 2, 0],
					markPoint: {
						data: [{
							name: '周最低',
							value: -2,
							xAxis: 1,
							yAxis: -1.5
						}]
					},
					markLine: {
						data: [{
							type: 'average',
							name: '平均值'
						}]
					}
				}
			]
		});
	}
	render() {
		let {
			total,
			totalList,
			num,
			data
		} = this.props;
		totalList();
		total();
		console.log(data, num);
		if(Array.isArray(data)) {
			data = data.length
		}
		return(
			<div className="content-right">
                <div className='List'>
                <div className='content-wrap'>
                    {/* <h1>这是首页</h1> */}
                    <div className='firstP'>
                        <div className='fHeader'>
                            <ul className='fUl'>
                                <li className='fLi'>
                                    <span className='headBg'></span>
                                    <p>
                                        <span className='totO'>{num}条</span>
                                        <span className='totL'>总订单数量</span>
                                    </p>
                                </li>
                                <li className='fLi'>
                                    <span className='headBg'></span>
                                    <p>
                                        <span className='totO'>{data}个</span>
                                        <span className='totL'>管理员人数</span>
                                    </p>
                                </li>
                                {/* <li className='fLi'>
                                    <span className='headBg'></span>
                                    <p>
                                        <span className='totO'>30条</span>
                                        <span className='totL'>总订单数量</span>
                                    </p>
                                </li> */}
                            </ul>
                        </div>
                        <div className='tub'>
                            <div id="main">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
		);
	}
}

export default connect((state, ownProps) => {
	console.log(state)
	return {
		data: state.reducer2.ord,
		num: state.reducer2.num

	}
}, (dispatch) => bindActionCreators(actions, dispatch))(withRouter(Main));