import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Modal from "react-native-modal";

class InfoModal extends Component {
  renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>
      A whole bunch of text. A whole bunch of text. A whole bunch of text. 
      A whole bunch of text. A whole bunch of text. A whole bunch of text. 
      A whole bunch of text. A whole bunch of text. A whole bunch of text. 
      A whole bunch of text. A whole bunch of text. A whole bunch of text.  
      </Text>
      {this.renderButton('Close', () => {
        this.props.closeModal();
      })}
    </View>
  );

  render() {
    return (
      <Modal
        isVisible={true}
        onBackdropPress={() => this.props.closeModal()}
      >
        {this.renderModalContent()}
      </Modal>
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
    marginBottom: 0,
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