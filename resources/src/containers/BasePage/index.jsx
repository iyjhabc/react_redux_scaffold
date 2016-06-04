import React, {Component} from 'react';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect } from 'react-redux';
import style from './style.scss'

export default class BasePage extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return <div className={style.page_box}>
            {this.props.children}
        </div>
    }
}