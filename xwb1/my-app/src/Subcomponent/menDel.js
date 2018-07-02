import React, { Component } from 'react';
import {Route,Link,Redirect,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../js/action';
class MenDel extends Component {
    constructor(props) {
        super(props);
        this.state = {
			num:1
		  };
	}
	componentDidMount(){
		let {getNews,menPage,totalList} = this.props;
		menPage();
		getNews();
		totalList();
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
	pageClick = (i) =>{
        let {num} = this.state;
        num = i;
       let {getNews} = this.props;
       this.setState({num})
       getNews(i)
	}
    firstLi = () => {
        let {num} = this.state;
        num--;
        if(num<1){
            num=1;
        }
        let {getNews} = this.props;
        getNews(num)
        this.setState({num})
    }
    nextLi = () =>{
        let {num} = this.state;
        let {getNews,page2} = this.props;
        num++;
        if (num > page2) {
            num = page2;
        }
        getNews(num)
        this.setState({num})
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
	delId = (id,ev) => {
        // console.log(ev.target.parentNode.parentNode.children[0].children[0].checked)
        let a = ev.target.parentNode.parentNode.children[0].children[0].checked;
        let checkedAll = this.refs.checkedAll;
        let inp = document.querySelectorAll('.abc tbody tr input');
        Array.from(inp);
        let {delList,getNews,menPage,totalList} = this.props;
        let {num} = this.state;
        if(a){
			delList(id)
			totalList();
			if(inp.length==1){
				num--;
			}
            // num = num-1;
            if(num<1)num=1
            console.log(num)
            getNews(num)
            this.setState({num})
            menPage();
            // total();
            checkedAll.checked = false;
            for (let i = 0; i < inp.length; i++) {
                inp[i].checked=false;
            }
        }
	}
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
                let {delAllList,getNews,menPage,totalList} = this.props;
                let {num} = this.state;
                let p = JSON.stringify(arr);
				delAllList(p)
				totalList();
                getNews(num)
                menPage();
                if (inp.length==1 && num>0){
                    menPage();
                    num = num-1;
                    if(num<1){
                        num = 1;
                    }
                    getNews(num);
                    this.setState({num})
                }
                for (let i = 0; i < inp.length; i++) {
                    inp[i].checked=false;
                }
                checkedAll.checked = false;
			}
	}
	
    search = () => {
        let searchVal = this.refs.searchVal;
        let {findList} = this.props;
        findList(searchVal.value);
	}
	openA = (id) =>{
		let open = document.querySelector('.openLi');
		let jcont = document.querySelector('.jcont');
		let jpho = document.querySelector('.jpho');
		let jadd = document.querySelector('.jadd');
		let scont = document.querySelector('.scont');
		let spho = document.querySelector('.spho');
		let sadd = document.querySelector('.sadd');
		let mone = document.querySelector('.mone');
		open.style.display = 'block';
		let {blockA} = this.props;
		let that = this;
		blockA(id);
		setTimeout(() => {
			let {block} = this.props;
			jcont.innerHTML = block[0].jcontent;
			jpho.innerHTML = block[0].jPhone
			jadd.innerHTML = block[0].jAddr;
			scont.innerHTML = block[0].scontent;
			spho.innerHTML = block[0].sPhone;
			jcont.innerHTML = block[0].jcontent;
			sadd.innerHTML = block[0].sAddr;
			mone.innerHTML = block[0].money;
		},50);

	}
	cl = () => {
		let open = document.querySelector('.openLi');
		open.style.display = 'none'
	}
    render() {
		let {data,page2,tot} = this.props;
		// if(open.style.display == 'block'){
		// 	console.log('进来了')
		// }
		let arr =[];
		let arr2 = [];
		let {num} = this.state;
		if(Array.isArray(data)){
			arr = data.map((e,i)=>{
				return (<tr key={i}>
							<td>
								<input
								     nid={e.id}
									 type='checkbox' 
									 onClick = {this.checkedOne}
								/>
							</td>
							<td>{e.id}</td>
							<td>{e.jcontent}</td>
							<td>{e.money}</td>
							<td>已发货</td>
							<td>
								{this.frender(e.time*1)}
							</td>
							<td>
								<span
									 onClick = {this.openA.bind(this,e.id)}
									 className='editbj'
								></span>
								<span 
									className='delbj'
									onClick = {this.delId.bind(this,e.id)}
								></span>
							</td>
						</tr>
						)
			})
		}
		   //拿总页码进行渲染页码
        let arrPage = [];
        // console.log(pageNumAll)
        for(let i = 1;i<=page2;i++){
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

        return (
            <div className='content-wrap'>
						<div id='details'>
							<div className='orderSearch2'>
								<input placeholder="请输入用单号查询" className='orderSearchtxt' ref='searchVal' type="text" />
								 <div 
									 
									 className='search-btn orderSearch3'
									onClick = {this.search}
								><i></i></div>
							</div>
							<div className='doIt doIt2'>
								<span
								
								className='doItdel'
								onClick = {this.delAll}
								>
                                        <img src={require('../img/del.gif')} />
                                        <i>批量删除</i>
                                    </span>
								<span ref='doItto' className='doItto'>共有数据：{tot}条</span>
							</div>
							<div className='abc'>
								<table border="1" cellSpacing="0" cellPadding="0" bordercolor='#ccc' id="mfrom">
									<thead>
										<tr>
											<th>
												<input
													type='checkbox'
													ref='checkedAll'
									 				onClick = {this.checkedAll}	 
												/>
											</th>
											<th>订单编号</th>
											<th>收货人</th>
											<th>总金额（元）</th>
											<th>发货状态</th>
											<th>下单时间</th>
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
							<div className = 'openLi'>
								<div className='openMain'>
									<p className='closeM'>
										<i
											onClick = {this.cl}
											 className='closed'
										>X</i>
									</p>
									<h2 className='ordM'>订单详情</h2>
									<div className='jopen'>
										<p>
											寄件人：<span className='jcont'></span>
										</p>
										<p>
											电话：<span className='jpho'></span>
										</p>
										<p>
											地址：<span className='jadd'></span>
										</p>
									</div>
									< div className = 'sopen' >
										<p>
											收件人：<span className='scont'></span>
										</p>
										<p>
											电话：<span className='spho'></span>
										</p>
										<p>
											地址：<span className='sadd'></span>
										</p>
									</div>
									<p className='totM'>
										总计费用：<span className='mone'></span>元
									</p>
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
		page2: state.reducer2.count,
		tot: state.reducer2.num,
		block: state.reducer2.block
	}
}, (dispatch) => bindActionCreators(actions, dispatch))(withRouter(MenDel));