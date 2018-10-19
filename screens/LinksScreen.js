import React from 'react';
import { Text, View, TouchableOpacity, Button, Image } from 'react-native';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'API Call',
  };

  getMoviesFromApi = async () => {
    try {
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();
      console.log('---------' + responseJson.movies)
      return responseJson.movies;
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Button
            onPress={this.getMoviesFromApi}
            title="Open Camera"
            color="#841584"
          />
          <Text
            style={{ fontSize: 18, marginBottom: 20, marginTop: 20 }}>
            Your Picture Below
          </Text>
          <Image
            style={{ height: 400, width: 400 }}
          />
        </View>
      );
  }
}