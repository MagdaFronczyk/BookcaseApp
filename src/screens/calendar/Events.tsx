import {FlatList} from 'react-native';
import React, {useCallback} from 'react';

//types
import {ICalendarEvent} from '../../types/calendar';
//components
import Event from './Event';

type Props = {
  calendarEvents: ICalendarEvent[] | null;
};

const Events: React.FC<Props> = ({calendarEvents}): JSX.Element => {
  const renderItem = useCallback(
    ({item}: {item: ICalendarEvent}) => <Event item={item} />,
    [],
  );

  const renderKey = (item: ICalendarEvent) => {
    return item.startDate.toString();
  };

  return (
    <FlatList
      data={calendarEvents}
      renderItem={renderItem}
      keyExtractor={item => renderKey(item)}
    />
  );
};

export default Events;
