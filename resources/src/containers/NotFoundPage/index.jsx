import React, {Component} from 'react';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect } from 'react-redux';
import style from './style.scss'

export default class NotFoundPage extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return <div className={style.page_box}>
            404 NotFoundPage
        </div>
    }
}

// function mapStateToProps(state) {
// }

// function mapDispatchToProps(dispatch){
//     return{
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);