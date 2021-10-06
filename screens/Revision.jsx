import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import panneauxObligation from '../panneaux/obligation';

const Revision = () => {
  return (
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>Obligation</Text>
            <View style={styles.containerPanneaux}>
                {panneauxObligation.map(item => (
                    <View style={styles.singlePanneauxContainer} key={item.id}>
                        <View style={styles.singleContainer}><Image source={item.image} style={styles.panneauxImage}/></View>
                        <View style={styles.singleContainer}><Text style={styles.text}>{item.description}</Text></View>
                    </View>
                ))}
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04103A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 23,
    margin: 10
  },    
  panneauxImage: {
    height: 55,
    width: 55,
  },
  tableauContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#1C2753',
  },
  containerPanneaux: {
    borderColor: 'white',
    borderWidth: 3,
    borderWidth: 5,
    borderRadius: 18,
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
    width: '90%',
    backgroundColor: '#1C2753',
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
});

export default Revision;