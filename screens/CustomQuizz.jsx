import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import AddQuizzCard from '../components/AddQuizzCard';
import SelectionCard from '../components/SelectionCard';
import useRandom from '../hooks/useRandom';
import allPanneaux from '../panneaux/allPanneaux';
import interdiction from '../panneaux/interdiction';
import panneauxObligation from '../panneaux/obligation';

const CustomQuizz = () => {
  const quizzCategorie = [
    {
      key: 1,
      title: 'Tout les panneaux',
      panneauxSelection: [141, 84, 150, 59, 35],
      panneaux: allPanneaux
    },
    {
      key: 2,
      title: 'Panneaux interdiction',
      panneauxSelection: [35],
      panneaux: interdiction
    },
    {
      key: 3,
      title: 'Panneaux obligation',
      panneauxSelection: [59],
      panneaux: panneauxObligation
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.categorieContainer}>
              <View style={styles.singlePanneauxAdd}>
                <AddQuizzCard />
              </View>
              {quizzCategorie.map(({ title, panneauxSelection, panneaux, key }, index) => (
                <View style={styles.singlePanneaux} key={`${index}-${title}`}>
                  <TouchableOpacity onPress={() => navigation.navigate('ModalQuizz', {title: title, panneaux: useRandom(panneaux), key: key})}>
                    <SelectionCard panneauxNb={panneauxSelection.length} panneauxId={panneauxSelection} title={title}/>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04103A',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  categorieContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40
  },
  singlePanneaux: {
    flexBasis: '50%',
    marginTop: 10,
  },
  singlePanneauxAdd: {
    flexBasis: '50%',
    marginTop: 10,
  }
});

export default CustomQuizz;