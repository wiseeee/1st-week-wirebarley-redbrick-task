// Input 컴포넌트
// src/components/atoms/input/index.js
import React from 'react';

function Input({ type = 'text', id = '', input, setInput }) {
  const onChange = (e) => {
    const inputValue = e.target.value;

    //TODO: 특수문자 예외처리 (+,-,*)
    if (Number(inputValue) > 1000) {
      e.target.value = 1000;
    }

    if (isDoubleZero(e.target.value)) {
      e.target.value = 0;
    }

    setInput(e.target.value);
  };

  const isDoubleZero = (n) => {
    if (n === '') return;

    const result = String(n)
      .split('')
      .reduce((a, b) => Number(a) + Number(b));

    return result === 0 ? true : false;
  };

  return <input type={type} id={id} onChange={onChange} />;
}
export default Input;
