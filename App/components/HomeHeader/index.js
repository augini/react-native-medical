/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {images, colors} from '../../global/globalStyles';

const index = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logoImage}
        source={images.homeLogo}
        resizeMode="contain"
      />
      <View style={styles.logoContainer}>
        <Icon
          raised
          size={20}
          name="user"
          type="font-awesome"
          color={colors.icon}
          onPress={() => console.log('hello')}
        />
        <Icon
          raised
          name="search"
          size={20}
          color={colors.icon}
          type="font-awesome"
          onPress={() => console.log('hello')}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    height: 100,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  logoImage: {
    width: 145.66,
    height: 43.09,
  },
  logoContainer: {
    flexDirection: 'row',
  },
});
