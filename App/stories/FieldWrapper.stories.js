import React from 'react';
import {View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import {BufferView} from './decorators';
import {FieldWrapper} from '../components/Form';

storiesOf('Form/FieldWrapper', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <FieldWrapper label="Email">
      <Text>Hello, wrapper.</Text>
    </FieldWrapper>
  ))
  .add('error message', () => (
    <FieldWrapper
      label="Email"
      message="Please enter a valid email!"
      messageType="error">
      <Text>Hello, wrapper.</Text>
    </FieldWrapper>
  ))
  .add('success message', () => (
    <FieldWrapper label="Email" message="Looks legit!" messageType="success">
      <Text>Hello, wrapper.</Text>
    </FieldWrapper>
  ))
  .add('multiple fields', () => (
    <React.Fragment>
      <FieldWrapper label="Email">
        <Text>Hello, wrapper.</Text>
      </FieldWrapper>
      <FieldWrapper
        label="Email"
        message="Please enter a valid email!"
        messageType="error">
        <Text>Hello, wrapper.</Text>
      </FieldWrapper>
      <FieldWrapper label="Email" message="Looks legit!" messageType="success">
        <Text>Hello, wrapper.</Text>
      </FieldWrapper>
    </React.Fragment>
  ));
