import React, { Component } from 'react';
import { View, Text, Platform, ScrollView } from 'react-native';
import { Button, List, ListItem, SearchBar } from 'react-native-elements';

class CategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.title,
      headerRight: (
        <Button 
          title="Map" 
          onPress={() => navigation.navigate({
            routeName: 'map',
            params: { title: navigation.state.params.title, 
                      places: navigation.state.params.places } 
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

  state = { data: [] }

  componentDidMount() {
    this.setState({ data: this.props.navigation.state.params.places });
  }

  onItemPress = place => {
    this.props.navigation.navigate({
      routeName: 'map',
      params: { title: place.name, places: [place] } 
    })
  }

  renderPlaces() {
    return this.state.data.map(place => {
      return (
        <ListItem
          title={place.name}
          key={place.name}
          onPress={() => this.onItemPress(place)}
        />
      )
    })
  }

  searchFilterFunction = text => {
    const newData = this.props.navigation.state.params.places.filter(place => {
      const itemData = place.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({ data: newData });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchBar
          lightTheme
          clearIcon
          placeholder='Search places...'
          onChangeText={text => this.searchFilterFunction(text)}
        />
        <ScrollView>
          <List>
            {this.renderPlaces()}
          </List>
        </ScrollView>
      </View>
    )
  }
}

export default CategoryScreen;