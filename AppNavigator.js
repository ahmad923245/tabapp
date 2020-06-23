import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'




const Stack = createStackNavigator();


function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
    
      >
        <Stack.Screen name="Tab1" component={Tab1} />
        <Stack.Screen name="Tab2" component={Tab2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;