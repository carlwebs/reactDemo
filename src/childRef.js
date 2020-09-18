import React, { Component } from 'react'

export default class ChildRefDemo extends Component {
    render() {
        return (
            <div>
                <input type="text" ref={this.props.inputElement}/>
            </div>
        )
    }
}
