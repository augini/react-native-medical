// export default from '../storybook';

import React from 'react';
import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {Form, TextInput, Switch} from './components/Form';
import {Button} from './components/Button';
import MyIcon from './config/icon-font';

export default () => (
  <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
    }}>
    <SafeAreaView style={{flex: 1}}>
      <Text>Hello people</Text>
      <MyIcon name={'home'} size={20} color={'#333333'} />
      <MyIcon name={'alarm'} size={20} color={'#333333'} />
      <MyIcon name={'block'} size={20} color={'#333333'} />
      <Form header="Hello." subheader="Please create a new account">
        <TextInput label="Email" keyboardType="email-address" />
        <TextInput label="Password" secureTextEntry />
        <TextInput label="Confirm Password" secureTextEntry />
        <Switch label="Agree to Terms" />
        <Button>Sign Up</Button>
        <Button outline>Sign In</Button>
      </Form>
    </SafeAreaView>
  </TouchableWithoutFeedback>
);
