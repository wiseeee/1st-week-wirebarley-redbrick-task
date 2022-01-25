/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import InputSelect from '../../molecules/InputSelect';
import Tabs from '../../molecules/Taps';

const currencyList = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];

function SecondCalculator() {
  const [selected, setSelected] = useState('USD');
  const [tabSelected, setTabSelected] = useState('USD');
  const [data, setData] = useState({
    success: true,
    terms: 'https://currencylayer.com/terms',
    privacy: 'https://currencylayer.com/privacy',
    timestamp: 1643098263,
    source: 'USD',
    quotes: {
      USDCAD: 1.264085,
      USDKRW: 1197.43985,
      USDHKD: 7.785895,
      USDJPY: 113.874496,
      USDCNY: 6.327897,
      USDPHP: 51.220502,
    },
  });
  const [input, setInput] = useState('');
  const [exchanged, setExchanged] = useState(0);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      'http://apilayer.net/api/live?access_key=' +
        // process.env.REACT_APP_API_KEY +
        '3470d1c8a0edec3ce3854cbd92b5e074' +
        '&currencies=CAD,KRW,HKD,JPY,CNY,PHP&source=USD&format=1',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }, [selected]);

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

  return (
    <>
      <InputSelect
        currencyList={currencyList}
        input={input}
        setInput={setInput}
        selected={selected}
        setSelected={setSelected}
      ></InputSelect>
      <Tabs
        currencyList={currencyList}
        data={data}
        exchanged={exchanged}
        setTabSelected={setTabSelected}
      />
    </>
  );
}

export default SecondCalculator;
