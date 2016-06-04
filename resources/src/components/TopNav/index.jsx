import React, {Component} from 'react';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect } from 'react-redux';
import style from './style.scss'

export default class TopNav extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        console.error(style);
        return <div className={style.nav_box}>
            <a className={style.link}>首页</a>
            <a className={style.link}>关于</a>
        </div>
    }
}