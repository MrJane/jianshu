import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}from'react-redux'
import {store} from './redux/store'
import './style';
import './static/iconfont/iconfont';
import App from './App';
window.store = store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));

