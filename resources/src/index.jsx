import React from 'react';
import { render } from 'react-dom';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect } from 'react-redux';
import App from 'containers/App/index.jsx'
import {myApp} from 'reducers/app/appReducers.js'

let store = createStore(myApp);

//Provider是react-redux直接提供的
//store是我们在第3步中生成的

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)