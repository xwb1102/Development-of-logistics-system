import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import './css/index.css';
import './css/memlist.css'
import './css/mfrom.css';
import './css/order.css';
import {renderComponent} from './js/routers';
import NavLeft from './js/index';
import Master from './Subcomponent/master';
import MenDel from './Subcomponent/menDel';
import Orderd from './Subcomponent/Order down';
import Tarck from './Subcomponent/tarck';
import Price from './Subcomponent/price';
import Posting from './Subcomponent/posting';
import AddPosting from './Subcomponent/addPosting';
import Admin from './Subcomponent/admin';

let router = [
  {
    path: '/',
    exact: true,
    component: Master
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
    path:'/admin',
    component:Admin
  }
  
]
class App extends Component {

  navLeft = (ev) => {
    if (ev.target.tagName == 'SPAN') {
       NavLeft(ev.target);
    }
  }
  render() {
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
					<div>
						<span>会员管理<i>></i></span>
						< ul className = 'mainLeftActive' >
							<li>
               <Link to='/master' ><i>></i>会员列表</Link>
                </li>
						</ul>
					</div>
					<div>
						<span>订单管理<i>></i></span>
						< ul className = 'mainLeftActive' >
							<li>
               <Link to='/menDel'> <i>></i>订单查询 </Link>
              </li>
							<li>
                < Link to = '/order' > < i >> </i>我要下单 </Link>
              </li>
						</ul>
					</div>
					<div>
						<span>运单追踪<i>></i></span>
						< ul className = 'mainLeftActive' >
							<li>
                <Link to='/tarck' ><i>></i>运单追踪 </Link>
                </li>
						</ul>
					</div>
					<div>
						<span>运费时效查询<i>></i></span>
						< ul className = 'mainLeftActive' >
							<li>
              < Link to = '/price' > < i >> </i>运费时效查询</Link >
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
               <Link to='/posting' ><i>></i>收寄范围查询</Link>
                </li>
							<li>
                < Link to = '/addposting' > < i >> </i>添加收寄范围</Link >
              </li>
						</ul>
					</div>
					<div>
						<span>管理员管理<i>></i></span>
						< ul className = 'mainLeftActive' >
							<li>
               <Link to='/admin' > <i>></i>管理员列表</Link>
              </li>
							<li><i>></i>权限管理</li>
						</ul>
					</div>
					<div>
						<span>系统统计<i>></i></span>
						< ul className = 'mainLeftActive' >
							<li><i>></i>折线图</li>
							<li><i>></i>柱状图</li>
							<li><i>></i>地图</li>
							<li><i>></i>饼图</li>
							<li><i>></i>雷达图</li>
							<li><i>></i>k线图</li>
							<li><i>></i>热力图</li>
							<li><i>></i>仪表图</li>
						</ul>
					</div>
				</div>
				<div className='main-right'>
           {renderComponent(router)} 
					</div>
				</div>
			</div>
    );
  }
}

export default App;
