import React, {Component} from 'react';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect } from 'react-redux';
import style from './style.scss'
import {Link} from 'react-router'

export default class TopNav extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return <div className={style.nav_box}>
            <Link className={style.link} to='/index'>首页</Link>
            <Link className={style.link} to='/about'>关于</Link>
        </div>
    }
}