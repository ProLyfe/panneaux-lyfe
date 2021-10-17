import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

import Logo1 from '../assets/panneaux-svg/5_indication/C1a.svg';
import Logo2 from '../assets/panneaux-svg/5_indication/C1b.svg';
import Logo3 from '../assets/panneaux-svg/5_indication/C1c.svg';
import Logo4 from '../assets/panneaux-svg/5_indication/C3.svg';

import Logo5 from '../assets/panneaux-svg/5_indication/C4a_50.svg';
import Logo6 from '../assets/panneaux-svg/5_indication/C4b_50.svg';
import Logo7 from '../assets/panneaux-svg/5_indication/C5.svg';
import Logo8 from '../assets/panneaux-svg/5_indication/C6.svg';

import Logo9 from '../assets/panneaux-svg/5_indication/C8.svg';
import Logo10 from '../assets/panneaux-svg/5_indication/C12.svg';
import Logo11 from '../assets/panneaux-svg/5_indication/C13a.svg';
import Logo12 from '../assets/panneaux-svg/5_indication/C13b.svg';

import Logo13 from '../assets/panneaux-svg/5_indication/C14_1.svg';
import Logo14 from '../assets/panneaux-svg/5_indication/C14_2.svg';
import Logo15 from '../assets/panneaux-svg/5_indication/C18.svg';
import Logo16 from '../assets/panneaux-svg/5_indication/C20a.svg';

import Logo17 from '../assets/panneaux-svg/5_indication/C20c.svg';
import Logo18 from '../assets/panneaux-svg/5_indication/C23.svg';
import Logo19 from '../assets/panneaux-svg/5_indication/C24a_1.svg';
import Logo20 from '../assets/panneaux-svg/5_indication/C24a_4.svg';

import Logo21 from '../assets/panneaux-svg/5_indication/C24b_1.svg';
import Logo22 from '../assets/panneaux-svg/5_indication/C24b_2.svg';
import Logo23 from '../assets/panneaux-svg/5_indication/C24c_1.svg';
import Logo24 from '../assets/panneaux-svg/5_indication/C24c_2.svg';

import Logo25 from '../assets/panneaux-svg/5_indication/C25a.svg';
import Logo26 from '../assets/panneaux-svg/5_indication/C25b.svg';
import Logo27 from '../assets/panneaux-svg/5_indication/C26a.svg';
import Logo28 from '../assets/panneaux-svg/5_indication/C26b.svg';

import Logo29 from '../assets/panneaux-svg/5_indication/C27.svg';
import Logo30 from '../assets/panneaux-svg/5_indication/C28_1.svg';
import Logo31 from '../assets/panneaux-svg/5_indication/C28_3.svg';
import Logo32 from '../assets/panneaux-svg/5_indication/C29a.svg';

import Logo33 from '../assets/panneaux-svg/5_indication/C29b.svg';
import Logo34 from '../assets/panneaux-svg/5_indication/C30.svg';
import Logo35 from '../assets/panneaux-svg/5_indication/C50.svg';
import Logo36 from '../assets/panneaux-svg/5_indication/C62.svg';

import Logo37 from '../assets/panneaux-svg/5_indication/C64a.svg';
import Logo38 from '../assets/panneaux-svg/5_indication/C64b.svg';
import Logo39 from '../assets/panneaux-svg/5_indication/C64c.svg';
import Logo40 from '../assets/panneaux-svg/5_indication/C64d_1.svg';

import Logo41 from '../assets/panneaux-svg/5_indication/C64d_2.svg';
import Logo42 from '../assets/panneaux-svg/5_indication/C107.svg';
import Logo43 from '../assets/panneaux-svg/5_indication/C108.svg';
import Logo44 from '../assets/panneaux-svg/5_indication/C111.svg';

