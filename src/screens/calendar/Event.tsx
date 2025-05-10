import React, {memo} from 'react';
import {View} from 'react-native';

//types
import {ICalendarEvent} from '../../types/calendar';
//components
import RobotoBold from '../../components/fonts/RobotoBold';
//styles
import {theme} from '../../style/styles';
import {event as styles} from './_styles';
import RobotoRegular from '../../components/fonts/RobotoRegular';

const Event = memo(
  ({item}: {item: ICalendarEvent}) => (
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
  ),
  (prevProps, nextProps) => {
    return prevProps.item === nextProps.item;
  },
);

export default Event;
