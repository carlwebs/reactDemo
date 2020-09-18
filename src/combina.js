import React, { Component } from 'react'

export default class CombinaDemo extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
