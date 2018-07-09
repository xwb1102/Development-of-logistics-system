import React from 'react';
import ReactDOM from 'react-dom';
import App from './app2';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import { BrowserRouter as Router} from 'react-router-dom'
import { reducers } from './js/reducers'

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App store={store} />
        </Router>
    </Provider>
    , 
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept();
}


