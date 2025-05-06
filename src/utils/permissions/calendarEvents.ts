import {request, PERMISSIONS, RESULTS, check} from 'react-native-permissions';
//types
import {IPermissions} from '../../types/permissions';

export const requestCalendarPermissions = (
  permissions: IPermissions,
  setPermissions: React.Dispatch<React.SetStateAction<IPermissions>>,
): void => {
  (async () => {
    try {
      if (!permissions.calendar) {
        await request(PERMISSIONS.IOS.CALENDARS).then(status => {
          const calendarPermission = status === RESULTS.GRANTED;
          setPermissions(prev => {
            return {...prev, calendar: calendarPermission};
          });
        });
      }
    } catch (e) {
      // console.log(e);
    }
  })();
};

export const checkCalendarPermissions = (
  permissions: IPermissions,
  setPermissions: React.Dispatch<React.SetStateAction<IPermissions>>,
): void => {
  (async () => {
    try {
      if (!permissions.calendar) {
        await check(PERMISSIONS.IOS.CALENDARS).then(status => {
          const calendarPermission = status === RESULTS.GRANTED;
          setPermissions(prev => {
            return {...prev, calendar: calendarPermission};
          });
        });
      }
    } catch (e) {
      // console.log(e);
    }
  })();
};
