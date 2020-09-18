import React, { useRef }  from 'react'

export default function CustomTextInput(props) {
    // 使用格式：
    // const refContainer = useRef(initialValue);
    // useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
    // 返回的 ref 对象在组件的整个生命周期内保持不变。
    
    // 这里必须声明 textInput，这样 ref 才可以引用它
    const textInput = useRef(null);

    function handleClick() {
        textInput.current.focus();
    }

    return (
        <div>
            <input
                type="text"
                ref={textInput} />
            <input
                type="button"
                value="Focus the text input"
                onClick={handleClick}
            />
        </div>
    );
}