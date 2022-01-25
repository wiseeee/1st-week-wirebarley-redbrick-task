import  { useState,useEffect } from 'react';
import {caculating, GetJsonData} from '../../../utils/Calculate.js';
import {InputSelect} from '../../molecules/InputSelect';

  function FirstCalculator () {
    const [country, setCountry] = useState("KRW");
    const [price, setPrice] = useState('');
    const [data, setData] = useState(null);
    const [ans, setAns] = useState("");

    useEffect(() => {
      async function GetApi () {
        const jsonData = await GetJsonData();
        setData(jsonData)
      }
      GetApi();
    },[])

    const handleSelect = (e) => {
      setCountry(e.target.value);
    }

    const OnSubmit =  () => {
      if (price < 0 || price > 10000 || price === '') {
        alert('송금액이 바르지 않습니다.')
      } else {
        setAns(`수취금액은 ${caculating(data, price, country)} ${country} 입니다 `)
      }
    }

    const onChange = (e) => {
      setPrice(e.target.value)
    }

    const currency = {KRW: "한국", JPY:"일본", PHP:"필리핀"};

    return (
      data ? (
        <>
          <h1>1st 환율계산 </h1>
          <div>
            <div>
            송금국가: 미국(USD)
            </div>
            <div>
              <span>수취국가:</span>
              <select onChange ={handleSelect}>
                {Object.keys(currency).map(key => {
                  return(
                    <option key={key} value={key}>{currency[key]+"("+key+")"}</option>
                  )
                })}
              </select>
            </div>
            <div>
              <span>환율:{Number(data["USD"+country]).toFixed(2)}{country} / USD</span>
            </div>
            <div>
              <span>송금액:</span>
              <input type="number" id='price' onChange={onChange}/> USD
            </div>
            <button type="submit" onClick={OnSubmit} >Submit</button>
          </div>
          <div>
            {ans}
          </div>
        </>
      ) : <>no data</>
    )
  }

export default FirstCalculator;
