import React,{Component} from 'react';
import '../css/tarck.css'
import {Route,Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../js/action';
import cookie from 'react-cookies'

class Tarck extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            arr :[],
            level:0
         };
    }
    componentDidMount(){
        let {data} = this.props;
        let {level} = this.state;
        let a = cookie.load('level');
        this.setState({
            level:a
        })
    }
    //时间函数到秒
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
    //时间函数到天
     frender2 = (time) => {
        let date = new Date(time); //传入一个服务器的时间
        let iYear = date.getFullYear();
        let iMoun = date.getMonth() + 1;
        let iDate = date.getDate();
        let str = iYear + '-' + this.tDou(iMoun) + '-' + this.tDou(iDate);
        return str
    }
    tDou = (i) => {
        return i < 10 ? '0' + i : '' + i;
    }
    //点击查询
    search = () => {
        let {arr} = this.state;
        let {findList,findP} = this.props;
        let danH = this.refs.danH;
        let Phon = this.refs.Phon;
        let inNum = document.querySelector('.inNum');
        let a = inNum.value;
        //先判断点击的是，按订单还是按手机进行查找的。通过判断class来确定
        if(danH.classList.contains('floorO')){
                findList(a);
                let that = this;
                setTimeout(() => {
                    let {data} = that.props;
                    console.log(data)
                    // return ;
                    if(data.length>0 && data[0] !=null){
                        arr = data[0].logistics;
                        this.setState({arr});
                    }else{
                        inNum.value = '';
                        this.setState({arr:[]})
                    }
                }, 100);
        }else{
            findP(a);
             let tha = this;
                setTimeout(() => {
                    let {data} = tha.props;
                    console.log(data)
                    if(data.length>0 && data[0] !=null){
                        arr = data[0].logistics;
                        this.setState({arr});
                    }else{
                        inNum.value = '';
                        this.setState({arr:[]})
                    }
                }, 100);
        }
        // arr.push(data[0].logistics)
        // console.log(data[0].logistics)
    }
    //添加站点，到了哪里就添加
    sayYes = () => {
        let {data} =this.props;
        console.log(data);
        let onl = document.querySelector('.onl');
        let dest = document.querySelector('.dest');
        let {sayAtion,findList} = this.props;
        let obj = {
            ti:+new Date,
            cont:dest.value
        }
        let a = Number(onl.value)
        //点击搜索的时候，先找到这条数据，判断是否是刚刚添加的那条数据，如果是的话，那么这条数据的logistics[0].cont肯定是'暂无物流信息'
        //可以利用这个特性，来判断，如果不是未发货的，那么就走else
        findList(a);
        let that = this;
        setTimeout(() => {
            let {data} = that.props;
            console.log(data)
            //先判断是不是已经发货
            if(data.length>0 && data[0]!=null){
                console.log(55555)
                if(data[0].logistics[0].cont=='暂无物流信息'){
                    alert('找不到物流信息')
                    return
                }else{
                        console.log(89080)
                    //判断这条数据里，是否包含之前有过的地址，有的话，就代表已经更新过了。
                    if(data[0].logistics.some(e=>{
                        return e.cont == dest.value
                    })){
                        alert('此条数据已经更新过了')
                    }else{
                        console.log(22234)
                        sayAtion(a, JSON.stringify(obj))
                        onl.value = '';
                    }
                    // console.log(obj)
                }
            }
        }, 100);
    }
    //点击变换class，可以表示按照哪个来进行搜索
    floorOrder = ()=>{
        // let floorO = document.querySelector('.floorO');
        let danH = this.refs.danH;
        let Phon = this.refs.Phon;
        console.log(danH)
        danH.classList.add('floorO');
        Phon.classList.remove('floorO');
        
    }
    //点击变换class，可以表示按照哪个来进行搜索
    floorPhone = () =>{
        let Phon = this.refs.Phon;
        let danH = this.refs.danH;
        console.log(Phon)
        Phon.classList.add('floorO');
        danH.classList.remove('floorO');
    }
    inp = () => {
        
    }
    render() {
        let {arr} = this.state;
        console.log(arr)
      if(arr.length>0){
            if(arr[0].cont == '暂无物流信息' || arr[0].cont == '已发货,正等待快递员上门揽件'){
            arr = arr.map((e,i)=>{
               return  <li key={i}><span>{e.cont}</span></li>
            })
        }else{
            console.log('走')
             arr = arr.map((e,i)=>{
                return    <li key={i}><span>{this.frender(e.ti)}</span> {e.cont}</li>
            })
        }
      }
      let {level} = this.state;
      if(level==0)
    //   console.log(cookie.load('level'));
        return (
            <div className='content-wrap'>
                        <div className='contfree'></div>
                                <div id='tarck'>
                                    <div className='tarkT'>
                                        <h3>物流状态搜索</h3>
                                    <div className='track'>
                                        <div className='floorphone'>
                                            <span
                                                ref='danH'
                                                className='floorO'
                                                onClick = {this.floorOrder}
                                            >按照单号</span>
                                            <span
                                                 ref='Phon'
                                                 onClick = {this.floorPhone}
                                            >按照手机号</span>
                                        </div>
                                        <input onInput = {this.inp} className='inNum' type='text' placeholder="请输入搜索内容" />
                                        <img src='' />
                                        <p></p>
                                        <i 
                                            className='lately_search'
                                            onClick={this.search}    
                                        >查询</i>
                                    </div>
                                    <div className='dynamic'>
                                        <div>
                                            <img src='' />
                                            <span className='dymove'>运单动态</span>
                                        </div>
                                        <div className='speci'>
                                            <ul>
                                                {arr}
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                    <div className={level==0?'tarck_content non':'tarck_content'}>
                                        <h3>目的地到达确认</h3>
                                        <input className='onl' type='text' placeholder='请输入订单号以确认到达本站' />
                                        <select className='dest'>
                                            <option>福建省福州市</option>
                                            <option>福建省南平市</option>
                                            <option>到达目的地</option>
                                        </select>
                                        <span onClick = {this.sayYes} className='sureAtion'>确认到达</span>
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
        // pageNumAll: state.reducer1.count,
        // tot: state.reducer2.ord
    }
}, (dispatch) => bindActionCreators(actions, dispatch))(Tarck);