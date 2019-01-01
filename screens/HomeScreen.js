import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions';
import { SCHOOL_SELECT, INFO } from '../components/modals/constants';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import ViewAll from '../components/ViewAll';
import ModalConductor from '../components/modals/ModalConductor';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params ? navigation.state.params.title : '',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
      /*headerRight: (
        <HomeMenu />
      )*/
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.schoolInfo.name
    });
  }

  // if a user changes their school
  componentDidUpdate(prevProps) {
    if (prevProps.schoolInfo.name !== this.props.schoolInfo.name) {
      this.props.navigation.setParams({
        title: this.props.schoolInfo.name
      });
    }
  }

  onViewAllPress = (title, places) => {
    this.props.navigation.navigate({
      routeName: 'category',
      params: { title, 
                places, 
                initialRegion: this.props.schoolInfo.initialRegion }
    })
  }

  onCategoryPress = category => {
    this.props.navigation.navigate({
      routeName: 'category',
      params: { title: category.longName, 
                places: category.places, 
                initialRegion: this.props.schoolInfo.initialRegion } 
    })
  }

  renderCategories() {
    return _.map(this.props.schoolInfo.categories, category => {
      return (
        <ListItem
          title={category.longName}
          key={category.longName}
          onPress={() => this.onCategoryPress(category)}
          containerStyle={styles.separator}
        />
      )
    })
  }

  closeMenu() {
    this.menu.close();
  }

  onRef = r => {
    this.menu = r;
  }

  render() {
    return (
      <ScrollView>
        <List containerStyle={styles.container}>
          <ViewAll 
            title='All Places'
            data={this.props.schoolInfo}
            onPress={this.onViewAllPress}
            containerStyle={styles.separator}
          />

          {this.renderCategories()}
        </List>
        <Button
          title="open school select modal"
          onPress={() => this.props.openModal(SCHOOL_SELECT)}
        />
        <Button
          title="open info modal"
          onPress={() => this.props.openModal(INFO)}
        />
        <ModalConductor />
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 0,
    borderTopWidth: 0
  },
  text: {
    fontFamily: 'karla-regular'
  },
  separator: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

function mapStateToProps({ data }) {
  return { schoolInfo: data.schoolInfo };
}

export default connect(mapStateToProps, { openModal })(HomeScreen);