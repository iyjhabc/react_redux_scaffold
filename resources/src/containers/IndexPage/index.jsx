import React, {Component} from 'react';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect } from 'react-redux';
import style from './style.scss'

export default class IndexPage extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        console.error(style);
        return <div className={style.pageBox}>
            Hello World
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