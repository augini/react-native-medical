import React from 'react';
import {View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import {BufferView} from './decorators';
import {Form, FieldWrapper, TextInput, Switch} from '../components/Form';

storiesOf('Form/Switch', module)
  .addDecorator(BufferView)
  .add('default', () => <Switch label="Agree to Terms" />)
  .add('with error', () => (
    <Switch
      label="Agree to Terms"
      message="You must agree to the terms"
      messageType="error"
    />
  ));
