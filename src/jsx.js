import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import ReactWebComponent from 'react-web-component';
import './jsx.css';
require('./jsx.css')
const jsx1 = <div>jsx变量</div>;
const boo1 = true;
const boo2 = false;
// 因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，
// 而不使用 HTML 属性名称的命名约定。
// 例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。
// 组件名称必须以大写字母开头
// props属性默认是是true。
// props.children可以是任意JavaScript表达式。函数变量都可以。
export default class JsxDemo extends Component {
    componentDidMount(){
        setTimeout(() => {
            document.dispatchEvent(new CustomEvent("mytest",{
                "detail":{
                    "a":"b"
                }
            }))
        }, 3000);
    }
    btn=()=>{
        console.log("btn");
    }
    render() {
        return (
            <div>
                <div id="jx">
                    修改
                </div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.btn}>
                    我是按钮
                </Button>
                {/* {this.props.name} */}
                {/**jsx多行用括号包裹 */}
                {jsx1}
                {/* {boo1 ? '变量为真显示' : '变量为假显示'} */}
            </div>
        )
    }
}
// 最后一个参数要判断是否是shadom，true不会引用外部得样式，false可以引用。
ReactWebComponent.create(<JsxDemo />, 'my-component', false);