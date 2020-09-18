import React, { useEffect, useState } from 'react';
// Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用。
export default function HookDemo() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [obj,setObj] = useState({"name":"JACK","age":12});
    // 你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
    // React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。
    // 为什么要在 effect 中返回一个函数？ 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除
    // 订阅的逻辑放在一起。它们都属于 effect 的一部分。
    // React 何时清除 effect？ React 会在组件卸载的时候执行清除操作。正如之前学到的，effect 在每次渲染的时候都会执行。这就是
    // 为什么 React 会在执行当前 effect 之前对上一个 effect 进行清除。
    // React 将按照 effect 声明的顺序依次调用组件中的每一个 effect。
    // React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect

    // Hook 需要在我们组件的最顶层调用，不能放在条件判断中。默认多次渲染react会按照顺序执行hook，如果某一次渲染有一个hook没有执行，
    // 两次的hook顺序对应不上，就会造成bug。
    useEffect(() => {
        console.log(count);
        // 内容变化会先执行return中的函数，然后执行上面。
        // 订阅某一条数据，数据改变，清除订阅。
        // 每次我们重新渲染，都会生成新的 effect，替换掉之前的。某种意义上讲，effect 
        // 更像是渲染结果的一部分 —— 每个 effect “属于”一次特定的渲染。
        // ffect 的清除阶段在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次。
        // 对于为什么在数据切换得时候都执行return返回函数得原因，假设订阅不同ID得信息，切换ID就要把原来ID得
        // 订阅取消调，订阅新的ID。这样可以在return中直接取消订阅，而不用向class一样在componentDidUpdate
        // 中进行处理，useEffect可以统一处理。
        return () => {
            console.log("组件销毁");
        }
    },[count,obj])  //仅在 count，或者obj 更改时更新，对象属性更改也会执行。
    useEffect(() => {
        console.log("可以有多个useEffect");
    },[null])
    // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。
    useEffect(() => {
        console.log("组件销毁的时候调用。");
    },[])
    return (
        <div>
            <div id={"box"}>count内容：{count}</div>
            <br/>
            count2内容：{count2}
            <br/>
            <button onClick={() => {setCount(count+1);setCount2(count2+1)}}>
                add 
            </button>
            <br/>
            obj: {obj.name} -- {obj.age}
            <br/>
            <button onClick={() => {setObj({"name":"change","age":12})}}>
                change obj
            </button>
        </div>
    )
}
