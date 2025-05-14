import {Double} from 'react-native/Libraries/Types/CodegenTypes';

export interface ICalendarEvent {
  title: string;
  startDate: Double;
  endDate: Double;
}

export type ICalendarEventForm = {
  event: string;
};

export type ICalendarEventFormData = {
  placeholder: string;
  handler: (email: string) => void;
  inputValue: string;
  secure: boolean;
};
