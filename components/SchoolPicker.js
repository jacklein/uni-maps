import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import PropTypes from 'prop-types';

const SCHOOLS = [
  { label: 'DePaul University', value: 'depaul' }
  //{ label: 'Fudan University', value: 'fudan' }
]

const SchoolPicker = props => {
  onSelectComplete = () => {
    if (props.pickerValue) {
      props.onSelectComplete();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.picker}>
        <RNPickerSelect
            placeholder={{
                label: 'Select a school...',
                value: null,
                color: '#9EA0A4',
            }}
            items={SCHOOLS}
            onValueChange={(value) => props.onValueChange(value)}
            style={{ ...pickerSelectStyles }}
            value={props.pickerValue}
        />
      </View>
      <Button
        title={props.buttonText}
        raised
        buttonStyle={styles.button}
        onPress={() => onSelectComplete()}
      />
    </View>
  )
}

SchoolPicker.propTypes = {
  buttonText: PropTypes.string,
  onValueChange: PropTypes.func,
  onSelectComplete: PropTypes.func
}

SchoolPicker.defaultProps = {
  buttonText: 'Save',
  pickerValue: null,
  onValueChange: () => {},
  onSelectComplete: () => {}
}

const offset = 24;
const styles = {
  container: {
    marginTop: offset,
  },
  button: {
    backgroundColor: '#0288D1',
    margin: offset
  },
  picker: {
    marginHorizontal: offset,
  }
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
  }
};

export default SchoolPicker;