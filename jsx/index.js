/**
 * Created by Muc on 16/8/11.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {createStore, combineReducers} from 'redux'
function addOne() {//动作生成器,生成一个可以传给处理器的动作,不使用生成器直接写个动作上传也可以
    return ({type: "ADD_ONE"})
}
function addN(n) {
    return ({type: "ADD_N", number: n})
}
function adder(state = 0, action) {
    //数据处理器,处理规定动作,得到新状态(动作传给处理器是为了修改这个处理器上的数据,每个处理器对应一个数据)
    switch (action.type) {
        case "ADD_ONE"://注意一点,不要修改state,而是直接给state赋值
            return ++state;
        case "ADD_N":
            return state+action.number*1;
        default:
            return state
    }
}
var counter = combineReducers({
    //把动作处理器整到一起,一会生成数据中心,本例只有一个处理器,多个处理器依次写里边就行了
    adder,
});
var store = createStore(counter);//利用动作处理器集合,生成数据中心
var CounterFake = React.createClass({
    //可以把上传动作的方法传给子组件,如:add={function(n){return dispatch(addN(n))}}
    PlusOne: function () {
        this.props.dispatch(addOne())
    },
    PlusN: function () {
        this.props.dispatch(addN(this.refs.n.value))
    },
    render: function () {
        return (<div><span>{this.props.adder}</span><span onClick={this.PlusOne}>+1</span>
            <span onClick={this.PlusN}>+<input type="number" ref="n"/>确定</span></div>)
    }
});
function adderConnect(state) {//connect生成的组件所监听的数据,该组件会监听adder,adder上数据改变会引起组件更新
    return {
        adder: state.adder,//可监听很多数据,填在后边即可
    }
}
var Counter = connect(adderConnect)(CounterFake);
//这个链接是生成投靠数据中心后的新组件,第一个参数是所监听的数据,第二个参数是要替换的组件
ReactDOM.render((
    <Provider store={store}>{/*Provider包在顶层组建的外层(包括Router在内),注册后全局都可以利用数据中心*/}
        <Counter />
    </Provider>
), document.getElementById('counter'));
