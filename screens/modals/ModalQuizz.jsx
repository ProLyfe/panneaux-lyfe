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
  const [bgColor, setBgColor] = useState('#04103A');
  const [disabledButton, setDisabledButton] = useState(false);
  const [disabledButtonColor, setDisabledButtonColor] = useState('#1C2753');

  const key = route.params.key;
  const randomizedArray = route.params.panneaux;
  
  // const questions = useRandom(randomizedArray[questionNb].questions);
  const questions = randomizedArray[questionNb].questions;

  const verifyAnswer = (answer, panneauId) => {
    if (answer === true) {
      setBgColor('green');
      setDisabledButton(true);
      setDisabledButtonColor('#121213')
        setTimeout(() => {
          setScore(prevScore => prevScore + 1);
          setQuestionNb(prevState => prevState + 1);
          setBgColor('#04103A');
          setDisabledButton(false);
          setDisabledButtonColor('#1C2753')
        }, 1000);
    } else {
      setBgColor('red');
      setDisabledButton(true);
      setDisabledButtonColor('#121213')
        setTimeout(() => {
        setQuestionNb(prevState => prevState + 1);
        setBgColor('#04103A');
        setDisabledButton(false);
        setDisabledButtonColor('#1C2753')
        }, 1000);
    };
  };

  return (
    <View style={{...styles.container, backgroundColor: bgColor}}>
      <View style={styles.headerOptions}>
        <Text style={styles.headerText} onPress={() => navigation.goBack()}>Back</Text>
        <Text style={styles.headerText}>Score : {score} pts</Text>
        <Text style={styles.headerText}>{questionNb} / {randomizedArray.length}</Text>
      </View>
      <View style={styles.questionTextContainer}>
        <Text style={styles.questionText}>A quoi correspond ce panneau ?</Text>
      </View>

      <View style={styles.panneauxContainer}>
        {
          key === 1 ? <ToutPanneaux id={randomizedArray[questionNb].id} width={190} height={190}/> :
          key === 2 ? <PanneauxInterdiction id={randomizedArray[questionNb].id} width={190} height={190}/> :
          key === 3 ? <PanneauxObligation id={randomizedArray[questionNb].id} width={190} height={190}/> :
          key === 4 ? <PanneauxIndication id={randomizedArray[questionNb].id} width={190} height={190}/> :
          key === 5 ? <PanneauxIntersectionEtPriorite id={randomizedArray[questionNb].id} width={190} height={190}/> :
          key === 6 ? <PanneauxDanger id={randomizedArray[questionNb].id} width={190} height={190}/> :
          key === 7 ? <PanneauxServices id={randomizedArray[questionNb].id} width={190} height={190}/> : <Text>Rien</Text>
        }
      </View>
      <View style={styles.answersContainer}>
        {questions.map((question, index) => <TouchableOpacity style={{...styles.answers, backgroundColor: disabledButtonColor}} disabled={disabledButton} onPress={() => verifyAnswer(question.status, randomizedArray[questionNb].id)} key={question.questionId}><View><Text style={styles.textAnswers}>{question.proposition}</Text></View></TouchableOpacity>)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
  panneauxContainer: {
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

export default ModalQuizz;