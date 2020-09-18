import React, { Component } from 'react'
// HOC高阶组件，高阶组件是一个函数，参数为组件，返回另外一个组件。
export default class HOC extends Component {
    // render方法中不要使用高阶组件。
    // 防止每次渲染都生成新的实例。重新挂在整个组件状态会丢失。
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
