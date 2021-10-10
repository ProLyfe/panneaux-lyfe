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

const PanneauxIndication = ({ id }) => (
    <View>
        {
            id === 1 ? <Logo1 width={120} height={55}/> :
            id === 2 ? <Logo2 width={120} height={55}/> :
            id === 3 ? <Logo3 width={120} height={55}/> :
            id === 4 ? <Logo4 width={120} height={55}/> :
            id === 5 ? <Logo5 width={120} height={55}/> :
            id === 6 ? <Logo6 width={120} height={55}/> :
            id === 7 ? <Logo7 width={120} height={55}/> :
            id === 8 ? <Logo8 width={120} height={55}/> :
            id === 9 ? <Logo9 width={120} height={55}/> :
            id === 10 ? <Logo10 width={120} height={55}/> :
            id === 11 ? <Logo11 width={120} height={55}/> :
            id === 12 ? <Logo12 width={120} height={55}/> :
            id === 13 ? <Logo13 width={120} height={55}/> :
            id === 14 ? <Logo14 width={120} height={55}/> :
            // id === 15 ? <Logo15 width={120} height={120}/> : //c18
            id === 15 ? <Image source={require('../assets/panneaux/indication/C18.png')} style={styles.panneauxImage}/>  : //c18
            id === 16 ? <Logo16 width={120} height={55}/> :
            id === 17 ? <Logo17 width={120} height={55}/> :
            id === 18 ? <Logo18 width={120} height={55}/> :
            id === 19 ? <Logo19 width={120} height={55}/> :
            id === 20 ? <Logo20 width={120} height={55}/> :
            id === 21 ? <Logo21 width={120} height={55}/> :
            id === 22 ? <Logo22 width={120} height={55}/> :
            id === 23 ? <Logo23 width={120} height={55}/> :
            id === 24 ? <Logo24 width={120} height={55}/> :
            id === 25 ? <Logo25 width={120} height={55}/> :
            id === 26 ? <Logo26 width={120} height={55}/> :
            id === 27 ? <Logo27 width={120} height={55}/> :
            id === 28 ? <Logo28 width={120} height={55}/> :
            // id === 29 ? <Logo29 width={120} height={55}/> : // ralentisseur
            id === 29 ?  <Image source={require('../assets/panneaux/indication/C27.png')} style={styles.panneauxImage}/> : // ralentisseur
            id === 30 ? <Logo30 width={120} height={55}/> :
            id === 31 ? <Logo31 width={120} height={55}/> :
            id === 32 ? <Logo32 width={120} height={55}/> :
            id === 33 ? <Logo33 width={120} height={55}/> :
            id === 34 ? <Logo34 width={120} height={55}/> :
            id === 35 ? <Logo35 width={120} height={55}/> :
            id === 36 ? <Logo36 width={120} height={55}/> :
            id === 37 ? <Logo37 width={120} height={55}/> :
            id === 38 ? <Logo38 width={120} height={55}/> :
            id === 39 ? <Logo39 width={120} height={55}/> :
            id === 40 ? <Logo40 width={120} height={55}/> :
            id === 41 ? <Logo41 width={120} height={55}/> :
            // id === 42 ? <Logo42 width={120} height={55}/> : // route acc regl
            id === 42 ? <Image source={require('../assets/panneaux/indication/C107.png')} style={styles.panneauxImage}/> : // route acc regl
            id === 43 ? <Logo43 width={120} height={55}/> :
            id === 44 ? <Logo44 width={120} height={55}/> :
            id === 45 ? <Logo45 width={120} height={55}/> :
            id === 46 ? <Logo46 width={120} height={55}/> :
            id === 47 ? <Logo47 width={120} height={55}/> :
            id === 48 ? <Logo48 width={120} height={55}/> :
            id === 49 ? <Logo49 width={120} height={55}/> :
            id === 50 ? <Logo50 width={120} height={55}/> :
            id === 51 ? <Logo51 width={120} height={55}/> : <Text>Rien</Text>
        }
    </View>
);

const styles = StyleSheet.create({    
    panneauxImage: {
      height: 55,
      width: 55,
      resizeMode:'contain',
    },
  });
export default PanneauxIndication;