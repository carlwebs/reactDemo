import React, { Component } from 'react'
// Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
// Context设计的目的是为了共享那些对于一个组件树而言是"全局"的数据，例如：主题，语言。
import Context1Demo from './context1';
// 这里不能直接导出context，要把它放到公共的文件中去。
// export let ThemeContext = React.createContext("light"); //设置context默认值
import ThemeContext from './createContext'
export default class ContextDemo extends Component {
    render() {
        return (
            <div>
                {/**组件值的传递者 value属性设置传递的context值*/}
                <ThemeContext.Provider value="dark">
                    <Context1Demo />
                </ThemeContext.Provider>
            </div>
        )
    }
}
// 如果只是顶层组件的数据需要最后一个组件使用，中间的组件都不使用，则可以在顶层组件中声明最后一个组件，
// 并把组件通过熟悉传递下去，这样多个属性就不会全部通过中间组件了。