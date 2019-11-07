import {Alert} from 'react-native'
import UserController from '../controllers/UserController'
export const changeUsername = username => {
    return {
        type:'CHANGE_USERNAME',
        username
    }
}

export const setLoggedIn = loggedIn => {
    return {
        type:'SET_LOGGEDIN',
        loggedIn
    }
}

export const changePassword = password => {
    return {
        type:'CHANGE_PASSWORD',
        password
    }
}
//action for login functionality
    export const login = userDetails => async(dispatch)=>{
        console.log("inside login action")
        console.log(userDetails)
        const response = await UserController.login(userDetails);
        console.log("response Login")
        console.log(response)
        
        console.log(response == null)
        if(response !=null && response!= 'undefined' && response.success === 1 ){
            
            dispatch(setLoggedIn(true)); //dispatches setLoggedIn action
        } else {
            console.log("Unable to login user")
            Alert.alert("Invalid Credentials")
        }
    }
