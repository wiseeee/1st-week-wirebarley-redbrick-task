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

export const unixTimestamp = (time) => {
  const date = new Date(time * 1000);
  const year = date.getFullYear();
  const month = numberToMonth(date.getMonth() + 1);
  const day = '0' + date.getDate();

  return year + '-' + month + '-' + day.substr(-2);
};
