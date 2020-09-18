import React, { useState, useEffect } from 'react';
// 自定义hook,要以use开头,提取公共的状态，多个组件之间共享状态。
// 自定义hook每一次数据变化都会重新调用useHookDemo
function useHookDemo(id) {
    const [count,setCount] = useState(0);
    useEffect(() => {
        console.log("effect");
        setCount(1);
        return () => {
            console.log("组件销毁")
        }
    },[count])
    return id + count
}
export default function CustomHook(props) {
    const id = useHookDemo(props.id);
    useEffect(() => {
        console.log(id);
    },[id])
    return (
        <div>
            dhfui
        </div>
    )
}
// 打印结果为：effect,2,组件销毁，effect3

