import React, {useState} from 'react';
import {Switch} from 'react-native';

import FieldWrapper from './FieldWrapper';

export default ({label, message, messageType, ...rest}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <FieldWrapper label={label} message={message} messageType={messageType}>
      <Switch {...rest} onValueChange={toggleSwitch} value={isEnabled} />
    </FieldWrapper>
  );
};
