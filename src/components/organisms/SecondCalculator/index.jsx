import React, { useState } from 'react';
import InputSelect from '../../molecules/InputSelect';
import Tabs from '../../molecules/Taps';

function SecondCalculator() {
    const [selected, setSelected] = useState("USD")
    
    

  return (
    <>
      <InputSelect selected={selected} setSelected={setSelected}></InputSelect>
      <Tabs currency={selected} />
    </>
  );
}

export default SecondCalculator;
