import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { STYLE_CONSTANTS } from '../styleConstants';
import { storage } from '../../App';
import { TEST_EXERCISE_NAMES } from '../const';
import { ExerciseInfo } from '../components/ExerciseInfo';

const latPulldownInfo = JSON.parse(
  storage.getString(TEST_EXERCISE_NAMES.LAT_PULLDOWN) ?? '',
);

export const Exercises = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved exercises</Text>
      {/* TODO: as the exercises may eventually overflow the container, probably want to use a <ScrollView /> */}
      <View style={styles.exercisesContainer}>
        <ExerciseInfo />
        <View />
      </View>
    </View>
  );
};

// TODO: maybe make this into a page component to reuse the container styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: STYLE_CONSTANTS.DARK_PRIMARY_SHADE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exercisesContainer: {
    height: 700,
    width: 400,
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: STYLE_CONSTANTS.TEXT_COLOR,
  },
  title: {
    fontSize: 24,
    color: STYLE_CONSTANTS.TEXT_COLOR,
  },
});
