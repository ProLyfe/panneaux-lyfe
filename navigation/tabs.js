import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomQuizz from '../screens/CustomQuizz';
import Home from '../screens/Home';
import Params from '../screens/Params';
import Revision from '../screens/Revision';

const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="CustomQuizz" component={CustomQuizz}/>
        <Tab.Screen name="Révision" component={Revision}/>
        <Tab.Screen name="Params" component={Params}/>
    </Tab.Navigator>
);

export default Tabs;