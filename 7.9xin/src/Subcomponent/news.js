import React, { Component } from 'react';
import {Route,Link,Redirect,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../js/action';
import cookie from 'react-cookies'
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
	admiOver = () => {
		// console.log('移入')
		let {timer} = this.state;
		clearInterval(timer);
		let rightList = document.querySelector('.rightList');
		rightList.style.display = 'block';
	}
	admiOut = () => {
		// console.log('移出')
		let {timer} = this.state;
		let rightList = document.querySelector('.rightList');
		timer = setTimeout(() => {
			rightList.style.display = 'none';
		}, 1000);
		this.setState({timer})
	}
	rig = () => {
		let {timer} = this.state;
		clearInterval(timer);
		let rightList = document.querySelector('.rightList');
		rightList.style.display = 'block';
	}
	rigOut = () => {
		let {timer} = this.state;
		let rightList = document.querySelector('.rightList');
		rightList.style.display = 'none'; 
	    timer = setTimeout(() => {
			rightList.style.display = 'none';
		}, 1000);
		this.setState({timer});
	}
	//删除cookies
	removeCookies = () =>{
		let a = cookie.load('user');
		console.log(a,'删COO了');
		cookie.remove('level', true);
		cookie.remove('user', true);
		let {history} = this.props;
		history.push('/')
	}
	//点击查看个人信息
	changeIn = () => {
		let {findOne} = this.props;
		let personal = document.querySelector('.personal');
		personal.style.display = 'block';
		let a = cookie.load('user');
		findOne(a);
		setTimeout(() => {
			let {data} = this.props;
			// console.log(data);
		}, 100);
		// console.log(a);
		// console.log(findOne)
	}
	//点击取消查看个人信息
	mN = () => {
		let personal = document.querySelector('.personal');
		personal.style.display = 'none';
	}
	//点击修改信息
	wandChange = () => {
		let changeInfo = document.querySelector('.changeInfo');
		let personal = document.querySelector('.personal');
		personal.style.display = 'none';
		changeInfo.style.display = 'block';
		let grade = document.querySelector('.grade');
		if (cookie.load('level') == 0) {
			grade.style.display = 'none';
		}
	}
	//点击取消修改信息
	canl = () => {
		let changeInfo = document.querySelector('.changeInfo');
		changeInfo.style.display = 'none';
    }
    //确认修改信息
	updata = () => {
		let {
			upda
		} = this.props;
		
		let p = document.querySelector('.phoneZ');
		let e = document.querySelector('.emailZ');
		let ms = document.querySelector('.mustSure');
		let ps = document.querySelector('.onceSure');
		let l = document.querySelector('.levelZ');
		let minSure = document.querySelector('.minSure');
		let i = minSure.getAttribute('nid');
		let yPass = document.querySelector('.yPass');
		let y = yPass.getAttribute('yid');
		let yv = yPass.value;
		//判断所有的内容不为空的时候，才发起更改请求
		if(p.value&&e.value&&ps.value){
			//判断输入的密码是否与原始的密码相同
			if(y==yv){
				//判断两次输入的新密码是否相同
				if(ms.value==ps.value){
					upda(p.value, e.value, ps.value, l.value, i)
					let changeInfo = document.querySelector('.changeInfo');
					changeInfo.style.display = 'none';
				}else{
					alert('两次输入的密码不同')
				}
			}else{
				alert('原密码有误')
			}
		}else{
			alert('内容不能为空')
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
	hPage = () => {
		let {history} = this.props;
		history.push('/main')
	}
    render() {
        let {data} = this.props;
        	let l = data.map(e=>{
        		return <div key={Math.random(e._id)} className='information'>
        						<p>
        							<span>账户名</span>
        							<span>{e.content}</span>
        						</p>
        						<p>
        							<span>手机</span>
        							<span>{e.phone}</span>
        						</p>
        						<p>
        							<span>邮箱</span>
        							<span>{e.email}</span>
        						</p>
        						<p>
        							<span>用户等级</span>
        							<span>{e.level}</span>
        						</p>
        						<div
        							onClick = {this.wandChange}
        							className='minfo'>修改信息</div>
        						<div
        							onClick = {this.mN}
        							className='mpN'>取消</div>
        					</div>
        	})
        	let p = data.map(e=>{
        	return 	<div key={Math.random(e.id)} className='changeMain'>
        					<p>
        						<span>手机</span>
        						<input
        							onChange={this.phC}
        							type='text'
        						    className='phoneZ' 
        						    value={e.phone} />
        					</p>
        					<p>
        						<span>邮箱</span>
        						<input 
        							onChange={this.emC}
        							type='text'
        						    className='emailZ' 
        						    value={e.email} />
        					</p>
        					<p>
        						<span>账户密码</span>
        						<input 
        							onChange = {this.yuan}
        							yid = {e.pw}
        							className='yPass'
        							type='password' placeholder='请输入原始密码'/>
        						<input
        							onChange = {this.changePr}
        							className='mustSure' type='password' placeholder='输入更改密码'/>
        						<input 
        							onChange = {this.changeOnce}
        							className='onceSure' type='password' placeholder='再次输入更改密码'/>
        					</p>
        					<p className='grade'>
        						<span>用户等级</span>
        						<select className='levelZ'>
        							<option>0</option>
        							<option>1</option>
        						</select>
        					</p>
        					<div 
        						onClick = {this.updata}
        						nid = {e.id}
        						className='minSure'>确认修改</div>
        					<div 
        						onClick = {this.canl}
        						className='cancel'>取消</div>
        				</div>
        })
        return (
            <div>
            <div id='header_right'>
					<a
						onClick = {this.hPage}
						href='javascript:;'>前台首页</a>
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
						<li
							onClick = {this.removeCookies}
						>切换账号</li>
						<li 
							onClick = {this.removeCookies}
						>退出</li>
					</ul>
			</div>
                <div className='personal'>
                    {l}
                </div>
                <div className='changeInfo'>
                    {p}
                </div>
            </div>
        );
    }
}

export default connect((state, ownProps) => {
	console.log(state)
	return {
		data: state.reducer1.news,
	}
}, (dispatch) => bindActionCreators(actions, dispatch))(withRouter(News));