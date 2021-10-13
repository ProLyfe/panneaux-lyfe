import React from "react";
import { View, Text } from 'react-native';

import Logo1 from '../assets/panneaux-svg/6_services/CE1.svg';
import Logo2 from '../assets/panneaux-svg/6_services/CE2a.svg';
import Logo3 from '../assets/panneaux-svg/6_services/CE2b.svg';
import Logo4 from '../assets/panneaux-svg/6_services/CE3a.svg';

import Logo5 from '../assets/panneaux-svg/6_services/CE4a.svg';
import Logo6 from '../assets/panneaux-svg/6_services/CE4b.svg';
import Logo7 from '../assets/panneaux-svg/6_services/CE4c.svg';
import Logo8 from '../assets/panneaux-svg/6_services/CE5a.svg';

import Logo9 from '../assets/panneaux-svg/6_services/CE5b.svg';
import Logo10 from '../assets/panneaux-svg/6_services/CE6a.svg';
import Logo11 from '../assets/panneaux-svg/6_services/CE6b.svg';
import Logo12 from '../assets/panneaux-svg/6_services/CE7.svg';

import Logo13 from '../assets/panneaux-svg/6_services/CE8.svg';
import Logo14 from '../assets/panneaux-svg/6_services/CE9.svg';
import Logo15 from '../assets/panneaux-svg/6_services/CE10.svg';
import Logo16 from '../assets/panneaux-svg/6_services/CE12.svg';

import Logo17 from '../assets/panneaux-svg/6_services/CE14.svg';
import Logo18 from '../assets/panneaux-svg/6_services/CE15a.svg';
import Logo19 from '../assets/panneaux-svg/6_services/CE15c.svg';
import Logo20 from '../assets/panneaux-svg/6_services/CE16.svg';

import Logo21 from '../assets/panneaux-svg/6_services/CE17.svg';
import Logo22 from '../assets/panneaux-svg/6_services/CE18.svg';
import Logo23 from '../assets/panneaux-svg/6_services/CE19.svg';
import Logo24 from '../assets/panneaux-svg/6_services/CE20a.svg';

import Logo25 from '../assets/panneaux-svg/6_services/CE20b.svg';
import Logo26 from '../assets/panneaux-svg/6_services/CE21.svg';
import Logo27 from '../assets/panneaux-svg/6_services/CE22.svg';
import Logo28 from '../assets/panneaux-svg/6_services/CE23.svg';

import Logo29 from '../assets/panneaux-svg/6_services/CE24.svg';
import Logo30 from '../assets/panneaux-svg/6_services/CE25.svg';
import Logo31 from '../assets/panneaux-svg/6_services/CE26.svg';
import Logo32 from '../assets/panneaux-svg/6_services/CE27.svg';

import Logo33 from '../assets/panneaux-svg/6_services/CE28.svg';
import Logo34 from '../assets/panneaux-svg/6_services/CE29.svg';
import Logo35 from '../assets/panneaux-svg/6_services/CE30a.svg';
import Logo36 from '../assets/panneaux-svg/6_services/CE30b.svg';

import Logo37 from '../assets/panneaux-svg/6_services/CE50.svg';

const PanneauxServices = ({ id, width = 120, height = 55 }) => (
    <View>
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
            id === 15 ? <Logo15 width={width} height={height}/> :
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
            id === 29 ? <Logo29 width={width} height={height}/> :
            id === 30 ? <Logo30 width={width} height={height}/> :
            id === 31 ? <Logo31 width={width} height={height}/> :
            id === 32 ? <Logo32 width={width} height={height}/> :
            id === 33 ? <Logo33 width={width} height={height}/> :
            id === 34 ? <Logo34 width={width} height={height}/> :
            id === 35 ? <Logo35 width={width} height={height}/> :
            id === 36 ? <Logo36 width={width} height={height}/> :
            id === 37 ? <Logo37 width={width} height={height}/> : <Text>Rien</Text>
        }
    </View>
);

export default PanneauxServices;