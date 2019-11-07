import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './components/navigation';
import {persist, store} from './reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default class App extends Component {

  state = {
    ready: false,
  };

  componentDidMount() {
    persist(() => {
      this.setState({ ready: true });
    });
  }

  renderEmpty = () => (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );

  render() {
    const { ready } = this.state; //destructuring
    if (!ready) {
      return this.renderEmpty();
    }
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
