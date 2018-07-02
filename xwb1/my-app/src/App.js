import React, { Component } from 'react';
import {Route,Link,Redirect,withRouter} from 'react-router-dom';
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
let router = [
  {
    path: '/',
    exact: true,
    component: Login
	},
	{
		path:'/main',
		exact: true,
		component:Main
	},
  {
    path:'/master',
    component:Master
  },
  {
    path: '/menDel',
    component: MenDel
  },
  {
    path: '/order',
    component: Orderd
  },
  {
    path: '/tarck',
    component: Tarck
  },
  {
    path:'/price',
    component:Price
  },
  {
    path:'/posting',
    component:Posting
  },
  {
    path:'/addposting',
    component:AddPosting
  },
  {
    path:'/admin/:id',
		// component:Admin
		render:(props)=><Admin url={props}/>
		
	},
	{
		path:'/tu',
		component:Tu
	},
	{
		path:'/map',
		component:Map
	}
  
]
class App extends Component {
	constructor(props) {
		super(props);
		this.state={
			arr:['首页'],
			arr2:['/main'],
			oid:0
		}
	}
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
	// delClick = (ev) => {
	// 	if (ev.target.tagName=='I'){
	// 		ev.stopPropagation();
	// 		let {arr,arr2,oid} = this.state;
	// 		arr = [...new Set(arr)];
	// 		let id = ev.target.getAttribute('id')*1;
	// 		let a = arr2.filter(e=>{
	// 			return arr2[id] !== e;
	// 		})
	// 		let b = arr.filter(e=>{
	// 			return arr[id] !== e;
	// 		})
	// 		let c = arr.length;
	// 		console.log(ev.target.tagName)
	// 		this.setState({arr:b,arr2:a,oid:c})
	// 	}
	// }
  render() {
	let {store} = this.props;
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
					<img className='hradLift-img' src={require('./img/header-nav.jpg')} />
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
					</ul>
				</div>
				<div id='header_right'>
					<a href='javascript:'>前台首页</a>
					<div>admin
						<span></span>
					</div>
					<ul className='rightList'>
						<li>个人信息</li>
						<li>切换账号</li>
						<li>退出</li>
					</ul>
				</div>
			</div>
			<div id='content'>
        <div
           id='main-left'
           onClick = {this.navLeft}   
        >
					{/* <div>
						<span>会员管理<i>></i></span>
						< ul className = 'mainLeftActive' >
							<li>
               <Link to='/master' oid='0' onClick={this.click}> <i>></i>会员列表</Link>
              </li>
						</ul>
					</div> */}
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
							<li>
                <i>></i>添加时效
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
               <Link to='/admin/0' oid='8'  onClick={this.click}> <i>></i>管理员列表</Link>
              </li>
							<li><i>></i>权限管理</li>
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
						{/* <div id='breadmenu'>
								<a href="javascript:;">首页
										<i>></i>
								</a>
								<span className="navv">导航元素</span>
								<img id='refresh' src={require('./img/reload.gif')} />
						</div> */}
           {renderComponent(router)} 
					</div>
				</div>
				<div className='footer'></div>
			</div>
    );
  }
}

export default withRouter(App);
