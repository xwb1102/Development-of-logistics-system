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
		    allArr:[]
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
    inputChecked = (ev) =>{
       
        let nid = ev.target.getAttribute('nid');
        
        let {data,url:{match:{params}}} = this.props;
        let arr =[];
        let num = Number(params.id);
         for(let i = num*6;i<num*6+6;i++){
                if(data[i]){
                arr.push(data[i]);
                }
            }
        arr = arr.map(e=>{
            if(e.id==nid){
             e.in = !e.in
            }
            return e
        })
        //获取全选按钮
        this.refs.checkedAll.checked = arr.every(e=>{
            return e.in==true;
        })
        this.setState({arrAll:arr})
    }
    checkedAll = (ev) => {
        let {data,url:{match:{params}}} = this.props;
        let arr =[];
        let num = Number(params.id);
         for(let i = num*6;i<num*6+6;i++){
                if(data[i]){
                arr.push(data[i]);
                }
            }

        arr.map(e=>{
            e.in = ev.target.checked
            return e
        })
        this.setState({arrAll:arr})
    }
    del = (e) => {
        let {del,axiosData} = this.props;
        if(e.in){
             del(e.id)
             setTimeout(() => {
                 axiosData()
             }, 1000);
        }
       
    }
    delAll = () => {
         let {data,url:{match:{params}}} = this.props;
        let arr =[];
        let num = Number(params.id);
         for(let i = num*6;i<num*6+6;i++){
                if(data[i]){
                arr.push(data[i]);
                }
            }
         arr = arr.filter(e=>{
            return e.in !==true
        })
          this.setState({arrAll:arr})
    }
    search = () => {
        let val = this.refs.searchVal.value;
        // console.log(val)
         let {data,url:{match:{params}}} = this.props;
        let arr =[];
        let num = Number(params.id);
         for(let i = num*6;i<num*6+6;i++){
                if(data[i]){
                arr.push(data[i]);
                }
            }
       arr = arr.filter(e=> {
           return  e.id == val
        })
        console.log(arr)
         this.setState({arrAll:arr})
        this.refs.searchVal.value = '';
    }
	componentDidMount() {
		let {
			axiosData,
            data
        } = this.props;
		axiosData();
	}
	render() {
		// let arr2 = [];
		// if(arr2 !== data) {
		// 	arr2 = data;
		// }
		// let arr = data.map(e => {
		// 	return(<tbody key={e.id}>
        //                         <tr>
        //                             <td>
        //                                 <input type='checkbox' />
        //                             </td>
        //                             <td>{e.id}</td>
        //                             <td>{e.name}</td>
        //                             <td>{e.phone}</td>
        //                             <td>{e.emial}</td>
        //                             <td>{this.frender(e.time)}</td>
        //                             <td>
        //                                 <i className='state active'>已开启</i>
        //                             </td>
        //                             <td>
        //                                 <span className='downbj'></span>
        //                                 <span className='editbj'></span>
        //                                 <span className='modifybj'></span>
        //                                 <span className='delbj'></span>
        //                             </td>
        //                         </tr>
        //                     </tbody>)
		// })
        let {data,url:{match:{params}}} = this.props;
        let { allArr } = this.state;
        let arr2 = data.concat();
        let pageNum = Math.ceil(arr2.length/6);
        allArr = [];
        let num = Number(params.id);
        //判断页码的范围
        if(num < 0){
            num=0
        }
        if (num > pageNum-2) {
            num = pageNum-1
        }
        //先判断是否拿到
        if(data){
            //将当前页数据弄进来
            for(let i = num*6;i<num*6+6;i++){
                if(data[i]){
                allArr.push(data[i]);
                }
            }
            //在判断是否拿到当前页
            if (allArr[0]) {
                allArr = allArr.map(e => {
                                return(
                                            <tr key={e.id}>
                                                <td>
                                                    <input type='checkbox' nid={e.id} checked={e.in} onChange={this.inputChecked}/>
                                                </td>
                                                <td>{e.id}</td>
                                                <td>{e.name}</td>
                                                <td>{e.phone}</td>
                                                <td>{e.emial}</td>
                                                <td>{this.frender(e.time)}</td>
                                                <td>
                                                    <i className={e.onF?'state active':'state'}>已开启</i>
                                                </td>
                                                <td>
                                                    <span
                                                         className='downbj'
                                                         onClick={this.del.bind(this,e)}
                                                         ></span>
                                                    <span className='editbj'></span>
                                                    <span className='modifybj'></span>
                                                    <span className='delbj'></span>
                                                </td>
                                            </tr>
                                        )
                            })
                        }
            }
      //用来存放页码
        let arrPage = [];
        for(let i = 1;i<=pageNum;i++){
                    arrPage.push( < Link to = {
                                {
                        pathname: `/admin/${i-1}`
                        }}
                        key={+new Date + i}
                        ><li className={i-1==num?'active':''}key={i}>
                  {i} 
                    </li></Link>)
        }
        arrPage.unshift(
        <Link key={+new Date+2} to={{
                        pathname: `/admin/${--num}`
                        }} 
                         key={12345}
                        >
            <li key={+new Date}>
            
            上一页</li>
        </Link>
            )
        arrPage.push( < Link to = {
                    {
                        pathname: `/admin/${2+num}`
                        }} 
                        key={123456}
                        >
            <li key={+new Date}>
            
            下一页</li>
        </Link>)
    
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
                        <span className='doItadd'>
                            <img src={require('../img/pluse.gif')} />
                            <i>添加</i>
                        </span>
                        <span className='doItto'>共有数据：88条</span>
                    </div>
                    <div className=''>
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
                                {allArr}
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
                </div>
            </div>
		);
	}
}

export default connect((state, ownProps) => {
    console.log(state)
	return {
		data: state.reducer1
	}
}, (dispatch) => bindActionCreators(actions, dispatch))(Admin);