import Logo45 from '../assets/panneaux-svg/5_indication/C112.svg';
import Logo46 from '../assets/panneaux-svg/5_indication/C113.svg';
import Logo47 from '../assets/panneaux-svg/5_indication/C114.svg';
import Logo48 from '../assets/panneaux-svg/5_indication/C115.svg';

import Logo49 from '../assets/panneaux-svg/5_indication/C116.svg';
import Logo50 from '../assets/panneaux-svg/5_indication/C207.svg';
import Logo51 from '../assets/panneaux-svg/5_indication/C208.svg';

import img15 from '../assets/panneaux/indication/C18.png';

const PanneauxIndication = ({ id, width = 120, height = 55 }) => (
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
            id === 9 ? <Logo9 width={width} height={height}/> :
            id === 10 ? <Logo10 width={width} height={height}/> :
            id === 11 ? <Logo11 width={width} height={height}/> :
            id === 12 ? <Logo12 width={width} height={height}/> :
            id === 13 ? <Logo13 width={width} height={height}/> :
            id === 14 ? <Logo14 width={width} height={height}/> :
            // id === 15 ? <Logo15 width={width} height={height}/> : //c18
            id === 15 ? <Image source={require('../assets/panneaux/indication/C18.png')} style={styles.panneauxImage}/>  : //c18
            id === 16 ? <Logo16 width={width} height={height}/> :
            id === 17 ? <Logo17 width={width} height={height}/> :
            id === 18 ? <Logo18 width={width} height={height}/> :
            id === 19 ? <Logo19 width={width} height={height}/> :
            id === 20 ? <Logo20 width={width} height={height}/> :
            id === 21 ? <Logo21 width={width} height={height}/> :
            id === 22 ? <Logo22 width={width} height={height}/> :
            id === 23 ? <Logo23 width={width} height={height}/> :
            id === 24 ? <Logo24 width={width} height={height}/> :
            id === 25 ? <Logo25 width={width} height={height}/> :
            id === 26 ? <Logo26 width={width} height={height}/> :
            id === 27 ? <Logo27 width={width} height={height}/> :
            id === 28 ? <Logo28 width={width} height={height}/> :
            // id === 29 ? <Logo29 width={width} height={height}/> : // ralentisseur
            id === 29 ?  <Image source={require('../assets/panneaux/indication/C27.png')} style={styles.panneauxImage}/> : // ralentisseur
            id === 30 ? <Logo30 width={width} height={height}/> :
            id === 31 ? <Logo31 width={width} height={height}/> :
            id === 32 ? <Logo32 width={width} height={height}/> :
            id === 33 ? <Logo33 width={width} height={height}/> :
            id === 34 ? <Logo34 width={width} height={height}/> :
            id === 35 ? <Logo35 width={width} height={height}/> :
            id === 36 ? <Logo36 width={width} height={height}/> :
            id === 37 ? <Logo37 width={width} height={height}/> :
            id === 38 ? <Logo38 width={width} height={height}/> :
            id === 39 ? <Logo39 width={width} height={height}/> :
            id === 40 ? <Logo40 width={width} height={height}/> :
            id === 41 ? <Logo41 width={width} height={height}/> :
            // id === 42 ? <Logo42 width={width} height={height}/> : // route acc regl
            id === 42 ? <Image source={require('../assets/panneaux/indication/C107.png')} style={styles.panneauxImage}/> : // route acc regl
            id === 43 ? <Logo43 width={width} height={height}/> :
            id === 44 ? <Logo44 width={width} height={height}/> :
            id === 45 ? <Logo45 width={width} height={height}/> :
            id === 46 ? <Logo46 width={width} height={height}/> :
            id === 47 ? <Logo47 width={width} height={height}/> :
            id === 48 ? <Logo48 width={width} height={height}/> :
            id === 49 ? <Logo49 width={width} height={height}/> :
            id === 50 ? <Logo50 width={width} height={height}/> :
            id === 51 ? <Logo51 width={width} height={height}/> : <Text>Rien</Text>
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

export default PanneauxIndication;
