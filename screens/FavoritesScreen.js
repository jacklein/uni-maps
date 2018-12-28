import React, { Component } from 'react';
import _ from 'lodash';
import { Platform, View, Text } from 'react-native';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

class FavoritesScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Favorites',
      headerBackTitle: 'Back',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    }
  }

  onItemPress = place => {
    const initialRegion = {
      latitude: place.latitude,
      longitude: place.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    
    this.props.navigation.navigate({
      routeName: 'map',
      params: { title: place.name, places: [place], initialRegion, singleItem: true } 
    })
  }

  render() {
    if (_.isEmpty(this.props.favorites)) {
      return (
        <View>
          <Text>No Favorites Yet</Text>
        </View>
      )
    }

    return (
      <ItemList
        onItemPress={this.onItemPress}
        places={Object.values(this.props.favorites)}
      />
    )
  }
}

function mapStateToProps({ favorites }) {
  return { favorites };
}

export default connect(mapStateToProps)(FavoritesScreen);