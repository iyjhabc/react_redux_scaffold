import React from 'react';
import { render } from 'react-dom';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect } from 'react-redux';
import App from 'containers/App/index.jsx'
import IndexPage from 'containers/IndexPage/index.jsx'
import AboutPage from 'containers/AboutPage/index.jsx'
import NotFoundPage from 'containers/NotFoundPage/index.jsx'
import {myApp} from 'reducers/app/appReducers.js'
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router'

let store = createStore(myApp);

const component = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="/index" component={IndexPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/*" component={NotFoundPage}/>
    </Route>
    
  </Router>
)

render(
    <Provider store={store}>
        {component}
    </Provider>,
    document.getElementById('root')
)