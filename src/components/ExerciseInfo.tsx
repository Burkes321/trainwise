// TODO: could also be called "ExerciseStats", not sure which to go for
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { STYLE_CONSTANTS } from '../styleConstants';
import { Exercise } from '../interfaces';

type Props = {
  exercise: Exercise;
};

export const ExerciseInfo = ({ exercise }: Props) => {
  const { name, setInfo } = exercise;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.statsContainer}>
        {setInfo.map(set => (
          <View key={set.name} style={styles.statsRow}>
            <Text style={styles.rowItem}>{set.name}</Text>
            <Text style={styles.rowItem}>{set.reps}</Text>
            <Text style={styles.rowItem}>{set.weight}kg</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 370,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: STYLE_CONSTANTS.TEXT_COLOR,
  },
  statsContainer: {
    width: '100%',
    marginTop: 5,
  },
  statsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rowItem: {
    color: STYLE_CONSTANTS.TEXT_COLOR,
  },
});
