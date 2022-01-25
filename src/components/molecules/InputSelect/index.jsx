import React from 'react';
import Input from '../../atoms/Input/index';
import DropDown from '../../atoms/DropDown/index';

const currency = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];

export default function InputSelect({ selected, setSelected }) {
  return (
    <>
      <Input type="number"></Input>
      <DropDown arr={currency} selected={selected} setSelected={setSelected}></DropDown>
    </>
  );
}
