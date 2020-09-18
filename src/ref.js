import React, { Component } from 'react'
import ChildRefDemo from './childRef';
// 当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
// 当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。

// React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。ref 会在 componentDidMount 或 
// componentDidUpdate 生命周期钩子触发前更新。
export default class RefDemo extends Component {
    constructor(props){
        super(props);
        this.input = React.createRef();
        this.childInput = React.createRef();
        this.child = React.createRef();
    }
    getRefDom = ()=>{
        // 可以获取到绑定了ref的元素。
        console.log(this.input.current);
        // 当前组件的元素获取焦点。
        // this.input.current.focus();
        // 子元素输入框获取焦点。
        this.childInput.current.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.input}/>
                <br/>
                <button onClick={this.getRefDom}>按钮</button>
                <ChildRefDemo inputElement={this.childInput}/>
            </div>
        )
    }
}

