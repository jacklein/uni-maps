import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Platform, ScrollView } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';

const DATA = {
  school: 'Fudan University',
  categories: {
    sportsAndFitness: {
      longName: 'Sports and Fitness',
      places: [
        { name: 'North Gym', latitude: 0, longitude: 0 },
        { name: 'South Gym', latitude: 0, longitude: 0 }, 
        { name: 'Tennis Courts', latitude: 0, longitude: 0 }, 
        { name: 'Track', latitude: 0, longitude: 0 }, 
        { name: 'Soccer Field', latitude: 0, longitude: 0 },  
      ]
    },
    teachingBuildings: {
      longName: 'Teaching Buildings',
      places: [
        { name: 'Computer and Digital Media', latitude: 0, longitude: 0 },
        { name: 'Law School', latitude: 0, longitude: 0 }, 
        { name: 'Chemistry Lab', latitude: 0, longitude: 0 }, 
        { name: 'Acting Building', latitude: 0, longitude: 0 }, 
        { name: 'School of Music', latitude: 0, longitude: 0 },  
      ]
    },
    foodAndDrink: {
      longName: 'Food and Drink',
      places: [
        { name: 'North Campus Cafeteria', latitude: 0, longitude: 0 },
        { name: 'The Bean Coffee', latitude: 0, longitude: 0 }, 
        { name: 'Dunkin Donuts', latitude: 0, longitude: 0 }, 
        { name: 'South Campus Cafeteria', latitude: 0, longitude: 0 }, 
        { name: 'Downtown Food Hall', latitude: 0, longitude: 0 },  
      ]
    } 
  },
};

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: DATA.school,
      headerRight: (
        <Button 
          title="Map" 
          onPress={() => navigation.navigate({
            routeName: 'map',
            params: { title: DATA.school } 
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

  renderCategories() {
    return _.map(DATA.categories, category => {
      return (
        <ListItem
          title={category.longName}
          key={category.longName}
          onPress={() => this.props.navigation.navigate({
            routeName: 'category',
            params: { title: category.longName, places: category.places } 
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
          {this.renderCategories()}
        </List>
      </ScrollView>
    )
  }
}

export default HomeScreen;