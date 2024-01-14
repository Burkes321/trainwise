import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { STYLE_CONSTANTS } from '../styleConstants';

export const Exercises = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Exercises</Text>
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
  text: {
    color: STYLE_CONSTANTS.TEXT_COLOR,
  },
});
