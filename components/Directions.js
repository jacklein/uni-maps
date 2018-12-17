import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Linking,
  Dimensions
} from 'react-native';
import { Header } from 'react-navigation';
import { Button } from 'react-native-elements';
import BottomDrawer from './BottomDrawer';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const CONTAINER_HEIGHT = SCREEN_HEIGHT / 5.5;
const TAB_BAR_HEIGHT = 49;

class Directions extends Component{
  renderContent = () => {
    const { name, latitude, longitude } = this.props.locationInfo;
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Get directions to {name}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Google Maps"
            onPress={() => Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${latitude}%2C${longitude}`)}
          />
          <Button
            title="Apple Maps"
            onPress={() => Linking.openURL(`http://maps.apple.com/?daddr=${latitude}%2C${longitude}`)}
          />
        </View>
      </View>
    )
  }

  render() {
    return (
      <BottomDrawer
        renderContent={this.renderContent}
        containerHeight={CONTAINER_HEIGHT}
        offset={TAB_BAR_HEIGHT + Header.HEIGHT}
        startingPosition='up'
      />
    )
  }
}

const styles = {
  contentContainer: {
    height: CONTAINER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  text: {
    paddingHorizontal: 5
  }
}

export default Directions;


/*
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Linking,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native';
import { Header } from 'react-navigation';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const CONTAINER_HEIGHT = SCREEN_HEIGHT / 5.5;
const TAB_BAR_HEIGHT = 49;
const TOGGLE_UP = { x: 0, y: SCREEN_HEIGHT - (TAB_BAR_HEIGHT + Header.HEIGHT + CONTAINER_HEIGHT) };
const TOGGLE_DOWN = { x: 0, y: TOGGLE_UP.y + CONTAINER_HEIGHT / 1.5 }
const TOGGLE_THRESHOLD = CONTAINER_HEIGHT / 11;

class Directions extends Component{
  constructor(props){
    super(props);

    this.position = new Animated.ValueXY(TOGGLE_UP);

    this.state = { currentToggle: TOGGLE_UP }

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        this.position.setValue({ y: this.state.currentToggle.y + gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dy > TOGGLE_THRESHOLD && this.state.currentToggle === TOGGLE_UP) {
          this.toggleDown();
        } else if (gesture.dy < -TOGGLE_THRESHOLD && this.state.currentToggle === TOGGLE_DOWN) {
          this.toggleUp()
        } else {
          this.resetPosition();
        }
      }
    });
  }

  toggleDown() {
    Animated.spring(this.position, {
      toValue: TOGGLE_DOWN
    }).start()
    this.setState({ currentToggle: TOGGLE_DOWN })
  }

  toggleUp() {
    Animated.spring(this.position, {
      toValue: TOGGLE_UP
    }).start()
    this.setState({ currentToggle: TOGGLE_UP })
  }

  resetPosition() {
    Animated.spring(this.position, {
      toValue: this.state.currentToggle
    }).start()
  }

  render() {
    const { name, latitude, longitude } = this.props.locationInfo;
    return (
      <Animated.View 
        style={[styles.animationContainer, this.position.getLayout()]}
        {...this._panResponder.panHandlers}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Get directions to {name}</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Google Maps"
              onPress={() => Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${latitude}%2C${longitude}`)}
            />
            <Button
              title="Apple Maps"
              onPress={() => Linking.openURL(`http://maps.apple.com/?daddr=${latitude}%2C${longitude}`)}
            />
          </View>
        </View>
      </Animated.View>
    )
  }
}

const styles = {
  animationContainer: {
    width: SCREEN_WIDTH,
    position: 'absolute',
    left: 0,
    right: 0,
    shadowColor: '#CECDCD',
    shadowRadius: 3,
    shadowOpacity: 5,
  },
  contentContainer: {
    height: CONTAINER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  text: {
    paddingHorizontal: 5
  }
}

export default Directions;
*/