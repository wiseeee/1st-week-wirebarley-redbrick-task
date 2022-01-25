import React, { useState } from 'react';
import { Main, TabMenu, Tab, TabContent } from './styles';

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
    // + ' ' +
    // hour.substr(-2) +
    // ':' +
    // min.substr(-2)
  );
};

function Taps({ currencyList, exchanged, data, setTabSelected }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
    setTabSelected(currencyList[index]);
  };

  return (
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
  );
}

export default Taps;
