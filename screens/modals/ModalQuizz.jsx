import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ModalQuizz = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>ModalQuizz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04103A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModalQuizz;