import {useCallback, useEffect, useRef, useState} from 'react';
import {
  AppState,
  AppStateStatus,
  Linking,
  NativeEventSubscription,
} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';
//helpers
import {requestCalendarPermissions} from '../permissions/calendarEvents';
//types
import {IPermissions} from '../../types/permissions';

const INIT_PERMISSIONS = {
  calendar: false,
};

export const usePermission = () => {
  const [permissions, setPermissions] =
    useState<IPermissions>(INIT_PERMISSIONS);
  const appState = useRef(AppState.currentState);
  const [appStateChange, setAppStateChange] = useState<AppStateStatus>(
    appState.current,
  );

  const _handleAppStateChange = (nextAppState: AppStateStatus) => {
    appState.current = nextAppState;
    setAppStateChange(appState.current);
  };

  useEffect(() => {
    const subscription: NativeEventSubscription = AppState.addEventListener(
      'change',
      _handleAppStateChange,
    );
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (appStateChange && !permissions.calendar) {
        const unsubscribe = requestCalendarPermissions(
          permissions,
          setPermissions,
        );
        return unsubscribe;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appStateChange]),
  );

  const handleOpenSettings = (): void => {
    Linking.openSettings();
  };

  return {
    permissions,
    handleOpenSettings,
  };
};
