export function Exchange(data, input, target) {
  const exchageRate = data['USD' + target];
  const output = (exchageRate * input).toFixed(2);
  return output.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export async function GetJsonData() {
  const Address =
    'https://cors-anywhere.herokuapp.com/http://api.currencylayer.com/live?access_key=' + process.env.REACT_APP_API_KEY + '&currencies=CAD,KRW,HKD,JPY,CNY,PHP&source=USD&&format=1';
  const data = await fetch(Address,{mode: "cors"})
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      return myJson;
    });
  return data;
}
