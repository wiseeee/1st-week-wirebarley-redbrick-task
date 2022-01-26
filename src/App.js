import React, { useEffect, useState } from 'react';
import FirstCalculator from './components/FirstCalculator';
import SecondCalculator from './components/SecondCalculator';
import {GetJsonData} from './utils/api';
import styled from 'styled-components';

const BackgroundColor = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #F9FAFD;
`;

const MainPage = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
background-color: #F9FAFD;
padding-top: 100px;
`;

const CaculatorBox = styled.div`
  width: 300px;
  margin: 12px;
  padding: 0 12px 12px 12px;
  border: 1px solid #666666;
  border-radius: 6px;
  background-color: white;
`;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function GetApi() {
      const jsonData = await GetJsonData();
      setData(jsonData);
    }
    GetApi();
  }, []);

  return (
    <BackgroundColor>
      <MainPage>
        <CaculatorBox>
          <FirstCalculator data={data} />
        </CaculatorBox>
        <CaculatorBox>
          <SecondCalculator data={data} />
        </CaculatorBox>
      </MainPage>
    </BackgroundColor>
  );
}

export default App;
