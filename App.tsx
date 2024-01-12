/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to trainwise</Text>
      </View>

      {/* <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView> */}
    </NavigationContainer>
  );
}

const darkPrimaryShade = '#32322C';
const darkSecondaryShade = '#39A0ED';
const darkAccentShade = '#36F1CD';
const textColor = '#FFFFFF';

// TODO: light theme shades

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkPrimaryShade,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: textColor,
  },
});

export default App;
