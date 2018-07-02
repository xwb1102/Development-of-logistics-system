import React,{Component} from 'react';
import '../css/addRs.css';

class AddPosting extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
             <div className='content-wrap'>
                    <div className='addRang'>
                    <div className='selectFree'></div>
                        <div className='addRs'>
                            <p className='rsText'>添加收寄范围</p>
                            <div className='rsRess'>
                                <input type='text' placeholder="省/市" />
                                <input type='text' placeholder="县/镇" />
                                <input type='text' placeholder="具体街道" />
                            </div>
                            <div className='addDet'>
                                <p className='bigAdd'>
                                    <span>大陆</span>
                                    <span>港澳台</span>
                                    <span>国际</span>
                                </p>
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
                        </div>
                        <div className='addSure'>
                            <p>福建省-南平市-政和县-熊山街道</p>
                            <button className='ressBtn'>确认添加</button>
                        </div>
                        <div className='delSure'>
                            <p>福建省-南平市-政和县-熊山街道</p>
                            <button className='ressDel'>确认删除</button>
                        </div>

                    </div>
                </div>
        );
    }
}

export default AddPosting;