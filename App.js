import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import MapScreen from './screens/MapScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ProfileScreen from './screens/ProfileScreen';

const HomeStack = {
  screen: createStackNavigator({
    home: HomeScreen,
    category: CategoryScreen,
    map: MapScreen
  }),
  navigationOptions: {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="home" size={30} color={tintColor} />
    }
  }
}

const FavoritesStack = {
  screen: createStackNavigator({
    favorites: FavoritesScreen,
    map: MapScreen 
  }),
  navigationOptions: {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="star" size={30} color={tintColor} />
    }
  }
};

const Settings = {
  screen: createStackNavigator({
    ProfileScreen
  }),
  navigationOptions: {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="person" size={30} color={tintColor} />
    }
  }
}

const AppNavigator = createSwitchNavigator({
  welcome: WelcomeScreen,
  main: createBottomTabNavigator(
    {
      home: HomeStack,
      favorites: FavoritesStack,
      settings: Settings
    },
    {
      tabBarOptions: {
        showLabel: false
      }
    }
  )
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
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
