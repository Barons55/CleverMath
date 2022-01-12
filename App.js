import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './app/screens/Home'
import Quiz from './app/screens/Quiz'

const Stack = createStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Quiz' component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;