const Address = "http://api.currencylayer.com/live?access_key=" + process.env.REACT_APP_API_KEY + "&format=1"

async function GetApi() {
  const data = await fetch(Address)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    return myJson.quotes;
  });
  return data
}


export default GetApi;
