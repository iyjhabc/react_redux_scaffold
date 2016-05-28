import React, {Component} from 'react';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect } from 'react-redux';
import Change from '../../components/Change/index.jsx'
import Hello from '../../components/Hello/index.jsx'
// import * as appActions from '../../reducers/app/appActions'
import {changeText, buttonClick} from '../../reducers/app/appActions'

//App
class App extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        //actions和text这两个props在第5步中会解释
        const { actions, text} = this.props;
        return (
            <div>
                <Hello actions={actions} text={text}/>
                <Change actions={actions}/>
            </div>
        );
    }
}



//mapStateToProps的作用是声明，当state树变化的时候，哪些属性是我们关心的？
//由于我们这个应用太小，只有一个属性，所以只有text这个字段。
function mapStateToProps(state) {
  return { text: state.text }
}

//mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators({changeText, buttonClick},dispatch)
    }
}

//这里实际上给了App两个props：text和actions，即第4步中的那段注释
export default connect(mapStateToProps,mapDispatchToProps)(App)