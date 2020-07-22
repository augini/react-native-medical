import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

import colors from '../../config/colors';
import FieldWrapper from './FieldWrapper';

export default ({label, message, messageType, ...rest}) => (
  <FieldWrapper label={label} message={message} messageType={messageType}>
    <TextInput style={styles.textInput} {...rest} />
    <View style={styles.border} />
  </FieldWrapper>
);

const styles = StyleSheet.create({
  textInput: {
    fontSize: 14,
    fontWeight: '500',
    paddingBottom: 10,
  },
  border: {
    height: 1,
    backgroundColor: colors.border,
  },
});
