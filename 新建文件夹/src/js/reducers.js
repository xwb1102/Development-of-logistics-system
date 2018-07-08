import { combineReducers } from 'redux';

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

     }
]
const reducer1 = (state=huiyuan,action)=>{
    switch(action.type){
        case 'ADD_MEN':
        return state;
        default:
        return state
    }
}
const reducers = combineReducers({
    reducer1
})

export {reducers};