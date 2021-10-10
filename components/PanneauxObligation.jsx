import React from "react";
import { View, Text } from 'react-native';

import Logo1 from '../assets/panneaux-svg/4_obligation/B21-1.svg';
import Logo2 from '../assets/panneaux-svg/4_obligation/B21-2.svg';
import Logo3 from '../assets/panneaux-svg/4_obligation/B21a1.svg';
import Logo4 from '../assets/panneaux-svg/4_obligation/B21a2.svg';

import Logo5 from '../assets/panneaux-svg/4_obligation/B21b.svg';
import Logo6 from '../assets/panneaux-svg/4_obligation/B21c1.svg';
import Logo7 from '../assets/panneaux-svg/4_obligation/B21c2.svg';
import Logo8 from '../assets/panneaux-svg/4_obligation/B21d1.svg';

import Logo9 from '../assets/panneaux-svg/4_obligation/B21d2.svg';
import Logo10 from '../assets/panneaux-svg/4_obligation/B21e.svg';
import Logo11 from '../assets/panneaux-svg/4_obligation/B22a.svg';
import Logo12 from '../assets/panneaux-svg/4_obligation/B22b.svg';

import Logo13 from '../assets/panneaux-svg/4_obligation/B22c.svg';
import Logo14 from '../assets/panneaux-svg/4_obligation/B25.svg';
import Logo15 from '../assets/panneaux-svg/4_obligation/B26.svg';
import Logo16 from '../assets/panneaux-svg/4_obligation/B27a.svg';

import Logo17 from '../assets/panneaux-svg/4_obligation/B27b.svg';
import Logo18 from '../assets/panneaux-svg/4_obligation/B29.svg';
import Logo19 from '../assets/panneaux-svg/4_obligation/B40.svg';
import Logo20 from '../assets/panneaux-svg/4_obligation/B41.svg';

import Logo21 from '../assets/panneaux-svg/4_obligation/B42.svg';
import Logo22 from '../assets/panneaux-svg/4_obligation/B43.svg';
import Logo23 from '../assets/panneaux-svg/4_obligation/B44.svg';
import Logo24 from '../assets/panneaux-svg/4_obligation/B45a.svg';

import Logo25 from '../assets/panneaux-svg/4_obligation/B49.svg';

const PanneauxObligation = ({ id }) => (
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
            id === 25 ? <Logo25 width={120} height={55}/> : <Text>Rien</Text>
        }
    </View>
);

export default PanneauxObligation;