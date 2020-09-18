import React, { Component } from 'react'

export default class KeyDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: ["jack","blue"]
        }
    }
    render() {
        return (
            <div>
                {this.state.list.map((value,index)=>{
                    return <div key={index}>{value}--{index}</div>
                })}
            </div>
        )
    }
}
