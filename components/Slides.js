import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import SchoolSelect from './SchoolSelect';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

  renderLastSlide(slide, index) {
    if (index === this.props.data.length - 1){
      return (
        <SchoolSelect
          onSelectComplete={(value) => this.props.onSelectComplete(value)}
          buttonText="continue"
          containerStyle={{ paddingHorizontal: 30 }}
          buttonStyle={{ backgroundColor: '#0288D1', margin: 24 }}
        />
      )
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slide, { backgroundColor: slide.color }]}
        >
          <Text style={[styles.text, { fontSize: slide.fontSize }]}>{slide.text}</Text>
          {this.renderLastSlide(slide, index)}
        </View>
      )
    })
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

const styles = {
  slide: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'karla-bold',
    color: 'white',
    textAlign: 'center'
  },
};

export default Slides;