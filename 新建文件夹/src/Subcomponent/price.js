import React,{Component} from 'react'
import '../css/price.css'

class Price extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    change = () => {

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
						<div className="payFee-page">
							<div className='payFree'></div>
							<div className="payFee-container">
								<div className="tit">
									<h5>运费时效查询</h5>
									<div className="promoted-link">
										<a href="javaScript:;">查看中国大陆出口时效表</a>
									</div>
								</div>
								<dl>
									<dt>原寄地</dt>
									<dd className="origin-price">
										<div className="input-group">
											<input type="text" placeholder="请选择原寄地地区，例如：北京市" />
											<span>...</span>
										</div>
									</dd>
								</dl>
								<dl>
									<dt>目的地</dt>
									<dd className="origin-price">
										<div className="input-group">
											<input type="text" placeholder="请选择目的地地区，例如：北京市" />
											<span>...</span>
										</div>
									</dd>
								</dl>
								<dl>
									<dt>重量</dt>
									<dd>
										<div className="input-group weight1">
											<input type="text" value="1" onChange={this.change}/>
											<span>kg</span>
										</div>
									</dd>
								</dl>
								<dl>
									<dt>寄件时间</dt>
									<dd>
										<div className="input-group time">
											<input type="text" placeholder="现在" />
											<span></span>
										</div>
									</dd>
								</dl>
								<button className="primary-button">查询</button>
							</div>
							<div className="services-container">
								<div className="services-top-bar">
									<h5 className="pull-left">我们的产品</h5>
									<ul className="pull-right">
										<li>
											<span>重量换算器</span>
											<a href="javascript:;">更多</a>
										</li>
										<li>
											<span>预计时效</span>
										</li>
										<li>
											<span>寄付价</span>
											<a href="javascript:;">到付货币换算</a>
										</li>
									</ul>
								</div>
								<div className="service-wrapper">
									<ul>
										<li>
											<div className="payFee-info">顺丰标快</div>
											<div className="weight-info">1kg</div>
											<div className="time-info">2018-05-31 18:00前</div>
											<div className="rate-info">20元</div>
										</li>
										<li>
											<div className="payFee-info">顺丰标快</div>
											<div className="weight-info">1kg</div>
											<div className="time-info">2018-05-31 18:00前</div>
											<div className="rate-info">20元</div>
										</li>
										<li>
											<div className="payFee-info">顺丰标快</div>
											<div className="weight-info">1kg</div>
											<div className="time-info">2018-05-31 18:00前</div>
											<div className="rate-info">20元</div>
										</li>

									</ul>

								</div>
								<div className="services-bottom-bar"></div>
							</div>
							<div className="other-services-container">
								<h5>其他服务</h5>
								<div className="other-services">
									<a href="javaScript:;">
										<div className="service-info">
											<span className="service-title">保价</span>
											<p>如货物运输途中发生损坏/丢失，我司将按照托运人的声明价值赔偿一定的损失。点击查看详情。</p>
										</div>
										<div className="hot">
											<div>所有大陆客户</div>
										</div>

									</a>
									<a href="javaScript:;">
										<div className="service-info">
											<span className="service-title">保价</span>
											<p>如货物运输途中发生损坏/丢失，我司将按照托运人的声明价值赔偿一定的损失。点击查看详情。</p>
										</div>
										<div className="hot">
											<div>所有大陆客户</div>
										</div>

