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
import {
  ExercisesTabIcon,
  UserTabIcon,
  WorkoutTabIcon,
} from './src/components/navigationIcons';

import { MMKV } from 'react-native-mmkv';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const storage = new MMKV();

  // const testExercise = {
  //   name: 'Lat pulldown',
  //   set1: {
  //     weight: 73,
  //     reps: 8,
  //   },
  //   set2: {
  //     weight: 73,
  //     reps: 7,
  //   },
  //   set3: {
  //     weight: 73,
  //     reps: 6,
  //   },
  // };

  // TODO: check if accidentally overwriting names is possible

  // TODO: create a const enum which holds all the exercise names, no magic strings
  const stringifiedTestExerciseFromStorage = storage.getString('lat pulldown');

  const parsedTestExercise =
    stringifiedTestExerciseFromStorage &&
    JSON.parse(stringifiedTestExerciseFromStorage);
  console.log('🚀 ~ App ~ parsedTestExercise:', parsedTestExercise);

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
