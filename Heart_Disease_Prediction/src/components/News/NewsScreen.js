import React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

// Import getNews function from news.js
import { getNews } from './news';

import Article from './Article';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class App extends React.Component {
  static navigationOptions = {
    title : 'News Feed',
    headerBackground: (
      <Image
        style={{width :DEVICE_WIDTH, height:80}}
        source={require("../images/background.png")}
      />
    ),
    headerTitleStyle: {
      color: 'white'
    },
    headerTintColor: '#fff',
    
  };

  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  // Called after a component is mounted
  componentDidMount() {
    this.fetchNews();
   }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
  );
  }
}