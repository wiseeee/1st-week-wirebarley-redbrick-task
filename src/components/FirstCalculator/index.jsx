import { useState } from 'react';
import { Exchange } from '../../utils/Calculate.js';
import {Calculator1Currency} from '../../commons/constants/currencyList'

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
        `수취금액은 ${Exchange(
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

  return data ? (
    <>
      <h1>1st 환율계산 </h1>
      <div>
        <div>송금국가: 미국(USD)</div>
        <div>
          <span>수취국가:</span>
          <select onChange={handleSelect}>
            {Object.keys(Calculator1Currency).map((key) => {
              return (
                <option key={key} value={key}>
                  {Calculator1Currency[key] + '(' + key + ')'}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <span>
            환율:{Number(data.quotes['USD' + country]).toFixed(2)}
            {country} / USD
          </span>
        </div>
        <div>
          <span>송금액:</span>
          <input type="number" id="price" onChange={onChange} /> USD
        </div>
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
      <div>{ans}</div>
    </>
  ) : (
    <>no data</>
  );
}

export default FirstCalculator;
