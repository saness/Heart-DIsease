import { createStackNavigator } from 'react-navigation';
import Login from '../Login';
import Signup from '../Signup';
import Forget from '../ForgetPassword';

const AuthStack = createStackNavigator(
    { 
        Login:{
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        Signup:{
            screen: Signup,
            navigationOptions: {
                header: null
            }
        },
        Forget:{
            screen: Forget,
            navigationOptions: {
                header: null
            }
        }
    }
);

export default AuthStack;