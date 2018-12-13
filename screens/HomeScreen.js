import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Platform, ScrollView } from 'react-native';
import { Button, List, ListItem } from 'react-native-elements';
import ViewAll from '../components/ViewAll';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params ? navigation.state.params.title : '',
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

  onViewAllPress = (title, places) => {
    this.props.navigation.navigate({
      routeName: 'category',
      params: { title, 
                places, 
                initialRegion: this.props.data.initialRegion }
    })
  }

  onCategoryPress = category => {
    this.props.navigation.navigate({
      routeName: 'category',
      params: { title: category.longName, 
                places: category.places, 
                initialRegion: this.props.data.initialRegion } 
    })
  }

  renderCategories() {
    return _.map(this.props.data.categories, category => {
      return (
        <ListItem
          title={category.longName}
          key={category.longName}
          onPress={() => this.onCategoryPress(category)}
        />
      )
    })
  }

  render() {
    return (
      <ScrollView>
        <List>
          <ViewAll 
            title='All Places'
            data={this.props.data}
            onPress={this.onViewAllPress}
          />

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