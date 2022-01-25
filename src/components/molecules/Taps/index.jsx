import React from 'react';

const tabArr = [
    {
        tabTitle: 'USD',
        tabContent: (
            <div>tab1 content</div>
        )
    },
    {
        tabTitle: 'CAD',
        tabContent: (
            <div>tab1 content</div>
        )
    },
    {
        tabTitle: 'KRW',
        tabContent: (
            <div>tab1 content</div>
        )
    },
    {
        tabTitle: 'HKD',
        tabContent: (
            <div>tab1 content</div>
        )
    },
    {
        tabTitle: 'JPY',
        tabContent: (
            <div>tab1 content</div>
        )
    },
    {
        tabTitle: 'CNY',
        tabContent: (
            <div>tab1 content</div>
        )
    }
]


const Taps = ({ currency, result, timestamp }) => (
    <div>
        <ul>
            {
                tabArr.map((section, index) => 
                    { 
                        return (currency === section.tabTitle)
                        ? <h3 key={index}>{section.tabTitle}</h3>
                        : <li key={index}>{section.tabTitle}</li>
                    }
                )
            }
        </ul>
        <h1>{currency} : {result}</h1>
        <p>기준일 : {timestamp} </p>
    </div>
  );
  
export default Taps;
