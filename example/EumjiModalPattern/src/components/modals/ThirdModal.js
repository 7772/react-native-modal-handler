import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";

export default ThirdModal = ({ isVisible, closeModal, ...otherProps }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modal}>
        <TouchableOpacity 
          style={styles.close}
          onPress={() => closeModal("thirdModal")}
        >
          <Text>Close Modal</Text>
        </TouchableOpacity>
        <View style={styles.main}>
          <Text>ThirdModal</Text>
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
    backgroundColor: "yellow"
  },
  main: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
  }
});