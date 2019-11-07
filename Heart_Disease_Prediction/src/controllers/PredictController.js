

class PredictController {
  predict = async (inputDetails) => {
    console.log('Inside predict')
    console.log(inputDetails);
    return fetch("http://192.168.43.69:5000/apipredict", {
      method:'POST',
      header:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(inputDetails) //sending predict input data as json
    })
    .then((response) => {console.log('Got response');
      console.log(response)
      return response.text()})
      .then((responseJson) => {
        console.log('Before if');
        var value = JSON.parse(responseJson);
        console.log(value)
        return Promise.resolve(value) //returning a promise
        
      })
      .catch((error)=> {
        return Promise.resolve({'Error': 'Predict failed'})
      });
  }
}

export default new PredictController();