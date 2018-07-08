import React,{Component}  from'react';

import '../css/Order down.css';
class Orderd extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            	<div className='content-wrap'>
						<div id='explain'>
							<div className='active'>会员列表
								<i>X</i>
							</div>
							<div>订单列表
								<i>X</i>
							</div>
						</div>
						<div className="content-right">
							<p className='free'>免费预约上门取件</p>
							<div id='mail'>
								<div className='mail_place'>
									<span>寄往中国大陆</span>
									<span>寄往港澳台</span>
								</div>
								<div className='main_new'>
									<div className='mail_new'>
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
												<span><i>*</i>姓名：</span>
												<input type='text' placeholder="请填写联系人姓名" />
											</div>
											<div>
												<span>寄件公司：</span>
												<input type='text' placeholder="请填写公司名称" />
											</div>
											<div>
												<span><i>*</i>手机 :</span>
												<input type='text' placeholder="请填写手机号码" />
											</div>
											<div>
												<span><i>*</i>验证码 :</span>
												<input type='text' placeholder="请输入验证码" />
												<button className='getMa'>获取验证码</button>
											</div>
											<div>
												<span><i>*</i>上门地址</span>
												<input type='text' placeholder="请选择所在地区：例如：福建省-福州市-长乐区" />
												<input type='text' placeholder="请填写所在街道及详细地址" />
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
												<span><i>*</i>姓名：</span>
												<input type='text' placeholder="请填写联系人姓名" />
											</div>
											<div>
												<span>收件公司：</span>
												<input type='text' placeholder="请填写公司名称" />
											</div>
											<div>
												<span><i>*</i>手机 : </span>
												<input type='text' placeholder="请填写手机号码" />
											</div>
											<div>
												<span><i>*</i>上门地址</span>
												<input type='text' placeholder="请选择所在地区：例如：福建省-福州市-长乐区" />
												<input type='text' placeholder="请填写所在街道及详细地址" />
											</div>
										</div>
									</div>
									<div id='take'>
										<p className='take_time'>
											<span>
                                                <img src={require('../img/take.jpg')} />
                                                <span>上门取件时间</span>
											</span>
										</p>
										<div className='take_content'>
											<div>
												<span><i>*</i>上门时间：</span>
												<input type='text' placeholder="请选择您合适的时间" />
											</div>
										</div>
										<div>
											<span>托寄物：</span>
											<input type='text' />
										</div>
										<div>
											<span className='payMent'>付款方式：</span>
											<input type='text' />
										</div>
										<div className='weight'>
											<span>预估重量：</span>
											<div>
												<i className='weight_down'>-</i>
												<input type='text' value='1.0' onChange={this.change} />
												<i className='weight_up'>+</i>
											</div>
										</div>
									</div>
									<div id='mailing'>
										<div className='premium '>
											<span>附加服务：</span>
											<div>
												<input type='checkbox' />
												<span>保价服务</span>
											</div>
											<p>
												温馨提示：您当前为选择保价服务，若在寄递过程中发生丢损，您最高可获得7倍运费的赔偿
											</p>
										</div>
										<div className='agree'>
											<input type='checkbox' />
											<p>我同意<span>《运单背书条款》</span></p>
										</div>
									</div>
									<div className='placrorder'>下单</div>
								</div>
							</div>
						</div>
					</div>
        );
    }
}

export default Orderd;