									</a>
								</div>
							</div>
							<div className="side-note">
								<div className="content-page">
									<p>体积重量是一种反映包裹密度的计算方式。低密度的包裹，与实际重量比较，占用的空间通常较大。计算出来的体积重量与实际重量比较，取大者作为计费重量，用以计算运费。&nbsp;</p>
									<p>一、中国大陆地区内业务</p>
									<p>1. 同城、省内及经济区域内互寄：体积重量(KG)的计算方法为：长度(CM)x宽度(CM)x高度(CM)÷12000。</p>
									<p>2. 省外非经济区域内互寄，体积重量(KG)的计算方法为：【即日/次晨/标快】长度(CM)x宽度(CM)x高度(CM)÷6000；【特惠】长度(CM)x宽度(CM)x高度(CM)÷12000。</p>
									<p>&nbsp;备注：经济区域为：京津冀区域、江浙沪皖区域、黑吉辽区域、川渝区域。其他服务(产 &nbsp;品)体积重量计算方法详情请致电大陆客户服务热线95338。</p>
									<p>二、港澳台及国际业务</p>
									<p>1、始发地或目的地任一方为港澳台地区或其他海外国家，体积重量(KG)的计算方法为：长度(CM)x宽度(CM)x高度(CM)÷6000；</p>
									<p>2、台湾岛内件体积重量(KG)的计算方法为：长度(CM)x宽度(CM)x高度(CM)÷12000；港澳地区及海外国家的本地件体积重量(KG)的计算方法为：长度(CM)x宽度(CM)x高度(CM)÷6000；</p>
									<p>备注：体积重量的计算方法参考各地区及当地市场惯例, 当中可能略有差异。以上涉及的具体产品范围请致电95338或与当地收派员进行咨询。</p>
									<p>&nbsp;</p>
									<p><strong>温馨提示：</strong></p>
									<p><strong>始发地或目的地任一方为港澳台地区</strong><strong>：</strong></p>
									<p style={{paddingleft: "30px"}}>1、此价格供参考。更多收费和服务详情，详情请致电大陆客户服务热线&nbsp;<strong>95338</strong>。</p>
									<p style={{paddingleft: "30px"}}>2、港澳寄往中国大陆的特殊包裹品项及价格请
										<a href="javascript:;">按此</a>查询，参考时效在顺丰标快产品基础上加时<span>3-5</span>天；。</p>
									<p style={{paddingleft: "30px"}}>3、台湾寄往中国大陆的特殊包裹品项及价格请
										<a href="javascript:;">按此</a>查询，参考时效在顺丰标快产品基础上加时<span>3-5</span>天；。</p>
									<p style={{paddingleft: "30px"}}>4、对于约定由收件人（或第三方）付费（含运费及增值服务费）的快件，在快件签收之前，可提出对费用付款方式变更为寄方付。对于需要更改付款方式的快件，寄件人除需要支付运费外，每票需另外支付更改付款方式服务费。（
										<a href="javascript:;">收费标准</a>）</p>
									<p style={{paddingleft: "30px"}}>5、如收派件地址为<span style={{textDecoration: 'underline'}}>香港住宅地址</span>或
										<a href="../../download/A4__SC.pdf">香港偏远地区</a>，上门收派每票另收港币（住宅附加费$20，香港偏远件$30），附加费可与运费绑定（寄付或到付），收派件时效需加0.5-1个工作日。</p>
									<p style={{paddingleft: "30px"}}>6、台湾部分地区收派时效需加0.5-1工作日，可
										<a href="../../download/TW_Remote_area_TC01.PDF">按此</a>查阅详情。</p>
									<p style={{paddingleft: "30px"}}>7、以上由香港、澳门及台湾寄件至中港澳台之运费包含燃油附加费，请
										<a title="燃油附加费新标准（官网内容更新 大陆版）最新（中文版）-201707--1" href="javascript:;">按此</a>了解更多燃油附加费的资料。</p>
									<p style={{paddingleft: "30px"}}>&nbsp;</p>
									<p><strong>始发地或目的地任一方为海外国家</strong><strong>:</strong></p>
									<p style={{paddingleft: "30px"}}>1、海外进出口流向价格与时效仅参考。更多收费与服务详情，请致电大陆国际业务客服专线9533883.</p>
									<p style={{paddingleft: "30px"}}>2、海外进出口流向运费豁免燃油附加费，但未包含清关税费、偏远地区附加费、特殊处理费等可能产生的其他费用。</p>
									<p style={{paddingleft: "30px"}}>3、海外进出口流向时效标准天数是指工作日，不包含收件日，不包括周末和节假日。具体派送时效以目的地邮编为准。如遇偏远地区或郊区、航班延误、清关异常等情形，时效会额外增加。</p>
									<p>&nbsp;</p>
								</div>
							</div>
							<div className="order-button-wrapper">
								<div className="order-button">
									<div className="order-button-inner">
										<img src={require("../img/order-button-icon.gif")} />
										<div>免费预约上门取件</div>
									</div>
								</div>
							</div>
						</div>
                        </div>
        );
    }
}

export default Price;