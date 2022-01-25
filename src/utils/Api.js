const Address = "http://api.currencylayer.com/live?access_key=" + process.env.REACT_APP_API_KEY + "&format=1"

function GetApi () {
  fetch(Address)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.parse(myJson).quotes); 
    return JSON.parse(myJson).quotes;
  });
}


export default GetApi;
