import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Uni Maps' },
  { text: 'Select Your School', 
    items: [
      { label: 'Fudan University', value: 'fudan' },
      { label: 'DePaul University', value: 'depaul' }, 
      { label: 'Tongji University', value: 'tongji' }  
    ]
  }
];

class WelcomeScreen extends Component {
  state = { school: null }

  async componentDidMount() {
    await AsyncStorage.removeItem('school'); // production 
    let school = await AsyncStorage.getItem('school');

    if (school) {
      this.advanceToHome(school);
    } else {
      this.setState({ school: false });
    }
  }

  advanceToHome(school) {
    this.props.setData(school, () => {
      this.props.navigation.navigate('home');
    });
  }

  onChange = school => {
    this.setState({ school: school || false });
  }

  onSlidesComplete = async () => {
    await AsyncStorage.setItem('school', this.state.school);
    this.advanceToHome(this.state.school)
  }

  render() {
    if (_.isNull(this.state.school)) {
      return <AppLoading />
    }

    return (
      <Slides 
        data={SLIDE_DATA}
        pickerValue={this.state.school} 
        onChange={this.onChange}
        onComplete={this.onSlidesComplete} />
    )
  }
}

export default connect(null, actions)(WelcomeScreen);