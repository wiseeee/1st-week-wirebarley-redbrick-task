// Input 컴포넌트
// src/components/atoms/input/index.js
import React from 'react';

// export const isBlank = (string) => {
//   return string.length === NUMBER.ZERO;
// };

// export const isZero = (string) => {
//   return Number(string) === NUMBER.ZERO;
// };

// export const hasSpecial = (string) => {
//   return string.split(CHAR.EMPTY).some((char) => REGEX.HAS_SPECIAL.test(char));
// };

// export const isValidRacingCount = (string) => {
//   if (hasSpecial(string)) return alert(ERROR.INCLUDE_SPECIAL);

//   return true;
// };
function Input ({ type = 'text', id = '', input, setInput }) {
    const onChange = (e) => {
        const inputValue = e.target.value;
      
        //TODO: 특수문자 예외처리 (+,-,*)
        //TODO: 0000 입력
        //
      
        if (Number(inputValue) > 1000) {
          e.target.value = 1000;
          setInput(e.target.value)
        }
        if (isDoubleZero) {
            console.log("!")
        } 
       
        setInput(e.target.value);
        
      };
      const isDoubleZero = (n) => {
        if (n.includes("00")){
            const result = String(n).split("").reduce((a,b) => Number(a) + Number(b))
            return result === 0 ? true : false
        } else {
            return false;
        }
      }
    return (
        <input type={type} id={id} onChange={onChange} />
      );
} 
export default Input;
