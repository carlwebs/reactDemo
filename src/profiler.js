import React, { Component,Profiler } from 'react'
// Profiler 能添加在 React 树中的任何地方来测量树中这部分渲染所带来的开销。 它需要两
// 个 prop ：一个是 id(string)，一个是当组件树中的组件“提交”更新的时候被React调用的
// 回调函数 onRender(function)。
export default class ProfilerDemo extends Component {
    // 参数详情
    // id, // 发生提交的 Profiler 树的 “id”
    // phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    // actualDuration, // 本次更新 committed 花费的渲染时间
    // baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    // startTime, // 本次更新中 React 开始渲染的时间
    // commitTime, // 本次更新中 React committed 的时间
    // interactions // 属于本次更新的 interactions 的集合
    callback = (id,phase,actualDuration,baseDuration,startTime,commitTime,interactions)=>{
        console.log(id,phase,actualDuration,baseDuration,startTime,commitTime,interactions);
    }
    render() {
        return (
            <Profiler id="Navigation" onRender={this.callback}>
                <div>Profiler测量该组件的时间。</div>
            </Profiler>
        )
    }
}
