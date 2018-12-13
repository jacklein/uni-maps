import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.title
    }
  }
  
  render() {
    return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={this.props.navigation.state.params.initialRegion}
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