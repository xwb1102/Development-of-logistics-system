import React,{Component}  from'react';
import {Route,Link,Redirect,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../js/action';
import '../css/Order down.css';
class Orderd extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
	}
	close = ()=>{
		let clause = document.querySelector('.clause');
		clause.style.display = 'none';
	}
	openOrder = () =>{
		let clause = document.querySelector('.clause');
		clause.style.display = 'block';
	}
	//减少
	redu = () => {
		let amount = document.querySelector('.amount');
		let totalA = document.querySelector('.totalA');
		let mongey = Number(amount.value).toFixed(1);
		if(mongey>0){
			amount.value = mongey - 1;
			totalA.innerHTML = amount.value * 8;
		}
	}
	add = () => {
		let amount = document.querySelector('.amount');
		let totalA = document.querySelector('.totalA');
		let mongey = Number(amount.value).toFixed(1);
		mongey = Number(mongey)
		console.log(typeof mongey)
			amount.value = mongey + 1;
			totalA.innerHTML = amount.value*8;
	}
	//初步下单
	oneSure = () => {
		// order()
		// console.log()
		// console.log(data)
		let placeSuer = document.querySelector('.placeSuer');
		let amount = document.querySelector('.amount');
		let iAgree = document.querySelector('.iAgree');
		let sender = document.querySelector('.sender');
		let senderPhone = document.querySelector('.senderPhone');
		let senderAdrr = document.querySelector('.senderAdrr');
		let Addressee = document.querySelector('.Addressee');
		let AddresseePhone = document.querySelector('.AddresseePhone');
		let AddresseeAdrr = document.querySelector('.AddresseeAdrr');
		if (sender.value !== '' && senderPhone.value !== '' && senderAdrr.value !== '' && Addressee.value !== '' && AddresseePhone.value !== '' && AddresseeAdrr.value !== '' && iAgree.checked && amount.value > 0) {
			placeSuer.style.display = 'block'
		}else{
			alert('信息不完整')
		}
	}
	//取消下单
	look = () => {
		let placeSuer = document.querySelector('.placeSuer');
		placeSuer.style.display = 'none'
	}
	//真正的确认下单
	suerPlace = () =>{
		let {order} = this.props;
		let sender = document.querySelector('.sender');
		let senderPhone = document.querySelector('.senderPhone');
		let senderAdrr = document.querySelector('.senderAdrr');
		let Addressee = document.querySelector('.Addressee');
		let AddresseePhone = document.querySelector('.AddresseePhone');
		let AddresseeAdrr = document.querySelector('.AddresseeAdrr');
		let amount = document.querySelector('.amount');
		let verySuer = document.querySelector('.verySuer');
		let totalA = document.querySelector('.totalA');
		let arr = [];
		//将所需要的信息，一次性拿过来
		arr.push(sender.value, Addressee.value, AddresseePhone.value, senderPhone.value, senderAdrr.value, AddresseeAdrr.value, totalA.innerHTML);
		order(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6]);
		verySuer.style.display = 'none';
		let that = this;
		setTimeout(() => {
			let {data,history} = that.props;
			console.log(data)
			if (data.code == 0) {
				alert('下单成功');
				history.push('/order');
			}
		},100);
		

	}
	change = () => {
		
	}
    render() {
        return (
            	<div className='content-wrap'>
						<div className="content-right">
							<p className='free'>免费预约上门取件</p>
							<div id='mail'>
								<div className='mail_place'>
									<span>寄往中国大陆</span>
								</div>
								<div className='main_new'>
									<div className='mail_new1'>
										<p className='mail_header'>
											<span className='mainhSpan'>
                                                <img src={require('../img/jijian.jpg')} />
                                                <span>寄件人信息</span>
											</span>
											<span>
                                                标*为必填项
                                            </span>
										</p>
										<div className='mail_content'>
											<div>
												<span><i>*</i>寄件人：</span>
												<input type='text' placeholder="请填写联系人姓名" className = 'sender'/>
											</div>
											<div>
												<span><i>*</i>手机 :</span>
												<input type='text' placeholder="请填写手机号码" className='senderPhone' />
											</div>
											<div>
												<span><i>*</i>寄件地址</span>
												<input type='text' placeholder="请将寄件详细地址填在此框" className='senderAdrr'/>
											</div>
										</div>
									</div>
									<div id='collection'>
										<p className='collection_new'>
											<span className='coll1'>
                                                <img src={require('../img/collection.jpg')} />
                                                <span>收件人信息</span>
											</span>
											<span className='coll2'>
                                                <img src={require('../img/address.jpg')} />
                                                <span>使用地址簿</span>
                                            </span>
										</p>
										<div className='collection_content'>
											<div>
												<span><i>*</i>收件人：</span>
												<input type='text' placeholder="请填写联系人姓名" className='Addressee'/>
											</div>
											<div>
												<span><i>*</i>手机 : </span>
												<input type='text' placeholder="请填写手机号码" className='AddresseePhone'/>
											</div>
											<div>
												<span><i>*</i>收货地址</span>
												<input type='text' placeholder="请将收件详细地址填在此框"  className='AddresseeAdrr'/>
											</div>
										</div>
									</div>
									<div id='take'>
										<div className='weight'>
											<span>预估重量：</span>
											<div>
												<i
													 className='weight_down'
													 onClick = {this.redu}
													 >-</i>
												<input
													type='text'
													value='1'
													onChange={this.change}
													className='amount'
													/>
												<i 
													className='weight_up'
													onClick = {this.add}
													>+</i>
											</div>
										</div>
										<div>
											总计 ：<span className = 'totalA'>8</span>元
										</div>
									</div>
									<div id='mailing'>
										{/* <div className='premium '>
											<span>附加服务：</span>
											<div>
												<input type='checkbox' />
												<span>保价服务</span>
											</div>
											<p>
												温馨提示：您当前为选择保价服务，若在寄递过程中发生丢损，您最高可获得7倍运费的赔偿
											</p>
										</div> */}
										<div className='agree'>
											<input type='checkbox' className='iAgree' />
											<p>我同意<span
											onClick = {this.openOrder}
											>《运单背书条款》</span></p>
										</div>
									</div>
									<div
									    className='placrorder'
										onClick = {this.oneSure}
									>下单</div>
								</div>
							</div>
							<div className = 'placeSuer'>
								<div className='palceMian'>
									<span className='suerAre'>确认下单？</span>
									<p className='twoChose'>
										<span
											onClick = {this.look}
										>我再看看</span>
										<span
										onClick = {this.suerPlace}
										className='verySuer'
										>确认下单</span>
									</p>
								</div>
							</div>
							<div className='clause'>
							
								<div className='clauseTotal'>
									<div className='mainClause'>
										<div className='once'>
												<div>
													<i
													onClick = {this.close}
													>X</i>
												</div>
													<h3 className='taile'>《快件运单契约条款》</h3>
												<p>
													1、 您同意遵守本公司官方网站所公示的隐私政策(http: //www.sf-express.com/cn/sc/Privacy_Policy/)及其不时修订的内容，同意本公司及关联公司按照法律法规和隐私政策的规定处理您提供的运单信息。
												</p>
												<p>
													2、 保价与赔偿
												</p>
												<ul>
													<li>
														2.1 因本公司原因造成托寄物灭失、 破损、 短少的， 本公司将免除本次运费， 并按以下标准赔偿， 但不承担您可能获得的收益、 实际用途、 商业机会等任何间接损失：
													</li>
														2.1 .1 若您未选择保价， 则本公司在七倍运费的限额内向您赔偿托寄物的实际损失。 如您认为该赔偿标准不足以弥补您的损失， 应根据托寄物的实际价值选择等值保价服务
													<li>
													</li>
													<li>
														2.1 .2 若您已选择保价且支付保价费用的， 则本公司按照保价金额和损失的比例向您赔偿， 最高不超过托寄物的实际损失金额。
													</li>
													<li>
														2.2 价值超过1000元的物品请您保价， 否则视为价值不超过1000元。 本公司采取“ 理赔审查” 的方式， 您应在寄件时如实按照托寄物的实际价值诚信保价， 理赔时提供相关价值证明， 超额保价部分无法获得赔偿， 本公司可以退还相关费用。
													</li>
													<li>
														2.3 托寄物损坏残值由本公司和您协商处理， 如折归您所有， 本公司在核定赔偿金额时将扣减残值。
													</li>
												</ul>
												<p>
													3、 本公司为保护您的个人信息， 可能使用保密运单， 本公司会对您寄件时在本公司下单系统录入的信息予以保存。 对于保密运单所隐匿的信息， 您同意以本公司系统所查询的内容为准， 不对此提出异议。
												</p>
												<p>
													4、 声明与承诺
												</p>
												<ul>
													<li>
														4.1 您确认， 在您因工作需要使用本服务时， 您已充分获得您工作单位的授权， 并已充分阅读、 理解并接受本条款的全部内容。
													</li>
													<li>
														4.2 您同意， 本公司有权随时对本条款内容进行单方面的变更， 无需另行单独通知您， 但您可以登录本公司官方网站查询或拨打本公司客服热线咨询； 若您在本条款内容变更后继续使用本服务， 表示您已充分阅读、 理解并接受修改后的条款内容， 也将遵循修改后的条款内容使用本服务； 若您不同意修改后的条款内容， 您应停止使用本服务。
													</li>
												</ul>
												<p>
													5、 本条款的缔约主体是您与寄件地的顺丰速运有限公司的子公司、 分公司、 关联公司。
												</p>
												<p>
													6、 为保证托寄物安全送达， 您在寄件时应履行以下义务：
												</p>
												<ul>
													<li>
														6.1 如实申报托寄物内容和价值， 并准确、 清楚地填写寄件人、 收件人的名称、 地址、 联系电话等资料。
													</li>
													<li>
														6.2 根据托寄物的性质（ 尤其是易碎品、 液体、 气体）， 提供充分的防破损、 防漏、 防爆措施， 保障托寄物安全派送。
													</li>
													<li>
														6.3 遵守禁止寄递物品法律法规的规定， 本公司有权依法对托寄物进行验视， 如发现禁止或限制寄递的物品， 有权移交相关部门处理， 并配合相关部门追究您的法律责任。
													</li>
													<li>
														6.4 托寄物需要办理审批、 检验等手续的， 您应向本公司提交办理完相关手续的证明文件。
													</li>
												</ul>
												<p>
													7、 您的违约赔偿责任：
												</p>
												<ul>
													<li>
														7.1 因托寄物质量缺陷或包装破损， 致使其他托寄物、 运输工具、 机械设备被污染腐蚀、 损坏， 或造成人身伤亡的， 您应承担赔偿责任。
													</li>
													<li>
														7.2 因托寄物属于或含有禁止或限制寄递物品而被查没、 扣留或变更配送路线， 导致其他托寄物时效延误或价值丧失， 给本公司或第三人造成经济损失的， 您应承担赔偿责任。
													</li>
												</ul>
											</div>
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
		data: state.reducer2.ord
	}
}, (dispatch) => bindActionCreators(actions, dispatch))(withRouter(Orderd));