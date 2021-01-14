import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import rootReducers from './reducers'

const store = createStore(rootReducers);
console.log(store.getState())
ReactDom.render(
<Provider store={store}>
<App/>
</Provider>
,document.getElementById('root'))