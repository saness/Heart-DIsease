const initialState = {

    name:'',
    email:'',
    username:'',
    password:'',
    confirmPassword:''
}

const signupReducer = (state = initialState, action) => {
    switch(action.type) {
            
        case 'CHANGE_NAME':
            return {...state, name:action.name};

        case 'CHANGE_EMAIL':
            return {...state, email:action.email};
    
        case 'CHANGE_USERNAME':
            return {...state, username:action.username};

        case 'CHANGE_PASSWORD':
            return {...state, password:action.password};

        case 'CHANGE_CONFIRMPASSWORD':
            return {...state, confirmPassword:action.confirmPassword};

        default:
            return state;
    }
}

export default signupReducer;