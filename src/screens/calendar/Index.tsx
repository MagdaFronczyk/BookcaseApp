import React from 'react';
import {Button} from 'react-native';
import CalendarModule from '../../modules/CalendarModule';
import CalendarModuleiOS from '../../modules/CalendarModuleiOS';

const Index: React.FC = (): React.JSX.Element => {
  const onPressAndroid = () => {
    CalendarModule.createCalendarEvent(
      'testNameAndroid',
      'testLocationAndroid',
    );
  };

  const onPressiOS = () => {
    CalendarModuleiOS.createCalendarEvent('testNameiOS', 'testLocationiOS');
  };

  return (
    <>
      <Button
        title="Click to invoke your native module Android!"
        color="black"
        onPress={onPressAndroid}
      />
      <Button
        title="Click to invoke your native module iOS!"
        color="black"
        onPress={onPressiOS}
      />
    </>
  );
};

export default Index;
