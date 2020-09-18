import React, { Component } from 'react'

export default class FormDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"jack",
            selected: "jack",
            selectedMul: ['B','C'],
            checked: true
        }
    }
    handleChange = (e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleChangeSelect = (e)=>{
        console.log(e.target.value);
        this.setState({
            selected:e.target.value
        })
    }
    handleChangeSelectMul = (e)=>{
        console.log(e.target.value);
        this.setState({
            selectedMul:[...this.state.selectedMul,e.target.value]
        })
    }
    handleChecked = (e)=>{
        console.log(e.target.checked);
        this.setState({
            checked:e.target.checked
        })
    }
    render() {
        return (
            <div>
                {/**textarea同input */}
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <br/>
                <select value={this.state.selected} onChange={this.handleChangeSelect}>
                    <option value="lime" key="lime">lime</option>
                    <option value="jack" key="jack">jack</option>
                    <option value="blue" key="blue">blue</option>
                </select>
                <br/>
                {/**<select multiple={true} value={['B', 'C']}>支持多选 */}
                <select multiple={true} value={this.setState.selectedMul} onChange={this.handleChangeSelectMul}>
                    <option value="A" key="A">A</option>
                    <option value="B" key="B">B</option>
                    <option value="C" key="C">C</option>
                </select>
                <br/>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleChecked}/>
            </div>
        )
    }
}
