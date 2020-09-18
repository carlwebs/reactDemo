import React, { Component } from 'react'
//ThemeContext一定要放在单独的文件中进行导入，放在context.js中进行导入也是不行的。
import ThemeContext from './createContext'; 
export default class Context2Demo extends Component {
    constructor(props){
        super(props);
    }
    static contextType = ThemeContext;
    render() {
        // console.log(this.context); //可以获取到传递的值dark
        return (
            <div>
                context2
                {/**组件值的接收者 */}
                <ThemeContext.Consumer>
                    {value=>{
                        return value
                    }}
                </ThemeContext.Consumer>
            </div>
        )
    }
}
