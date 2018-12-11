import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Uni Maps' },
  { text: 'Select Your School' }
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('home');
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    )
  }
}

export default WelcomeScreen;