import React,{Component} from 'react'
import '../css/login.css';
import {Route,Link,Redirect,withRouter} from 'react-router-dom';
import cookie from 'react-cookies';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
	}
	 reg = async() => {
		let use = this.refs['user'].value;
		let pass = this.refs['pass'].value;
		if(use && pass){
			let data = await fetch('http://localhost:88/api/weibo/login', {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				method: 'post',
				body: new URLSearchParams({
					username: use,
					password: pass
				}).toString()
			});
			let res = await data.json();
			console.log(res);
			if(res.code == 0){
				alert('成功登录！')
			let {history} = this.props;
				console.log(cookie.load('level'))
					cookie.save('user', use, { path: '/' })
					cookie.save('level', res.userInfo.level, { path: '/' })
					history.push('/main')
			}
			if(res.code == -3){
				alert('用户不存在或密码错误')
			}
			console.log(res)
			return res;
		}else{
			alert('请将内容填写完整')
		}
	}
    render() {
		let {history} = this.props;
		
		if(cookie.load('level')){
			history.push('/main')
		 }
		// else{
		// 	 history.push('/')
		//  }
        return (
			<div className='login'>
				<div className="login-wrap">
					<div className="title">
						<h3>管理登录</h3>
						<i className="shadow-icon"></i>
					</div>
					<form className="layui-form">
						<input
							 type="text"
							  className="inp"
							   placeholder="用户名"
							   ref='user'
						/>
						<input
							 type="password"
							 className="inp"
							 placeholder="密码" 
							 ref='pass'
						/>
					<input 
						type="button" 
						className="btn" 
						value="登录" 
						onClick = {this.reg}	
					/>
					</form>
				</div>

			</div>
        );
    }
}

export default withRouter(Login);