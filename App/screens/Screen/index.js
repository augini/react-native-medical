/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const Screen = (props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      {props.children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
