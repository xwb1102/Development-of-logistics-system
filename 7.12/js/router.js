import Login from '../Subcomponent/login'
import NavLeft from '../js/index';
import Master from '../Subcomponent/master';
import MenDel from '../Subcomponent/menDel';
import Orderd from '../Subcomponent/Order down';
import Tarck from '../Subcomponent/tarck';
import Price from '../Subcomponent/price';
import Posting from '../Subcomponent/posting';
import AddPosting from '../Subcomponent/addPosting';
import Admin from '../Subcomponent/admin';
import Main from '../Subcomponent/main';
import Tu from '../Subcomponent/tubiao';
import Map from '../Subcomponent/map';
import Router from '../js/router';
import React, {
	Component
} from 'react';

let Rout = [{
		path: '/',
		exact: true,
		component: Login
	},
	{
		path: '/main',
		exact: true,
		component: Main
	},
	{
		path: '/master',
		component: Master
	},
	{
		path: '/menDel',
		component: MenDel
	},
	{
		path: '/order',
		component: Orderd
	},
	{
		path: '/tarck',
		component: Tarck
	},
	{
		path: '/price',
		component: Price
	},
	{
		path: '/posting',
		component: Posting
	},
	{
		path: '/addposting',
		component: AddPosting
	},
	{
		path: '/admin',
		// component:Admin
		render: (props) => < Admin url = {
			props
		}
		/>

	},
	{
		path: '/tu',
		component: Tu
	},
	{
		path: '/map',
		component: Map
	}

]
export default Rout;