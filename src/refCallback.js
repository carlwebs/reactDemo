import React, { Component } from 'react'

export default class RefCallbackDemo extends Component {
    // 绑定ref可以传递一个函数。这个函数中接受 React 组件实例或 HTML DOM 元素作为参数，以使它们能在其他地方被存储和访问。
    // React 将在组件挂载时，会调用 ref 回调函数并传入 DOM 元素，当卸载时调用它并传入 null。在 componentDidMount 或 
    // componentDidUpdate 触发前，React 会保证 refs 一定是最新的。
    constructor(props){
        super(props);
        this.refEle = null;
    }
    setRef = (ele) =>{
        this.refEle = ele;
    }
    setFocus = ()=>{
        console.log(this.refEle);
        this.refEle.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.setRef}/>
                <input type="button" value="回调ref" onClick={this.setFocus}/>
            </div>
        )
    }
}
