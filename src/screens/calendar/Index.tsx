import React from 'react';
import {Button} from 'react-native';
import CalendarModule from '../../modules/CalendarModule';

const Index: React.FC = (): React.JSX.Element => {
  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default Index;
