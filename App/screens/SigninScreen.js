import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import {Form, TextInput, Switch} from '../components/Form/';
import {Button} from '../components/Button';
import MyIcon from '../config/icon-font';

const SigninScreen = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView style={{flex: 1}}>
        <Text>Hello there</Text>
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
};

export default SigninScreen;

const styles = StyleSheet.create({});
