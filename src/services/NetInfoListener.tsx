import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';

//helpers
import {showToast} from '../utils/toasts';
//redux
import {toggleConnection} from './Redux/internetConnectionSlice';

const NetInfoListener: React.FC = (): null => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribe = NetInfo.addEventListener(state => {
      console.log(state);
      if (!state.isConnected || !state.isInternetReachable) {
        showToast(
          state.isConnected
            ? 'Połączono z internetem'
            : 'Brak połączenia z internetem',
        );

        dispatch(toggleConnection(true));
      }
    });
    return () => subscribe();
  }, [dispatch]);
  return null;
};
export default NetInfoListener;
