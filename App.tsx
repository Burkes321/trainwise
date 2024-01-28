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
import { Workout } from './src/screens/Workout';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

// TODO: Create a function which generates the tab icons or move them to a separate file if not possible
const UserTabIcon = ({ color, size }: { color: string; size: number }) => (
  <Image
    style={{ height: size, width: size, tintColor: color }}
    source={require('./src/assets/user.png')}
  />
);

const WorkoutTabIcon = ({ color, size }: { color: string; size: number }) => (
  <Image
    style={{ height: size, width: size, tintColor: color }}
    source={require('./src/assets/plus.png')}
  />
);

const ExercisesTabIcon = ({ color, size }: { color: string; size: number }) => (
  <Image
    style={{ height: size, width: size, tintColor: color }}
    source={require('./src/assets/dumbbell.png')}
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
            tabBarIcon: ({ color, size }) => UserTabIcon({ color, size }),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Workout"
          component={Workout}
          options={{
            tabBarIcon: ({ color, size }) => WorkoutTabIcon({ color, size }),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Exercises"
          component={Exercises}
          options={{
            tabBarIcon: ({ color, size }) => ExercisesTabIcon({ color, size }),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
