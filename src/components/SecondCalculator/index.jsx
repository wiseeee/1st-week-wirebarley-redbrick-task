/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Main, TabMenu, Tab, TabContent,Input } from './styled';
import { calculator2CurrencyList } from '../../commons/constants/currencyList';
import { unixTimestamp } from '../../utils/timeConvertor';
import { numAddComma } from '../../utils/numAddComma';

function SecondCalculator({ data }) {
  const [selected, setSelected] = useState('USD');
  const [tabSelected, setTabSelected] = useState('USD');
  const [input, setInput] = useState('');
  const [exchanged, setExchanged] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (selected === tabSelected) {
      setExchanged(input);
    } else {
      const divider = selected === 'USD' ? 1 : data.quotes['USD' + selected];
      const mutiplier =
        tabSelected === 'USD' ? 1 : data.quotes['USD' + tabSelected];
      const exchanged = (Number(input) / divider) * mutiplier;
      setExchanged(exchanged);
    }
  }, [input, selected, tabSelected]);

  const onChange = (e) => {
    const value = e.target.value;
    const inputValue = Number(value.replace(/\,/g, ''));

    if (!/^[0-9]+$/.test(inputValue)) {
      const tmp = value.slice(0, -1);
      e.target.value = tmp;
      setInput(tmp);
      return;
    }

    if (inputValue >= 1000) {
      e.target.value = numAddComma(1000);
      setInput(1000);
    } else if (isDoubleZero(value)) {
      e.target.value = 0;
    } else {
      setInput(inputValue);
      e.target.value = numAddComma(inputValue);
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

  const tabClickHandler = (index) => {
    setActiveIndex(index);
    setTabSelected(calculator2CurrencyList[index]);
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <h1>2nd 환율계산기</h1>
      <Input type="text" id="" onChange={onChange} />
      <select onChange={handleSelect} name="currency" id="currency">
        {calculator2CurrencyList.map((str, index) => (
          <option key={index} value={str}>
            {str}
          </option>
        ))}
      </select>
      <Main>
        <TabMenu>
          {calculator2CurrencyList.map((currency, index) => (
            <Tab
              key={index}
              onClick={() => tabClickHandler(index)}
              isActive={activeIndex === index}
            >
              {currency}
            </Tab>
          ))}
        </TabMenu>
        <TabContent>
          <h2>
            {calculator2CurrencyList[activeIndex]} :{' '}
            {exchanged ? Number(exchanged).toFixed(2) : ''}
          </h2>
          <p>기준일 : {unixTimestamp(data?.timestamp)}</p>
        </TabContent>
      </Main>
    </>
  );
}

export default SecondCalculator;
