import React, {
	Component
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import *as actions  from "../js/action";
class Master extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrT:{
				id:+new Date,
				name: '',
				sex: '',
				phone: '',
				email: '',
				address: '',
				joinTime: +new Date
			}
		};
	}
	componentDidMount(){
		 let {axiosData} = this.props;
		//  console.log(axiosData)
		 axiosData()
	}
	addClick = () => {
		let a = document.querySelector('.addList')
		a.style.display = 'block';
	}
	close = () => {
		let a = document.querySelector('.addList')
		a.style.display = 'none';
	}
	addArr = () => {
		//拿到添加框的内容
			let specific = document.querySelector('.specific');
			let inputs = specific.querySelectorAll('input');
			let {arrT} = this.state;
			let att = Object.keys(arrT);
			let arr = [];


			// for( )


			// for (let i = 0; i < inputs.length;i++){
			// 	// arrT[i] = inputs[i];
			// 	// arr = arrT[i]
			// }
			// console.log(arr)

	}
	render() {
		let {data} = this.props;
		console.log(data)
		let arr = data.map(e => {
			return (<tr key={e.id}>
						<td>
							<input type='checkbox' />
						</td>
						<td>{e.id}</td>
						<td>{e.name}</td>
						<td>{e.sex}</td>
						<td>{e.phone}</td>
						<td>{e.email}</td>
						<td>{e.address}</td>
						<td>{e.joinTime}</td>
						<td>
							<i className='state'>已启用</i>
						</td>
						<td>
							<span className='downbj'></span>
							<span className='editbj'></span>
							<span className='modifybj'></span>
							<span className='delbj'></span>
						</td>
					</tr>
			)
		})
		return(
			<div className="content-right">
						<div className='list'>
						<div className='content-wrap'>
							{/* <div id='breadmenu'>
								<a href="javascript:;">首页<i>></i></a>
								<a href="javascript:;">演示<i>></i></a>
								<span className="navv">导航元素</span>
								<img id='refresh' src={require('../img/reload.gif')} />
							</div> */}


							
							<div id='details'>
								<div className='search-user'>
									<input placeholder="请输入用户名" className='searchtxt' type="text" />
									<div className='search-btn2'><i></i></div>
								</div>
								<div className='doIt'>
									<span className='doItdel'>
							   <img src={require('../img/del.gif')} />
							  <i>批量删除</i>
						   </span>
							<span className='doItadd'
								onClick={this.addClick}
							>
							   <img src={require('../img/pluse.gif')} />
							   <i>添加</i>
						   </span>
									<span className='doItto'>共有数据：88条</span>
								</div>
								<div>
									<table border= '1'  cellSpacing="0" cellPadding="0" bordercolor='#ccc' id="mfrom" >
										<thead>
											<tr>
												<th><input type='checkbox' /></th>
												<th>ID</th>
												<th>用户名</th>
												<th>性别</th>
												<th>手机</th>
												<th>邮箱</th>
												<th>地址</th>
												<th>加入时间</th>
												<th>状态</th>
												<th>操作</th>
											</tr>
										</thead>
										<tbody>
											{arr}
										</tbody>
									</table>
								</div>
								<div className='nav'>
									<ul className='nav-list'>
										<li>上一页</li>
                                        <li>1</li>
                                        <li>2</li>
                                        <li className='active'>3</li>
                                        <li>4</li>
                                        <li>下一页</li>
                                    </ul>
                                </div>

                            </div>
							<div className='addList'>
							<div className='addDiv'>
								<div className='addUser'>
									<p>添加用户</p>
									<i
										onClick = {this.close}
									>X</i>
								</div>
								<ul className='specific'>
									<li>
										<span><b><i>*</i>用户名</b></span>
										<input type='text' />
									</li>
									<li>
										<span><b><i>*</i>性别</b></span>
										<input type='text' />
									</li>
									<li>
										<span><b><i>*</i>手机</b></span>
										<input type='text' />
									</li>
									<li>
										<span><b><i>*</i>邮箱</b></span>
										<input type='text' />
									</li>
									<li>
										<span><b>地址</b></span>
										<input type='text' />
									</li>
									<li>
										<span><b><i>*</i>密码</b></span>
										<input type='text' />
									</li>
									<li>
										<span><b><i>*</i>确认密码</b></span>
										<input type='text' />
									</li>
								</ul>
								<div 
									className='addBtn'
									onClick={this.addArr}
								>确认添加</div>
							</div>
						</div>
						</div>
						
                        </div> 
                        </div>
		);
	}
}

// export default Master;
export default connect((state, ownProps) => {
	//ownProps
	// console.log(ownProps)
	// ownProps是父级传过来的
	// console.log(state)
	console.log(state)
	return {
		data: state.reducer1
	};
},(dispatch)=>bindActionCreators( actions,dispatch))(Master);
