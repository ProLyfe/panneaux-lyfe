import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import SelectionCard from '../components/SelectionCard';

const Home = () => {
// Documentation : <SelectionCard panneauxNb={1} id={35}/>
  const quizzCategorie = [
    {
      key: 1,
      title: 'Tout les panneaux',
      panneauxSelection: [141, 84, 150, 59, 35]
    },
    {
      key: 2,
      title: 'Panneaux interdiction',
      panneauxSelection: [35]
    },
    {
      key: 3,
      title: 'Panneaux obligation',
      panneauxSelection: [59]
    },
    {
      key: 4,
      title: 'Panneaux indication',
      panneauxSelection: [84]
    },
    {
      key: 5,
      title: 'Panneaux prio',
      panneauxSelection: [141]
    },
    {
      key: 6,
      title: 'Panneaux danger',
      panneauxSelection: [150]
    },
    {
      key: 7,
      title: 'Panneaux service',
      panneauxSelection: [173]
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.categorieContainer}>
            {quizzCategorie.map(({ title, panneauxSelection }, index) => (
              <View style={styles.singlePanneaux}>
                <SelectionCard panneauxNb={panneauxSelection.length} panneauxId={panneauxSelection} title={title} key={index}/>
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
    marginTop: 50
  },
  singlePanneaux: {
    flexBasis: '50%',
    marginTop: 10,
  }
});

export default Home;