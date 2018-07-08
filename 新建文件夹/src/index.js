import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import { BrowserRouter as Router} from 'react-router-dom'
import { reducers } from './js/reducers'

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , 
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept();
}