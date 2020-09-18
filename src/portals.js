import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。
// ReactDOM.createPortal(child, container)
// 第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment。第二个参数（container）是一个 DOM 元素。

export default class PortalsDemo extends Component {
    h1 = document.createElement("h1");
    componentDidMount(){
        document.getElementById("root").appendChild(this.h1);
    }
    componentWillUnmount(){
        document.getElementById("root").removeChild(this.h1);
    }
    render() {
        {/** this.h1表示当前组件的内容被h1标签包裹。
        使用这种方式可以定义模态框，弹窗等等，因为
        不受调用组件位置的影响，可以添加到html的任意位置。*/}
        return ReactDOM.createPortal(
            this.props.children,
            this.h1
        )
    }
}
