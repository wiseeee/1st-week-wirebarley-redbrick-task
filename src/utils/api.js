export async function GetJsonData() {
  const Address =
    'https://sixted-proxy-cors-anyware.herokuapp.com/' +
    'http://api.currencylayer.com' +
    '/live?access_key=' +
    process.env.REACT_APP_API_KEY +
    '&currencies=CAD,KRW,HKD,JPY,CNY,PHP&source=USD&&format=1';
  const data = await fetch(Address, { mode: 'cors' })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      return myJson;
    });
  return data;
}
