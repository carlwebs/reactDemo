import React, { useMemo, useState, useEffect, useCallback } from 'react';
export default function UseMemoDemo() {
    const [count, setCount] = useState(1);
    // useMemo 与 useEffect 作用类似，都会在依赖值改变时重新执行，但 useMemo 有一个缓存的返回值。
    // 因此在组织渲染生命周期中，很自然地会把useMemo放到渲染DOM之前执行。
    // useEffect在dom渲染之后执行。
    // useMemo 其实创建了一种数据缓存机制。
    useEffect(() => {
        console.log(document.getElementById("box").innerHTML);
    },[count])
    // useMemo与useCallback差不多，只是一个返回value，一个返回callback
    const count2 = useMemo(() => {
        console.log(document.getElementById("box")); //null
        return count + 1;
    },[count])
    const count3Callback = useCallback(() => {
        console.log(document.getElementById("box")); //null
        return count + 2;
    })
    return (
        <div>
            <div id="box">count: {count}</div>
            <div>{count2}</div>
            <div>{count3Callback()}</div>
        </div>
    )
}