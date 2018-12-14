import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerBackTitle: 'Cancel',
      headerTitle: 'Profile',
      headerRight: (
        <Button 
          title="Edit" 
          onPress={() => navigation.navigate({
            routeName: 'editprofile'
          })}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1)"
        />
      ),
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    }
  }

  render() {
    return (
      <View>
        <Card title="Your University">
          <Text style={styles.textStyle}>{this.props.schoolInfo.name}</Text>
        </Card>
      </View>
    )
  }
}

const styles = {
  textStyle: {
    textAlign: 'center'
  }
}

function mapStateToProps({ data }) {
  return { schoolInfo: data.schoolInfo }
}

export default connect(mapStateToProps)(ProfileScreen);