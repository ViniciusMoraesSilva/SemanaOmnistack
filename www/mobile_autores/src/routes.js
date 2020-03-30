import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Create from './pages/Create';
import List from './pages/List';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='Create' component={Create} />
        <AppStack.Screen name='List' component={List} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}