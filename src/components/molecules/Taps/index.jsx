import React from 'react';

const tabArr = [
  {
    tabTitle: 'USD',
    tabContent: <div>tab1 content</div>,
  },
  {
    tabTitle: 'CAD',
    tabContent: <div>tab1 content</div>,
  },
  {
    tabTitle: 'KRW',
    tabContent: <div>tab1 content</div>,
  },
  {
    tabTitle: 'HKD',
    tabContent: <div>tab1 content</div>,
  },
  {
    tabTitle: 'JPY',
    tabContent: <div>tab1 content</div>,
  },
  {
    tabTitle: 'CNY',
    tabContent: <div>tab1 content</div>,
  },
];

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
  const timeGapToKST = 9 * 60 * 60 * 1000;
  const date = new Date(time * 1000 + timeGapToKST);
  const year = date.getFullYear();
  const month = numberToMonth(date.getMonth() + 1);
  const day = '0' + date.getDate();
  return year + '-' + month + '-' + day.substr(-2);
};

const Taps = ({ currency, result, mock }) => (
  <div>
    <ul>
      {tabArr.map((section, index) => {
        return currency === section.tabTitle ? (
          <h3 key={index}>{section.tabTitle}</h3>
        ) : (
          <li key={index}>{section.tabTitle}</li>
        );
      })}
    </ul>
    <h1>
      {currency} : {result.substr()}
    </h1>
    <p>기준일 : {unixTimestamp(mock.timestamp)}</p>
  </div>
);

export default Taps;
