/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import {BufferView} from './decorators';
import {Form} from '../components/Form';

storiesOf('Form', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Form>
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}} />
    </Form>
  ))
  .add('with header', () => (
    <Form header="Hello.">
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}} />
    </Form>
  ))
  .add('with header and subheader', () => (
    <Form
      header="Hello."
      subheader="Welcome back. Kindly enter your login details.">
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}} />
    </Form>
  ))
  .add('with children', () => (
    <Form header="Hello" subheader="I got children passed into me">
      <View
        style={{
          flex: 1,
          backgroundColor: '#e6e6e6',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            width: 150,
            height: 50,
            backgroundColor: 'white',
          }}>
          Edit..
        </TextInput>
      </View>
    </Form>
  ));
