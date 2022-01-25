import react, { useState } from 'react';
import caculating, {data} from '../../../utils/Calculate.js'
import Input from '../../atoms/Input'

  function FirstCalculator () {
    console.log(caculating(2, "KRW"))

    const [country, setCountry] = useState("KRW");
    const [amount, setAmount] = useState("");
    const [price, setPrice] = useState(0);

    const handleSelect = (e) => {
      setCountry(e.target.value);
    }

    const OnSubmit =  () => {
      setAmount(caculating(price, country))
    }

    const onChange = (e) => {
      setPrice(e.target.value)
    }

    return (
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

        {amount === '' ? <></> : ( 
          <div>
            수취금액은 {amount} USD 입니다.
          </div>
        )}
          
        
        
      </>
    )
  }

export default FirstCalculator;
