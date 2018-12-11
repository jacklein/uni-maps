import React, { Component } from 'react';
import { View, Text, Platform, ScrollView  } from 'react-native';
import { Button, List, ListItem, SearchBar } from 'react-native-elements';

class FavoritesScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Favorites',
      headerRight: (
        <Button 
          title="Map" 
          onPress={() => navigation.navigate({
            routeName: 'map',
            params: { title: 'Favorites' } 
          })}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1)"
        />
      ),
      headerBackTitle: 'Back',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchBar
          lightTheme  
          placeholder='Search places...'
        />
        <ScrollView>
          <Text>No Favorites</Text>
        </ScrollView>
      </View>
    )
  }
}

export default FavoritesScreen;