import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from '../../components/GameScreen';
import RecapScreen from '../../components/RecapScreen';

const ModalQuizz = ({ navigation, route }) => {

  const [questionNb, setQuestionNb] = useState(0);
  const [score, setScore] = useState(0);
  const [errorsNb, setErrorsNb] = useState(0);

  const [bgColor, setBgColor] = useState('#04103A');
  const [disabledButton, setDisabledButton] = useState(false);
  const [disabledButtonColor, setDisabledButtonColor] = useState('#1C2753');

  const keyId = route.params.key;
  // const randomizedArray = route.params.panneaux;
  const randomizedArray = [...route.params.panneaux, {id: 'yaey'}]
  
  // const questions = useRandom(randomizedArray[questionNb].questions);
  const questions = randomizedArray[questionNb].questions;

  const verifyAnswer = (answer) => {
    if (answer === true) {
      setBgColor('green');
      setDisabledButton(true);
      setDisabledButtonColor('#121213')
      setScore(prevScore => prevScore + 1);
        setTimeout(() => {
          setQuestionNb(prevState => prevState + 1);
          setBgColor('#04103A');
          setDisabledButton(false);
          setDisabledButtonColor('#1C2753')
        }, 1000);
    } else {
      setBgColor('red');
      setDisabledButton(true);
      setDisabledButtonColor('#121213');
      setErrorsNb(prevError => prevError + 1);
        setTimeout(() => {
        // setQuestionNb(prevState => prevState + 1);
        setBgColor('#04103A');
        setDisabledButton(false);
        setDisabledButtonColor('#1C2753')
        }, 1000);
    };
  };

  return (
    <View style={{...styles.container, backgroundColor: bgColor}}>

      { randomizedArray[questionNb].id !== 'yaey' ? <GameScreen 
        navigation={navigation} 
        score={score} 
        questionNb={questionNb} 
        randomizedArray={randomizedArray} 
        keyId={keyId} 
        questions={questions}
        disabledButton={disabledButton}
        disabledButtonColor={disabledButtonColor}
        verifyAnswer={verifyAnswer}
      /> : <RecapScreen errorsNb={errorsNb} score={score} randomizedArray={randomizedArray} questionNb={questionNb} navigation={navigation}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default ModalQuizz;