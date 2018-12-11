import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MapScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.title
    }
  }
  render() {
    return (
      <View>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
        <Text>MapScreen</Text>
      </View>
    )
  }
}

export default MapScreen;