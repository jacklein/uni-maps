import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.title
    }
  }

  componentDidMount() {
    console.log('map mounting');
  }
  
  render() {
    return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
    )
  }
}

export default MapScreen;