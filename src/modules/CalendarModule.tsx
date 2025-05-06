import {NativeModules} from 'react-native';
import {Double} from 'react-native/Libraries/Types/CodegenTypes';

const {CalendarModule} = NativeModules;

export const fetchCalendarEvents = async () => {
  try {
    const events = await CalendarModule.fetchEvents();
    return events;
  } catch (error: any) {
    throw new Error('Error fetching calendar events: ' + error.message);
  }
};

export const addCalendarEvent = async (
  title: string,
  startDate: Double,
  endDate: Double,
) => {
  try {
    const result = await CalendarModule.addEvent(title, startDate, endDate);
    return result;
  } catch (error: any) {
    throw new Error('Error adding calendar event: ' + error.message);
  }
};
