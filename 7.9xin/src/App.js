import React, { Component } from 'react';
import {Route,Link,Redirect,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './js/action';
import cookie from 'react-cookies'
import './css/index.css';
import './css/memlist.css'
import './css/mfrom.css';
import './css/order.css';
import {renderComponent} from './js/routers';
import Login from './Subcomponent/login'
import NavLeft from './js/index';
import Master from './Subcomponent/master';
import MenDel from './Subcomponent/menDel';
import Orderd from './Subcomponent/Order down';
import Tarck from './Subcomponent/tarck';
import Price from './Subcomponent/price';
import Posting from './Subcomponent/posting';
import AddPosting from './Subcomponent/addPosting';
import Admin from './Subcomponent/admin';
import Main from './Subcomponent/main';
import Tu from './Subcomponent/tubiao';
import Map from './Subcomponent/map';
import News from './Subcomponent/news';
import Rout from './js/router';
class App extends Component {
	constructor(props) {
		super(props);
		this.state={
			arr:['首页'],
			arr2:['/main'],
			oid:0,
			timer:null,
			news:[]
		}
	}
	// componentDidCatch(){
	// 	let {findOne} = this.props;
	// 	console.log(findOne);
	// }
    navLeft = (ev) => {
    if (ev.target.tagName == 'SPAN') {
       NavLeft(ev.target);
    }
	}
	click = (ev) => {
		let {arr,arr2} = this.state;
		let a = ev.target.innerHTML.slice(12);
		let b = ev.target.getAttribute('href');
		arr = [...new Set(arr)];
		arr2 = [...new Set(arr2)];
		arr.push(a);
		arr2.push(b);

		//判断再次点击的内容，数组里是否已经有了，有了，就拿那个索引，
			let n = arr.findIndex((e,i) => {
				return e == a
			})
		this.setState({arr,arr2,oid:n});
	}
	breaClick = (ev) => {
		if(ev.target.tagName=='DIV'){

			let a = ev.target.getAttribute('nid');

			this.setState({oid:a})

		}else if(ev.target.tagName=='I'){

			let {arr,arr2,oid} = this.state;

			arr = [...new Set(arr)];

			let id = ev.target.getAttribute('id')*1;

			let a = arr2.filter(e=>{

				return arr2[id] !== e;
			})
			let b = arr.filter(e=>{
				return arr[id] !== e;
			})
			//让className跟着动
			let c = arr.length-2;
			let l = '';
			if(arr.length>1){
					l = a[a.length - 1].slice(1);
			}else {
					l = '';
			}
			this.setState({arr:b,arr2:a,oid:c},function(){
				let { history } = this.props;
				history.push('/'+l);
			})
		}

	}
	//更改手机的时候
	phC = (ev) => {
		
	}
	//修改邮箱的时候
	emC = () => {

	}
	//输入原始密码的时候
	yuan = () => {

	}
	//输入新密码
	changePr = () => {

	}
	//再次输入新密码
	changeOnce = () => {

	}
	
    render() {
		let {store,data} = this.props;
		let {history} = this.props;
		if(!cookie.load('level')){
			history.push('/')
		 }
	// 	let l = data.map(e=>{
	// 		return <div key={Math.random(e._id)} className='information'>
	// 						<p>
	// 							<span>账户名</span>
	// 							<span>{e.content}</span>
	// 						</p>
	// 						<p>
	// 							<span>手机</span>
	// 							<span>{e.phone}</span>
	// 						</p>
	// 						<p>
	// 							<span>邮箱</span>
	// 							<span>{e.email}</span>
	// 						</p>
	// 						<p>
	// 							<span>用户等级</span>
	// 							<span>{e.level}</span>
	// 						</p>
	// 						<div
	// 							onClick = {this.wandChange}
	// 							className='minfo'>修改信息</div>
	// 						<div
	// 							onClick = {this.mN}
	// 							className='mpN'>取消</div>
	// 					</div>
	// 	})
	// 	let p = data.map(e=>{
	// 	return 	<div key={Math.random(e.id)} className='changeMain'>
	// 					<p>
	// 						<span>手机</span>
	// 						<input
	// 							onChange={this.phC}
	// 							type='text'
	// 						    className='phoneZ' 
	// 						    value={e.phone} />
	// 					</p>
	// 					<p>
	// 						<span>邮箱</span>
	// 						<input 
	// 							onChange={this.emC}
	// 							type='text'
	// 						    className='emailZ' 
	// 						    value={e.email} />
	// 					</p>
	// 					<p>
	// 						<span>账户密码</span>
	// 						<input 
	// 							onChange = {this.yuan}
	// 							yid = {e.pw}
	// 							className='yPass'
	// 							type='password' placeholder='请输入原始密码'/>
	// 						<input
	// 							onChange = {this.changePr}
	// 							className='mustSure' type='password' placeholder='输入更改密码'/>
	// 						<input 
	// 							onChange = {this.changeOnce}
	// 							className='onceSure' type='password' placeholder='再次输入更改密码'/>
	// 					</p>
	// 					<p className='grade'>
	// 						<span>用户等级</span>
	// 						<select className='levelZ'>
	// 							<option>0</option>
	// 							<option>1</option>
	// 						</select>
	// 					</p>
	// 					<div 
	// 						onClick = {this.updata}
	// 						nid = {e.id}
	// 						className='minSure'>确认修改</div>
	// 					<div 
	// 						onClick = {this.canl}
	// 						className='cancel'>取消</div>
	// 				</div>
	// })

	let {arr,arr2,oid} = this.state;
	// console.log(arr,arr2)
	//去重
	arr = [...new Set(arr)];
	arr2 = [...new Set(arr2)];
	//将内容放进去
	let arr3 = arr.map((e,i1)=>{
				return <div 
							className={i1==oid?'active':''} 
							key={i1}
							nid = {i1}
							onClick = {this.breaClick}
							>{e}
							<i
								id={i1}
								// onClick = {this.delClick}
							>X</i>
						</div>
				})
			// console.log(arr3)
			//将路由放进去
	let newArr = arr2.map((e,i)=>{
		// console.log(e)
		return  <Link to={e} key={i}>
								{arr3[i]}
						</Link>
	})
    return (
    <div id='wraper'>
			<div id='header'>
				<div id='header_left'>
					<a href='javascript:'>后台管理系统</a>
					{/* <img className='hradLift-img' src={require('./img/header-nav.jpg')} />
					<div>+新增
						<span></span>
					</div>
					<ul className='leftList'>
						<li>
							<img src={require('./img/list-menu.jpg')} /> 资讯
						</li>
						<li>
							<img src={require('./img/list-menu2.jpg')} /> 图片
						</li>
						<li>
							<img src={require('./img/list-menu3.jpg')} /> 用户
						</li>
					</ul> */}
				</div>
				<News/>
				{/* <div id='header_right'>
					<a href='javascript:;'>前台首页</a>
					<div 
						onMouseOver = {this.admiOver}
						onMouseOut = {this.admiOut}
						className='adm'>
					    <span>admin</span>
						<i></i>
					</div>
					<ul
						onMouseOver = {this.rig}
						onMouseOut = {this.rigOut}
						className='rightList'>
						<li
							onClick = {this.changeIn}
						>个人信息</li>
						<li>切换账号</li>
						<li 
							onClick = {this.removeCookies}
						>退出</li>
					</ul>
				</div> */}
			</div>
			<div id='content'>
        <div
           id='main-left'
           onClick = {this.navLeft}   
        >
					<div>
						<span>订单管理<i>></i></span>
						< ul className = 'mainLeftActive' >
							<li>
               <Link to='/menDel' oid='1'  onClick={this.click}> <i>></i>订单查询 </Link>
              </li>
							<li>
                < Link to = '/order' oid='2'  onClick={this.click}> <i>></i>我要下单 </Link>
              </li>
						</ul>
					</div>
					<div>
						<span>运单追踪<i>></i></span>
						< ul className = 'mainLeftActive' >
							<li>
                <Link to='/tarck' oid='3'  onClick={this.click}> <i>></i>运单追踪 </Link>
                </li>
						</ul>
					</div>
					<div>
						<span>运费时效查询<i>></i></span>
						< ul className = 'mainLeftActive' >
							<li>
              < Link to = '/price' oid='4'  onClick={this.click}> < i >></i>运费时效查询</Link >
                </li>
						</ul>
					</div>
					<div>
						<span>收寄范围查询<i>></i></span>
						< ul className = 'mainLeftActive' >
							<li>
               <Link to='/posting' oid='6'  onClick={this.click}> <i>></i>收寄范围查询</Link>
                </li>
							<li>
                < Link to = '/addposting' oid='7'  onClick={this.click}> < i >></i>添加收寄范围</Link >
              </li>
						</ul>
					</div>
					<div>
						<span>管理员管理<i>></i></span>
						< ul className = 'mainLeftActive' >
							<li>
               <Link to='/admin' oid='8'  onClick={this.click}> <i>></i>管理员列表</Link>
              </li>
						</ul>
					</div>
					<div>
						<span>系统统计<i>></i></span>
						< ul className = 'mainLeftActive' >
							<li>
								<Link to='/tu' oid='9'  onClick={this.click}> <i>></i>折线/柱状图</Link>
							</li>
							<li>
								<Link to='/map' oid='9'  onClick={this.click}> <i>></i>地图</Link>
								</li>
						</ul>
					</div>
				</div>
				<div className='main-right'>
						<div id='explain'>
						{newArr}
						</div>
           				{renderComponent(Rout)} 
					</div>
				</div>
			
				<div className='footer'></div>
			</div>
    );
  }
}
// export default connect((state, ownProps) => {
// 	console.log(state)
// 	return {
// 		data: state.reducer1.news,
// 	}
// }, (dispatch) => bindActionCreators(actions, dispatch))(withRouter(App));

export default withRouter(App);


