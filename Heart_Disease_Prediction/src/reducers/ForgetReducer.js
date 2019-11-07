const initialState = { 
    email:'',
}

const forgetReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_EMAIL':
            return {...state, email:action.email};

        default:
            return state;
    }
}

export default forgetReducer;