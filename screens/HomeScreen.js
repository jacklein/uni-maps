import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Platform, ScrollView } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import { FUDAN } from '../data';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: FUDAN.school,
      headerRight: (
        <Button 
          title="Map" 
          onPress={() => navigation.navigate({
            routeName: 'map',
            params: { title: FUDAN.school } 
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

  onItemPress = category => {
    this.props.navigation.navigate({
      routeName: 'category',
      params: { title: category.longName, places: category.places } 
    })
  }

  renderCategories() {
    return _.map(FUDAN.categories, category => {
      return (
        <ListItem
          title={category.longName}
          key={category.longName}
          onPress={() => this.onItemPress(category)}
        />
      )
    })
  }

  render() {
    return (
      <ScrollView>
        <List>
          {this.renderCategories()}
        </List>
      </ScrollView>
    )
  }
}

export default HomeScreen;