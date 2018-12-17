import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";

export default FirstModal = ({ isVisible, closeModal, ...otherProps }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modal}>
        <TouchableOpacity 
          style={styles.close}
          onPress={() => closeModal("firstModal")}
        >
          <Text>Close Modal</Text>
        </TouchableOpacity>
        <View style={styles.main}>
          <TouchableOpacity onPress={() => otherProps.sayHello()}>
            <Text>FirstModal and sayHello</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 300, 
    height: 300, 
    backgroundColor: "white",
    alignSelf: "center",
  },
  close: {
    width: 300, 
    height: 40, 
    alignItems:"center", 
    justifyContent: "center", 
    backgroundColor: "yellow",
  },
  main: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
  }
});