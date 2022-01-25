// Input 컴포넌트
// src/components/atoms/input/index.js

import React from 'react';

const DropDown = ({ name = 'currency', id = 'currency', arr }) => (
  <select name="currency" id="currency">
    {arr.map((str) => (
      <option key={arr.indexOf(str)} value={str}>
        {str}
      </option>
    ))}
  </select>
);

export default DropDown;
