import  { useState,useEffect } from 'react';
import caculating from '../../../utils/Calculate.js';

  function FirstCalculator () {
    const [country, setCountry] = useState("KRW");
    const [price, setPrice] = useState(0);
    const [data, setData] = useState(null);
    const [ans, setAns] = useState("");

    useEffect(() => {
      const Address = "http://api.currencylayer.com/live?access_key=" + process.env.REACT_APP_API_KEY + "&currencies=CAD,KRW,HKD,JPY,CNY,PHP&source=USD&&format=1"
      async function GetApi () {
        const d = await fetch(Address)
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          return myJson.quotes;
        });
        setData(d)
      }
      GetApi();
    },[])

    const handleSelect = (e) => {
      setCountry(e.target.value);
    }

    const OnSubmit =  () => {
      setAns(`수취금액은 ${caculating(data, price, country)} 입니다 ${country}`)
    }

    const onChange = (e) => {
      setPrice(e.target.value)
    }

    return (
      data ? (
        <>
          <h1>1st 환율계산 </h1>
          <div>
            <div>
            <span>송금국가: 미국(USD)</span>
            </div>
            <div>
              <span>수취국가:</span>
              <select onChange ={handleSelect}>
                <option key="KRW" value="KRW">한국(KRW)</option>
                <option key="JPY" value="JPY">일본(JPY)</option>
                <option key="PHP" value="PHP">필리핀(PHP)</option>
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
