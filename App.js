import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import HomeTabsStackScreen from './navigation/tabs';

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      <HomeTabsStackScreen />
    </NavigationContainer>
  );
}

