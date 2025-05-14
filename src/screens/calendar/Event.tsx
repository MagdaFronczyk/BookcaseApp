import React from 'react';
import {View} from 'react-native';

//types
import {ICalendarEvent} from '../../types/calendar';
//components
import RobotoBold from '../../components/fonts/RobotoBold';
import RobotoRegular from '../../components/fonts/RobotoRegular';
//styles
import {theme} from '../../style/styles';
import {event as styles} from './_styles';

const Event = ({item}: {item: ICalendarEvent}) => {
  return (
    <View style={styles.eventItem}>
      <RobotoBold
        numberOfLines={2}
        size={theme.fontSize.fifteen}
        color={theme.color.black}
        style={styles.eventTitle}>
        {item.title}
      </RobotoBold>
      <RobotoRegular
        numberOfLines={1}
        size={theme.fontSize.thirteen}
        color={theme.color.darkGray}>
        {new Date(item.startDate * 1000).toDateString()}
      </RobotoRegular>
    </View>
  );
};

export default Event;
