import React, { Component } from 'react'

export default class RenderPropsDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"jack",
            age:12
        }
    }
    render() {
        return (
            <div>
                {/* 子组件传递给父组件数据的一种方式，并展示 */}
                {this.props.render(this.state)}
            </div>
        )
    }
}
