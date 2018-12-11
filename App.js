import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import MapScreen from './screens/MapScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';

const AppNavigator = createSwitchNavigator({
  welcome: WelcomeScreen,
  main: createBottomTabNavigator({
    home: {
      screen: createStackNavigator({
        home: HomeScreen,
        category: CategoryScreen,
        map: MapScreen
      })
    },
    favorites: {
      screen: createStackNavigator({
        favorites: FavoritesScreen,
        map: MapScreen 
      })
    },
    settings: SettingsScreen
  })
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
