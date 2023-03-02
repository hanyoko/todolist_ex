import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        // {id: 1, text: "사과"},
        // {id: 2, text: "딸기"},
        // {id: 3, text: "바나나"},
        // {id: 4, text: "오렌지"},
    ])
    //인풋상태관리
    const [inputText, setInputText] = useState("");
    //id상태관리
    const [nextId, setNextId] = useState(5);
    //버튼 클릭시 실행될 함수
    const onClick = () => {
        const nextNames = [
            ...names,
            { id: nextId , text: inputText }
        ];
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText("");
    }
    //함수표현식
    const onChange = (e) => setInputText(e.target.value);
    //항목을 삭제하는 함수
    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }
    const namelist = names.map((name,index)=><li key={index}>{name.text}
    <button onClick={ ()=>onRemove(name.id) }>삭제</button></li>)
    return (
        <div id="wrap">
            <header>
                <input value={inputText} onChange={onChange} />
                <button onClick={onClick}>추가</button>
            </header>
            <ul>
                {namelist}
            </ul>
        </div>
    );
};

export default IterationSample;