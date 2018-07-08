import React, { Component } from 'react';
class MenDel extends Component {
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
						<div id='breadmenu'>
							<a href="javascript:;">首页
								<i>></i>
							</a>
							<a href="javascript:;">演示
								<i>></i>
							</a>
							<span>导航元素</span>
							<img id='refresh' src={require('../img/reload.gif')} />
						</div>
						<div id='details'>
							<div className='orderSearch'>
								<div>
									<input placeholder="开始日" className='orderSearchtxt' type="text" />
									<div className='data'></div>
								</div>
								<div>
									<input placeholder="截止日" className='orderSearchtxt' type="text" />
									<div className='data2'></div>
								</div>
								<div>
									<input placeholder="支付状态" className='orderSearchtxt' type="text" />
									<ul className='payment'>
										<li>已支付</li>
										<li>未支付</li>
									</ul>
								</div>
								<div>
									<input placeholder="支付方式" className='orderSearchtxt' type="text" />
									<ul className='method'>
										<li>支付宝</li>
										<li>微信</li>
										<li>货到付款</li>
									</ul>
								</div>
							</div>
							<div className='orderSearch2'>
								<input placeholder="请输入用户名" className='orderSearchtxt' type="text" />
								 <div className='search-btn orderSearch3'><i></i></div>
							</div>
							<div className='doIt doIt2'>
								<span className='doItdel'>
                                        <img src={require('../img/del.gif')} />
                                        <i>批量删除</i>
                                    </span>
								<span className='doItto'>共有数据：88条</span>
							</div>
							<div className=''>
								<table border="1" cellSpacing="0" cellPadding="0" bordercolor='#ccc' id="mfrom">
									<thead>
										<tr>
											<th>
												<input type='checkbox' />
											</th>
											<th>订单编号</th>
											<th>收货人</th>
											<th>总金额（元）</th>
											<th>应付金额</th>
											<th>订单状态</th>
											<th>支付状态</th>
											<th>发货转态</th>
											<th>下单时间</th>
											<th>操作</th>
										</tr>
									</thead>

									<tbody>
										<tr>
											<td>
												<input type='checkbox' />
											</td>
											<td>16131</td>
											<td>小明</td>
											<td>3200</td>
											<td>13000</td>
											<td>已确认</td>
											<td>已支付</td>
											<td>已发货</td>
											<td>
												2017-05-028
											</td>
											<td>
												<span className='editbj'></span>
												<span className='delbj'></span>
											</td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td>
												<input type='checkbox' />
											</td>
											<td>16131</td>
											<td>小明</td>
											<td>3200</td>
											<td>13000</td>
											<td>已确认</td>
											<td>已支付</td>
											<td>已发货</td>
											<td>
												2017-05-028
											</td>
											<td>
												<span className='editbj'></span>
												<span className='delbj'></span>
											</td>
										</tr>
									</tbody>
									<tfoot id='tfoot'>
										<tr>
											<td>
												<input type='checkbox' />
											</td>
											<td>16131</td>
											<td>小明</td>
											<td>3200</td>
											<td>13000</td>
											<td>已确认</td>
											<td>已支付</td>
											<td>已发货</td>
											<td>
												2017-05-028
											</td>
											<td>
												<span className='editbj'></span>
												<span className='delbj'></span>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
							<div className='nav'>
								<ul className='nav-list'>
									<li>
										<a href='javascript:;'>上一页</a>
                                    </li>
									<li>
										<a href='javascript:;'>1</a>
									</li>
									<li>
										<a href='javascript:;'>2</a>
									</li>
									<li className='active'>
										<a href='javascript:;'>3</a>
									</li>
									<li>
										<a href='javascript:;'>4</a>
									</li>
									<li>
										<a href='javascript:;'>下一页</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
        );
    }
}

export default MenDel;