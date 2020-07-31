import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import {Form, TextInput, Switch} from '../components/Form/';
import {Button} from '../components/Button';

const TestGoogleSign = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView style={styles.container}>
        <Form header="Welcome" subheader="Please create a new account">
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

export default TestGoogleSign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
