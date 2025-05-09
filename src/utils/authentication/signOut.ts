import {getAuth} from '@react-native-firebase/auth';

export const signOut = (): void => {
  getAuth().signOut();
};
