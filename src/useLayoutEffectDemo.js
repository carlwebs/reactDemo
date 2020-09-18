import React, { useLayoutEffect, useEffect } from 'react';
export default function UseLayoutEffectDemo() {
    // useEffect:
    // 基本上90%的情况下,都应该用这个,这个是在render结束后,你的callback函数执行,
    // 但是不会block browser painting,算是某种异步的方式吧,但是class的componentDidMount 
    // 和componentDidUpdate是同步的,在render结束后就运行,useEffect在大部分场景下都比class的方式性能更好.
    // useLayoutEffect:
    // 这个是用在处理DOM的时候,当你的useEffect里面的操作需要处理DOM,并且会改变页面的样式,就需要用这个,否则可能
    // 会出现出现闪屏问题, useLayoutEffect里面的callback函数会在DOM更新完成后立即执行,但是会在浏览器进行任何绘
    // 制之前运行完成,阻塞了浏览器的绘制.
    
    // useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用阶段是一样的。但是，我们推荐你一开始先用 useEffect，
    // 只有当它出问题的时候再尝试使用 useLayoutEffect。
    useEffect(() => {
        console.log("useEffect");
    })
    useLayoutEffect(() => {
        console.log("useLayoutEffect");
    })
    return (
        <div>
            shduif
        </div>
    )
}