import React from 'react'
import ReactDOM from 'react-dom'
import JsxDemo from './jsx';
import StateDemo from './state';
import EventDemo from './event'
import ConditionDemo from './condition'
import KeyDemo from './key'
import FormDemo from './form'
import CombinaDemo from './combina'
import RefDemo from './ref'
import CustomTextInput from './refFunction'
import ContextDemo from './context'
import {FragmentDemo, FragmentDemo2} from './fragment'
import PortalsDemo from './portals'
import ProfilerDemo from './profiler'
import RefCallbackDemo from './refCallback'
import RenderPropsDemo from './render-props'
import PropstypesDemo from './propsTypes'
import HookDemo from './hook'
import CustomHook from './customHook'
import HooksDemo from './hooks'
import ContentHookDemo from './contentHook'
import UseReducerDemo, {Counter} from './useReducer'
import UseMemoDemo from './useMemoDemo'
import UseLayoutEffectDemo from './useLayoutEffectDemo'
const jsx1 = <div>外部内容</div>  //jsx会被转化为js对象，所以可以像普通的js一样使用。
const boo = true;
// React DOM 只会更新实际改变了的内容
ReactDOM.render(
    <div>
        {/* <div id="portals"></div>
        {boo?jsx1:null}
        <JsxDemo name="jack"></JsxDemo>
        <StateDemo />
        <EventDemo />
        <ConditionDemo />
        <KeyDemo />
        <FormDemo />
        <CombinaDemo>
            <h1>嵌入改组件中的内容用props.children接收。</h1>
        </CombinaDemo>
        <RefDemo />
        <CustomTextInput />
        <ContextDemo />
        <FragmentDemo />
        <FragmentDemo2 />
        <PortalsDemo>
            portals内容展示。
        </PortalsDemo>
        <ProfilerDemo />
        <RefCallbackDemo />
        <RenderPropsDemo render={(obj)=>{
            return (
                <div>
                    {obj.name} -- {obj.age}
                </div>
            )
        }}/>
        <PropstypesDemo name={"a"} customProp={"b"}/> */}
        {/* <HookDemo /> */}
        {/* <CustomHook id={2}/> */}
        {/* <HooksDemo /> */}
        {/* <ContentHookDemo /> */}
        {/* <UseReducerDemo />
        <Counter initialCount={1}/> */}
        {/* <UseMemoDemo /> */}
        <UseLayoutEffectDemo />
    </div>
    , document.getElementById("root"))