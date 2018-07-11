import React, {
	Component
} from 'react';
import '../css/addRs.css';
import { Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../js/action';
import Tab from './tanbox';

class AddPosting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prompt:'啥啊'
		};
	}
	//点击添加
	sAdd = () => {
		let tanBoxs = document.querySelector('.tanBoxs');
		let tanSuer = document.querySelector('.tanSuer');
		let inps = document.querySelectorAll('.rsRess input');
		let a = inps[0].value;
		let b = inps[1].value;
		let t = this.refs.pro.refs.pro;
		if(a && b) {
			tanBoxs.style.display = 'block';
			tanSuer.innerHTML = '确认添加?'
		} else {
			t.style.opacity = 1;
			t.style.zIndex = '66';
			setTimeout(() => {
				t.style.opacity = 0;
				t.style.zIndex = '-1';
			}, 2000);
			this.setState({
				prompt: '请将内容填写完整'
			})
		}
	}
	//点击取消
	cliclD = () => {
		let tanBoxs = document.querySelector('.tanBoxs');
		let tanSuer = document.querySelector('.tanSuer');
		let inps = document.querySelectorAll('.rsRess input');
		let t = this.refs.pro.refs.pro;
		let a = inps[0].value;
		let b = inps[1].value;
		if(a && b) {
			tanBoxs.style.display = 'block';
			tanSuer.innerHTML = '确认删除?'
		} else {
			t.style.opacity = 1;
			t.style.zIndex = '66';
			setTimeout(() => {
				t.style.opacity = 0;
				t.style.zIndex = '-1';
			}, 2000);
			this.setState({
				prompt: '请将内容填写完整'
			})
		}

	}
	//确认添加或删除
	sureAttr = () => {
		let {
			searchAdd,
			xuanAll,
			rexin
		} = this.props;
		let tanBoxs = document.querySelector('.tanBoxs');
		let tanSuer = document.querySelector('.tanSuer');
		let inps = document.querySelectorAll('.rsRess input');
		let t = this.refs.pro.refs.pro;
		let arr = [];
		let arr2 = [];
		let a = inps[0].value;
		let b = inps[1].value;
		arr.push(inps[1].value);
		let d = tanSuer.innerHTML;

		if(d == '确认添加?') {
			// let a = inps[2].value;
			// arr.push(a)
			// arr2.push(inps[1].value);
			//拿到所有的数据，用来下面对比
			xuanAll();
			// console.log(arr);
			// searchAdd(inps[0].value,JSON.stringify(arr2), JSON.stringify(arr));
			let that = this;
			setTimeout(() => {
				let {
					data,
					all
				} = this.props;
				console.log(all, all[0]);
				if(all[0]) {
					let ab = all[0].find((e, i) => {
						return e.province == a;
					})
					let bb = all[0].find((e, i) => {
						return e.county.some(e => {
							return e == b;
						});
					})
					console.log(ab);
					console.log(bb);
					//判断是否省级相同
					if(ab) {
						console.log('-1')
						if(bb) {
							alert('该地点已经有了')
							return
						} else {
							let arr4 = [];
							arr4.push(ab)
							console.log(arr4)
							arr4.forEach(e => {
								e.county.push(b);
								rexin(e.id, JSON.stringify({
									county: e.county
								}))
							})
						}
					} else {
						console.log('这是个新数据')
						searchAdd(a, JSON.stringify(arr));
					}
				}
			}, 100);
		}
		if(d == '确认删除?') {
			console.log('进入删除了')
			// let {delAttr} = this.props;
			// delAttr(inps[0].value);
			xuanAll();
			let that = this;
			setTimeout(() => {
				let {
					data,
					all
				} = this.props;
				console.log(all, all[0]);
				if(all[0]) {
					let ab = all[0].find((e, i) => {
						return e.province == a;
					})
					let bb = all[0].find((e, i) => {
						return e.county.some(e => {
							return e == b;
						});
					})
					console.log(ab);
					console.log(bb);
					//判断是否省级相同
					if(ab) {
						console.log('-1')
						if(bb) {
							let arr4 = [];
							arr4.push(bb)
							console.log(arr4)
							let ar = arr4[0].county;
							// console.log(typeof ar)
							// ar.forEach(e=>{
							let a = ar.findIndex(e => {
								return e == b
							})
							// console.log(a)
							let bc = ar.filter((e, i) => {
								return i !== a;
							});
							console.log(bc);
							rexin(arr4[0].id, JSON.stringify({
								county: bc
							}))
							// })
							return
						} else {
							t.style.opacity = 1;
							t.style.zIndex = '66';
							setTimeout(() => {
								t.style.opacity = 0;
								t.style.zIndex = '-1';
							}, 2000);
							this.setState({
								prompt: '没有该地址'
							})
						}
					} else {
						t.style.opacity = 1;
						t.style.zIndex = '66';
						setTimeout(() => {
							t.style.opacity = 0;
							t.style.zIndex = '-1';
						}, 2000);
						this.setState({
							prompt: '没有该地址'
						})
					}
				}
			}, 100);
		}
		tanBoxs.style.display = 'none';
		inps[0].value = inps[1].value = '';

	}
	//确认取消
	tanO = () => {
		let tanBoxs = document.querySelector('.tanBoxs');
		tanBoxs.style.display = 'none';
	}
	render() {
		let {prompt} = this.state;
		return(
			<div className='content-wrap'>
				<Tab ref='pro' nr = {prompt} />
                    <div className='addRang'>
                    <div className='selectFree'></div>
                        <div className='addRs'>
                            <h3 className='rsText'>添加收寄范围</h3>
                            <div className='rsRess'>
                                <span>省/市</span><input type='text' placeholder="请输入地址" />
                                <span>县/街道</span><input type='text' placeholder="请输入地址" />
                                {/* <input type='text' placeholder="具体街道" /> */}
                            </div>
                            <span
                                onClick={this.sAdd}
                                className='ressBtn'>添加</span>
                            <span
                                onClick = {this.cliclD}
                                className='ressDel'>删除</span>
                            {/* <div className='addDet'>
                                <p className='bigAdd'>
                                    <span>大陆</span>
                                    <span>港澳台</span>
                                    <span>国际</span>
                                </p>
                                <ul className='addMenu'>
                                    <li>常用市</li>
                                    <li>省/直辖市</li>
                                    <li>请选择</li>
                                </ul>
                                <div className='smAdd'>
                                    <ul className='cang'>
                                        <li>仓山区</li>
                                        <li>晋安区</li>
                                        <li>闽侯区</li>
                                        <li>鼓楼区</li>
                                        <li>马尾区</li>
                                        <li>台江区</li>
                                        <li>长乐区</li>
                                        <li>连江县</li>
                                        <li>闽清县</li>
                                        <li>福清县</li>
                                        <li>罗源县</li>
                                        <li>平潭县</li>
                                        <li>永泰县</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className='addSure'>
                            <p>福建省-南平市-政和县-熊山街道</p>
                            <button
                                onClick={this.sAdd}
                                className='ressBtn'>添加</button>
                        </div>
                        <div
                            onClick= {this.tN}
                             className='delSure'>
                            <p>福建省-南平市-政和县-熊山街道</p>
                            <button
                                onClick = {this.cliclD}
                                className='ressDel'>删除</button>
                        </div> */}
                    </div>
                    <div className='tanBoxs'>
                        <div className='tanMain'>
                            <h3 className='tanSuer'>确认添加?</h3>
                            <span
                                onClick = {this.tanO}
                                className='tanNo'>取消</span>
                            <span
                                onClick = {this.sureAttr}
                                className='tanYes'>确定</span>
                        </div>
                    </div>
                </div>
		);
	}
}

export default connect((state, ownProps) => {
	console.log(state)
	return {
		data: state.reducer3.ord,
		all: state.reducer3.block
	}
}, (dispatch) => bindActionCreators(actions, dispatch))(AddPosting);