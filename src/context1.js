import React, { Component } from 'react'
import Context2Demo from './context2'
export default class Context1Demo extends Component {
    constructor(props,context){
        super(props);
    }
    render() {
        return (
            <div>
                context1
                <Context2Demo />
            </div>
        )
    }
}
