import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import { Button } from 'react-native-elements';

class Directions extends Component{
  render() {
    const { name, latitude, longitude } = this.props.locationInfo;
    return (
      <View style={styles.directionsContainer}>
        <Text style={styles.text}>Get directions to {name}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Google Maps"
            onPress={() => Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${latitude}%2C${longitude}`)}
          />
          <Button
            title="Apple Maps"
            onPress={() => Linking.openURL(`http://maps.apple.com/?daddr=${latitude}%2C${longitude}`)}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  directionsContainer: {
    height: 100,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  text: {
    paddingHorizontal: 5
  }
}

export default Directions;