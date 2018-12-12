import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Platform, ScrollView } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params ? navigation.state.params.title : '',
      headerRight: (
        <Button 
          title="Map" 
          onPress={() => navigation.navigate({
            routeName: 'map',
            params: { title: navigation.state.params ? navigation.state.params.title : '' } 
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

  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.data.school
    });
  }

  onItemPress = category => {
    this.props.navigation.navigate({
      routeName: 'category',
      params: { title: category.longName, places: category.places } 
    })
  }

  renderCategories() {
    return _.map(this.props.data.categories, category => {
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

function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps)(HomeScreen);