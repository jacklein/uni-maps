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
    console.log(this.props.navigation.state.params.places);
  }
  
  render() {
    return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 41.925100,
            longitude: -87.656619,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {this.props.navigation.state.params.places.map(place => (
            <MapView.Marker
              key={place.name}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude
              }}
              title={place.name}
              description='Marker Description'
            />
          ))}
        </MapView>
    )
  }
}

export default MapScreen;