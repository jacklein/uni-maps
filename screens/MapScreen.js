import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.title
    }
  }

  state = { calloutIsRendered: false};

  renderCallout = () => {
    if (!this.state.calloutIsRendered) {
      this.setState({calloutIsRendered: true});
      if (this.props.navigation.state.params.singleItem) {
        this.refs['marker'].showCallout();
      }
    }
  }
  
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={this.props.navigation.state.params.initialRegion}
        onRegionChangeComplete={this.renderCallout}
      >
        {this.props.navigation.state.params.places.map(place => (
          <MapView.Marker
            key={place.name}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude
            }}
            title={place.name}
            ref={this.props.navigation.state.params.singleItem ? 'marker' : null}
          />
        ))}
      </MapView>
    )
  }
}

export default MapScreen;