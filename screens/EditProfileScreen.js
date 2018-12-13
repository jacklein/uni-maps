import React, { Component } from 'react';
import { View, Text, Platform, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SchoolPicker from '../components/SchoolPicker';

class EditProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Edit Profile',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    }
  }

  state = { school: null }

  componentDidMount() {
    this.setState({ school: this.props.schoolId })
  }

  onValueChange = school => {
    this.setState({ school });
  }

  onSelectComplete = async () => {
    await AsyncStorage.setItem('school', this.state.school);
    this.props.setData(this.state.school, () => {
      this.props.navigation.navigate('profile');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Select Your School</Text>
        <SchoolPicker 
          pickerValue={this.state.school}
          onValueChange={this.onValueChange}
          onSelectComplete={this.onSelectComplete}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

function mapStateToProps({ data }) {
  return { schoolId: data.schoolId }
}

export default connect(mapStateToProps, actions)(EditProfileScreen);