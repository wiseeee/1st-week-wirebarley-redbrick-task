// Input 컴포넌트
// src/components/atoms/input/index.js
import React from 'react';

const numAddComma = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

function Input({ type = 'text', id = '', setInput }) {
  const onChange = (e) => {
    const value = e.target.value;

    const inputValue = Number(value.replace(/\,/g, ''));

    if (!/^[0-9]+$/.test(inputValue)) {
      const tmp = value.slice(0, -1);

      e.target.value = tmp;
      setInput(tmp);
    }

    if (inputValue >= 1000) {
      e.target.value = numAddComma(1000);
      setInput(1000);
    } else if (isDoubleZero(value)) {
      e.target.value = 0;
    } else {
      e.target.value = numAddComma(inputValue)
      setInput(numAddComma(inputValue));
    }
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
