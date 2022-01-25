// Input 컴포넌트
// src/components/atoms/input/index.js

import React from 'react';

function DropDown ({ name = 'currency', id = 'currency', arr, selected, setSelected }) {
    const handleSelect = (e) => {
        setSelected(e.target.value)
    } 
    return (
        <select onChange={handleSelect} name="currency" id="currency">
            {arr.map((str) => (
            <option key={arr.indexOf(str)} value={str} >
                {str}
            </option>
            ))}
        </select>
    );
} 


    
export default DropDown;
