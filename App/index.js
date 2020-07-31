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
import SigninScreen from './screens/SigninScreen';
import TestGoogleSign from './screens/TestGoogleSign';

export default () => <TestGoogleSign />;
