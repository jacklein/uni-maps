import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import SchoolPicker from './SchoolPicker';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

  renderLastSlide(slide, index) {
    if (index === this.props.data.length - 1){
      return (
        <View style={{ marginTop: 15 }}>
          <SchoolPicker
            pickerValue={this.props.pickerValue}
            onValueChange={value => this.props.onChange(value)}
            onSelectComplete={() => this.props.onSelectComplete()}
          />
        </View>
      )
    }
  }
  
  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={styles.slideStyle}
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
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center'
  },
  buttonStyle: {
    marginTop: 30
  },
};

const pickerSelectStyles = {
  inputIOS: {
      fontSize: 16,
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      backgroundColor: 'white',
      color: 'black',
  },
  inputAndroid: {
      fontSize: 16,
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      backgroundColor: 'white',
      color: 'black',
  },
};

export default Slides;