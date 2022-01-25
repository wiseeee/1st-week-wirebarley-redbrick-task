import React, { useState } from 'react';
import InputSelect from '../../molecules/InputSelect';
import Tabs from '../../molecules/Taps';

function SecondCalculator() {
  const [selected, setSelected] = useState('USD');
  const [mock, setMock] = useState({
    success: true,
    terms: 'https://currencylayer.com/terms',
    privacy: 'https://currencylayer.com/privacy',
    timestamp: 1643011864,
  });

  return (
    <>
      <InputSelect selected={selected} setSelected={setSelected}></InputSelect>
      <Tabs currency={selected} mock={mock} />
    </>
  );
}

export default SecondCalculator;
