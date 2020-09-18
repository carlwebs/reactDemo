import React, { Component } from 'react'
// React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
export class FragmentDemo extends Component {
    render() {
        return (
            <React.Fragment>
                <div>1</div>
                <div>1</div>
            </React.Fragment>
        )
    }
}

export class FragmentDemo2 extends Component {
    render() {
        return (
            <>  
                {/**<>是React.Fragment的简写形式,可以接受的唯一属性是key */}
              <div>2</div>  
              <div>2</div>  
            </>
        )
    }
}
