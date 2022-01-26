import { useState } from 'react';
import {calculator1CurrencyList} from '../../commons/constants/currencyList'
import { exchange } from '../../utils/exchange';
import { Label,FlexBox, Btn,BoldFont } from './styled';

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
      <h1>1st 환율계산기</h1>
      <div>
        <Label>송금국가: 미국(USD)</Label>
        <FlexBox>
          <Label>수취국가:</Label>
          <select onChange={handleSelect}>
            {Object.keys(calculator1CurrencyList).map((key) => {
              return (
                <option key={key} value={key}>
                  {calculator1CurrencyList[key] + '(' + key + ')'}
                </option>
              );
            })}
          </select>
        </FlexBox>
        <div>
          {data ? (
            <>
              <Label>
                환율:
                <BoldFont>
                  {Number(data.quotes['USD' + country]).toFixed(2)} {country}/USD
                </BoldFont>
              </Label>
              <FlexBox>
                <Label>송금액:</Label>
                <input type="number" id="price" onChange={onChange} /> USD
              </FlexBox>
              <Btn type="submit" onClick={onSubmit}>
                Submit
              </Btn>
              <Label>{ans}</Label>
            </>
          ) : (
            <Label>network에 문제가 발생했습니다</Label>
          )}
        </div>
      </div>
    </>
  )
}

export default FirstCalculator;
