import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo35 from '../assets/panneaux-svg/3_interdiction/B14_50.svg';
import Logo36 from '../assets/panneaux-svg/3_interdiction/B14_70.svg';

const Params = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Params</Text>
      <Logo35 height={120} width={120}/>
      <Logo36 height={120} width={120}/>
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

export default Params;