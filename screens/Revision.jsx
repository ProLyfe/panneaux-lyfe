import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import panneauxObligation from '../panneaux/obligation';

const Revision = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <Text>Révision</Text> */}
      <Text>Panneaux d'interdiction</Text>
      <View style={styles.tableauContainer}>
        <FlatList 
            keyExtractor={item => item.id}
            data={panneauxObligation}
            renderItem={({ item }) => (
                <View style={styles.singlePanneauxContainer}>
                    <View style={styles.singleContainer}><Image source={item.image} style={styles.panneauxImage}/></View>
                    <View style={styles.singleContainer}><Text style={styles.text}>{item.description}</Text></View>
                        {/* <Image source={item.image} style={styles.panneauxImage}/>
                        <Text style={styles.text}>{item.description}</Text> */}
                </View>
            )}/>
        </View>
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
  panneauxImage: {
      height: 55,
      width: 55,
  },
  tableauContainer: {
      display: 'flex',
      flexDirection: 'row',
      borderColor: 'white',
      borderWidth: 5.7,
      borderRadius: 20,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '90%',
      backgroundColor: '#1C2753',
      flex: 1,

  },
  singleContainer: {
    borderColor: 'white',
    borderWidth: 2,
    height: 80,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  singlePanneauxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
});

export default Revision;