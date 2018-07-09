import {combineReducers} from 'redux';

const reduer1 = (state=masterArr,action) =>{
    switch(action.type){
        case 'ADD_NEW':
        return ;
        case 'DEL_NEW':
        return ;
    }

}

const reducers = combineReducers({
    reduer1
});

export {reducers}