import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { STYLE_CONSTANTS } from '../styleConstants';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to trainwise</Text>
    </View>
  );
};

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
