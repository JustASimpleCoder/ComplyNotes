// app/navigation/index.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/screens/HomeScreen'; // Ensure correct path
import NoteTakingScreen from '@/screens/NoteTakingScreen';  // Ensure correct path
import { RootStackParamList } from './types'; // Import types

const Stack = createStackNavigator<RootStackParamList>(); // Use the type for the navigator

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="NoteTakingScreen" // Ensure this is the same name you're navigating to
          component={NoteTakingScreen}
          options={{ title: 'Take Notes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
