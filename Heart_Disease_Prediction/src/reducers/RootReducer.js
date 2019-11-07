import {combineReducers} from 'redux';

import userReducer from './UserReducer';
import signupReducer from './SignupReducer';
import predictreducer from './PredictReducer';
import forgetReducer from './ForgetReducer';

const rootReducer = combineReducers({
    user: userReducer,
    signup: signupReducer,
    predict: predictreducer,
    forget: forgetReducer
});

export default rootReducer;