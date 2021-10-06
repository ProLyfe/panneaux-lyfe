import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomQuizz from '../screens/CustomQuizz';
import Home from '../screens/Home';
import Params from '../screens/Params';
import Revision from '../screens/Revision';

const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator 
        screenOptions={{
        tabBarStyle: {  backgroundColor: '#1C2753' }
    }}>
        <Tab.Screen name="Home" component={Home} options={sharedStyled}/>
        <Tab.Screen name="CustomQuizz" component={CustomQuizz} options={sharedStyled}/>
        <Tab.Screen name="Révision" component={Revision} options={sharedStyled}/>
        <Tab.Screen name="Params" component={Params} options={sharedStyled}/>
    </Tab.Navigator>
);

const sharedStyled = {
    headerStyle: {
        backgroundColor: '#1C2753',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
}

export default Tabs;