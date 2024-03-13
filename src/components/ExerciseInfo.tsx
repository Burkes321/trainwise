// TODO: could also be called "ExerciseStats", not sure which to go for
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { STYLE_CONSTANTS } from '../styleConstants';

export const ExerciseInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lat pulldown</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statsRow}>
          {/* // TODO: mock data, replace with stats from storage - pass whole object to component as prop */}
          <Text style={styles.rowItem}>Set 1</Text>
          <Text style={styles.rowItem}>20 KG</Text>
          <Text style={styles.rowItem}>10</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.rowItem}>Set 1</Text>
          <Text style={styles.rowItem}>20 KG</Text>
          <Text style={styles.rowItem}>10</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.rowItem}>Set 1</Text>
          <Text style={styles.rowItem}>20 KG</Text>
          <Text style={styles.rowItem}>10</Text>
        </View>
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
