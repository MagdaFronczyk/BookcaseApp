import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {fetchCalendarEvents} from '../../modules/CalendarModule';

//styles
import {intro as styles} from './_styles';
//components
import Form from './Form';
import Intro from './Intro';
import Events from './Events';
import RobotoBlack from '../../components/fonts/RobotoBlack';
import RobotoRegular from '../../components/fonts/RobotoRegular';
//types
import {ICommonResponseWithoutTotal} from '../../types';
import {ICalendarEvent} from '../../types/calendar';
import {status} from '../../types/enums';
//styles
import {theme} from '../../style/styles';

const Index: React.FC = (): JSX.Element => {
  const [response, setResponse] = useState<
    ICommonResponseWithoutTotal<ICalendarEvent[] | null>
  >({status: status.PENDING, data: null});

  const fetchEvents = async () => {
    try {
      setResponse({status: status.PENDING, data: null});
      const events = await fetchCalendarEvents();
      setResponse({status: status.RESOLVED, data: events});
    } catch (error) {
      setResponse({status: status.REJECTED, data: null});
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    let checkAgain: NodeJS.Timeout;
    if (response.status === status.REJECTED) {
      checkAgain = setTimeout(() => {
        fetchEvents();
      }, 15000);
    }
    return () => {
      if (checkAgain) {
        clearTimeout(checkAgain);
      }
    };
  }, [response]);

  if (response.status === status.PENDING) {
    return (
      <View style={styles.container}>
        <Intro />
        <Form setResponse={setResponse} />
        <ActivityIndicator color={theme.color.black} size={'large'} />
      </View>
    );
  }

  if (response.status === status.REJECTED) {
    return (
      <View style={styles.container}>
        <Intro />
        <Form setResponse={setResponse} />
        <RobotoBlack
          size={theme.fontSize.sixteen}
          color={theme.color.black}
          style={styles.title}>
          Aplikacja napotkała problem.
        </RobotoBlack>
        <RobotoRegular size={theme.fontSize.sixteen} color={theme.color.black}>
          Spróbuj ponownie później.
        </RobotoRegular>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Intro />
      <Form setResponse={setResponse} />
      <Events calendarEvents={response.data} />
    </View>
  );
};

export default Index;
