import {useCallback, useMemo, useState} from 'react';

//types
import {ICalendarEventForm} from '../../types';
//constants
import {calendarEventErrors} from '../constants';
//modules
import {addCalendarEvent} from '../../modules/CalendarModule';

const MIN_EVENT_LEN = 1;

const useCalendar = (form: ICalendarEventForm) => {
  const [errors, setErrors] = useState<string[]>([]);

  const eventChecklist = useMemo(() => {
    const isEventLenValid = form.event?.length > MIN_EVENT_LEN;
    return {
      isEventLenValid,
    };
  }, [form]);

  const addEvent = useCallback(async () => {
    const startDate = (new Date().getTime() / 1000 + 3600) * 1000;
    const endDate = (new Date().getTime() / 1000 + 3600) * 1000;
    setErrors([]);
    if (!eventChecklist.isEventLenValid) {
      setErrors(prev => {
        return [...prev, calendarEventErrors.tooShortEvent];
      });
      return;
    }
    try {
      await addCalendarEvent(form.event, startDate, endDate);
      setErrors([]);
    } catch (error) {
      setErrors(prev => {
        return [...prev, calendarEventErrors.common];
      });
    }
  }, [eventChecklist.isEventLenValid, form.event]);

  return {errors, addEvent};
};

export default useCalendar;
