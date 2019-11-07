const initialState = {
    username:'',
    password:'',
    loggedIn: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_USERNAME':
            return {...state, username:action.username};

        case 'CHANGE_PASSWORD':
            return {...state, password:action.password};

        case 'SET_LOGGEDIN':
            console.log("setting loggedIn : " + action.loggedIn)
            return {...state, loggedIn:action.loggedIn};
            
        default:
            return state;
    }
}

export default userReducer;