import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ProfilerDemo from './profiler';
export default class PropstypesDemo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.name}--{this.props.age}
                {/* 输入框设置属性value的时候，内容不能改变，设置defaultValue设置初始值。 */}
                <input type="text" defaultValue="a"/>
            </div>
        )
    }
}
// 检查传入参数的数据类型。
PropstypesDemo.propTypes = {
    name: PropTypes.string,
    // 自定义验证器。
    customProp: function(props, propName, componentName){
        if(props[propName] === "c"){
            return new Error("传值有误");
        }
    }
}
// 设置默认值。
PropstypesDemo.defaultProps = {
    age:12
}

