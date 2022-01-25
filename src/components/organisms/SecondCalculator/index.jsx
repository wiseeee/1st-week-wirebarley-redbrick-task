import React, { useState } from 'react';
import InputSelect from '../../molecules/InputSelect';
import Tabs from '../../molecules/Taps';

const currency = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];

function SecondCalculator() {
  const [selected, setSelected] = useState('USD');
  const [mock, setMock] = useState({
    success: true,
    terms: 'https://currencylayer.com/terms',
    privacy: 'https://currencylayer.com/privacy',
    timestamp: 1643011864,
  });
  const [input, setInput] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <InputSelect
        currencyList={currency}
        input={input}
        setInput={setInput}
        selected={selected}
        setSelected={setSelected}
      ></InputSelect>
      <Tabs currency={selected} mock={mock} result={input} />
    </>
  );
}

export default SecondCalculator;
