import React, { Component } from 'react';
import { Platform, FlatList, StyleSheet } from 'react-native';
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
                      places: navigation.state.params.places,
                      initialRegion: navigation.state.params.initialRegion } 
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

  renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        onPress={() => this.onItemPress(item)}
        containerStyle={styles.separator}
      />
    )
  }

  renderHeader = () => {
    return (
      <SearchBar
        lightTheme
        clearIcon
        placeholder='Search...'
        onChangeText={text => this.searchFilterFunction(text)}
      />
    )
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
      <List containerStyle={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.name}
          ListHeaderComponent={this.renderHeader}
        />
      </List>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 0,
    borderTopWidth: 0
  },
  separator: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default CategoryScreen;