import { combineReducers } from 'redux';
import axios from 'axios';
const huiyuan = [
    {
        id:1,
        name:'小明',
        sex:'男',
        phone:'13602030401',
        email:'5015464@qq.com',
        address:'福建仓山区',
        joinTime:'2018-2-29'

    },
     {
         id: 2,
         name: '小强',
         sex: '男',
         phone: '13645430401',
         email: '864664@qq.com',
         address: '福建仓山区师范大学',
         joinTime: '2018-2-29 11-21'

     },
     {
         id: 3,
         name: '小强1',
         sex: '男',
         phone: '13645430401',
         email: '864664@qq.com',
         address: '福建仓山区师范大学',
         joinTime: '2018-2-29 11-21'

     },
     {
         id: 4,
         name: '小强1',
         sex: '男',
         phone: '13645430401',
         email: '864664@qq.com',
         address: '福建仓山区师范大学',
         joinTime: '2018-2-29 11-21'

     },
     {
         id: 5,
         name: '小强1',
         sex: '男',
         phone: '13645430401',
         email: '864664@qq.com',
         address: '福建仓山区师范大学',
         joinTime: '2018-2-29 11-21'

     },
     {
         id: 6,
         name: '小强1',
         sex: '男',
         phone: '13645430401',
         email: '864664@qq.com',
         address: '福建仓山区师范大学',
         joinTime: '2018-2-29 11-21'

     },
     {
         id: 7,
         name: '小强1',
         sex: '男',
         phone: '13645430401',
         email: '864664@qq.com',
         address: '福建仓山区师范大学',
         joinTime: '2018-2-29 11-21'

     },
     {
         id: 8,
         name: '小强1',
         sex: '男',
         phone: '13645430401',
         email: '864664@qq.com',
         address: '福建仓山区师范大学',
         joinTime: '2018-2-29 11-21'

     },
     {
         id: 9,
         name: '小强1',
         sex: '男',
         phone: '13645430401',
         email: '864664@qq.com',
         address: '福建仓山区师范大学',
         joinTime: '2018-2-29 11-21'

     },
     {
         id: 10,
         name: '小强1',
         sex: '男',
         phone: '13645430401',
         email: '864664@qq.com',
         address: '福建仓山区师范大学',
         joinTime: '2018-2-29 11-21'

     },
     {
         id: 11,
         name: '小强1',
         sex: '男',
         phone: '13645430401',
         email: '864664@qq.com',
         address: '福建仓山区师范大学',
         joinTime: '2018-2-29 11-21'
     }

]
const reducer1 = (state={news:[],count:0},action)=>{
    switch(action.type){
        case 'ADD_MEN':
        return state;
        break;
        case 'GET':
        console.log(action.data)
        let newObj = Object.assign({},state);
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
        break;
        default:
        return state
    }
}
const reducer2 = (state={ord:[],num:0,block:[],count:0},action)=>{
    switch(action.type){
        case 'TOTAL':
            let total = Object.assign({},state);
            total.ord = action.data
        return total;
        case 'ORDERS':
            let order = Object.assign({},state);
            order.ord = action.data
        return order;
        case 'GETNEW':
            let getNew = Object.assign({},state);
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
const reducers = combineReducers({
    reducer1,
    reducer2
})

export {reducers};