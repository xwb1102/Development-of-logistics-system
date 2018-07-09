import React, { Component } from 'react';
import {Route,Link,Redirect,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../js/action';
class MenDel extends Component {
    constructor(props) {
        super(props);
        this.state = {
			num:1,
			nid:0
		  };
	}
	//一上来的时候，进行渲染
	componentDidMount(){
		let {getNews,menPage,totalList} = this.props;
		menPage();
		getNews();
		totalList();
	}
	//时间函数
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
	//点击页码
	pageClick = (i) =>{
        let {num} = this.state;
        num = i;
       let {getNews} = this.props;
       this.setState({num})
       getNews(i)
	}
	//点击上一页
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
	//点击下一页
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
	//单选
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
	//单个删除
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
            menPage();
            this.setState({num})
            // total();
            checkedAll.checked = false;
            for (let i = 0; i < inp.length; i++) {
                inp[i].checked=false;
            }
        }
	}
	//批量删除
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
	//搜索
    search = () => {
        let searchVal = this.refs.searchVal;
        let {findList} = this.props;
        findList(searchVal.value);
	}
	//查看详情信息
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
		console.log(id)
		blockA(id);
		this.setState({nid:id})
		setTimeout(() => {
			let { block } = this.props;
			console.log(block)
			spho.innerHTML = block[0].jPhone
			jadd.innerHTML = block[0].jAddr;
			scont.innerHTML = block[0].scontent;
			jpho.innerHTML = block[0].sPhone;
			jcont.innerHTML = block[0].jcontent;
			sadd.innerHTML = block[0].sAddr;
			mone.innerHTML = block[0].money;
		},50);
	}
	//点击的时候，让弹框消失
	cl = () => {
		let open = document.querySelector('.openLi');
		let modifyA = document.querySelector('.modifyA');
		open.style.display = 'none'
		modifyA.style.display = 'none'
	}
	//修改数据
	modify = () =>{
		let open = document.querySelector('.openLi');
		let modifyA = document.querySelector('.modifyA');
		let jcont = document.querySelector('.jcont2');
		let jpho = document.querySelector('.jpho2');
		let jadd = document.querySelector('.jadd2');
		let scont = document.querySelector('.scont2');
		let spho = document.querySelector('.spho2');
		let sadd = document.querySelector('.sadd2');
		open.style.display = 'none';
		modifyA.style.display = 'block'
		let {nid} = this.state;
		let {blockA} = this.props;
		blockA(nid);
		let that = this;
		setTimeout(() => {
			let {block} = this.props;
			jcont.value = block[0].jcontent;
			jpho.value = block[0].jPhone
			jadd.value = block[0].jAddr;
			scont.value = block[0].scontent;
			spho.value = block[0].sPhone;
			jcont.value = block[0].jcontent;
			sadd.value = block[0].sAddr;
			// mone2.value = block[0].money;
		}, 50);
	}
	//到修改页的时候，点击确认，修改内容
	sureV = () => {
		let {creat,getNews,menPage} = this.props;
		let modifyA = document.querySelector('.modifyA');
		let jcont = document.querySelector('.jcont2');
		let jpho = document.querySelector('.jpho2');
		let jadd = document.querySelector('.jadd2');
		let scont = document.querySelector('.scont2');
		let spho = document.querySelector('.spho2');
		let sadd = document.querySelector('.sadd2');
		let obj = {};
		let {nid,num} = this.state;
		obj.id = nid;
		obj.jcontent = jcont.value;
		obj.scontent = scont.value;
		obj.jPhone = jpho.value;
		obj.sPhone = spho.value;
		obj.jAddr = jadd.value;
		obj.sAddr = sadd.value;
		creat(obj);
		getNews(num);
		menPage();
		modifyA.style.display = 'none';
	}
	//确认发货
	sendGoods = (id) => {
		let {sendGoo} = this.props;
		let {num} = this.state;
        let {delAllList,getNews,menPage,totalList,loadMen} = this.props;
		sendGoo(id);
		loadMen(id);
		getNews(num);
	}
    render() {
		let {dataA,page2,tot} = this.props;
		let arr =[];
		let arr2 = [];
		let {num} = this.state;
		if(Array.isArray(dataA)&&dataA[0]!=null){
			arr = dataA.map((e,i)=>{
				return (<tr key={i}>
							<td>
								<input
								     nid={e.id}
									 type='checkbox' 
									 onClick = {this.checkedOne}
								/>
							</td>
							<td>{e.id}</td>
							<td className='moreof'>{e.scontent}</td>
							<td>{e.money}</td>
							<td ><i className={e.send?'goods':''}>{e.goods}</i></td>
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
								<span 
									className='sendG'
									onClick = {this.sendGoods.bind(this,e.id)}
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
									<div className='jopen onceA'>
										<p>
											<span>寄件人：</span><span className='jcont'></span>
										</p>
										<p>
											<span>电话 :</span><span className='jpho'></span>
										</p>
										<p>
											<span>地址：</span><span className='jadd'></span>
										</p>
									</div>
									< div className = 'sopen onceA' >
										<p>
											<span>收件人：</span><span className='scont'></span>
										</p>
										<p>
											<span>电话：</span><span className='spho'></span>
										</p>
										<p>
											<span>地址：</span><span className='sadd'></span>
										</p>
									</div>
									<p className='totM'>
										总计费用：<span className='mone'></span>元
									</p>
									<span
										 className='modify'
										 onClick = {this.modify}
									>修改数据</span>
								</div>
							</div>
							<div className = 'modifyA'>
								<div className='openMain'>
									<p className='closeM'>
										<i
											onClick = {this.cl}
											 className='closed'
										>X</i>
									</p>
									<h2 className='ordM'>订单详情</h2>
									<div className='jopen onceA'>
										<p>
											<span>寄件人：</span><input className='jcont2' />
										</p>
										<p>
											<span>电话:</span><input className='jpho2' />
										</p>
										<p>
											<span>地址：</span><input className='jadd2' />
										</p>
									</div>
									< div className = 'sopen onceA' >
										<p>
											<span>收件人：</span><input className='scont2' />
										</p>
										<p>
											<span>电话：</span><input className='spho2' />
										</p>
										<p>
											<span>地址</span><input className='sadd2' />
										</p>
									</div>
									<span
										 onClick = {this.sureV}
										 className='sureM'
									>确认更改</span>
									{/* <p className='totM'>

										总计费用：<span className='mone'></span>元
									</p> */}
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
		dataA: state.reducer2.ord,
		page2: state.reducer2.count,
		tot: state.reducer2.num,
		block: state.reducer2.block
	}
}, (dispatch) => bindActionCreators(actions, dispatch))(withRouter(MenDel));