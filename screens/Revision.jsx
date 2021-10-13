import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import panneauxObligation from '../panneaux/obligation';
import panneauxDanger from '../panneaux/danger';
import panneauxIntersectionEtPriorite from '../panneaux/intersection-priorite';
import interdiction from '../panneaux/interdiction';
import panneauxIndication from '../panneaux/indication';
import panneauxServices from '../panneaux/services';

import PanneauxObligation from '../components/PanneauxObligation';
import PanneauxDanger from '../components/PanneauxDanger';
import PanneauxInterdiction from '../components/PanneauxInterdiction';
import PanneauxIntersectionEtPriorite from '../components/PanneauxIntersectionEtPriorite';
import PanneauxIndication from '../components/PanneauxIndication';
import PanneauxServices from '../components/PanneauxServices';

const Revision = () => {
  return (
      <ScrollView>
        <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Obligation</Text>
            </View> 
            <View style={styles.containerPanneaux}>
                {panneauxObligation.map(item => (
                    <View style={styles.singlePanneauxContainer} key={item.id}>
                        <View style={styles.singleContainer}>
                          {/* <Image source={item.image} style={styles.panneauxImage}/> */}
                          <PanneauxObligation id={item.id}/>
                        </View>
                        <View style={styles.singleContainer}><Text style={styles.text}>{item.description}</Text></View>
                    </View>
                ))}
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Danger</Text>
            </View> 
            <View style={styles.containerPanneaux}>
                {panneauxDanger.map(item => (
                    <View style={styles.singlePanneauxContainer} key={item.id}>
                        <View style={styles.singleContainer}>
                          {/* <Image source={item.image} style={styles.panneauxImage}/> */}
                          <PanneauxDanger id={item.id}/>
                        </View>
                        <View style={styles.singleContainer}><Text style={styles.text}>{item.description}</Text></View>
                    </View>
                ))}
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Interdiction</Text>
            </View> 
            <View style={styles.containerPanneaux}>
                {interdiction.map(item => (
                    <View style={styles.singlePanneauxContainer} key={item.id}>
                        <View style={styles.singleContainer}>
                          {/* <Image source={item.image} style={styles.panneauxImage}/> */}
                          <PanneauxInterdiction id={item.id}/>
                        </View>
                        <View style={styles.singleContainer}><Text style={styles.text}>{item.description}</Text></View>
                    </View>
                ))}
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Intersection et Priorité</Text>
            </View> 
            <View style={styles.containerPanneaux}>
                {panneauxIntersectionEtPriorite.map(item => (
                    <View style={styles.singlePanneauxContainer} key={item.id}>
                        <View style={styles.singleContainer}>
                          {/* <Image source={item.image} style={styles.panneauxImage}/> */}
                            <PanneauxIntersectionEtPriorite id={item.id}/>
                          </View>
                        <View style={styles.singleContainer}><Text style={styles.text}>{item.description}</Text></View>
                    </View>
                ))}
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Indication</Text>
            </View> 
            <View style={styles.containerPanneaux}>
                {panneauxIndication.map(item => (
                    <View style={styles.singlePanneauxContainer} key={item.id}>
                        <View style={styles.singleContainer}>
                          {/* <Image source={item.image} style={styles.panneauxImage}/> */}
                          <PanneauxIndication id={item.id}/>
                        </View>
                        <View style={styles.singleContainer}><Text style={styles.text}>{item.description}</Text></View>
                    </View>
                ))}
            </View>
            
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Services</Text>
            </View> 
            <View style={styles.containerPanneaux}>
                {panneauxServices.map(item => (
                    <View style={styles.singlePanneauxContainer} key={item.id}>
                        <View style={styles.singleContainer}>
                          {/* <Image source={item.image} style={styles.panneauxImage}/> */}
                          {/* <PanneauxIndication id={item.id}/> */}
                          <PanneauxServices id={item.id}/>
                        </View>
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
  titleContainer: {
    width: '90%',
  },  
  title: {
    color: 'white',
    fontSize: 23,
    margin: 10
  },    
  panneauxImage: {
    height: 55,
    width: 55,
    resizeMode:'contain',
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
    borderWidth: 5,
    borderRadius: 40,
    overflow: 'hidden'
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