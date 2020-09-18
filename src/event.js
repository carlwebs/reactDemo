import React, { Component } from 'react'

export default class EventDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"jack"
        }
        // 绑定this方式一
        this.handle = this.handle.bind(this);
    }
    handle(){
        console.log(this);
    }
    // 箭头函数this正确
    handle2 = () => {
        console.log('this is:', this);
    }
    // 传递参数
    handle3 = (name,e)=>{
        console.log(this);
        console.log(name);
        // 获取事件对象
        console.log(e);
    }
    render() {
        return (
            <div>
                <button onClick={this.handle}>按钮事件</button>
                <button onClick={this.handle2}>按钮事件2</button>
                <button onClick={(e)=>{this.handle3('jack',e)}}>按钮事件3</button>
            </div>
        )
    }
}
