import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screen/HomeScreen';
import EmailBody from './src/screen/EmailBody';

const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="MailBox" component={HomeScreen} options={{headerShown: false}}/> 
     <Stack.Screen name="EmailBody" component={EmailBody} options={{ title: ''}}/> 
    </Stack.Navigator>
   </NavigationContainer>
  );
}