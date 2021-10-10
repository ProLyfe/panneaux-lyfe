import React from "react";
import { View, Text } from 'react-native';

import Logo1 from '../assets/panneaux-svg/2_intersection-priorite/AB1.svg';
import Logo2 from '../assets/panneaux-svg/2_intersection-priorite/AB2.svg';
import Logo3 from '../assets/panneaux-svg/2_intersection-priorite/AB3a.svg';
import Logo4 from '../assets/panneaux-svg/2_intersection-priorite/AB3b.svg';

import Logo5 from '../assets/panneaux-svg/2_intersection-priorite/AB4.svg';
import Logo6 from '../assets/panneaux-svg/2_intersection-priorite/AB5.svg';
import Logo7 from '../assets/panneaux-svg/2_intersection-priorite/AB6.svg';
import Logo8 from '../assets/panneaux-svg/2_intersection-priorite/AB7.svg';

import Logo9 from '../assets/panneaux-svg/2_intersection-priorite/AB25.svg';

const PanneauxIntersectionEtPriorite = ({ id }) => (
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
            id === 9 ? <Logo9 width={120} height={55}/> : <Text>Rien</Text>
        }
    </View>
);

export default PanneauxIntersectionEtPriorite;