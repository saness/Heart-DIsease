import React from 'react';
import WallPaper from './Wallpaper';
import Form from './Form';
import ButtonPredict from './ButtonPredict';


class PredictScreen extends React.Component {
    static navigationOptions = {
        header:null,
      };

    render() {
        return (

            <WallPaper>
                <Form />
                <ButtonPredict navigate = {this.props.navigation.navigate}/>
            </WallPaper>

        )
    }
}

export default PredictScreen;