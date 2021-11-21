import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';

const ModalCustomQuizz = ({ navigation, route }) => { 

  const [quizzName, setQuizzName] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <View style={styles.headerOptions}>
        <View>
          <Text style={styles.headerText} onPress={() => navigation.goBack()}>Back</Text>
          <Text style={styles.headerText}></Text>
          <Text style={styles.headerText}></Text>
        </View>
      </View>
      <Text style={styles.title}>Créer votre quizz {"\n"}personnalisé</Text>
      <TextInput 
        placeholder="Entrez le nom de votre quizz"
        placeholderTextColor="white"
        style={styles.input}
        onChangeText={() => console.log('cc')}
      />
      <TouchableOpacity style={styles.bouton} onPress={() => navigation.goBack()}>
          <Text style={styles.boutonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#04103A',
  },
  headerOptions: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center'
  },
  headerText: {
    margin: 10,
    color: 'white', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: -30
  },
  input: {
    width: '70%',
    height: 40,
    borderBottomColor: '#1C2753',
    borderBottomWidth: 2,
    marginTop: 200
  },
  bouton: {
    backgroundColor: '#1C2753',
    padding: 15,
    width: 200,
    // borderColor: '#121213',
    // borderWidth: 1,
    marginTop: 100
},
boutonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
},
});

export default ModalCustomQuizz;