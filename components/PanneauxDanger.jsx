import React from "react";
import { View, Text } from 'react-native';

import Logo1 from '../assets/panneaux-svg/1_danger/A1a.svg';
import Logo2 from '../assets/panneaux-svg/1_danger/A1b.svg';
import Logo3 from '../assets/panneaux-svg/1_danger/A1c.svg';
import Logo4 from '../assets/panneaux-svg/1_danger/A1d.svg';

import Logo5 from '../assets/panneaux-svg/1_danger/A2a.svg';
import Logo6 from '../assets/panneaux-svg/1_danger/A2b.svg';
import Logo7 from '../assets/panneaux-svg/1_danger/A3.svg';
import Logo8 from '../assets/panneaux-svg/1_danger/A3a.svg';

import Logo9 from '../assets/panneaux-svg/1_danger/A3b.svg';
import Logo10 from '../assets/panneaux-svg/1_danger/A4.svg';
import Logo11 from '../assets/panneaux-svg/1_danger/A6.svg';
import Logo12 from '../assets/panneaux-svg/1_danger/A7.svg';

import Logo13 from '../assets/panneaux-svg/1_danger/A8.svg';
import Logo14 from '../assets/panneaux-svg/1_danger/A9.svg';
import Logo15 from '../assets/panneaux-svg/1_danger/A13a.svg';
import Logo16 from '../assets/panneaux-svg/1_danger/A13b.svg';

import Logo17 from '../assets/panneaux-svg/1_danger/A14.svg';
import Logo18 from '../assets/panneaux-svg/1_danger/A15a1.svg';
import Logo19 from '../assets/panneaux-svg/1_danger/A15a2.svg';
import Logo20 from '../assets/panneaux-svg/1_danger/A15b.svg';

import Logo21 from '../assets/panneaux-svg/1_danger/A15c.svg';
import Logo22 from '../assets/panneaux-svg/1_danger/A16.svg';
import Logo23 from '../assets/panneaux-svg/1_danger/A17.svg';
import Logo24 from '../assets/panneaux-svg/1_danger/A18.svg';

import Logo25 from '../assets/panneaux-svg/1_danger/A19.svg';
import Logo26 from '../assets/panneaux-svg/1_danger/A20.svg';
import Logo27 from '../assets/panneaux-svg/1_danger/A21a.svg';
import Logo28 from '../assets/panneaux-svg/1_danger/A23.svg';

import Logo29 from '../assets/panneaux-svg/1_danger/A24.svg';


const PanneauxDanger = ({ id }) => (
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
            id === 15 ? <Logo15 width={120} height={55}/> :
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
            id === 29 ? <Logo29 width={120} height={55}/> : <Text>Rien</Text>
        }
    </View>
);

export default PanneauxDanger;