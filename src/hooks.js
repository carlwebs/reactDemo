import React, { useState, useEffect } from 'react';
export default function HooksDemo() {
    // useState 不会自动合并更新对象。你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果。
    const [count, setCount] = useState(0); 
    const [initCount, setInitCount] = useState(() => {
        return 1;
    })
    // 如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直持有其初始值。
    useEffect(() => {
        console.log(initCount);
        // setInterval(() => {
        //     console.log(count);  //打印的结果一直为0
        // }, 2000);
    },[])
    const reset = () => {
        setCount(0);
    }
    const add = () => {
        // preCount获取上一次的值。
        setCount((preCount) => {
            console.log(preCount);
            return preCount+1;
        })
    }
    return (
        <div>
            <div>count的值: {count}</div>
            <div><button onClick={reset}>reset</button></div>
            <div><button onClick={add}>+</button></div>
        </div>
    )
}