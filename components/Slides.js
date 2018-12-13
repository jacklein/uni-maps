import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  onSelectComplete() {
    if (this.props.pickerValue) {
      this.props.onSelectComplete();
    }
  }

  renderLastSlide(slide, index) {
    if (index === this.props.data.length - 1){
      return (
        <View>
          <RNPickerSelect
              placeholder={{
                  label: 'Select a school...',
                  value: null,
                  color: '#9EA0A4',
              }}
              items={slide.items}
              onValueChange={(value) => this.props.onChange(value)}
              style={{ ...pickerSelectStyles }}
              value={this.props.pickerValue}
          />
          <Button
            title="Continue"
            raised
            buttonStyle={styles.buttonStyle}
            onPress={() => this.onSelectComplete()}
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
    marginTop: 15
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