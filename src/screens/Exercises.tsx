import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { STYLE_CONSTANTS } from '../styleConstants';
// TODO: use this to fetch all the saved exercises from storage
import { storage } from '../../App';

export const Exercises = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved exercises</Text>
      {/* TODO: as the exercises may eventually overflow the container, probably want to use a <ScrollView /> */}
      {/* TODO: create a reusable component and clean up this file */}
      <View style={styles.exercisesContainer}>
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Lat pulldown</Text>
          <View style={styles.exerciseStatsContainer}>
            <View style={styles.exerciseStatsRow}>
              {/* TODO: this is mock data, replace it with exercises from the database */}
              <Text style={styles.text}>Set 1</Text>
              <Text style={styles.text}>20 KG</Text>
              <Text style={styles.text}>10</Text>
            </View>
            <View style={styles.exerciseStatsRow}>
              <Text style={styles.text}>Set 1</Text>
              <Text style={styles.text}>20 KG</Text>
              <Text style={styles.text}>10</Text>
            </View>
          </View>
        </View>
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
  exerciseContainer: {
    width: 370,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  },
  exerciseTitle: {
    fontSize: 18,
    color: STYLE_CONSTANTS.TEXT_COLOR,
  },
  exerciseStatsContainer: {
    width: '100%',
    marginTop: 5,
  },
  exerciseStatsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: STYLE_CONSTANTS.TEXT_COLOR,
  },
  title: {
    fontSize: 24,
    color: STYLE_CONSTANTS.TEXT_COLOR,
  },
});
