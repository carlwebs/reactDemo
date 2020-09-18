import React, { Component } from 'react'

export default class StateDemo extends Component {
    // 构造函数是唯一可以给state赋初始值的地方。
    // 数据流是从上到下的，父子组件的通信，可以通过属性传递的方式，
    // 子组件向父组件通信，可以通过父组件向子组件传递属性，属性值为
    // 父组件的方法，这样子组件就可以调用父组件的方法了，从而实现通信。
    constructor(props){
        super(props);
        this.state = {
            data: new Date()
        }
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                data:new Date()
            })
        }, 1000);
    }
    render() {
        return (
            <div>
                {this.state.data.toLocaleTimeString()}
            </div>
        )
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
}
