import { useState } from 'react';
import {calculator1CurrencyList} from '../../commons/constants/currencyList'
import { exchange } from '../../utils/exchange';

function FirstCalculator({ data }) {
  const [country, setCountry] = useState('KRW');
  const [price, setPrice] = useState('');
  const [ans, setAns] = useState('');

  const handleSelect = (e) => {
    setCountry(e.target.value);
  };

  const onSubmit = () => {
    if (price < 0 || price > 10000 || price === '') {
      alert('송금액이 바르지 않습니다.');
    } else {
      setAns(
        `수취금액은 ${exchange(
          data.quotes,
          price,
          country
        )} ${country} 입니다 `
      );
    }
  };

  const onChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <h1>1st 환율계산 </h1>
      <div>
        <div>송금국가: 미국(USD)</div>
        <div>
          <span>수취국가:</span>
          <select onChange={handleSelect}>
            {Object.keys(calculator1CurrencyList).map((key) => {
              return (
                <option key={key} value={key}>
                  {calculator1CurrencyList[key] + '(' + key + ')'}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          {data ? (
            <>
              <span>
                환율:{Number(data.quotes['USD' + country]).toFixed(2)}
                {country} / USD
              </span>
              <div>
                <span>송금액:</span>
                <input type="number" id="price" onChange={onChange} /> USD
              </div>
              <button type="submit" onClick={onSubmit}>
                Submit
              </button>
              <div>{ans}</div>
            </>
          ) : (
            <span>network에 문제가 발생했습니다</span>
          )}
        </div>
      </div>
    </>
  )
}

export default FirstCalculator;
