/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { Home } from './src/screens/Home';
import { Exercises } from './src/screens/Exercises';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const plusTabIcon = ({ color, size }: { color: string; size: number }) => (
  <Image
    style={{ height: size, width: size, tintColor: color }}
    source={require('./src/assets/user.png')}
  />
);

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return plusTabIcon({ color, size });
            },
          }}
        />
        <Tab.Screen name="Exercises" component={Exercises} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
