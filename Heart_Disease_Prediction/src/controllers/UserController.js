import {Alert} from 'react-native';

class UserController {
    signup = async (userDetails) => {
      console.log('Inside signup')
      console.log(userDetails);
      fetch("http://192.168.43.69:5000/signup", {
        method:'POST',
        header:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'

        },
        body: JSON.stringify(userDetails) //sending user sign up data as json
      })
      .then((response) => {console.log('Got response');
        console.log(response)
        return response.text()})
        .then((responseJson) => {
          console.log('Before if');
          console.log(responseJson)
          var changed = JSON.parse(responseJson);
          console.log('Printed')
          console.log(changed)
          //for validation in sign up
          if (changed.success === 1 )
          {
            Alert.alert('Signup Successful')
          } else if (changed.success === 2){
            alert('Email already taken')
          } else if (changed.success === 0) {
            alert('Username already taken.')
          }
        })
        .catch((error)=> {
          return Promise.resolve({'message': 'Sign Up failed','success':0})
        });
    }


    forget = async (forgetDetails) => {
      console.log('Inside forget')
      console.log(forgetDetails);
      fetch("http://192.168.43.69:5000/forget", {
        method:'POST',
        header:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'

        },
        body: JSON.stringify(forgetDetails)
      })
      .then((response) => {console.log('Got response');
        console.log(response)
        return response.text()})
        .then((responseJson) => {
          console.log('Before if');
          console.log(responseJson)
          var data = JSON.parse(responseJson);
          console.log('Printed')
          console.log(data)
          //for forgot password validation
          if (data.success === 1 )
          {
            Alert.alert('Email sent successfully')
          }  else  {
            alert('Email is not registered.')
          }
        })
        .catch((error)=> {
          console.error(error);
        });
    }

   

    login = async (userDetails) => {
      console.log('Inside login')
      console.log(userDetails);
      return fetch("http://192.168.43.69:5000/apilogin", {
        method:'POST',
        header:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'

        },
        body: JSON.stringify(userDetails) //login details as json
      })
      .then((response) => {console.log('Got response');
        console.log(response)
        return response.text()})
        .then((responseJson) => {
          console.log('Before if');
          console.log(responseJson);
          var parsed = JSON.parse(responseJson);
          console.log('Login Parsed message: ')
          console.log(parsed);
         
          return Promise.resolve(parsed) //returning a promise
          
        })
        .catch((error)=> {
          return Promise.resolve({'message': 'error occured', 'success':0})
        });
    }
  }


export default new UserController();