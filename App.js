import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HEIGHT,
  COLORS,
  WIDTH,
  FONTS,
  FONT_MEASURMENT,
} from './src/helper/Constants';

import Demo from './src/screen/state';
import Login from './src/screen/login';
import Lists from './src/screen/lists';
import Flatlists from './src/screen/flatlist';
import TodoApp from './src/screen/todoapp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="State" component={Demo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen 
          name="Lists" 
          component={Lists} 
          options={{
            title: 'List Screen',
            headerStyle: {
              backgroundColor: COLORS.ORANGE,
            },
          }}
          />
        <Stack.Screen 
          name="Flatlist" 
          component={Flatlists} 
          options={{
            title: 'Flatlist Screen',
            headerStyle: {
              backgroundColor: COLORS.ORANGE,
            },
          }}
          />
        <Stack.Screen 
          name="Todo" 
          component={TodoApp} 
          options={{
            title: 'TodoApp Screen',
            headerShown: false,
            headerStyle: {
              // backgroundColor: COLORS.ORANGE,
            },
          }}
          />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}