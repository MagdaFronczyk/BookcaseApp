import {NativeModules} from 'react-native';
const {CalendarModuleiOS} = NativeModules;
interface CalendarInterface {
  createCalendarEvent(name: string, location: string): void;
}
export default CalendarModuleiOS as CalendarInterface;
