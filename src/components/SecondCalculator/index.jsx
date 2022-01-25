/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetJsonData} from '../../utils/Calculate.js';


const Main = styled.div`
margin-top: 20px;

width: 300px;
`;

const TabMenu = styled.ul`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
list-style: none;
padding: 0;
margin: 0;
`;

const Tab = styled.li`
border-top: 2px solid black;
border-left: 2px solid black;
border-bottom: ${(props) =>
  props.isActive ? '2px solid white' : '2px solid black'};
  padding: 6px;
  font-size: 14px;
  vertical-align: middle;
  line-height: 20px;
  font-weight: 600;
  cursor: pointer;
  
  &:nth-child(6) {
    border-right: 2px solid black;
  }
  `;
  
  const TabContent = styled.div`
  border-left: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  padding: 16px;
  `;
  
const numberToMonth = (number) => {
  const MONTH_TYPE = {
    1: 'JAN',
    2: 'FEB',
    3: 'MAR',
    4: 'APR',
    5: 'MAY',
    6: 'JUN',
    7: 'JUL',
    8: 'AUG',
    9: 'SEP',
    10: 'OCT',
    11: 'NOV',
    12: 'DEC',
  };
  return MONTH_TYPE[number];
};

const unixTimestamp = (time) => {
  // const timeGapToKST = 9 * 60 * 60 * 1000;
  const date = new Date(time * 1000);
  const year = date.getFullYear();
  const month = numberToMonth(date.getMonth() + 1);
  const day = '0' + date.getDate();
  // const hour = '0' + date.getHours();
  // const min = '0' + date.getMinutes();
  return (
    year + '-' + month + '-' + day.substr(-2)
    );
  };
  
  const numAddComma = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
const currencyList = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];

function SecondCalculator() {
  const [selected, setSelected] = useState('USD');
  const [tabSelected, setTabSelected] = useState('USD');
  const [data, setData] = useState();
  const [input, setInput] = useState('');
  const [exchanged, setExchanged] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function GetApi () {
      const jsonData = await GetJsonData();
      setData(jsonData)
    }
    GetApi();
  },[selected])

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
    }
    if (inputValue >= 1000) {
      e.target.value = numAddComma(1000);
      setInput(1000);
    } else if (isDoubleZero(value)) {
      e.target.value = 0;
    } else {
      e.target.value = numAddComma(inputValue)
      setInput(numAddComma(inputValue));
    }
  };

  const tabClickHandler = (index) => {
    setActiveIndex(index);
    setTabSelected(currencyList[index]);
  };

  const isDoubleZero = (n) => {
    if (n === '') return;
    const result = String(n)
      .split('')
      .reduce((a, b) => Number(a) + Number(b));
    return result === 0 ? true : false;
  };

  const handleSelect = (e) => {
    setSelected(e.target.value)
} 

  return (
    <>
      <input type="text" id='' onChange={onChange} />
      <select onChange={handleSelect} name="currency" id="currency">
          {currencyList.map((str, index) => (
          <option key={index} value={str} >
              {str}
          </option>
          ))}
      </select>
      <Main>
      <TabMenu>
        {currencyList.map((currency, index) => (
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
          {currencyList[activeIndex]} :{' '}
          {exchanged ? Number(exchanged).toFixed(2) : ''}
        </h2>
        <p>기준일 : {unixTimestamp(data?.timestamp)}</p>
      </TabContent>
    </Main>
    </>
  );
}

export default SecondCalculator;
