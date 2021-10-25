import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ToutPanneaux from './ToutPanneaux';
import PanneauxInterdiction from './PanneauxInterdiction';
import PanneauxObligation from './PanneauxObligation'; 
import PanneauxIndication from './PanneauxIndication';
import PanneauxIntersectionEtPriorite from './PanneauxIntersectionEtPriorite';
import PanneauxDanger from './PanneauxDanger';
import PanneauxServices from './PanneauxServices'


const GameScreen = ({ navigation, score, questionNb, randomizedArray, keyId, questions, disabledButton, disabledButtonColor, verifyAnswer}) => (
    <>
       <View style={styles.headerOptions}>
        <Text style={styles.headerText} onPress={() => navigation.goBack()}>Back</Text>
        <Text style={styles.headerText}>Score : {score} pts</Text>
        <Text style={styles.headerText}>{questionNb + 1} / {randomizedArray.length - 1}</Text>
      </View>
      <View style={styles.questionTextContainer}>
        <Text style={styles.questionText}>A quoi correspond ce panneau ?</Text>
      </View>

      <View style={styles.panneauxContainer}>
        {
          keyId === 1 ? <ToutPanneaux id={randomizedArray[questionNb].id} width={190} height={190}/> :
          keyId === 2 ? <PanneauxInterdiction id={randomizedArray[questionNb].id} width={190} height={190}/> :
          keyId === 3 ? <PanneauxObligation id={randomizedArray[questionNb].id} width={190} height={190}/> :
          keyId === 4 ? <PanneauxIndication id={randomizedArray[questionNb].id} width={190} height={190}/> :
          keyId === 5 ? <PanneauxIntersectionEtPriorite id={randomizedArray[questionNb].id} width={190} height={190}/> :
          keyId === 6 ? <PanneauxDanger id={randomizedArray[questionNb].id} width={190} height={190}/> :
          keyId === 7 ? <PanneauxServices id={randomizedArray[questionNb].id} width={190} height={190}/> : <Text>Rien</Text>
        }
      </View>
      <View style={styles.answersContainer}>
        {questions.map(question => <TouchableOpacity style={{...styles.answers, backgroundColor: disabledButtonColor}} disabled={disabledButton} onPress={() => verifyAnswer(question.status)} key={question.questionId}><View><Text style={styles.textAnswers}>{question.proposition}</Text></View></TouchableOpacity>)}
      </View>
    </>
);

const styles = StyleSheet.create({
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
    panneauxContainer: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    questionText: {
      color: 'white', 
      fontSize: 20,
      fontWeight: 'bold',
    },
    questionTextContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    answersContainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',  
    },
    answers: {
      height: '45%',
      width: '45%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '2%',
      borderRadius: 20,
    },
    textAnswers: {
      color: 'white',
      textAlign: 'center',
    }
  });

export default GameScreen;

