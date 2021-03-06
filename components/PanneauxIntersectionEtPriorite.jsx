import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import Logo1 from '../assets/panneaux-svg/2_intersection-priorite/AB1.svg';
import Logo2 from '../assets/panneaux-svg/2_intersection-priorite/AB2.svg';
import Logo3 from '../assets/panneaux-svg/2_intersection-priorite/AB3a.svg';
import Logo4 from '../assets/panneaux-svg/2_intersection-priorite/AB3b.svg';

import Logo5 from '../assets/panneaux-svg/2_intersection-priorite/AB4.svg';
import Logo6 from '../assets/panneaux-svg/2_intersection-priorite/AB5.svg';
import Logo7 from '../assets/panneaux-svg/2_intersection-priorite/AB6.svg';
import Logo8 from '../assets/panneaux-svg/2_intersection-priorite/AB7.svg';

import Logo9 from '../assets/panneaux-svg/2_intersection-priorite/AB25.svg';

const PanneauxIntersectionEtPriorite = ({ id, width = 120, height = 55 }) => (
    <View style={styles.container}>
        {
            id === 1 ? <Logo1 width={width} height={height}/> :
            id === 2 ? <Logo2 width={width} height={height}/> :
            id === 3 ? <Logo3 width={width} height={height}/> :
            id === 4 ? <Logo4 width={width} height={height}/> :
            id === 5 ? <Logo5 width={width} height={height}/> :
            id === 6 ? <Logo6 width={width} height={height}/> :
            id === 7 ? <Logo7 width={width} height={height}/> :
            id === 8 ? <Logo8 width={width} height={height}/> :
            id === 9 ? <Logo9 width={width} height={height}/> : <Text>Rien</Text>
        }
    </View>
);

const styles = StyleSheet.create({    
    container: {
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       aspectRatio: 1/1
    },
    panneauxImage: {
      height: 55,
      width: 55,
      resizeMode:'contain',
    },
  });

export default PanneauxIntersectionEtPriorite;