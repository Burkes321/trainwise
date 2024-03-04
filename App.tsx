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

import { TEST_EXERCISE_NAMES } from './src/const';

import { MMKV } from 'react-native-mmkv';

const Tab = createBottomTabNavigator();

export const storage = new MMKV();

function App(): React.JSX.Element {
  // TODO: update readme with more features you want to make

  // TODO: able to add more sets dynamically to each exercise

  // TODO: Searchable / filterable list of exercises

  // ! temporarily keep for reference
  // storage.set(
  //   TEST_EXERCISE_NAMES.LAT_PULLDOWN,
  //   JSON.stringify(testLatPulldown),
  // );
  // storage.set(TEST_EXERCISE_NAMES.BENCH_PRESS, JSON.stringify(testBenchPress));
  // storage.set(TEST_EXERCISE_NAMES.LEG_PRESS, JSON.stringify(testLegPress));

  const stringFromStorage = storage.getString(TEST_EXERCISE_NAMES.BENCH_PRESS);
  console.log('🚀 ~ App ~ stringFromStorage:', stringFromStorage);

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
