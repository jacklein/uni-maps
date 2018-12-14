import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import SchoolPicker from './SchoolPicker';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

  renderLastSlide(slide, index) {
    if (index === this.props.data.length - 1){
      return (
        <SchoolPicker
          pickerValue={this.props.pickerValue}
          onValueChange={value => this.props.onChange(value)}
          onSelectComplete={() => this.props.onSelectComplete()}
          buttonText="continue"
        />
      )
    }
  }
  
  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
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
  slideStyle: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  buttonStyle: {
    marginTop: 30
  },
};

export default Slides;