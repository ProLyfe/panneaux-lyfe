import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ToutPanneaux from '../../components/ToutPanneaux';
import PanneauxInterdiction from '../../components/PanneauxInterdiction';
import PanneauxObligation from '../../components/PanneauxObligation'; 
import PanneauxIndication from '../../components/PanneauxIndication';
import PanneauxIntersectionEtPriorite from '../../components/PanneauxIntersectionEtPriorite';
import PanneauxDanger from '../../components/PanneauxDanger';
import PanneauxServices from '../../components/PanneauxServices'
import useRandom from '../../hooks/useRandom';

const ModalQuizz = ({ navigation, route }) => {

  const [questionNb, setQuestionNb] = useState(0);
  const [score, setScore] = useState(0);
  const image1 = route.params.panneaux[0].id
  const key = route.params.key;

  const randomizedArray = useRandom(route.params.panneaux);

  const verifyAnswer = (answer) => {
    // answer === true ? setTimeout(() => {console.log('Yesss'); setQuestionNb(prevState => prevState + 1); }, 1000) : console.log('Nop')
    if (answer === true) {
      setScore(prevScore => prevScore + 1)
      setTimeout(() => {console.log('Yesss'); setQuestionNb(prevState => prevState + 1); }, 1000)
    } else {
      console.log('Nop')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerOptions}>
        <Text style={styles.headerText} onPress={() => navigation.goBack()}>Back</Text>
        <Text style={styles.headerText}>Score : {score} pts</Text>
        <Text style={styles.headerText}>{questionNb} / {randomizedArray.length}</Text>
      </View>
      <View style={styles.questionTextContainer}>
        <Text style={styles.questionText}>A quoi correspond ce panneau ?</Text>
      </View>
      {/* <Image source={require('./assets/B14_50.png')} style={styles.imagePanneau}/> */}
      {/* <ToutPanneaux id={image1} width={'160%'} height={'65%'}/> */}
      <View style={styles.panneauxContainer}>
        {
          // key === 1 ? <ToutPanneaux id={randomizedArray[0].id} width={'175%'} height={'80%'}/> :
          // key === 2 ? <PanneauxInterdiction id={randomizedArray[0].id} width={'175%'} height={'80%'}/> :
          // key === 3 ? <PanneauxObligation id={randomizedArray[0].id} width={'175%'} height={'80%'}/> :
          // key === 4 ? <PanneauxIndication id={randomizedArray[0].id} width={'175%'} height={'80%'}/> :
          // key === 5 ? <PanneauxIntersectionEtPriorite id={randomizedArray[0].id} width={'175%'} height={'80%'}/> :
          // key === 6 ? <PanneauxDanger id={randomizedArray[0].id} width={'175%'} height={'80%'}/> :
          // key === 7 ? <PanneauxServices id={randomizedArray[0].id} width={'175%'} height={'80%'}/> : <Text>Rien</Text>
          
          key === 1 ? <ToutPanneaux id={randomizedArray[0].id} width={190} height={190}/> :
          key === 2 ? <PanneauxInterdiction id={randomizedArray[0].id} width={190} height={190}/> :
          key === 3 ? <PanneauxObligation id={randomizedArray[0].id} width={190} height={190}/> :
          key === 4 ? <PanneauxIndication id={randomizedArray[0].id} width={190} height={190}/> :
          key === 5 ? <PanneauxIntersectionEtPriorite id={randomizedArray[0].id} width={190} height={190}/> :
          key === 6 ? <PanneauxDanger id={randomizedArray[0].id} width={190} height={190}/> :
          key === 7 ? <PanneauxServices id={randomizedArray[0].id} width={190} height={190}/> : <Text>Rien</Text>
        }
      </View>
      <View style={styles.answersContainer}>
        <TouchableOpacity style={styles.answers} onPress={() => verifyAnswer(true)}><View><Text style={styles.textAnswers}>Vitesse limitée à 50Km/h</Text></View></TouchableOpacity>
        <TouchableOpacity style={styles.answers} onPress={() => verifyAnswer(false)}><View><Text style={styles.textAnswers}>Vitesse limitée à 90Km/h</Text></View></TouchableOpacity>
        <TouchableOpacity style={styles.answers} onPress={() => verifyAnswer(false)}><View><Text style={styles.textAnswers}>Vitesse limitée à 100Km/h</Text></View></TouchableOpacity>
        <TouchableOpacity style={styles.answers} onPress={() => verifyAnswer(false)}><View><Text style={styles.textAnswers}>Vitesse limitée à 120Km/h</Text></View></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04103A',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerOptions: {
    // backgroundColor: 'yellow',
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
    // flexBasis: '40%',  
    // backgroundColor: 'pink',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
  questionText: {
    color: 'white', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  questionTextContainer: {
    // backgroundColor: 'green',
    width: '100%',
    // flexBasis: '10%', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answersContainer: {
    display: 'flex',
    // backgroundColor: 'red',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 40
    // marginBottom: '12%',
    // flexBasis: '40%',   
  },
  answers: {
    backgroundColor: '#1C2753',
    height: '45%',
    width: '45%',
    // padding: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
    borderRadius: 20,
    // width
  },
  textAnswers: {
    color: 'white',
    textAlign: 'center',
  }
});

export default ModalQuizz;