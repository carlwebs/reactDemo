import React, { Component } from 'react'

export default class ConditionDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "jack"
        }
    }
    render() {
        // 组件直接返回null，组件不会渲染，但是组件的生命周期会正常执行。
        return (
            <div>
                {this.state.name === 'jack' && (<div>名称为jack</div>)}
                <div>{this.state.name?<div>名称存在</div>:<div>名称不存在</div>}</div>
            </div>
        )
    }
}
