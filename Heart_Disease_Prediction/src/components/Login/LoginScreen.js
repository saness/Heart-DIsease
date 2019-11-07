import React from 'react';
import WallPaper from './Wallpaper';
import Logo from './Logo';
import Form from './Form';
import SignupSection from './SignupSection';
import ButtonSubmit from './ButtonSubmit';

class LoginScreen extends React.Component {
    
    render() {
        return (

            <WallPaper>
                <Logo />
                <Form />
                <ButtonSubmit/>
                <SignupSection navigate = {this.props.navigation.navigate}/>
            </WallPaper>

        )
    }
}

export default LoginScreen;