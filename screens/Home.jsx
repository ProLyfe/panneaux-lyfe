import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import SelectionCard from '../components/SelectionCard';
import useRandom from '../hooks/useRandom';
import Stacks from '../navigation/quizzTabs';
import allPanneaux from '../panneaux/allPanneaux';
import panneauxDanger from '../panneaux/danger';
import panneauxIndication from '../panneaux/indication';
import interdiction from '../panneaux/interdiction';
import panneauxIntersectionEtPriorite from '../panneaux/intersection-priorite';
import panneauxObligation from '../panneaux/obligation';
import panneauxServices from '../panneaux/services';

const Home = ({ navigation }) => {
// Documentation : <SelectionCard panneauxNb={1} id={35}/>

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
    {
      key: 4,
      title: 'Panneaux indication',
      panneauxSelection: [84],
      panneaux: panneauxIndication
    },
    {
      key: 5,
      title: 'Panneaux prio',
      panneauxSelection: [141],
      panneaux: panneauxIntersectionEtPriorite
    },
    {
      key: 6,
      title: 'Panneaux danger',
      panneauxSelection: [150],
      panneaux: panneauxDanger
    },
    {
      key: 7,
      title: 'Panneaux service',
      panneauxSelection: [173],
      panneaux: panneauxServices
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.categorieContainer}>
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
}

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
  }
});

export default Home;