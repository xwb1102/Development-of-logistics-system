import React,{Component} from 'react';
import '../css/tarck.css'

class Tarck extends Component {
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
                        <div className='contfree'></div>
                                <div id='tarck'>
                                    <div className='track'>
                                        <div className='floorphone'>
                                            <span>按照单号</span>
                                            <span>按照手机号</span>
                                        </div>
                                        <input className='inNum' type='text' placeholder="请输入单号" />
                                        <img src='' />
                                        <p className='lately'>
                                            <span>83246546131232</span>
                                            <span>最近查询<i>^</i></span>
                                        </p>
                                        <i className='lately_search'>查询</i>
                                    </div>
                                    <div className='tarck_content'>
        
                                    </div>
                                    <div className='dynamic'>
                                        <div>
                                            <img src='' />
                                            <span className='dymove'>运单动态</span>
                                        </div>
                                        <div className='specific'>
                                            <p>
                                                <span>2018-05-23 星期三</span>
                                                <span>></span>
                                            </p>
                                            <ul>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                            </ul>
                                        </div>
                                        <div className='specific'>
                                            <p>
                                                <span>2018-05-23 星期三</span>
                                                <span>></span>
                                            </p>
                                            <ul>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                                <li><span>12:26:12</span> 已签收(美廉超市)，感谢使用，期待再次为您服务</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                </div>
					

        );
    }
}

export default Tarck;