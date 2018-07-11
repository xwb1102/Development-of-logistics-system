import { combineReducers } from 'redux';
import axios from 'axios';

const reducer1 = (state = {
	news: [],
	count: 0
}, action) => {
	switch(action.type) {
		case 'ADD_MEN':
			return state;
			break;
		case 'GET':
			console.log(action.data)
			let newObj = Object.assign({}, state);
			newObj.news = action.data
			return newObj;
		case 'FIND':
			let findArr = Object.assign({}, state);
			findArr.news = action.data;
			return findArr;
			break;
		case 'PAGE':
			let newObj2 = Object.assign({}, state);
			newObj2.count = action.page;
			return newObj2;
		case 'GETALL':
			let getAl = Object.assign({}, state);
			getAl.news = action.data;
			return getAl;
			break;
		default:
			return state
	}
}
const reducer2 = (state = {
	ord: [],
	num: 0,
	block: [],
	count: 0
}, action) => {
	switch(action.type) {
		case 'TOTAL':
			let total = Object.assign({}, state);
			total.ord = action.data
			return total;
		case 'ORDERS':
			let order = Object.assign({}, state);
			order.ord = action.data
			return order;
		case 'GETNEW':
			let getNew = Object.assign({}, state);
			getNew.ord = action.data
			return getNew;
		case 'PAGELIST':
			let pagelist = Object.assign({}, state);
			pagelist.count = action.data;
			return pagelist;
		case 'FINDLISTS':
			let findList = Object.assign({}, state);
			findList.ord = action.data;
			return findList;
		case 'FINDPL':
			let findPl = Object.assign({}, state);
			findPl.ord = action.data;
			return findPl;
		case 'BLOCK':
			let blockList = Object.assign({}, state);
			blockList.block = action.data;
			return blockList;
		case 'TOTLIST':
			let totList = Object.assign({}, state);
			totList.num = action.data;
			return totList;
		default:
			return state
	}
}
const reducer3 = (state = {
	ord: [],
	num: 0,
	block: [],
	count: 0
}, action) => {
	switch(action.type) {
		case 'SEARCHA':
			let SEARCHA = Object.assign({}, state);
			SEARCHA.ord = action.data;
			return SEARCHA;
			break;
		case 'XUANA':
			let XUANA = Object.assign({}, state);
			XUANA.block = action.data;
			return XUANA;
			break;
		default:
			return state;
	}
}
const reducers = combineReducers({
	reducer1,
	reducer2,
	reducer3
})

export {
	reducers
};