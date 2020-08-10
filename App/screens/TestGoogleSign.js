import {Form, Switch, TextInput} from '../components/Form/';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {Button} from '../components/Button';
import axios from 'axios';
import qs from 'qs';

const config = {
  headers: {
    Accept: 'application/json',
  },
};

const TestGoogleSign = () => {
  GoogleSignin.configure({
    webClientId:
      '400451258273-kh7re1003n9be1tiat9fqlgdcrvo11da.apps.googleusercontent.com',
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    iosClientId:
      '400451258273-kh7re1003n9be1tiat9fqlgdcrvo11da.apps.googleusercontent.com',
  });
  let [userInfo, setUserInfo] = useState('');

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      userInfo = await GoogleSignin.signIn();
      let accessToken = await GoogleSignin.getTokens();
      setUserInfo({userInfo});
      // console.log(userInfo);
      console.log('Sending object in this format', {
        id: userInfo.user.id,
        email: userInfo.user.email,
      });
      console.log('count is:', userInfo.user.id.length),
        axios
          .post(
            'https://coconut-silo.com/login/',
            qs.stringify({
              user: {id: userInfo.user.id, email: userInfo.user.email},
            }),
            config,
          )
          .then(function (response) {
            console.log('This is the response', response);
          })
          .catch(function (error) {
            console.log('This is the error', error);
          });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

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
          <Button outline onPress={signIn}>
            Sign In
          </Button>
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
