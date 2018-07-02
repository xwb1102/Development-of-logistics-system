import React,{Component} from 'react';
import '../css/select.css'

class Posting extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
              <div className='content-wrap'>
                    {/* <div id='explain'>
                        <div className='active'>会员列表
                            <i>X</i>
                        </div>
                        <div>订单列表
                            <i>X</i>
                        </div>
                    </div> */}
                    <div className='selectFree'></div>
                  <div className='selectAll'>
                      <div className='select'>
                          <span>选中收寄件区域</span>
                          <input type='text' placeholder="例如：福州 仓山"/>
                          <div className='searchSelect'>查询</div>
                          
                      </div>
                      <div className='selectDet'>
                              <p className='bigAdd'><span>大陆</span><span>港澳台</span><span>国际</span></p>
                              <ul className='addMenu'>
                                  <li>常用市</li>
                                  <li>省/直辖市</li>
                                  <li>请选择</li>
                              </ul>
                              <div className='smAdd'>
                                  <ul className='cang'>
                                      <li>仓山区</li>
                                      <li>晋安区</li>
                                      <li>闽侯区</li>
                                      <li>鼓楼区</li>
                                      <li>马尾区</li>
                                      <li>台江区</li>
                                      <li>长乐区</li>
                                      <li>连江县</li>
                                      <li>闽清县</li>
                                      <li>福清县</li>
                                      <li>罗源县</li>
                                      <li>平潭县</li>
                                      <li>永泰县</li>
                                  </ul>
                              </div>
                          </div>
                        <div className='wbSrever'>
                            <span className='Area'>福州-仓山区</span>
                            <span>全境提供服务</span>
                        </div>
                        <div className='serviceArea'>
                            <span>服务地区详情</span>
                            <div className='normalArea'>
                                <span>正常收送地区 :</span>
                                <ul>
                                    <li>仓前街道</li>
                                    <li>仓山镇</li>
                                    <li>城门镇</li>
                                    <li>东升街道</li>
                                    <li>对湖街道</li>
                                    <li>盖山镇</li>
                                    <li>建新镇</li>
                                    <li>金山街道</li>
                                    <li>临江街道</li>
                                    <li>螺洲镇</li>
                                    <li>三叉街街道</li>
                                    <li>上渡街道</li>
                                    <li>下渡街道</li>
                                </ul>
                            </div>
                        </div>
                  </div>
                </div>
        );
    }
}

export default Posting;