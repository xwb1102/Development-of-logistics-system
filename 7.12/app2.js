import React, {
	Component
} from 'react';
import { Route, Link, Redirect, withRouter } from 'react-router-dom';
import './css/index.css';
import './css/memlist.css'
import './css/mfrom.css';
import './css/order.css';
import App from './App';
import { renderComponent } from './js/routers';
import Login from './Subcomponent/login'
import NavLeft from './js/index';
import Master from './Subcomponent/master';
import MenDel from './Subcomponent/menDel';
import Orderd from './Subcomponent/Order down';
import Tarck from './Subcomponent/tarck';
import Price from './Subcomponent/price';
import Posting from './Subcomponent/posting';
import AddPosting from './Subcomponent/addPosting';
import Admin from './Subcomponent/admin';
import Main from './Subcomponent/main';
import Tu from './Subcomponent/tubiao';
import Map from './Subcomponent/map';
let router = [{
		path: '/',
		exact: true,
		component: Login
	}

]
class App2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arr: ['首页'],
			arr2: ['/'],
			oid: 0,
			a: ''
		}
	}
	render() {
		//   let a = <App />;
		//   if(localhost.) a = '';
		let {
			a
		} = this.state;
		if(window.location.pathname == '/') {
			a = ''
		} else {
			a = <App />
		}
		// console.log(window.location.pathname)
		return(
			<div id='wraper'>
            {a}
			{renderComponent(router)} 
    </div>
		);
	}
}

// export default App2;
export default withRouter(App2);