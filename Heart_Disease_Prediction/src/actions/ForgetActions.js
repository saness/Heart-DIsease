import {Alert} from 'react-native';
import UserController from '../controllers/UserController';


export const changeEmail = email => {
    return {
        type:'CHANGE_EMAIL',
        email
    }
}


export const forget = forgetDetails => async(dispatch) => {
    try {
        console.log(forgetDetails);
      const response = await UserController.forget(forgetDetails);
     
    //   dispatch(registerSuccess(user));
    } catch (error) {
    //   dispatch(registerError(error.message));
    }
}