import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomQuizz from '../screens/CustomQuizz';
import Home from '../screens/Home';
import Params from '../screens/Params';
import Revision from '../screens/Revision';
import ModalQuizz from '../screens/modals/ModalQuizz';

const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator 
        screenOptions={{
        tabBarStyle: {  backgroundColor: '#1C2753' }
    }}>
        <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} options={sharedStyled} options={{headerShown: false}}/>
        <Tab.Screen name="CustomQuizz" component={CustomQuizz} options={sharedStyled}/>
        <Tab.Screen name="Révision" component={Revision} options={sharedStyled}/>
        <Tab.Screen name="Params" component={Params} options={sharedStyled} />
    </Tab.Navigator>
);


const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator
    // screenOptions={{
    //     headerShown: false
    // }}
    >
        {/* <HomeStack.Group screenOptions={{ presentation: 'modal' }}> */}
            <HomeStack.Screen name="Home" component={Home} options={sharedStyled} />
            <HomeStack.Screen name="ModalQuizz" component={ModalQuizz} options={sharedStyled} />
        {/* </HomeStack.Group> */}
    </HomeStack.Navigator>
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


