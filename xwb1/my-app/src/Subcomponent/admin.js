import React, {
	Component
} from 'react';
import '../css/tarck.css';
import {Route,Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../js/action';

class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
            num:1
		};
	}
	frender = (time) => {
		let date = new Date(time); //传入一个服务器的时间
		let iYear = date.getFullYear();
		let iMoun = date.getMonth() + 1;
		let iH = date.getHours();
		let iM = date.getMinutes();
		let iDate = date.getDate();
		let iS = date.getSeconds();
		let str = iYear + '-' + this.tDou(iMoun) + '-' + this.tDou(iDate);
		str += ' ' + this.tDou(iH) + ':' + this.tDou(iM) + ':' + this.tDou(iS);
		return str
	}
	tDou = (i) => {
		return i < 10 ? '0' + i : '' + i;
    }
	componentDidMount() {
		let {
			axiosData,
            data,
            page, 
            total,
            tot
        } = this.props;
        page();
        axiosData();
        total();
        console.log(tot)
    }
    pageClick = (i) =>{
        let {num} = this.state;
        num = i;
       let {axiosData} = this.props;
       this.setState({num})
       axiosData(i)
    }
    firstLi = () => {
        let {num} = this.state;
        num--;
        if(num<1){
            num=1;
        }
        let {axiosData} = this.props;
        axiosData(num)
        this.setState({num})
    }
    nextLi = () =>{
        let {num} = this.state;
        let {axiosData,pageNumAll} = this.props;
        num++;
        if (num > pageNumAll) {
            num = pageNumAll;
        }
        axiosData(num)
        this.setState({num})
    }
    add = () => {
        let a = document.querySelector('.addList');
        a.style.display = 'block';
    }
    //添加表单
    addArr = () => {

        let ab = document.querySelector('.specific');
        let a = document.querySelector('.addList');
        let {addN,axiosData,page,total} = this.props;
        let {num} = this.state;
        let inp = ab.querySelectorAll('input');
        let arr = [];
        for(let i = 0;i<inp.length;i++){
            arr.push(inp[i].value);
        }
        if(!arr.some(e=>e=='')){
            addN(arr[0], arr[2], arr[3]);
            axiosData();
            page();
            total();
            for (let i = 0; i < inp.length; i++) {
                inp[i].value = '';
            }
            a.style.display = 'none';
            num = 1;
            this.setState({num})
        }else{
            alert('请填完整！')
        }
    }
    close = () => {
        let a = document.querySelector('.addList');
        a.style.display = 'none';
    }
    open = (id,num) => {
        let {openLi,axiosData} = this.props;
        openLi(id);
        //需要延迟一下，先让改变数据，然后再渲染。不然会差一个
        setTimeout(function(){
            axiosData(num);
        },100)
    }
    //删除单个
    delId = (id,ev) => {
        // console.log(ev.target.parentNode.parentNode.children[0].children[0].checked)
        let a = ev.target.parentNode.parentNode.children[0].children[0].checked;
        let checkedAll = this.refs.checkedAll;
        let inp = document.querySelectorAll('.abc tbody tr input');
        Array.from(inp);
        let {delOne,axiosData,page,total} = this.props;
        let {num} = this.state;
        if(a){
            delOne(id)
            if(inp.length==1){
                num = num - 1;
            }
            if(num<1)num=1
            console.log(num)
            axiosData(num)
            this.setState({num})
            page();
            total();
            checkedAll.checked = false;
            for (let i = 0; i < inp.length; i++) {
                inp[i].checked=false;
            }
        }
    }
    checkedOne = (ev) =>{
        let inp = document.querySelectorAll('.abc tbody tr input');
        let checkedAll = this.refs.checkedAll;
        Array.from(inp);
        let arr = [];
        for(let i = 0;i<inp.length;i++){
            arr.push(inp[i].checked)
        }
        checkedAll.checked = arr.every(e=>{
            return e==true;
        })
    }
    //全选
    checkedAll = (e,id)=>{
        let checkedAll = this.refs.checkedAll;
        let inp = document.querySelectorAll('.abc tbody tr input');
        Array.from(inp);
        let arr = [];
        for (let i = 0; i < inp.length; i++) {
            arr.push(inp[i].checked)
        }
        arr.forEach((e,i)=>{
            inp[i].checked = checkedAll.checked;
        })
    }
    //批量全删
    delAll = () => {
         let checkedAll = this.refs.checkedAll;
         let inp = document.querySelectorAll('.abc tbody tr input');
         Array.from(inp);
         let arr = [];
         let v;
         let o;
         //拿到当前页的开关和id，放到一个对象中，将所有的存储到一个数组中
         for (let i = 0; i < inp.length; i++) {
            v = inp[i].checked;
            o = inp[i].getAttribute('nid');
             arr.push({v,o})
         }
        arr = arr.filter(e=>{
            if(e.v == true){
                return e.o;
            }
        })
        let {num} = this.state;
        console.log(num);
        if(arr.length>0){
                arr = arr.map(e=>{
                        return e.o;
                })
                let b = inp[0].getAttribute('nid');
                let {delAll,axiosData,page,total} = this.props;
                let {num} = this.state;
                let p = JSON.stringify(arr);
                delAll(p)
                axiosData(num)
                page();
                total()
                if (inp.length==1 && num>0){
                    page();
                    total()
                    num = num-1;
                    if(num<1){
                        num = 1;
                    }
                    axiosData(num);
                    this.setState({num})
                }
                for (let i = 0; i < inp.length; i++) {
                    inp[i].checked=false;
                }
                checkedAll.checked = false;
        }


    }
    on = () => {

    }
    search = () => {
        let searchVal = this.refs.searchVal;
        let {findOne} = this.props;
        findOne(searchVal.value);
    }
	render() {
        //拿到数据，和页码数
        let {data,pageNumAll,tot} = this.props;
        //存一个本地的num用来控制页码，class之类的
        let {num} = this.state;
        //取数据进行渲染
        console.log(tot)
        let arr = data.map((e,i)=>{
            return(
                    <tr key={i}>
                        <td>
                            <input
                                type='checkbox'
                                // checked={e.checked}
                                nid = {e.id}
                                onClick = {this.checkedOne}
                                // onChange = {this.on}
                                />
                        </td>
                        <td>{e.id}</td>
                        <td>{e.content}</td>
                        <td>{e.phone}</td>
                        <td>{e.email}</td>
                        <td>{this.frender(e.time)}</td>
                        <td>
                            <i className={e.open?'state active':'state'}>已开启</i>
                        </td>
                        <td>
                            <span 
                                className='downbj'
                                onClick = {this.open.bind(this,e.id,num)}
                                ></span>
                            <span
                                 className='modifybj'
                                 onClick = {this.delId.bind(this,e.id)}
                                 ></span>
                        </td>
                    </tr>
                    )
        })
        //拿总页码进行渲染页码
        let arrPage = [];
        // console.log(pageNumAll)
        for(let i = 1;i<=pageNumAll;i++){
                    arrPage.push(
                                    <li 
                                        onClick={this.pageClick.bind(this,i)}
                                        className={i==num?'active':''}key={i}>
                                    {i} 
                                </li>
                        )
        }
        arrPage.unshift(<li
                         key={123}
                         onClick = {this.firstLi}
                         >上一页</li>)
        arrPage.push(<li 
                        key={321}
                        onClick={this.nextLi}
                        >下一页</li>)
        let {url:{match:{params}}} = this.props;
       
		return(
			<div className='content-wrap'>
   
                <div id='details'>
                    <div className='search-user'>
                        <input placeholder="请输入用户名" ref = 'searchVal' className='searchtxt' type="text" />
                        <div
                            onClick = {this.search}
                            className='search-btn3'>
                            <i></i>
                        </div>
                    </div>
                    <div className='doIt'>
                        <span 
                            onClick = {this.delAll}
                            className='doItdel'>
                            <img src={require('../img/del.gif')} />
                            <i>批量删除</i>
                        </span>
                        <span 
                            className='doItadd'
                            onClick = {this.add}
                        >
                            <img src={require('../img/pluse.gif')} />
                            <i>添加</i>
                        </span>
                        <span className='doItto'>共有数据：{tot}条</span>
                    </div>
                    <div className='abc'>
                        <table border="1" cellSpacing="0" cellPadding="0" bordercolor='#ccc' id="mfrom">
                            <thead>
                                <tr>
                                    <th>
                                        <input type='checkbox' onClick = {this.checkedAll} ref='checkedAll' />
                                    </th>
                                    <th>ID</th>
                                    <th>登录名</th>
                                    <th>手机</th>
                                    <th>邮箱</th>
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
                            {arrPage}
                        </ul>
                    </div>
                    <div className='open'>
                        <div className='openNew'>
                            <p className='mes'><span>信息</span><span>X</span></p>
                            <p className='sureOpen'>确认停用吗？</p>
                            <div className='openBtn'>
                                <div className='openactive'>确定</div>
                                <div>取消</div>
                            </div>
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
		);
	}
}

export default connect((state, ownProps) => {
    console.log(state)
	return {
        data: state.reducer1.news,
        pageNumAll: state.reducer1.count,
        tot:state.reducer2.ord
	}
}, (dispatch) => bindActionCreators(actions, dispatch))(Admin);