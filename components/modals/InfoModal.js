import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Modal from "react-native-modal";

class InfoModal extends Component {
  state = {
    visibleModal: null
  };
  
  renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  onSelectComplete = value => {
    this.props.setData(value, () => {
      this.setState({ visibleModal: null });
    });
  }

  renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text style={{ fontSize: 16, textAlign: 'center' }}>Edit University</Text>
      <SchoolSelect
        value={this.props.schoolId}
        onSelectComplete={value => this.onSelectComplete(value)}
        buttonStyle={{ backgroundColor: '#0288D1', marginTop: 24 }}
      />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {this.renderButton("School Select Modal", () =>
          this.setState({ visibleModal: true })
        )}
        <Modal
          isVisible={this.state.visibleModal === true}
          onBackdropPress={() => this.setState({ visibleModal: null })}
        >
          {this.renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
});

export default InfoModal;