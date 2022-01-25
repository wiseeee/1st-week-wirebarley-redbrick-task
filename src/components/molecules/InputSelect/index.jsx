import React from 'react';
import Input from '../../atoms/Input/index';
import DropDown from '../../atoms/DropDown/index';

export default function InputSelect({
  currencyList,
  selected,
  setSelected,
  input,
  setInput,
}) {
  return (
    <>
      <Input input={input} setInput={setInput}></Input>
      <DropDown
        currencyList={currencyList}
        selected={selected}
        setSelected={setSelected}
      ></DropDown>
    </>
  );
}
