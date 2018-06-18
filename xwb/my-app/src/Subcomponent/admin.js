import React,{Component} from 'react';
import '../css/tarck.css'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='content-wrap'>
    <div id='breadmenu'>
        <a href="javascript:;">首页
            <i>></i>
        </a>
        <a href="javascript:;">演示
            <i>></i>
        </a>
        <span className="navv">导航元素</span>
        <img id='refresh' src={require('../img/reload.gif')} />
    </div>
    <div id='details'>
        <div className='search-user'>
            <input placeholder="请输入用户名" className='searchtxt' type="text" />
            <div className='search-btn3'>
                <i></i>
            </div>
        </div>
        <div className='doIt'>
            <span className='doItdel'>
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
                            <input type='checkbox' />
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
                    <tr>
                        <td>
                            <input type='checkbox' />
                        </td>
                        <td>1</td>
                        <td>小明</td>
                        <td>13000000000</td>
                        <td>admin@mail.com</td>
                        <td>2017-01-01 11:11:42</td>
                        <td>
                            <i className='state active'>已启用</i>
                        </td>
                        <td>
                            <span className='downbj'></span>
                            <span className='editbj'></span>
                            <span className='modifybj'></span>
                            <span className='delbj'></span>
                        </td>
                    </tr>
                </tbody>
                <tfoot id='tfoot'>
                    <tr>
                        <td>
                            <input type='checkbox' />
                        </td>
                        <td>1</td>
                        <td>小明</td>
                        <td>13000000000</td>
                        <td>admin@mail.com</td>
                        <td>2017-01-01 11:11:42</td>
                        <td>
                            <i className='state'>已启用</i>
                        </td>
                        <td>
                            <span className='downbj'></span>
                            <span className='editbj'></span>
                            <span className='modifybj'></span>
                            <span className='delbj'></span>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div className='nav'>
            <ul className='nav-list'>
                <li>上一页</li>
                <li>1</li>
                <li>2</li>
                <li className='active'>3</li>
                <li>4</li>
                <li>下一页</li>
            </ul>
        </div>
                      
                </div>
					

				</div>
        );
    }
}

export default Admin;