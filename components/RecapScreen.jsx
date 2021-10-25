import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RecapScreen = ({ errorsNb, score, randomizedArray, navigation }) => (
    <>
      <View style={styles.questionTextContainer}>
        <Text style={styles.recapText}>Récap</Text>
      </View>
      <View style={styles.panneauxContainer}>
        <Text style={{...styles.text}}>Questions : <Text style={styles.textNb}>{randomizedArray.length - 1}</Text></Text>
        <Text style={{...styles.text, color: 'red'}}>Erreurs : <Text style={styles.textNb}>{errorsNb}</Text></Text>
        <Text style={{...styles.text, color: 'green'}}>Score : <Text style={styles.textNb}>{score}</Text>pts</Text>
      </View>
      <TouchableOpacity style={styles.bouton} onPress={() => navigation.goBack()}>
          <Text style={styles.boutonText}>Retourner au menu</Text>
      </TouchableOpacity>
    </>
);

const styles = StyleSheet.create({
    recapContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    bouton: {
        backgroundColor: '#1C2753',
        padding: 15,
        width: 200,
        borderColor: '#121213',
        borderWidth: 1
    },
    boutonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    panneauxContainer: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    recapText: {
      color: 'white', 
      fontSize: 50,
      fontWeight: 'bold',
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      margin: 3,
      fontSize: 20
    },
    textNb: {
      fontSize: 30
    },
    questionTextContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default RecapScreen;