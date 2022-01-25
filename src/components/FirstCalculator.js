import { useState } from 'react';
import caculating, {data} from '../utils/Calculate.js'


  function FirstCalculator () {
    console.log(caculating(2, "KRW"))

    const [country, setCountry] = useState("");
    const handleSelect = (e) => {
      setCountry(e.target.value);
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
            <select>
              <option key="KRW" value="KRW">한국(KRW)</option>
              <option key="JPY" value="JPY">일본(JPY)</option>
              <option key="PHP" value="PHP">필리핀(PHP)</option>
            </select>
          </div>
          <div>
            <span>환율:</span>

          </div>
          <div>
            <span>송금액:</span>
            <input type="number"></input>
            USD
          </div>
          <button type="submit">Submit</button>
        </div>
        <span>수취금액은</span>
        <span></span>
        <span>입니다.</span>
      </>
    )
  }

export default FirstCalculator;

