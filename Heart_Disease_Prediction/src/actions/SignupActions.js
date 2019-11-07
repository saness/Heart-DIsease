
import UserController from '../controllers/UserController';



export const changeName = name => {
    return {
        type:'CHANGE_NAME',
        name
    }
}

export const changeEmail = email => {
    return {
        type:'CHANGE_EMAIL',
        email
    }
}

export const changeUsername = username => {
    return {
        type:'CHANGE_USERNAME',
        username
    }
}

export const changePassword = password => {
    return {
        type:'CHANGE_PASSWORD',
        password
    }
}

export const changeConfirmPassword = confirmPassword => {
    return {
        type:'CHANGE_CONFIRMPASSWORD',
        confirmPassword
    }
}
//action for sign up function
    export const signup = userDetails => async() => {
        console.log('inside sign up action')
        console.log(userDetails);
        const response = await UserController.signup(userDetails);
        console.log('response sign up')
        console.log(response)
        
        console.log(response == true)
        
    }