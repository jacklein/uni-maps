import React, { Component } from 'react';
import { View, Text, Platform, ScrollView } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';

class CategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.title,
      headerRight: (
        <Button 
          title="Map" 
          onPress={() => navigation.navigate({
            routeName: 'map',
            params: { title: navigation.state.params.title } 
          })}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1)"
        />
      ),
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    }
  }

  renderPlaces() {
    return this.props.navigation.state.params.places.map(place => {
      return (
        <ListItem
          title={place.name}
          key={place.name}
          onPress={() => this.props.navigation.navigate({
            routeName: 'map',
            params: { title: place.name } 
          })
          }
        />
      )
    })
  }

  render() {
    return (
      <ScrollView>
        <List>
          {this.renderPlaces()}
        </List>
      </ScrollView>
    )
  }
}

export default CategoryScreen;