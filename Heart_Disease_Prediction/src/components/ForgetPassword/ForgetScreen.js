import React from 'react';
import WallPaper from './Wallpaper';
import Form from './Form';
import ButtonSubmit from './ButtonSubmit';
import BackToLoginButton from './BackToLoginButton';

class ForgetScreen extends React.Component {
    render() {
        console.log(this.props.navigation.navigate);
        return (
            <WallPaper>
                <Form />
                <ButtonSubmit/>
                <BackToLoginButton navigate = {this.props.navigation.navigate}/>
            </WallPaper>

        )
    }
}

export default ForgetScreen;